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

const escapeButton = 'Escape';
const isEscapeKey = (evt) => evt.key === escapeButton;


export{getRandomPositiveNumber, isEscapeKey};
