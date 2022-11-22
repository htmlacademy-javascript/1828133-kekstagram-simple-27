import './thumb-picture.js';
import './form.js';
import {renderPhotos} from './thumb-picture.js';
import {showLoadError} from './utils.js';

fetch('https://27.javascript.pages.academy/kekstagram-simple/data')
  .then((response) => {
    if (response.ok) {
      return response;
    }
    throw new Error(`${response.status} — ${response.statusText}`);
  })
  .then((response) => response.json())
  .then((photos) => {
    renderPhotos(photos);
  })
  .catch((error) => {
    showLoadError(error);
  });
