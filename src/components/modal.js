export {openModalWindow, closeModalWindow, closePopapOnButton, closePopupOnOverlay}
// import {editModal, windowAddCard, imgModalWindow} from '../index.js';

// функция открытия модального окна
function openModalWindow(element) {
  element.classList.add('popup_is-opened')
  element.classList.add('popup_is-animated')
  document.addEventListener('keydown', closePopupEsc);
}

//функция, которая навешивает на попап обработчик (для того, чтобы на все кнопки работало закрытие по кнопке)
function closePopapOnButton(popup) {
  const closeBtn = popup.querySelector('.popup__close')
  closeBtn.addEventListener('click', function(evt) {
    closeModalWindow(popup)
  })
 };

 // функция закрытия модального окна
function closeModalWindow(element) {
  element.classList.remove('popup_is-opened')
  document.removeEventListener('keydown', closePopupEsc);
}

//функция закрытия модального окна при нажатии escape
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopups = document.querySelector('.popup_is-opened');
    closeModalWindow(openedPopups);
  }
};

//функция обработчик закрытия модальных окон по оверлею ПРОБА
function closePopupOnOverlay(popup) {
  popup.addEventListener('click', function(evt) {
    if (evt.target.classList.contains('popup_is-opened')) {
      closeModalWindow(popup);
    }
  })
};