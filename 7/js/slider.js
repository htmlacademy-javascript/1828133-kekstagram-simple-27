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

noUiSlider.create(effectSlider, {
  range: {
    min: 0,
    max: 100,
  },
  start: 50,
  step: 1,
  connect: 'lower',
});

effectSlider.noUiSlider.on('update', () => {
//   Если раскомментировать эти строки, удобно наблюдать за численным значением в окошке
//   effectValue .style.display = 'block';
//   effectValue .style.color = 'black';
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

effectSlider.classList.add('hidden');

const showSlider = () => {
  effectSlider.classList.remove('hidden');
};


buttonEffectNone.addEventListener('click', () => {
  effectSlider.classList.add('hidden');
  trueImg .style.filter = 'unset';
});

buttonEffectChrome.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0.5,
    step: 0.1,
  });
  trueImg .style.filter = `grayscale(${0.5})`;
});

buttonEffectSepia.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 1,
    },
    start: 0.5,
    step: 0.1,
  });
  trueImg .style.filter = `sepia(${0.5})`;
});

buttonEffectMarvin.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 100,
    },
    start: 90,
    step: 1,
  });
  trueImg .style.filter = `invert(${0.9})`;
});

buttonEffectPhobos.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 0,
      max: 3,
    },
    start: 1.5,
    step: 0.1,
  });
  trueImg .style.filter = `blur(${1.5})`;
});

buttonEffectHeat.addEventListener('click', () => {
  showSlider();
  effectSlider.noUiSlider.updateOptions({
    range: {
      min: 1,
      max: 3,
    },
    start: 2,
    step: 0.1,
  });
});

