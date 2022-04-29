let count = 4;
const navList = document.querySelectorAll(".banner-navigation__input");
navList.forEach((element, index) => {
  element.addEventListener("click", (e) => {
    count = index + 1;
  });
});
document.getElementById("radio3").checked = true;
setInterval(function () {
  document.getElementById("radio" + count).checked = true;
  count++;
  if (count > 5) count = 1;
}, 3000);
