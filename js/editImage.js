const MAX_SIZE = '100%';
const MIN_SIZE = '25%';

const uploadForm = document.querySelector('.img-upload__form');
const loadModal = uploadForm.querySelector('.img-upload__overlay');

const scaleControlValue = loadModal.querySelector('.scale__control--value');
const imgUploadPreview = loadModal.querySelector('.img-upload__preview');
const trueImg = imgUploadPreview.querySelector('img');

const buttonEffectNone = document.getElementById('effect-none');
const buttonEffectChrome = document.getElementById('effect-chrome');
const buttonEffectSepia = document.getElementById('effect-sepia');
const buttonEffectMarvin = document.getElementById('effect-marvin');
const buttonEffectPhobos = document.getElementById('effect-phobos');
const buttonEffectHeat = document.getElementById('effect-heat');

const deleteClass = () => {
  trueImg.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
};

const deleteFilters = () => {
  trueImg .style.filter = 'none';
};

const addEffectNone = () => {
  buttonEffectNone.addEventListener('click', () => {
    deleteClass();
    deleteFilters();
  });
};

const addEffectChrome = () => {
  buttonEffectChrome.addEventListener('click', () => {
    deleteClass();
    trueImg.classList.add('effects__preview--chrome');
  });
};

const addEffectSepia = () => {
  buttonEffectSepia.addEventListener('click', () => {
    deleteClass();
    trueImg.classList.add('effects__preview--sepia');
  });
};

const addEffectMarvin = () => {
  buttonEffectMarvin.addEventListener('click', () => {
    deleteClass();
    trueImg.classList.add('effects__preview--marvin');
  });
};

const addEffectPhobos = () => {
  buttonEffectPhobos.addEventListener('click', () => {
    deleteClass();
    trueImg.classList.add('effects__preview--phobos');
  });
};

const addEffectHeat = () => {
  buttonEffectHeat.addEventListener('click', () => {
    deleteClass();
    trueImg.classList.add('effects__preview--heat');
  });
};

const onValueIncreaseClick = () => {
  if (scaleControlValue.value !== MAX_SIZE) {
    scaleControlValue.value = `${String(Number(scaleControlValue.value.replace(/\D/g, '')) + 25) }%`;
  }
  trueImg.style.scale = Number(scaleControlValue.value.replace(/\D/g, '')) / 100;
};


const onValueDecreaseClick = () => {
  if (scaleControlValue.value !== MIN_SIZE) {
    scaleControlValue.value = `${String(Number(scaleControlValue.value.replace(/\D/g, '')) - 25) }%`;
  }
  trueImg.style.scale = Number(scaleControlValue.value.replace(/\D/g, '')) / 100;
};

const chooseFilters = () => {
  addEffectNone ();
  addEffectChrome ();
  addEffectSepia ();
  addEffectMarvin ();
  addEffectPhobos ();
  addEffectHeat ();
};

export {deleteClass, deleteFilters, chooseFilters, onValueIncreaseClick, onValueDecreaseClick};
