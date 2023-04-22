# JavaScript Image Manager Dynamic Model Website
This is a dynamic image management website built with JavaScript, HTML, and CSS. It allows users to create galleries of pictures organized by models, and display them on a web page with pagination and popups for individual pictures. The website uses a JSON file to store the paths to the pictures and galleries, and a Python script to generate thumbnails for each picture.

# Table of Contents
Installation
Usage
File Structure
Contributing
License
Installation
To use this website, you will need to have Python and a web browser installed on your computer. You can clone the repository from GitHub to your local machine using the following command:

'''sh
Copy code
git clone https://github.com/yourusername/JavaScript-Image-Manager-Dynamic-Model-Website.git
Then, you will need to run the Python script generate_thumbnails.py to create thumbnails for each picture in your gallery. You can do this by running the following command in the terminal:

'''sh
Copy code
python generate_thumbnails.py
Note that you may need to modify the directory variable in the script to point to the correct location of your gallery on your computer.

After running the script, you should have a models.json file in your directory, which will contain all the paths to your pictures.

# Usage
To use the website, simply open the index.html file in your web browser. This will display a randomly selected set of galleries from your models, with pagination if there are more than a certain number of galleries. Clicking on a gallery will take you to the gallery.html page, which will display all the pictures in that gallery as thumbnails. Clicking on a thumbnail will open a popup window with the full-sized picture. Clicking on the model name in the top-left corner will take you to the model.html page, which will display all the galleries for that model.

#File Structure
The file structure for the website should be as follows:

'''sql
Copy code
JavaScript-Image-Manager-Dynamic-Model-Website/
|-- models/
|   |-- model_01/
|   |   |-- gallery_01/
|   |   |   |-- pic_01.jpg
|   |   |   |-- pic_02.jpg
|   |   |   |-- ...
|   |   |-- gallery_02/
|   |   |   |-- pic_01.jpg
|   |   |   |-- pic_02.jpg
|   |   |   |-- ...
|   |   |-- ...
|   |-- model_02/
|   |   |-- gallery_01/
|   |   |   |-- pic_01.jpg
|   |   |   |-- pic_02.jpg
|   |   |   |-- ...
|   |   |-- gallery_02/
|   |   |   |-- pic_01.jpg
|   |   |   |-- pic_02.jpg
|   |   |   |-- ...
|   |   |-- ...
|-- js/
|   |-- gallery.js
|   |-- index.js
|   |-- model.js
|   |-- script.js
|-- css/
|   |-- styles.css
|-- gallery.html
|-- index.html
|-- model.html
|-- models.json
|-- generate_thumbnails.py
|-- README.md
models/: This directory should contain subdirectories for each model, each of which should contain subdirectories for each gallery, each of which should contain the picture files.
js/: This directory should
