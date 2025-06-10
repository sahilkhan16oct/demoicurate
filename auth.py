import time
from datetime import datetime, timedelta
from flask import Blueprint, jsonify, request, make_response
from pymongo import MongoClient
from werkzeug.security import generate_password_hash, check_password_hash
import os
from dotenv import load_dotenv
import random
import smtplib
from email.mime.text import MIMEText
from functools import wraps
from flask_jwt_extended import create_access_token, get_jwt ,create_refresh_token,jwt_required,get_jwt_identity,set_refresh_cookies
import shutil
import jwt


load_dotenv()

# Initialize MongoDB client
mongo_uri = f"mongodb+srv://innoveotech:{os.getenv('DB_PASSWORD')}@azeem.af86m.mongodb.net/chipdesign1?retryWrites=true&w=majority"
client = MongoClient(mongo_uri)
db = client['chipdesign1']
users_collection = db['userstb']
# layermap_collection = db["layermap"]

auth_bp = Blueprint('auth', __name__)

# Constants
OTP_VALIDITY_DURATION = 300  # OTP valid for 5 minutes (300 seconds)

def generate_otp():
    return str(random.randint(100000, 999999))

def send_email(to_email, otp):
    subject = "Your OTP Code"
    body = f"Your OTP code is {otp}. It is valid for 5 minutes."
    
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = os.getenv('EMAIL_ADDRESS')  # Your Gmail address
    msg['To'] = to_email

    with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
        server.login(os.getenv('EMAIL_ADDRESS'), os.getenv('EMAIL_PASSWORD'))
        server.sendmail(os.getenv('EMAIL_ADDRESS'), to_email, msg.as_string())

@auth_bp.route('/verify-otp', methods=['POST'])
def verify_otp():
    data = request.json
    username = data.get('username')
    otp = data.get('otp')

    print(f"Received OTP verification request for username: {username} with OTP: {otp}")

    # Fetch the user from the database
    user = users_collection.find_one({"username": username})
    if user and 'otp' in user:
        if user['otp'] == otp:
            # Check if OTP is still valid
            if time.time() - user['otp_timestamp'] <= OTP_VALIDITY_DURATION:
                # Update the user to set is_verified to True
                users_collection.update_one({"username": username}, {"$set": {"is_verified": True}, "$unset": {"otp": "", "otp_timestamp": ""}})
                return jsonify({"message": "OTP verified successfully", "verified": True}), 200
            else:
                return jsonify({"message": "OTP expired", "verified": False}), 400
        else:
            return jsonify({"message": "Invalid OTP", "verified": False}), 400
    return jsonify({"message": "No OTP found for this user", "verified": False}), 400

@auth_bp.route('/resend-otp', methods=['POST'])
def resend_otp():
    data = request.json
    username = data.get('username')

    user = users_collection.find_one({"username": username})
    if user and not user.get('is_verified'):
        otp = generate_otp()
        users_collection.update_one({"username": username}, {"$set": {"otp": otp, "otp_timestamp": time.time()}})
        send_email(user['email'], otp)  # Send OTP to the user's email
        return jsonify({"message": "OTP resent"}), 200
    else:
        return jsonify({"message": "User not found or already verified"}), 400

@auth_bp.route('/forgot-password', methods=['POST'])
def forgot_password():
    data = request.json
    email = data.get('email')

    user = users_collection.find_one({"email": email})
    if user:
        otp = generate_otp()
        users_collection.update_one({"email": email}, {"$set": {"otp": otp, "otp_timestamp": time.time()}})
        send_email(email, otp)  # Send OTP to the user's email
        return jsonify({"message": "OTP sent for password reset"}), 200
    else:
        return jsonify({"message": "Email not found"}), 404

