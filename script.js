"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 11;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "WHATT BA'T MO CINANCEL( ulitin mo HAHA)";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
}
  yesButton.addEventListener("click", () => {
    const userConfirmed = confirm("click okay if u love me mweheh");
    if (userConfirmed) {
        window.location.href = "destination.html"; 
    }
    });
  


function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "ay wow",
    " ma mmiss mo ako nyan sige",
    "You're breaking my heart",
    "I'm gonna cry...",
    "NOOOoOoOoOoOOoOoO",
    " T_T ",
    "d kaba naawa sakin?",
    "paano na ako nito?",
    "imamamatay ko ata to",
    
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}