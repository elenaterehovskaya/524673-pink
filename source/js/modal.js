var form = document.querySelector(".feedback__form");
var surName = form.querySelector("[name=surname]");
var userName = form.querySelector("[name=username]");
var email = form.querySelector("[name=email]");

var openError = document.querySelector(".modal-feedback--error");
var openSent = document.querySelector(".modal-feedback--sent");
var closeError = openError.querySelector(".modal-feedback__button");
var closeSent = openSent.querySelector(".modal-feedback__button");

form.addEventListener("submit", function (evt) {
  if (!surName.value || !userName.value || !email.value) {
    evt.preventDefault();
    openError.classList.add("modal-feedback--show");
    surName.classList.add("form-info__input--error");
    userName.classList.add("form-info__input--error");
    email.classList.add("form-info__input--error");
  } else {
    openSent.classList.add("modal-feedback--show");
  }
});

closeError.addEventListener("click", function (evt) {
  evt.preventDefault();
  openError.classList.remove("modal-feedback--show");
});

closeSent.addEventListener("click", function (evt) {
  evt.preventDefault();
  openSent.classList.remove("modal-feedback--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (openError.classList.contains("modal-feedback--show")) {
      evt.preventDefault();
      openError.classList.remove("modal-feedback--show");
    }
    if (openSent.classList.contains("modal-feedback--show")) {
      evt.preventDefault();
      openSent.classList.remove("modal-feedback--show");
    }
  }
});