@auth_bp.route('/reset-password', methods=['POST'])
def reset_password():
    data = request.json
    email = data.get('email')
    otp = data.get('otp')
    new_password = data.get('new_password')

    user = users_collection.find_one({"email": email})
    if user and 'otp' in user:
        if user['otp'] == otp:
            if time.time() - user['otp_timestamp'] <= OTP_VALIDITY_DURATION:
                hashed_password = generate_password_hash(new_password)
                users_collection.update_one({"email": email}, {"$set": {"password": hashed_password}, "$unset": {"otp": "", "otp_timestamp": ""}})
                return jsonify({"message": "Password reset successfully"}), 200
            else:
                return jsonify({"message": "OTP expired", "verified": False}), 400
        else:
            return jsonify({"message": "Invalid OTP", "verified": False}), 400
    else:
        return jsonify({"message": "No OTP found for this email", "verified": False}), 400


# Assuming the layermap.json file is located in the root directory
LAYERS_DIR = "layermap"
BASE_LAYERS_FILE = "layermap.json"

# Ensure the layermap directory exists
if not os.path.exists(LAYERS_DIR):
    os.makedirs(LAYERS_DIR)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Check if required fields are present
    if not all([username, email, password]):
        return jsonify({"message": "All fields (username, email, password) are required"}), 400

    # Check if user already exists
    if users_collection.find_one({"username": username}) or users_collection.find_one({"email": email}):
        return jsonify({"message": "User with this username or email already exists"}), 400

    # Create new user
    hashed_password = generate_password_hash(password)
    start_date = datetime.now()
    end_date = start_date + timedelta(days=28)

    # Insert user into the database
    users_collection.insert_one({
        "username": username,
        "email": email,
        "password": hashed_password,
        "is_verified": True,
        "subscription": {
            "prelimlef": {
                "active": False,
                "startDate": None,
                "endDate": None
            },
            "icurate": {
                "active": True,
                "startDate": start_date,
                "endDate": end_date
            },
            "mentorme": {
                "active": False,
                "startDate": None,
                "endDate": None
            }
         },

    })

    # Create a separate layermap file for the authenticated user
    new_layermap_file = f"{LAYERS_DIR}/{username}_layermap.json"
    shutil.copyfile(BASE_LAYERS_FILE, new_layermap_file)

    # Insert the layermap entry into the `layermap` collection
    # layermap_collection.insert_one({
    #     "username": username,
    #     "layermap_url": new_layermap_file,
        
    # })

    # Generate and send OTP
    # otp = generate_otp()
    # users_collection.update_one({"username": username}, {"$set": {"otp": otp, "otp_timestamp": time.time()}})
    # send_email(email, otp)

    return jsonify({"message": "User created successfully, OTP sent to email"}), 201

from flask import request, jsonify
from flask_jwt_extended import create_access_token, create_refresh_token
from werkzeug.security import check_password_hash
from datetime import datetime

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')
    device_id = data.get('device_id')  # Required
    device_name = data.get('device_name', 'Unknown Device')  # Optional

    if not device_id:
        return jsonify({"message": "device_id is required"}), 400

    user = users_collection.find_one({"username": username})

    if user and check_password_hash(user['password'], password):
        if not user.get('is_verified'):
            return jsonify({"message": "Account not verified. Please verify your email."}), 403

        # Initialize devices if not present
        if 'devices' not in user:
            user['devices'] = []

        # Check if device already exists
        existing_device = next((d for d in user['devices'] if d['device_id'] == device_id), None)

        if not existing_device and len(user['devices']) >= 3:
            return jsonify({"message": "Maximum number of devices reached. Please logout from another device."}), 403

        # Create tokens
        access_token = create_access_token(identity=username)
        refresh_token = create_refresh_token(identity=username)

        device_entry = {
            "device_id": device_id,
            "refresh_token": refresh_token,
            "device_name": device_name,
            "last_used": datetime.utcnow()
        }

        # Update or insert device
        if existing_device:
            users_collection.update_one(
                {"_id": user["_id"], "devices.device_id": device_id},
                {"$set": {
                    "devices.$.refresh_token": refresh_token,
                    "devices.$.device_name": device_name,
                    "devices.$.last_used": datetime.utcnow()
                }}
            )
        else:
            users_collection.update_one(
                {"_id": user["_id"]},
                {"$push": {"devices": device_entry}}
            )

        response = jsonify({
            "access_token": access_token,
            "message": "Login successful"
        })
        set_refresh_cookies(response, refresh_token)
        return response

    return jsonify({"message": "Invalid credentials"}), 401


