import { randomChar } from "../helpers/randomChar.js";

const body = document.querySelector("body");
const root = document.createElement("div");
const p = document.createElement("p");

let counter = 0;
let timer = null;
const length = 500;
let time = null;

const call = () => {
  root.style.cssText =
    "height:auto; width: 80%; word-wrap: break-word; margin-left: auto; margin-right: auto; margin-top: 100px;text-align: justify;text-justify: inter-word;";

  const time = () => {
    if (counter < length) {
      timer = setTimeout(() => {
        p.innerHTML += randomChar(10);
        counter++;
        time();
      });
    } else clearTimeout(timer);
  };
  time();
};

export const test = () => {
  call();
};

body.appendChild(root);
root.appendChild(p);
