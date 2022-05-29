'use-strict'

var changeHidden = document.querySelector(".interesting__btn-search");
var popup = document.querySelector(".modal");

changeHidden.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-hidden");
});