@auth_bp.route('/refresh', methods=['POST'])
@jwt_required(refresh=True,locations=["cookies"])  
def refresh():
    current_user = get_jwt_identity()  # username from refresh token

    # Get fresh user data
    user = users_collection.find_one({"username": current_user})

    if not user:
        return jsonify({"message": "User not found"}), 404

    access_token = create_access_token(identity=current_user)
    
    response = jsonify(access_token=access_token)
    return response

@auth_bp.route('/subscription-status', methods=['GET'])
@jwt_required()
def subscription_status():
    current_user = get_jwt_identity()
    user = users_collection.find_one({"username": current_user})
    
    if not user:
        return jsonify({"error": "User not found"}), 404

    subscription = user.get("subscription", {})
    
    return jsonify({
        "prelimlef": subscription.get("prelimlef", {}),
        "icurate": subscription.get("icurate", {}),
        "mentorme": subscription.get("mentorme", {})
    }), 200

# @auth_bp.route('/generate-layermap', methods=['POST'])
# @jwt_required()
# def generate_layermap():
    # Retrieve authenticated user's username from JWT claims
    jwt_claims = get_jwt()
    username = jwt_claims.get('username')

    if not username:
        return jsonify({"message": "Username not found in JWT claims"}), 401
    
     # Check if a layermap file already exists for this user
    existing_layermap = layermap_collection.find_one({"username": username})
    if existing_layermap:
        return jsonify({"message": "Layermap already exists for this user", "layermap_url": existing_layermap["layermap_url"]}), 200

    # Create a separate layermap file for the authenticated user
    new_layermap_file = f"{LAYERS_DIR}/{username}_layermap.json"
    shutil.copyfile(BASE_LAYERS_FILE, new_layermap_file)

    # Insert the layermap entry into the `layermap` collection
    layermap_collection.insert_one({
        "username": username,
        "layermap_url": new_layermap_file,
        
    })

    return jsonify({"message": "Layermap generated successfully"}), 201
        


# @auth_bp.route('/redirect', methods=['POST'])
# def auth_user():
    data = request.get_json()
    email = data.get('can_id')

    if not email:
        return jsonify({"error": "Email is required"}), 400

    # Check if the user already exists in the database
    user = users_collection.find_one({"username": email})

    if user:
        # If user exists, return a JWT token
        username = user['username']
        access_token = create_access_token(identity=username)
        return jsonify(access_token=access_token, message="Login successful"), 200
    
    # If user does not exist, register them
    username = email  # Assign email to username explicitly for new users
    new_user = {
        "username": username,
        "email": email,
        "password": None,  # No password initially
        "counter": 24
    }
    users_collection.insert_one(new_user)

    # Create a separate layermap file for the user
    new_layermap_file = f"{LAYERS_DIR}/{username}_layermap.json"
    try:
        shutil.copyfile(BASE_LAYERS_FILE, new_layermap_file)
    except FileNotFoundError as e:
        return jsonify({"error": f"Base layermap file not found: {e}"}), 500

    # Insert the layermap entry into the `layermap` collection
    layermap_collection.insert_one({
        "username": username,
        "layermap_url": new_layermap_file,
    })

    # Generate a JWT token for the new user
    access_token = create_access_token(identity=username)
    return jsonify(access_token=access_token, message="Registration successful"), 201


from bson.objectid import ObjectId
from datetime import datetime

def is_device_valid(username, device_id):
    user = users_collection.find_one({"username": username})
    if not user or "devices" not in user:
        return False

    for device in user.get("devices", []):
        if device.get("device_id") == device_id:
            return True
    return False


