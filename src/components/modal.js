export {openModalWindow, closeModalWindow, closePopap}
import {editModal, windowAddCard} from '../index.js';

// функция открытия модального окна
function openModalWindow(element) {
  element.classList.add('popup_is-opened')
  element.classList.add('popup_is-animated')
}

//функция, которая навешивает на попап обработчик (для того, чтобы на все кнопки работало закрытие по кнопке)
function closePopap(popup) {
  const closeBtn = popup.querySelector('.popup__close')
  closeBtn.addEventListener('click', function(evt) {
    closeModalWindow(popup)
  })
 };

 // функция закрытия модального окна
function closeModalWindow(element) {
  element.classList.remove('popup_is-opened')
}

// обработчик закрытия модальных окон при клике по оверлею
document.addEventListener('click', function(evt) {
  if (evt.target === editModal || evt.target === windowAddCard) {
    closeModalWindow(editModal)
    closeModalWindow(windowAddCard)
  }
});

//обработчик закрытия модальных окон при нажатии escape
document.addEventListener('keydown', function(evt) {
  if (evt.key === 'Escape') {
    closeModalWindow(editModal),
    closeModalWindow(windowAddCard)
  }
});