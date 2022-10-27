import { createAnotherObjects } from './data.js';

const pictures = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const similarPictures = createAnotherObjects();

similarPictures.forEach((picture) => {
  const pictureElement = similarPictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__comments').textContent = picture.description;
  pictureElement.querySelector('.picture__likes').textContent = picture.likes;
  pictureElement.querySelector('.picture__img').src = picture.url;
  picturesFragment.appendChild(pictureElement);
});

pictures.appendChild(picturesFragment);
