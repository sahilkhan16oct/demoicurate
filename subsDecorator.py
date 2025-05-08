from flask_jwt_extended import get_jwt_identity
from functools import wraps
from datetime import datetime
from flask import jsonify
from pymongo import MongoClient
import os

# Set up MongoDB connection
mongo_uri = f"mongodb+srv://innoveotech:{os.getenv('DB_PASSWORD')}@azeem.af86m.mongodb.net/chipdesign1?retryWrites=true&w=majority"
client = MongoClient(mongo_uri)
db = client['chipdesign1']
users_collection = db['userstb']

def subscription_required(subscription_type):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            identity = get_jwt_identity()
            if not identity:
                return jsonify({"message": "Missing identity in token."}), 401

            user = users_collection.find_one({"username": identity})
            if not user:
                return jsonify({"message": "User not found."}), 404

            # Access nested subscription details
            subscription = user.get("subscription", {}).get(subscription_type, {})
            if not subscription.get("active", False):
                return jsonify({"message": f"Access denied. {subscription_type} subscription is required."}), 403

            start_date = subscription.get("startDate")
            end_date = subscription.get("endDate")
            current_date = datetime.utcnow()

            if start_date and end_date:
                try:
                    # MongoDB's $date fields are deserialized into datetime automatically
                    if not (start_date <= current_date <= end_date):
                        return jsonify({"message": f"Your {subscription_type} subscription has expired."}), 403
                except Exception:
                    return jsonify({"message": "Invalid date format in subscription."}), 400

            return func(*args, **kwargs)
        return wrapper
    return decorator
