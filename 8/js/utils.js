const ESCAPE_BUTTON = 'Escape';
const ALERT_SHOW_TIME = 10000;

// Данная функция возвращаает случайное целое число из переданного диапазона включительно. Аргументами функции могут быть только положительные числа и ноль. Если функции ввести не числа(неправильные аргументы), она должна вернёт NaN
function getRandomPositiveNumber(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    return NaN;
  }

  // Метод Math.min() возвращает наименьшее из нуля или более чисел.
  // Метод Math.max() возвращает наибольшее из нуля или более чисел.
  // Метод Math.ceil() - округление вверх. Округляет аргумент до ближайшего большего целого.
  // Метод Math.floor() - округление вниз. Округляет аргумент до ближайшего меньшего целого.
  // Метод Math.random() возвращает псевдослучайное число с плавающей запятой из диапазона [0, 1)

  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const results = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(results);
}

//Данная функция проверяет максимальную длину строки. Используется для проверки длины введённого комментария.
function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('', 140);

// Данная функция проверяет нажималась кнопка Escape или нет. Если нажималась кнопка Escape возвращет тру.


const isEscapeKey = (evt) => evt.key === ESCAPE_BUTTON;

const showloadError = (message) => {
  const alertContainer = document.createElement('div');
  const alertAdvice = document.createElement('p');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  alertAdvice.textContent = 'Попробуйте перезагрузить страницу. >_____<';
  document.body.append(alertContainer);
  alertContainer.append(alertAdvice);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};


export{getRandomPositiveNumber, isEscapeKey, showloadError};
