import { isEscapeKey } from './utils.js';
import {onValueIncreaseClick, onValueDecreaseClick} from './scale.js';
import {showMessage} from './upload-messages.js';
import { resetEffects } from './slider.js';

const SUCCESS_MESSAGE = 'success';
const ERROR_MESSAGE = 'error';
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
  if (isEscapeKey(evt) && !document.querySelector('.error')) {
    evt.preventDefault();
    closeLoadModal();
  }
};

uploadInput.addEventListener('change', () => {
  body.classList.add('modal-open');
  loadModal.classList.remove('hidden');
  scaleControlBigger.addEventListener('click', onValueIncreaseClick);
  scaleControlSmaller.addEventListener('click', onValueDecreaseClick);
  document.addEventListener('keydown', onLoadModalEscKeydown);
});

function closeLoadModal () {
  body.classList.remove('modal-open');
  loadModal.classList.add('hidden');
  resetEffects();
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
        showMessage(SUCCESS_MESSAGE);
        return(response);
      }
      throw new Error(`${response.status} — ${response.statusText}`);
    })
      .catch(() => {
        showMessage(ERROR_MESSAGE);
      });
  });
};

export {setUploadFormSubmit, onLoadModalEscKeydown};
