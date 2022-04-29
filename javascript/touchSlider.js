const listItem = document.querySelector(".instagram-list");
let pressed = false;
let startX = 0;

listItem.addEventListener("mousedown", function (e) {
  pressed = true;
  startX = e.clientX;
  this.style.cursor = "grabbing";
});
listItem.addEventListener("mouseleave", function (e) {
  pressed = false;
});

window.addEventListener("mouseup", function (e) {
  pressed = false;
  listItem.style.cursor = "grab";
});

listItem.addEventListener("mousemove", function (e) {
  if (!pressed) return;
  this.scrollLeft += startX - e.clientX;
});
