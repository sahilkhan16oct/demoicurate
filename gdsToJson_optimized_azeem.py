import json
import os
import sys
from io import FileIO

import gdstk


def convert_gds_to_json(file: FileIO) -> dict:
	"""Reads a GDS file stream and outputs a JSON structure with the layout data."""
	gds = gdstk.read_gds(file)

	cells_json = []
	covered_cells = set()
	for top_cell in gds.top_level():
		cells_json = cell_to_json(top_cell, covered_cells, cells_json)
	cells_json.reverse()
	output_data = {
		"layout_data": {
			"units": {
				"user_size": gds.precision / gds.unit,
				"db_size": gds.precision,
			},
			"cells": cells_json,
		}
	}

	return output_data


def convert_path_to_polygons(cell: gdstk.Cell):
	for path in cell.paths:
		polygons = path.to_polygons()
		for polygon in polygons:
			cell.add(polygon)


def cell_to_json(cell: gdstk.Cell, covered_cells: set, cells_json: list) -> dict:
	"""Converts a cell and its contents to a JSON-ready dictionary."""
	convert_path_to_polygons(cell)
	
	properties = []
	instances=[]

	for poly in cell.polygons:
		x1 =  min([x1[0] for x1 in poly.points.tolist()])
		y1= min([y1[1] for y1 in poly.points.tolist()])
		x2 =max([x1[0] for x1 in poly.points.tolist()])
		y2=max([y1[1] for y1 in poly.points.tolist()])
		properties.append(

			{
				"type": "rectangle",
				"layer": poly.layer,
				"datatype": poly.datatype,
				"x":x1,
				"y":y1,
				"width": x2-x1,
				"height":y2-y1

			}
		)

	for label in cell.labels:
		properties.append(
			{
				"type": "Label",
				"layer_number": label.layer,
				"datatype_number": label.texttype,
				"coordinates": [label.origin],
				"name": label.text,
				"rotation": label.rotation,
			}
		)

	for inst in cell.references:
		instances.append(
			{
				
				"x": inst.origin[0],
				"y": inst.origin[1],
				"bounding_box": list(inst.bounding_box()),
				"name": inst.cell.name,
				"rotation": inst.rotation,
				"mirror_x": inst.x_reflection,
			}
		)

	# Recursively handle dependencies
	for dep in cell.dependencies(False):
		if dep.name not in covered_cells:
			covered_cells.add(dep.name)
			cell_to_json(dep, covered_cells, cells_json)
			
	cells_json.append({"name": cell.name, "elements": properties, "instances": instances})
	# cells_json.append({
    #     "name": cell.name,
    #     "elements": elements,
    #     "instances": instances
    # })

	return cells_json


if __name__ == "__main__":
	if len(sys.argv) < 2:
		print("Usage: python script.py <inputfile.gds>")
		sys.exit(1)

	input_file = sys.argv[1]
	filename = os.path.basename(input_file).strip(".gds")

	output_data = convert_gds_to_json(input_file)
	with open(f"{filename}.json", "w") as json_file:
		json.dump(output_data, json_file, indent=4)
