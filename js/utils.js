const ESCAPE_BUTTON = 'Escape';
const ALERT_SHOW_TIME = 10000;

// Данная функция проверяет нажималась кнопка Escape или нет. Если нажималась кнопка Escape возвращет тру.
const isEscapeKey = (evt) => evt.key === ESCAPE_BUTTON;


// Данная функция показывает баннер с текстом оишбки
const showLoadError = (message) => {
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


export{isEscapeKey, showLoadError};
