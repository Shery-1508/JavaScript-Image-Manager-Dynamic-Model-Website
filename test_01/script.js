// This code assumes that you have a JSON file that contains data for your models.

const featuredModelsContainer = document.querySelector('.featured-models');
const allModelsContainer = document.querySelector('.all-models');

fetch('models.json')
	.then(response => response.json())
	.then(data => {
		// Display featured models
		data.featuredModels.forEach(model => {
			const modelDiv = document.createElement('div');
			modelDiv.classList.add('model');
			modelDiv.innerHTML = `<img src="${model.image}" alt="${model.name}">`;
			featuredModelsContainer.appendChild(modelDiv);
		});

		// Display all models
		data.allModels.forEach(model => {
			const modelDiv = document.createElement('div');
			modelDiv.classList.add('model');
			modelDiv.innerHTML = `<img src="${model.image}" alt="${model.name}">`;
			allModelsContainer.appendChild(modelDiv);
		});
	});
