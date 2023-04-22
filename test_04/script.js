const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

fetch('models.json')
    .then(response => response.json())
    .then(data => {
        const modelList = document.querySelector('.model-list');
        let randomModelIndex;
        let randomModel;
        let gallery;
        let thumbnailPic;
        let thumbnailLink;

        while (true) {
            randomModelIndex = getRandomInt(data.models.length);
            randomModel = data.models[randomModelIndex];
            gallery = randomModel.galleries[getRandomInt(randomModel.galleries.length)];
            thumbnailPic = gallery.pics[getRandomInt(gallery.pics.length)];
            thumbnailLink = document.createElement('a');
            thumbnailLink.href = `gallery.html?model=${randomModelIndex}&gallery=${gallery.name}`;
            const thumbnailImg = document.createElement('img');
            thumbnailImg.src = thumbnailPic.thumb;
            thumbnailLink.appendChild(thumbnailImg);
            const galleryDiv = document.createElement('div');
            galleryDiv.appendChild(thumbnailLink);

            const modelText = document.createElement('p');
            modelText.textContent = `${randomModel.name}`;
            galleryDiv.appendChild(modelText);

            const galleryText = document.createElement('p');
            gallery.name = gallery.name.replace(/-/g, ' ');
            galleryText.textContent = `${gallery.name}`;
            gallery.name = gallery.name.replace(/ /g, '-');
            galleryDiv.appendChild(galleryText);

            modelList.appendChild(galleryDiv);

            if (modelList.children.length >= 15) {
                break;
            }
        }

        // Add event listeners to all thumbnail links
        const thumbnailLinks = modelList.querySelectorAll('a');
        thumbnailLinks.forEach(link => {
            const gallery = data.models[link.searchParams.get('model')].galleries.find(g => g.name === link.searchParams.get('gallery'));
            link.addEventListener('click', (event) => {
                event.preventDefault();
                gallery.pics.forEach(pic => {
                    const fullSizeImg = new Image();
                    fullSizeImg.src = pic.src;
                });
                window.location.href = link.href;
            });
        });
    })
    .catch(error => console.error(error));