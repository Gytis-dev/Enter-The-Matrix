import { test } from "./main.js";

const text = "The matrix has you...";
const body = document.querySelector("body");
const p = document.createElement("p");

let counter = 0;
const textLength = text.length;

export const showText = () => {
  let time = null;

  const call = () => {
    if (counter < textLength) {
      time = setTimeout(() => {
        p.innerHTML += text[counter];
        counter++;
        body.appendChild(p);

        call();
      }, 50);
    } else {
      setTimeout(() => {
        clearTimeout(time);
        p.remove();
        test();
      }, 2000);
    }
  };
  call();
};
