const MAX_SIZE = '100%';
const MIN_SIZE = '25%';

const uploadForm = document.querySelector('.img-upload__form');
const loadModal = uploadForm.querySelector('.img-upload__overlay');

const scaleControlValue = loadModal.querySelector('.scale__control--value');
const image = document.querySelector('.img-upload__preview img');

const parseScaleControlValue = () => Number.parseFloat(scaleControlValue.value);

const setImageScale = () => {
  image.style.scale = parseScaleControlValue() / 100;
};

const onValueIncreaseClick = () => {
  if (scaleControlValue.value !== MAX_SIZE) {
    scaleControlValue.value = `${parseScaleControlValue() + 25}%`;
  }
  setImageScale();
};

const onValueDecreaseClick = () => {
  if (scaleControlValue.value !== MIN_SIZE) {
    scaleControlValue.value = `${parseScaleControlValue() - 25}%`;
  }
  setImageScale();
};

export {onValueIncreaseClick, onValueDecreaseClick};
