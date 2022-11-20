import { isEscapeKey } from './utils.js';

const body = document.querySelector('body');

let currentMessage = '';

const closeMessage = () => {
  const banner = document.querySelector(`.${currentMessage}`);
  if (!banner) {
    return;
  }
  const closeButton = banner.querySelector(`.${currentMessage}__button`);
  document.body.removeChild(banner);
  closeButton.removeEventListener('click', onCloseButtonClick);
  document.removeEventListener('keydown', onDocumentKeydown);
  banner.removeEventListener('click', onBannerBackClick);
};

// Тут сделал функцию а не конст, чтобы "всплыла наверх в closeSuccessMessage"
function onDocumentKeydown (evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeMessage();
  }
}

function onCloseButtonClick () {
  closeMessage();
}

function onBannerBackClick (evt) {
  if (evt.target.classList.contains(currentMessage)) {
    closeMessage();
  }
}

const showMessage = (messageType) => {
  currentMessage = messageType;
  const uploadTemplate = document.querySelector(`#${currentMessage}`).content.querySelector(`.${currentMessage}`);
  const uploadMessage = uploadTemplate.cloneNode(true);
  body.appendChild(uploadMessage);
  const closeButton = uploadMessage.querySelector(`.${currentMessage}__button`);
  closeButton.addEventListener('click', onCloseButtonClick);
  document.addEventListener('keydown', onDocumentKeydown);
  uploadMessage.addEventListener('click', onBannerBackClick);
};

export {showMessage};
