
const myImages = ['elephant.jpg', 'great-white.jpg', 'koala.jpg', 'smithi.jpg', 'tiger.jpg'];
const myGallery = document.getElementById('gallery');

createGallery()

function createGallery() {

    myImages.forEach((url) => {
        const image = document.createElement('img');
        const article = document.createElement('article');
        const imageUrl = './assets/img/' + url;
        image.src = imageUrl;

        article.appendChild(image);
        myGallery.appendChild(article);

        image.addEventListener('click', () => {
            myGallery.innerHTML = '';
            const singleImage = document.createElement('img');
            const singleArticle = document.createElement('article');
            singleImage.src = imageUrl;
            singleImage.classList.add('singleImg');

            singleArticle.appendChild(singleImage);
            myGallery.appendChild(singleArticle);

            singleImage.addEventListener('click', () => {
                myGallery.innerHTML = '';
                createGallery();
            })
        })
    })

}
