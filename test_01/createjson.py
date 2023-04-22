import os
import json

# Replace "path/to/directory" with the path to your directory
directory = r"C:\Users\Sajid computers\Downloads\Pics"

# Create a dictionary to store the model data
model_data = {"featuredModels": [], "allModels": []}

# Walk through the directory and find all image files
for root, dirs, files in os.walk(directory):
    for file in files:
        # Check if the file is an image file
        if file.endswith(".jpg") or file.endswith(".jpeg") or file.endswith(".png") or file.endswith(".gif"):
            # Get the file name and path
            name = os.path.splitext(file)[0]
            path = os.path.join(root, file)

            # Add the file to the "allModels" list in the model_data dictionary
            model_data["allModels"].append({"name": name, "image": path})

# Convert the model_data dictionary to a JSON string and save it to a file
with open("models.json", "w") as outfile:
    json.dump(model_data, outfile, indent=4)
