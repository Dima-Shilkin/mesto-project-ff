// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(element, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardImage = cardElement.querySelector('.card__image');
  deleteButton.addEventListener('click', deleteCard);
  cardImage.src = element.link;
  cardImage.alt = element.name;
  cardElement.querySelector('.card__title').textContent = element.name;
  return cardElement;
};

// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (element) {
  const cardElement = createCard(element, deleteCard);
  placesList.append(cardElement);
});