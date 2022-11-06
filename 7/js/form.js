import { isEscapeKey } from './utils.js';
import {deleteClass, chooseFilters, onValueIncreaseClick, onValueDecreaseClick} from './editImage.js';

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
    closeLoadModal();
  }
};

function openLoadModal () {
  uploadForm.addEventListener('change', () => {
    body.classList.add('modal-open');
    loadModal.classList.remove('hidden');
    chooseFilters();
    scaleControlBigger.addEventListener('click', onValueIncreaseClick);
    scaleControlSmaller.addEventListener('click', onValueDecreaseClick);
    document.addEventListener('keydown', onLoadModalEscKeydown);
  });
}

function closeLoadModal () {
  body.classList.remove('modal-open');
  loadModal.classList.add('hidden');
  deleteClass();
  uploadForm.reset();
  trueImage .style.scale = 1;
  document.removeEventListener('keydown', onLoadModalEscKeydown);
  scaleControlBigger.removeEventListener('click', onValueIncreaseClick);
  scaleControlSmaller.removeEventListener('click', onValueDecreaseClick);
}

modalCloseButton.addEventListener('click', () => {
  closeLoadModal();
});

openLoadModal();
closeLoadModal();

export {openLoadModal, closeLoadModal};
