import { showText } from "./intro.js";
import { screeningLetters } from "../helpers/symbols.js";
import { h1, parentDiv, body, elements, div } from "../helpers/domElements.js";

// Word to display
const result = "WAKE UP NEO";

// Typer status
let isTyping = false;

// counters and time functions for timeout clearance
let textChangeTimeOut = null;
let typerTimeOut = null;
let counter = 0;
let currentLetter = 0;

// Display initial text
for (let i = 0; i < result.length; i++) {
  if (result[i] === " ") {
    parentDiv.innerHTML += `<span style = "padding:5px"/>`;
  }
  parentDiv.innerHTML += `<h1>${result[i]}</h1>`;
}

// Display Typer
const handleBlockDisplay = () => {
  typerTimeOut = () =>
    setTimeout(() => {
      isTyping = !isTyping;

      if (isTyping) {
        div.classList.remove("blocknot");
        div.classList.add("block");
      } else {
        div.classList.remove("block");
        div.classList.add("blocknot");
      }
      handleBlockDisplay();
    }, 600);
  typerTimeOut();
};

const handleTextChange = () => {
  textChangeTimeOut = () =>
    setTimeout(() => {
      if (screeningLetters[counter] != result[currentLetter]) {
        elements[currentLetter].innerHTML = screeningLetters[counter];
        counter++;
      } else {
        if (currentLetter < result.length) {
          elements[currentLetter].innerHTML = screeningLetters[counter];
          elements[currentLetter].classList.add("good");
          counter = 0;
          currentLetter++;
        }
      }
      if (currentLetter === result.length) {
        setTimeout(() => {
          for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
          }
          parentDiv.remove();
          div.remove();
          clearTimeout(typerTimeOut);
          showText();
        }, 2000);
      }
      textChangeTimeOut();
    }, 10);
  textChangeTimeOut();
};

handleTextChange();
handleBlockDisplay();

// Append elements
parentDiv.appendChild(div);
body.appendChild(parentDiv);
