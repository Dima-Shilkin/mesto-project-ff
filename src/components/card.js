export {createCard, deleteCard, addLike}

import {cardTemplate} from '../index.js';

function createCard(element, deleteCard, addLike, openModalImg) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  const likeBtn = cardElement.querySelector('.card__like-button')
  likeBtn.addEventListener('click', addLike)
  deleteButton.addEventListener('click', deleteCard);
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardElement.querySelector('.card__title').textContent = element.name;
  cardImage.addEventListener('click', () => {
    openModalImg(element.link, element.name)
  });
  return cardElement;
};

//функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

//функция добавления лайка 
function addLike(evt) {
  evt.target.classList.toggle('card__like-button_is-active')
}

