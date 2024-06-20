import './pages/index.css';

import {initialCards} from './components/cards.js'
import {createCard, deleteCard, addLike} from './components/card.js'
import {openModalWindow, closeModalWindow, closePopap} from './components/modal.js'

export {cardTemplate, editModal, windowAddCard}

const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');
const editModal = document.querySelector('.popup_type_edit'); //модальное окно редактирования профиля
const windowAddCard = document.querySelector('.popup_type_new-card'); //модальное окно добавления карточек

const buttonEdit = document.querySelector('.profile__edit-button');//кнопка редактирования профиля 
const buttonAdd = document.querySelector('.profile__add-button');//кнопка добавления карточек (+)
const closeButton = document.querySelectorAll('.popup__close'); //кнопка закрытия модального окна редактирования профиля
const profileTitle = document.querySelector('.profile__title'); // находим Имя на странице
const profileDescription = document.querySelector('.profile__description'); // находим род деятельности на странице

const formElement = document.forms['edit-profile'];//находим форму редактирования профиля
const nameInput = formElement.elements.name; // находим элемент формы Имя
const jobInput = formElement.elements.description; // находим элемент формы Занятие

const formElementCard = document.forms['new-place'];//находим форму добавления карточек
const linkInput = formElementCard.elements.link; // находим в этой форме инпут Название
const placeNameInput = formElementCard.elements['place-name'] // находим в этой форме инпут Ссылка на картинку

initialCards.forEach(function (element) {
  const cardElement = createCard(element, deleteCard, addLike);
  placesList.append(cardElement);
});

// обработчик кнопки открытия модального окна редактирования профиля
buttonEdit.addEventListener('click', function(evt) {
  nameInput.value = profileTitle.textContent; // эта и нижняя строчка автоматически заполняют элемнт формы значениями
  jobInput.value = profileDescription.textContent; // которые отображаются на странице
  openModalWindow(editModal);
 });

 //обработчик кнопки открытия модального окна с добавлением карточек
buttonAdd.addEventListener('click', function(evt) {
  openModalWindow(windowAddCard)
});

// вызов функции, которая навешивает на попам обработчик кнопки закрытия
closePopap(editModal);
closePopap(windowAddCard);

// функция обработчик события submit для отправки формы (чтобы изменить имя и род деятельности)
function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameInputValue = nameInput.value;
  const jobInputValue = jobInput.value;

  profileTitle.textContent = nameInputValue;
  profileDescription.textContent = jobInputValue;

  closeModalWindow(editModal);
 }

// функция обработчик события submit для добавления карточек
function addCardFormSubmit(evt) {
  evt.preventDefault();
  const element = {
    link: linkInput.value,
    name: placeNameInput.value 
  }
  const cardCreate = createCard(element, deleteCard, addLike);
  placesList.append(cardCreate);
  formElementCard.reset(); // обнуление формы
  closeModalWindow(windowAddCard);
}

formElement.addEventListener('submit', handleFormSubmit);
formElementCard.addEventListener('submit',addCardFormSubmit);

// функция открытия модального окна
//  const imgModalWindow = document.querySelector('.popup_type_image')
//  function openModalImg(evt) {
//   openModalWindow(imgModalWindow)
//  }