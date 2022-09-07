import { registerImage } from './lazy';

const addImageBtn = document.querySelector('#add-image');
const appImg = document.querySelector('#images');
const baseURLPic = 'https://randomfox.ca/images/';
const imgQuantity = 3;
const foxImagesURLs = [];

addImageBtn.addEventListener('click', addImage);

let number = () => {
    const randInt = Math.floor(Math.random() * (123 - 1 + 1) + 1 )
    console.log(`Random number is: ${randInt}`)
    return randInt;
}

function addImage() {
    const image = document.createElement('img');
    image.className = "mx-auto p-1";
    image.width = "320";
    image.src = `${baseURLPic}${number()}.jpg`;

    appImg.appendChild(image);
    registerImage(image);
}
