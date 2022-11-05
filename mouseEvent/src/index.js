
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];


const title = document.querySelector("h2");
const superEventHandler = {
  OnTheMouse: function () {
    title.innerText = "The mouse is here!";
    title.style.color = colors[0];
  },
  OffTheMouse: function () {
    title.innerText = "The mouse is gone";
    title.style.color = colors[1];
  },
  ChangeTheSize: function () {
    title.innerText = "You just resized!";
    title.style.color = colors[2];
  },
  ClickTheRight: function () {
    title.innerText = "That was a right click!";
    title.style.color = colors[3];
  }
};

title.addEventListener("mouseenter", superEventHandler.OnTheMouse);
title.addEventListener("mouseleave", superEventHandler.OffTheMouse);
window.addEventListener("resize", superEventHandler.ChangeTheSize);
window.addEventListener("contextmenu", superEventHandler.ClickTheRight);
