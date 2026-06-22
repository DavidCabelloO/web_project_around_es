//código JavaScript
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

const profileSelect = document.querySelector(".profile"); //Sección del perfil
const popupModal = document.querySelector("#edit-popup"); //Modal de edición del perfil
const cardTemplate = document.querySelector("#card__template"); //Template de card
const cardsContainer = document.querySelector(".cards__list"); //contenedor de cartas
const addCardButton = document.querySelector(".profile__add-button"); //agregar carta button

const addCardPopupModal = document.querySelector("#new-card-popup"); // Modal de agregar carta
const addCardCloseModalBtn = addCardPopupModal.querySelector(".popup__close"); // Boton cerrarModal de agregar carta
const cardNameInput = addCardPopupModal.querySelector(
  ".popup__input_type_card-name",
);

const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseBtn = imagePopup.querySelector(".popup__close");
const imagePopupTitle = imagePopup.querySelector(".popup__caption");
const imagePopupDisplay = imagePopup.querySelector(".popup__image");

const cardLinkInput = addCardPopupModal.querySelector(".popup__input_type_url");
const addCardForm = addCardPopupModal.querySelector("#new-card-form");

const profileEditBtn = document.querySelector(".profile__edit-button");
const profileCloseEditBtn = popupModal.querySelector(".popup__close");

const profileName = profileSelect.querySelector(".profile__title");
const profileDescription = profileSelect.querySelector(".profile__description");

const formElement = popupModal.querySelector("#edit-profile-form"); //formulario de edición de perfil
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");

function openModal(modalEl) {
  modalEl.classList.add("popup_is-opened");
}

function closeModal(modalEl) {
  modalEl.classList.remove("popup_is-opened");
}

function fillProfileForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileDescription.textContent;
}

function handleOpenEditModal() {
  openModal(popupModal);
  fillProfileForm();
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closeModal(popupModal);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardElement = getCardElement(cardNameInput.value, cardLinkInput.value);
  cardsContainer.prepend(cardElement);
  closeModal(addCardPopupModal);
}

function handleImagePopup(name, link) {
  imagePopupTitle.textContent = name;
  imagePopupDisplay.src = link;
  imagePopupDisplay.alt = name;
  openModal(imagePopup);
}

function getCardElement(name, link) {
  if (name === undefined) {
    name = "Sin título";
  }
  if (link === undefined) {
    link = "./images/placeholder.jpg";
  }
  const cardElement = cardTemplate.content.cloneNode(true); // clona el contenido del template
  const cardElementLi = cardElement.querySelector(".card"); //selecciona la tarjeta
  const cardTitle = cardElement.querySelector(".card__title"); // selecciona el título del elemento card
  const cardImage = cardElement.querySelector(".card__image"); // selecciona la imagen del elemento card
  const cardLikeBtn = cardElement.querySelector(".card__like-button"); //selecciona el boton de like
  const cardDelBtn = cardElement.querySelector(".card__delete-button"); //selecciona el boton de borrar

  cardTitle.textContent = name; // asigna la propiedad name del parámetro data -> asigna el nombre recibido como parámetro
  cardImage.src = link; // asigna los valores a las propiedades de la imagen como se indicó
  cardImage.alt = name; //un añadido para que tenga la robustez si falla la imagen

  cardLikeBtn.addEventListener("click", () =>
    cardLikeBtn.classList.toggle("card__like-button_is-active"),
  );

  cardDelBtn.addEventListener("click", () => cardElementLi.remove());

  cardImage.addEventListener("click", () => handleImagePopup(name, link));

  return cardElementLi;
}

function renderCard(name, link, container) {
  const cardElement = getCardElement(name, link);
  container.append(cardElement);
}

//De imprimir ahora añadirá las tarjetas
initialCards.forEach(function (item) {
  renderCard(item.name, item.link, cardsContainer);
});

//editar perfil
profileEditBtn.addEventListener("click", () => handleOpenEditModal());
formElement.addEventListener("submit", (evt) => handleProfileFormSubmit(evt));
profileCloseEditBtn.addEventListener("click", () => closeModal(popupModal));

//añadir tarjeta
addCardButton.addEventListener("click", () => openModal(addCardPopupModal));
addCardForm.addEventListener("submit", (evt) => handleCardFormSubmit(evt));
addCardCloseModalBtn.addEventListener("click", () =>
  closeModal(addCardPopupModal),
);

imagePopupCloseBtn.addEventListener("click", () => closeModal(imagePopup));
