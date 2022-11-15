// import { getRandomPositiveNumber } from './utils.js';

// const dataArray = [];
// const numberElemets = 25;


// const id = [];
// const fillId = () => {
//   for (let i = 1; i <= numberElemets; i++) {
//     id.push(i);
//   }
// };

// fillId();

// const url = [];
// const fillUrl = () => {
//   for(let i = 1; i <= numberElemets; i++) {
//     url.push(`photos/${ i }.jpg`);
//   }
// };

// fillUrl();


// const description = [
//   'Наступило бабье лето —',
//   'Дни прощального тепла.',
//   'Поздним солнцем отогрета,',
//   'В щелке муха ожила.',

//   'Солнце! Что на свете краше',
//   'После зябкого денька?..',
//   'Паутинок легких пряжа',
//   'Обвилась вокруг сучка.',

//   'Завтра хлынет дождик быстрый,',
//   'Тучей солнце заслоня.',
//   'Паутинкам серебристым',
//   'Жить осталось два-три дня.',

//   'Сжалься, осень! Дай нам света!',
//   'Защити от зимней тьмы!',
//   'Пожалей нас, бабье лето:',
//   'Паутинки эти — мы.',
// ];

// const createObject = () => {
//   const j = getRandomPositiveNumber(0, id.length - 1);
//   const k = getRandomPositiveNumber(0, url.length - 1);
//   const object = {
//     id: id[j],
//     url: url[k],
//     likes: getRandomPositiveNumber(15, 200),
//     comments: getRandomPositiveNumber(0, 200),
//     description: description[getRandomPositiveNumber(0, description.length - 1)]
//   };
//   id.splice(j, 1);
//   url.splice(k, 1);
//   return object;
// };

// const createAnotherObjects = () => {
//   for (let i = 0; i <= numberElemets - 1; i++) {
//     dataArray.push(createObject());
//   }
//   return dataArray;
// };

// export {createAnotherObjects};


