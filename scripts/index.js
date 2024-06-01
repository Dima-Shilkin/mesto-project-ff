// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(element, deleteCard) {
  let cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', deleteCard);
  cardElement.querySelector('.card__image').src = element.link;
  cardElement.querySelector('.card__image').alt = element.name;
  cardElement.querySelector('.card__title').textContent = element.name;
  return cardElement;
};

// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.places__item').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
  const cardElement = createCard(element, deleteCard);
  placesList.append(cardElement);
});