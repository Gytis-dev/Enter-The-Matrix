import { test } from "./main.js";

const text = "The matrix has you...";
const body = document.querySelector("body");
const p = document.createElement("p");

let counter = 0;
const textLength = text.length;
let time = null;

export const showText = () => {
  const call = () => {
    if (counter < textLength) {
      time = setTimeout(() => {
        p.innerHTML += text[counter];
        counter++;

        call();
      }, 50);
    } else {
      clearTimeout(time);
      setTimeout(() => {
        p.remove();
        test();
      }, 2000);
    }
  };
  call();
};

body.appendChild(p);
