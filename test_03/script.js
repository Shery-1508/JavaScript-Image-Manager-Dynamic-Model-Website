const getRandomInt = (max) => {
	return Math.floor(Math.random() * Math.floor(max));
};

fetch('models.json')
	.then(response => response.json())
	.then(data => {
		const modelList = document.querySelector('.model-list');
		const randomModelIndex = getRandomInt(data.models.length);
		const randomModel = data.models[randomModelIndex];
		const modelHeader = document.createElement('h2');
		modelHeader.textContent = randomModel.name;
		modelList.appendChild(modelHeader);
		randomModel.galleries.forEach(gallery => {
			const galleryDiv = document.createElement('div');
			const galleryHeader = document.createElement('h3');
			galleryHeader.textContent = gallery.name;
			galleryDiv.appendChild(galleryHeader);
			const thumbnailIndex = getRandomInt(gallery.pics.length);
			const thumbnailPic = gallery.pics[thumbnailIndex];
			const thumbnailLink = document.createElement('a');
			thumbnailLink.href = `gallery.html?model=${randomModelIndex}&gallery=${gallery.name}`;
			const thumbnailImg = document.createElement('img');
			thumbnailImg.src = thumbnailPic.thumb;
			thumbnailLink.appendChild(thumbnailImg);
			galleryDiv.appendChild(thumbnailLink);
			modelList.appendChild(galleryDiv);
		});
	})
	.catch(error => console.error(error));