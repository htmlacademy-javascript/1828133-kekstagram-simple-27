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

getRandomPositiveNumber('keks', 100);


//Данная функция проверяет максимальную длину строки. Используется для проверки длины введённого комментария.
function checkStringLength(string, length) {
  return string.length <= length;
}

checkStringLength('', 140);


const dataArray = [];
const numberElemets = 25;


const id = [];
const fillId = function () {
  for (let i = 1; i <= numberElemets; i++) {
    id.push(i);
  }
};

fillId();
// console.log(id);

const url = [];
const fillUrl = function() {
  for(let i = 1; i <= numberElemets; i++) {
    url.push(`photos/${ i }.jpg`);
  }
};

fillUrl();
// console.log(url);


const description = [
  'Наступило бабье лето —',
  'Дни прощального тепла.',
  'Поздним солнцем отогрета,',
  'В щелке муха ожила.',

  'Солнце! Что на свете краше',
  'После зябкого денька?..',
  'Паутинок легких пряжа',
  'Обвилась вокруг сучка.',

  'Завтра хлынет дождик быстрый,',
  'Тучей солнце заслоня.',
  'Паутинкам серебристым',
  'Жить осталось два-три дня.',

  'Сжалься, осень! Дай нам света!',
  'Защити от зимней тьмы!',
  'Пожалей нас, бабье лето:',
  'Паутинки эти — мы.',
];

const createObject = function () {
  const j = getRandomPositiveNumber(0, id.length - 1);
  //тут ввожу ещё одну случайную переменную k, чтобы не было совпадения id и url
  const k = getRandomPositiveNumber(0, url.length - 1);
  // console.log('j равно ' + j);
  // console.log('k равно ' + j);
  // console.log('массив до сплайса выглядит вот так: ' + id)
  // console.log('длина массива до сплайса равна ' + id.length)
  const object = {
    id: id[j],
    url: url[k],
    likes: getRandomPositiveNumber(15, 200),
    comments: getRandomPositiveNumber(0, 200),
    description: description[getRandomPositiveNumber(0, description.length - 1)]
  };
  id.splice(j, 1);
  url.splice(k, 1);
  // console.log('массив после сплайса выглядит вот так: ' + id)
  // console.log('длина массива после сплайса равна ' + id.length)
  return object;
};

const createAnotherObjects = function () {
  for (let i = 0; i <= numberElemets - 1; i++) {
    dataArray.push(createObject());
  }
  return dataArray;
};

createAnotherObjects();
// console.log(dataArray);
