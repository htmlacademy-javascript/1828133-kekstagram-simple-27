const CHROME_SLIDER_SETTINGS = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};
const SEPIA_SLIDER_SETTINGS = {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
};
const MARVIN_SLIDER_SETTINGS = {
  range: {
    min: 0,
    max: 100,
  },
  start: 100,
  step: 1,
};
const PHOBOS_SLIDER_SETTINGS = {
  range: {
    min: 0,
    max: 3,
  },
  start: 3,
  step: 0.1,
};
const HEAT_SLIDER_SETTINGS = {
  range: {
    min: 1,
    max: 3,
  },
  start: 3,
  step: 0.1,
};

const effectFieldset = document.querySelector('.img-upload__effect-level');
const effectSlider = document.querySelector('.effect-level__slider');
const effectValue = document.querySelector('.effect-level__value');
const buttonEffectNone = document.getElementById('effect-none');
const buttonEffectChrome = document.getElementById('effect-chrome');
const buttonEffectSepia = document.getElementById('effect-sepia');
const buttonEffectMarvin = document.getElementById('effect-marvin');
const buttonEffectPhobos = document.getElementById('effect-phobos');
const buttonEffectHeat = document.getElementById('effect-heat');
const imgUploadPreview = document.querySelector('.img-upload__preview');
const trueImg = imgUploadPreview.querySelector('img');

const showSlider = () => {
  effectSlider.classList.remove('hidden');
  effectFieldset.classList.remove('hidden');
};

const hideSlider = () => {
  effectSlider.classList.add('hidden');
  effectFieldset.classList.add('hidden');
};

const deleteSlider = () => {
  effectSlider.noUiSlider.destroy();
};

const createSlider = () => {
  noUiSlider.create(effectSlider, {
    range: {
      min: 0,
      max: 100,
    },
    start: 50,
    step: 1,
    connect: 'lower',
  });
  hideSlider();
};

const updateSlider = () => {
  effectSlider.noUiSlider.on('update', () => {
    effectValue.value = effectSlider.noUiSlider.get();
    effectValue.textContent = effectValue.value;

    if(trueImg.classList.contains('effects__preview--chrome')) {
      trueImg .style.filter = `grayscale(${effectValue.value})`;
    }
    if(trueImg.classList.contains('effects__preview--sepia')) {
      trueImg .style.filter = `sepia(${effectValue.value})`;
    }
    if(trueImg.classList.contains('effects__preview--marvin')) {
      trueImg .style.filter = `invert(${effectValue.value}%)`;
    }
    if(trueImg.classList.contains('effects__preview--phobos')) {
      trueImg .style.filter = `blur(${effectValue.value}px)`;
    }
    if(trueImg.classList.contains('effects__preview--heat')) {
      trueImg .style.filter = `brightness(${effectValue.value})`;
    }
  });
};

buttonEffectNone.addEventListener('click', () => {
  hideSlider();
});

buttonEffectChrome.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions(CHROME_SLIDER_SETTINGS);
  trueImg .style.filter = `grayscale(${CHROME_SLIDER_SETTINGS.start})`;
});

buttonEffectSepia.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions(SEPIA_SLIDER_SETTINGS);
  trueImg .style.filter = `sepia(${SEPIA_SLIDER_SETTINGS.start})`;
});

buttonEffectMarvin.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions(MARVIN_SLIDER_SETTINGS);
  trueImg .style.filter = `invert(${MARVIN_SLIDER_SETTINGS.start})`;
});

buttonEffectPhobos.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions(PHOBOS_SLIDER_SETTINGS);
  trueImg .style.filter = `blur(${PHOBOS_SLIDER_SETTINGS.start}px)`;
});

buttonEffectHeat.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions(HEAT_SLIDER_SETTINGS);
  trueImg .style.filter = `brightness(${HEAT_SLIDER_SETTINGS.start})`;
});


export {createSlider, hideSlider, updateSlider, deleteSlider};
