import './thumbpicture.js';
import './form.js';
import './editImage.js';
import './slider.js';
import {renderPhotos} from './thumbpicture.js';
import {showLoadError} from './utils.js';
import {setUploadFormSubmit} from './form.js';


setUploadFormSubmit();

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
