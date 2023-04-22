const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const modelIndex = urlParams.get('model');
const galleryName = urlParams.get('gallery');

fetch('models.json')
    .then(response => response.json())
    .then(data => {
        const model = data.models[modelIndex];
        const gallery = model.galleries.find(g => g.name === galleryName);

        // Set the model name and gallery name in the page header
        document.querySelector('#model-name').textContent = model.name;
        document.querySelector('#gallery-name').textContent = gallery.name;

        // Add thumbnail images to the gallery page
        const galleryPics = document.querySelector('#gallery-pics');
        gallery.pics.forEach(pic => {
            const img = document.createElement('img');
            img.src = pic.thumb;
            img.alt = 'Thumbnail image for ' + pic.src;
            img.addEventListener('click', () => {
                window.open(pic.src, '_blank');
            });
            galleryPics.appendChild(img);
        });
    })
    .catch(error => console.error(error));