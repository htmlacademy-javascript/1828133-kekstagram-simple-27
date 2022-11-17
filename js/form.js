import { isEscapeKey } from './utils.js';
import {deleteClass, deleteFilters, chooseFilters, onValueIncreaseClick, onValueDecreaseClick} from './editImage.js';
import {createSlider, updateSlider, deleteSlider} from './slider.js';
import {showSuccessMessage, showErrorMessage} from './uploadMessages.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const loadModal = uploadForm.querySelector('.img-upload__overlay');
const scaleControlSmaller = loadModal.querySelector('.scale__control--smaller');
const scaleControlBigger = loadModal.querySelector('.scale__control--bigger');
const modalCloseButton = loadModal.querySelector('.img-upload__cancel');
const imgUploadPreview = loadModal.querySelector('.img-upload__preview');
const trueImage = imgUploadPreview.querySelector('img');

const onLoadModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeLoadModal();
  }
};

uploadInput.addEventListener('change', () => {
  body.classList.add('modal-open');
  loadModal.classList.remove('hidden');
  chooseFilters();
  createSlider();
  updateSlider();
  scaleControlBigger.addEventListener('click', onValueIncreaseClick);
  scaleControlSmaller.addEventListener('click', onValueDecreaseClick);
  document.addEventListener('keydown', onLoadModalEscKeydown);
});

function closeLoadModal () {
  body.classList.remove('modal-open');
  loadModal.classList.add('hidden');
  deleteSlider();
  deleteClass();
  deleteFilters();
  uploadForm.reset();
  trueImage .style.scale = 1;
  document.removeEventListener('keydown', onLoadModalEscKeydown);
  scaleControlBigger.removeEventListener('click', onValueIncreaseClick);
  scaleControlSmaller.removeEventListener('click', onValueDecreaseClick);
}

modalCloseButton.addEventListener('click', () => {
  closeLoadModal();
});

const setUploadFormSubmit = () => {
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);

    fetch (
      'https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        closeLoadModal();
        showSuccessMessage();
        return(response);
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
      .catch(() => {
        showErrorMessage();
      });
  });
};

export {setUploadFormSubmit};
