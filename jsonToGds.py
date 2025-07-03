import gdstk
import json
import numpy as np
import os

def convert_json_to_gds(layout_data, output_path="output.gds"):
    lib = gdstk.Library()
    cell_list = []
    instance_map = {}

    for cell in layout_data:
        cell_ref = gdstk.Cell(cell["cellname"])
        lib.add(cell_ref)

        cell_list.append(cell["cellname"])
        instance_map[cell_ref] = []

        for prop in cell["properties"]:
            if prop["type"] == "Rectangle":
                coords = [tuple(p) for p in prop["coordinates"]]
                cell_ref.add(gdstk.Polygon(coords, layer=int(prop["layer"]), datatype=int(prop["datatype"])))

            elif prop["type"] == "Text":
                rotation = prop.get("rotation", 0) or 0
                coord = tuple(prop["coordinates"][0])
                cell_ref.add(gdstk.Label(
                    prop["text"],
                    origin=coord,
                    rotation=rotation * (np.pi / 180),
                    layer=int(prop["layer"]),
                    texttype=int(prop["datatype"])
                ))

            elif prop["type"] == "Instance":
                rotation = prop.get("rotation", 0) or 0
                origin = tuple(prop["origin"][0])
                ref_name = prop["text"]

                if ref_name in cell_list:
                    cell_ref.add(gdstk.Reference(ref_name, origin=origin, rotation=rotation * (np.pi / 180), x_reflection=prop["mirror_x"]))
                else:
                    instance_map[cell_ref].append(prop)

    # Handle deferred instances
    for cell_ref, deferred in instance_map.items():
        for prop in deferred:
            rotation = prop.get("rotation", 0) or 0
            origin = tuple(prop["origin"][0])
            ref_name = prop["text"]
            cell_ref.add(gdstk.Reference(ref_name, origin=origin, rotation=rotation * (np.pi / 180), x_reflection=prop["mirror_x"]))

    lib.write_gds(output_path)
