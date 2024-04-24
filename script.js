"use strict mode";
const btn = document.querySelector(".btn");
const email = document.querySelector(".email");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const modalDismisbtn = document.querySelector(".modaldismiss");
const errorMessage = document.querySelector(".error");
const emailConfirmation = document.querySelector(".emaildisplay");

const closeModal = () => {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};
const handleClickListenner = (e) => {
  e.preventDefault();
  const validEmail = email.value.includes("@");

  if (!validEmail) {
    errorMessage.textContent = "Email must contain @ symbol";
  } else if (email.value.isempty) {
    errorMessage.textContent = "Please enter your email";
    email.style.bordercolor = "#fff";
  } else {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
    emailConfirmation.textContent = email.value;
  }
};
btn.addEventListener("click", handleClickListenner);

modalDismisbtn.addEventListener("click", closeModal);
