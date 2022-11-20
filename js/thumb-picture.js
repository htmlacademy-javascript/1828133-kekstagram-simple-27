const pictures = document.querySelector('.pictures');
const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesFragment = document.createDocumentFragment();

const renderPhotos = (photos) => {

  photos.forEach(({url, likes, description}) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__comments').textContent = description.length;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    pictureElement.querySelector('.picture__img').src = url;
    picturesFragment.appendChild(pictureElement);
    pictures.appendChild(picturesFragment);
  });
};

export {renderPhotos};
