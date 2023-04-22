fetch('models.json')
	.then(response => response.json())
	.then(data => {
		const modelList = document.querySelector('.model-list');
		data.models.forEach(model => {
			const modelDiv = document.createElement('div');
			const modelHeader = document.createElement('h2');
			modelHeader.textContent = model.name;
			modelDiv.appendChild(modelHeader);
			model.galleries.forEach(gallery => {
				const galleryDiv = document.createElement('div');
				const galleryHeader = document.createElement('h3');
				galleryHeader.textContent = gallery.name;
				galleryDiv.appendChild(galleryHeader);
				gallery.pics.forEach(pic => {
					const picLink = document.createElement('a');
					picLink.href = pic.src;
					const picImg = document.createElement('img');
					picImg.src = pic.thumb;
					picLink.appendChild(picImg);
					galleryDiv.appendChild(picLink);
				});
				modelDiv.appendChild(galleryDiv);
			});
			modelList.appendChild(modelDiv);
		});
	})
	.catch(error => console.error(error));