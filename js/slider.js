const image = document.querySelector('.img-upload__preview img');
const form = document.querySelector('.img-upload__form');
const sliderElement = document.querySelector('.effect-level__slider');
const effectLevel = document.querySelector('.effect-level__value');
const sliderContainer = document.querySelector('.img-upload__effect-level');

const effects = [
  {
    name: 'none',
    min: 0,
    max: 100,
    start: 50,
    step: 1
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    start: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    start: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    start: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    start: 3,
    step: 0.1,
    unit: ''
  }
];

const defaultEffect = effects[0];
let chosenEffect = defaultEffect;

const isDefault = () => chosenEffect === defaultEffect;

const updateSlider = () => {
  sliderContainer.classList.remove('hidden');
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max
    },
    step: chosenEffect.step,
    start: chosenEffect.start
  });
  if (isDefault()) {
    sliderContainer.classList.add('hidden');
  }
};

const onFormChange = (evt) => {
  if(!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = effects.find((effect) => effect.name === evt.target.value);
  updateSlider();
};

const onSliderUpdate = () => {
  image.style.filter = 'none';
  image.className = '';
  effectLevel.value = '';
  if (isDefault()) {
    return;
  }
  const sliderValue = sliderElement.noUiSlider.get();
  image.style.filter = `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  image.classList.add(`effects__preview--${chosenEffect.name}`);
  effectLevel.value = sliderValue;
};

const createSlider = () => {
  noUiSlider.create(sliderElement, {
    range: {
      min: defaultEffect.min,
      max: defaultEffect.max
    },
    step: defaultEffect.step,
    start: defaultEffect.start,
    connect: 'lower'
  });
  updateSlider();
};

createSlider();
sliderElement.noUiSlider.on('update', onSliderUpdate);
form.addEventListener('change', onFormChange);

const resetEffects = () => {
  chosenEffect = defaultEffect;
  updateSlider();
};

export {resetEffects};
