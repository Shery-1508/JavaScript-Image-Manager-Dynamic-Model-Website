# import os
# import json
# from PIL import Image

# # Path to the models directory
# directory = r"F:\VS CODE\MyProjects\web dev\model aggragate site\tste\New folder"

# # directory = "F:\VS CODE\MyProjects\web dev\model aggragate site/tste\New folder"

# # Empty dictionary to store the models and galleries
# model_dict = {"models": []}

# # Thumbnail size
# thumb_size = (250, 250)

# # Loop through each model directory
# for model in os.listdir(directory):
#     model_path = os.path.join(directory, model)
#     if os.path.isdir(model_path):
#         # Create a dictionary for the current model
#         model_dict_curr = {"name": model, "galleries": []}
#         # Loop through each gallery directory in the current model directory
#         for gallery in os.listdir(model_path):
#             gallery_path = os.path.join(model_path, gallery)
#             if os.path.isdir(gallery_path):
#                 # Create a dictionary for the current gallery
#                 gallery_dict_curr = {"name": gallery, "pics": []}
#                 # Loop through each picture file in the current gallery directory
#                 for pic in os.listdir(gallery_path):
#                     if pic.endswith(".jpg") or pic.endswith(".jpeg") or pic.endswith(".png"):
#                         pic_path = os.path.join(gallery_path, pic)
#                         thumb_path = os.path.join(gallery_path, "thumb_" + pic)
#                         # Create a thumbnail for the current picture
#                         with Image.open(pic_path) as im:
#                             im.thumbnail(thumb_size)
#                             im.save(thumb_path)
#                         # Create a dictionary for the current picture
#                         pic_dict_curr = {"src": pic_path, "thumb": thumb_path}
#                         # Append the current picture dictionary to the current gallery's "pics" list
#                         gallery_dict_curr["pics"].append(pic_dict_curr)
#                 # Append the current gallery dictionary to the current model's "galleries" list
#                 model_dict_curr["galleries"].append(gallery_dict_curr)
#         # Append the current model dictionary to the "models" list in the main dictionary


#################################################################################################################
#################################################################################################################
#################################################################################################################
#################################################################################################################

# import os
# import json

# # Path to the models directory
# directory = "F:\VS CODE\MyProjects\web dev\model aggragate site/tste/New Folder"

# # Empty dictionary to store the models and galleries
# model_dict = {"models": []}

# # Loop through each model directory
# for model in os.listdir(directory):
#     model_path = os.path.join(directory, model)
#     if os.path.isdir(model_path):
#         # Create a dictionary for the current model
#         model_dict_curr = {"name": model, "galleries": []}
#         # Loop through each gallery directory in the current model directory
#         for gallery in os.listdir(model_path):
#             gallery_path = os.path.join(model_path, gallery)
#             if os.path.isdir(gallery_path):
#                 # Create a dictionary for the current gallery
#                 gallery_dict_curr = {"name": gallery, "pics": []}
#                 # Loop through each picture file in the current gallery directory
#                 for pic in os.listdir(gallery_path):
#                     if pic.endswith(".jpg") or pic.endswith(".jpeg") or pic.endswith(".png"):
#                         pic_path = os.path.join(gallery_path, pic)
#                         thumb_path = os.path.join(gallery_path, "thumb_" + pic)
#                         # thumb_path = os.path.join(gallery_path, pic)
#                         # Create a dictionary for the current picture
#                         pic_dict_curr = {"src": pic_path, "thumb": thumb_path}
#                         # Append the current picture dictionary to the current gallery's "pics" list
#                         gallery_dict_curr["pics"].append(pic_dict_curr)
#                 # Append the current gallery dictionary to the current model's "galleries" list
#                 model_dict_curr["galleries"].append(gallery_dict_curr)
#         # Append the current model dictionary to the "models" list in the main dictionary
#         model_dict["models"].append(model_dict_curr)

# print(model_dict)
# # Write the dictionary to a JSON file
# with open("models.json", "w") as json_file:
#     json.dump(model_dict, json_file)

# # with open("F:\FDM Downloads\PS\Photoshop_portable_CS6_x64_Multi\Photoshop_portable_CS6_x64_Multi/tste/models.json", "w") as json_file:
# #     json.dump(model_dict, json_file)
