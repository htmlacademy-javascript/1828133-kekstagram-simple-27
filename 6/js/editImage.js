const uploadForm = document.querySelector('.img-upload__form');
const loadModal = uploadForm.querySelector('.img-upload__overlay');

const scaleControlValue = loadModal.querySelector('.scale__control--value');
const imgUploadPreview = loadModal.querySelector('.img-upload__preview');
const trueImg = imgUploadPreview.querySelector('img');

const buttonEffectNone = document.getElementById(['effect-none']);
const buttonEffectChrome = document.getElementById(['effect-chrome']);
const buttonEffectSepia = document.getElementById(['effect-sepia']);
const buttonEffectMarvin = document.getElementById(['effect-marvin']);
const buttonEffectPhobos = document.getElementById(['effect-phobos']);
const buttonEffectHeat = document.getElementById(['effect-heat']);

const delClass = () => {
  trueImg.classList.remove('effects__preview--chrome', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
};


function addEffectNone () {
  buttonEffectNone.addEventListener('click', () => {
    delClass();
  });
}

function addEffectChrome () {
  buttonEffectChrome.addEventListener('click', () => {
    delClass();
    trueImg.classList.add('effects__preview--chrome');
  });
}

function addEffectSepia () {
  buttonEffectSepia.addEventListener('click', () => {
    delClass();
    trueImg.classList.add('effects__preview--sepia');
  });
}

function addEffectMarvin () {
  buttonEffectMarvin.addEventListener('click', () => {
    delClass();
    trueImg.classList.add('effects__preview--marvin');
  });
}

function addEffectPhobos () {
  buttonEffectPhobos.addEventListener('click', () => {
    delClass();
    trueImg.classList.add('effects__preview--phobos');
  });
}

function addEffectHeat () {
  buttonEffectHeat.addEventListener('click', () => {
    delClass();
    trueImg.classList.add('effects__preview--heat');
  });
}

const valueIncrease = () => {
  if (scaleControlValue.value !== '100%') {
    scaleControlValue.value = `${String(Number(scaleControlValue.value.replace(/\D/g, '')) + 25) }%`;
  }
  trueImg.style.scale = Number(scaleControlValue.value.replace(/\D/g, '')) / 100;
};


const valueDecrease = () => {
  if (scaleControlValue.value !== '25%') {
    scaleControlValue.value = `${String(Number(scaleControlValue.value.replace(/\D/g, '')) - 25) }%`;
  }
  trueImg.style.scale = Number(scaleControlValue.value.replace(/\D/g, '')) / 100;
};

function filters () {
  addEffectNone ();
  addEffectChrome ();
  addEffectSepia ();
  addEffectMarvin ();
  addEffectPhobos ();
  addEffectHeat ();
}

export {delClass, filters, valueIncrease, valueDecrease};