def is_subscription_active(username, app_name):
    user = users_collection.find_one({"username": username})
    if not user or "subscription" not in user:
        return False

    app_sub = user["subscription"].get(app_name.lower())
    if not app_sub or not app_sub.get("active"):
        return False

    # Check date validity
    now = datetime.utcnow()

    start_date = app_sub.get("startDate")
    end_date = app_sub.get("endDate")

    if not start_date or not end_date:
        return False

    if isinstance(start_date, dict) and "$date" in start_date:
        start_date = datetime.fromisoformat(start_date["$date"].replace("Z", "+00:00"))

    if isinstance(end_date, dict) and "$date" in end_date:
        end_date = datetime.fromisoformat(end_date["$date"].replace("Z", "+00:00"))

    return start_date <= now <= end_date


@auth_bp.route('/generate-app-token', methods=['POST'])
@jwt_required()
def generate_app_token():
    current_user = get_jwt_identity()
    data = request.json
    device_id = data.get("device_id")
    app_name = data.get("app")

    if not (device_id and app_name):
        return jsonify({"msg": "Missing device_id or app name"}), 400

    if not is_device_valid(current_user, device_id):
        return jsonify({"msg": "Invalid device"}), 403

    if not is_subscription_active(current_user, app_name):
        return jsonify({"msg": "Subscription inactive or invalid"}), 403

    additional_claims = {
        "app": app_name,
        "device_id": device_id
    }

    token = create_access_token(identity=current_user, additional_claims=additional_claims, expires_delta=timedelta(seconds=5))
    return jsonify({"token": token})


@auth_bp.route('/verify-token', methods=['POST'])
def verify_token():
    data = request.json
    token = data.get("token")
    if not token:
        return jsonify({"msg": "Token missing"}), 400

    try:
        payload = jwt.decode(token, "meraSuperSecretKey123", algorithms=["HS256"])
        identity = payload.get("sub")  # Corrected key

        access_token = create_access_token(identity=identity)
        refresh_token = create_refresh_token(identity=identity)

        return jsonify({
            "access_token": access_token,
            "refresh_token": refresh_token,
            "msg": "Token verified successfully"
        })
    except jwt.ExpiredSignatureError:
        return jsonify({"msg": "Token expired"}), 401
    except jwt.InvalidTokenError as e:
        return jsonify({"msg": f"Invalid token: {str(e)}"}), 401


from flask_jwt_extended import jwt_required, get_jwt_identity

@auth_bp.route('/generate', methods=['POST'])
@jwt_required()
def generatenew():
    # old_identity = get_jwt_identity()  # We will NOT use this
    data = request.get_json()
    username = data.get('candidateId')
    print("Incoming candidateId:", username)

    if not username:
        return jsonify({"error": "candidateId is required"}), 400

    # Fresh check in DB (does not rely on old token identity)
    user = users_collection.find_one({"username": username})

    if user:
        access_token = create_access_token(identity=username, expires_delta=timedelta(seconds=15))
        refresh_token = create_refresh_token(identity=username)
        print("Fresh token generated:", access_token)
        return jsonify(
            access_token=access_token,
            refresh_token=refresh_token,
            message="Login successful with fresh token"
        ), 200

    # Register new user
    new_user = { "username": username }
    users_collection.insert_one(new_user)

    new_layermap_file = f"{LAYERS_DIR}/{username}_layermap.json"
    try:
        shutil.copyfile(BASE_LAYERS_FILE, new_layermap_file)
    except FileNotFoundError as e:
        return jsonify({"error": f"Base layermap file not found: {e}"}), 500

    # Generate fresh token
    access_token = create_access_token(identity=username, expires_delta=timedelta(seconds=15))
    refresh_token = create_refresh_token(identity=username)
    print("Fresh token generated (new user):", access_token)

    return jsonify(
        access_token=access_token,
        refresh_token=refresh_token,
        message="Registration successful with fresh token"
    ), 201
