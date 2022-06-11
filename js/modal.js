'use-strict'

let isStorageSupport = true;
let storage = "";

// Локальное хранилище (start)
try {
  storage = localStorage.getItem("localStorageForm");
} catch (err) {
  isStorageSupport = false;
}
// Локальное хранилище (end)

var changeHidden = document.querySelector(".interesting__btn-search");
var popup = document.querySelector(".modal");
var modalAdults = document.querySelector(".modal__adults");
var modalChildren = document.querySelector(".modal__children");
var modalButton = document.querySelector(".modal__container-button");
var modalForm = document.querySelector(".modal__form");

// Открытие формы по нажатию кнопки (start)
changeHidden.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-hidden");

  if (storage) {
    modalAdults.value = storage;
    modalChildren.value = storage;
    modalButton.focus();
  } else {
    popup.focus();
  }
});
// Открытие формы по нажатию кнопки (end)

// Валидация формы (start)
modalForm.addEventListener("submit", function (evt) {
  if (!modalAdults.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");

    modalAdults.classList.remove("modal-error-data");
    modalAdults.offsetWidth = popup.offsetWidth;
    modalAdults.classList.add("modal-error-data");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("Количество взрослых:", modalAdults.value);

      modalAdults.classList.add("modal-error-data");
      modalAdults.offsetWidth = popup.offsetWidth;
      modalAdults.classList.remove("modal-error-data");
    }
  }
});

modalForm.addEventListener("submit", function (evt) {
  if (!modalChildren.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");

    modalChildren.classList.remove("modal-error-data");
    modalChildren.offsetWidth = popup.offsetWidth;
    modalChildren.classList.add("modal-error-data");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("Количество детей:", modalChildren.value);

      modalChildren.classList.add("modal-error-data");
      modalChildren.offsetWidth = popup.offsetWidth;
      modalChildren.classList.remove("modal-error-data");
    }
  }
});
// Валидация формы (end)

// Закрытие модального окна по нажатию клавиши Esc (start)
popup.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal")) {
      evt.preventDefault();
      popup.focus();
      popup.classList.add("modal-hidden");
      popup.classList.remove("modal-error");
    }
  }
});
// Закрытие модального окна по нажатию клавиши Esc (end)
