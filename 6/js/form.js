import { isEscapeKey } from './utils.js';
import {delClass, filters, valueIncrease, valueDecrease} from './editImage.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('.img-upload__form');
const loadModal = uploadForm.querySelector('.img-upload__overlay');
const scaleControlSmaller = loadModal.querySelector('.scale__control--smaller');
const scaleControlBigger = loadModal.querySelector('.scale__control--bigger');
const modalCloseButton = loadModal.querySelector('.img-upload__cancel');
const imgUploadPreview = loadModal.querySelector('.img-upload__preview');
const trueImage = imgUploadPreview.querySelector('img');

const onLoadModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeloadModal();
  }
};

function openloadModal () {
  uploadForm.addEventListener('change', () => {
    body.classList.add('modal-open');
    loadModal.classList.remove('hidden');
    filters();
    scaleControlBigger.addEventListener('click', valueIncrease);
    scaleControlSmaller.addEventListener('click', valueDecrease);
    document.addEventListener('keydown', onLoadModalEscKeydown);
  });
}

function closeloadModal () {
  body.classList.remove('modal-open');
  loadModal.classList.add('hidden');
  delClass();
  uploadForm.reset();
  trueImage .style.scale = 1;
  document.removeEventListener('keydown', onLoadModalEscKeydown);
  scaleControlBigger.removeEventListener('click', valueIncrease);
  scaleControlSmaller.removeEventListener('click', valueDecrease);
}

modalCloseButton.addEventListener('click', () => {
  closeloadModal();
});

openloadModal();
closeloadModal();

export {openloadModal, closeloadModal};
