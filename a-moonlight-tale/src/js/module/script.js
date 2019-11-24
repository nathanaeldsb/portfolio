/*A Night Walk JS*/
// PARCHMENT SECTION

function displayChange() {
  this.style.display = "none";
  document.querySelector(".container__close").style.display = "inline";
  document.getElementById("description").style.display = "block";
  closeNav();
}

function closedescription() {
  this.style.display = "none";
  document.querySelector(".container__open").style.display = "inline";
  document.getElementById("description").style.display = "none";
}

document
  .querySelector(".container__open")
  .addEventListener("click", displayChange);

document
  .querySelector(".container__close")
  .addEventListener("click", closedescription);

// NAVBAR NAVBAR MENU

function openMenu() {
  document.querySelector(".nav").classList.add("is-active");
  closeMenuModal();
}

function closeMenu() {
  document.querySelector(".nav").classList.remove("is-active");
}

document.querySelector(".nav__open").addEventListener("click", openMenu);

document.querySelector(".nav__close").addEventListener("click", closeMenu);

// OPEN CLOSE LOGIN MODAL

function openLoginModal() {
  document.querySelector(".modal__wrapper").classList.add("is-active");
  closeNav();
}

function closeLoginModal() {
  document.querySelector(".modal__wrapper").classList.remove("is-active");
}

document
  .querySelector(".nav__item--enter")
  .addEventListener("click", openLoginModal);

document
  .querySelector(".modal__close")
  .addEventListener("click", closeLoginModal);

// OPEN CLOSE ABOUT THE PROJECT MODAL

function openAboutModal() {
  document.querySelector(".aboutcontainer").classList.add("is-active");
  closeNav();
}

function closeAboutModal() {
  document.querySelector(".aboutcontainer").classList.remove("is-active");
}

document
  .querySelector(".nav__item--about")
  .addEventListener("click", openAboutModal);

document
  .querySelector(".aboutcontainer__close")
  .addEventListener("click", closeAboutModal);

// OPEN CLOSE CONTACT MODAL

function openContactModal() {
  document.querySelector(".contactmodal__wrapper").classList.add("is-active");
  closeNav();
}

function closeContactModal() {
  document
    .querySelector(".contactmodal__wrapper")
    .classList.remove("is-active");
}

document
  .querySelector(".nav__item--contact")
  .addEventListener("click", openContactModal);

document
  .querySelector(".contactmodal__close")
  .addEventListener("click", closeContactModal);

//CLOSE ALL OTHER MODAL ON CLICK

function closeNav() {
  document.querySelector(".nav").classList.remove("is-active");
}

//CLOSE MENU-MODAL

function closeMenuModal() {
  var menuModalList = document.querySelectorAll(".menu-modal");

  for (var menuModal of menuModalList) {
    menuModal.classList.remove("is-active");
  }
}

// PRELOADER JS START

setTimeout(loaded, 27000);

function loaded() {
  document.querySelector(".loader").classList.add("is-finished");
}

// PRELOADER JS END
