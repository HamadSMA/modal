"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnOpenModal = document.querySelectorAll(".show-modal");

console.log(btnOpenModal);
console.log(btnCloseModal);
console.log(overlay);
console.log(modal);

const closeMoadal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let btn of btnOpenModal) {
  btn.addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeMoadal);
overlay.addEventListener("click", closeMoadal);
