const popupOpen = document.querySelector('.popup'); //класс для добавления и открытия попапа
const popupCloseButton = document.querySelector('.popup__close-button') //кнопка для закрытия попапа
const gridContainer = document.querySelector('.photo-grid');
const cardLink = document.querySelector('.popup__image');
console.log(cardLink.src)
function closePopup (item) {
   item.classList.remove('popup_open');
}



gridContainer.addEventListener('click', (item) => {
    console.log(item.target);
   if (item.target.classList.contains('photo-grid__item'))
   popupOpen.classList.add('popup_open');
   cardLink.src = item.target.src;

});


popupCloseButton.addEventListener('click', (item) => {
    popupOpen.classList.remove('popup_open');
});