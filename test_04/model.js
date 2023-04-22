const getParameterByName = (name, url) => {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

fetch('models.json')
    .then(response => response.json())
    .then(data => {
        const modelName = getParameterByName('model');
        const model = data.models[modelName];
        const modelGallery = document.querySelector('.model-gallery');
        const galleryCounter = document.querySelector('#gallery-counter');
        let counter = 0;

        for (const gallery of model.galleries) {
            const thumbnailPic = gallery.pics[0];
            const thumbnailLink = document.createElement('a');
            thumbnailLink.href = `gallery.html?model=${modelName}&gallery=${gallery.name}`;
            const thumbnailImg = document.createElement('img');
            thumbnailImg.src = thumbnailPic.thumb;
            thumbnailLink.appendChild(thumbnailImg);
            const galleryDiv = document.createElement('div');
            galleryDiv.appendChild(thumbnailLink);

            const galleryText = document.createElement('p');
            gallery.name = gallery.name.replace(/-/g, ' ');
            galleryText.textContent = `${gallery.name}`;
            gallery.name = gallery.name.replace(/ /g, '-');
            galleryDiv.appendChild(galleryText);

            modelGallery.appendChild(galleryDiv);

            counter++;
        }

        galleryCounter.textContent = `${counter} Galleries`;
        document.getElementById('model-name').textContent = model.name;
    })
    .catch(error => console.error(error));
