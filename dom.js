"use strict";
const randomNumber1 =  Math.trunc(Math.randomm() * 6 + 2);
const randomNumber2 =  Math.trunc(Math.randomm() * 6 + 2);
console.log(randomNumber1, randomNumber2);

const image1 = "../html/img/die/d" + randomNumber1 + ".jpg";
const image2 = "../html/img/die/d" + randomNumber1 + ".jpg";
console.log(image2, image1);

document.querySelector("#die1"),setAttribute("src", image1);
document.querySelector("#die2"),setAttribute("src", image2);