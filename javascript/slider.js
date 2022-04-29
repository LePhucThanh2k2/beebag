const imgFeature = document.querySelectorAll(".assess-image");
const listImage = document.querySelectorAll(".assess-item img");
const upBtn = document.querySelector(".assess-control__up");
const downBtn = document.querySelector(".assess-control__down");
let idxOne = 0;
let idxTwo = 1;
let idxThree = 2;
function updateImageByIndex(idxOne, idxTwo, idxThree) {
  console.log(idxOne, idxTwo, idxThree);

  let one = idxOne;
  let two = idxTwo;
  let three = idxThree;
  imgFeature[0].src = listImage[one].getAttribute("src");
  imgFeature[1].src = listImage[two].getAttribute("src");
  imgFeature[2].src = listImage[three].getAttribute("src");
}

// handle button up
upBtn.addEventListener("click", (e) => {
  if (idxOne === listImage.length - 1) {
    idxOne = 0;
  } else {
    idxOne++;
  }
  if (idxTwo === listImage.length - 1) {
    idxTwo = 0;
  } else {
    idxTwo++;
  }
  if (idxThree === listImage.length - 1) {
    idxThree = 0;
  } else {
    idxThree++;
  }
  updateImageByIndex(idxOne, idxTwo, idxThree);
});

// handle button down
downBtn.addEventListener("click", (e) => {
  if (idxOne === 0) {
    idxOne = listImage.length - 1;
  } else {
    idxOne--;
  }
  if (idxTwo === 0) {
    idxTwo = listImage.length - 1;
  } else {
    idxTwo--;
  }
  if (idxThree === 0) {
    idxThree = listImage.length - 1;
  } else {
    idxThree--;
  }
  updateImageByIndex(idxOne, idxTwo, idxThree);
});

//initialization
updateImageByIndex(idxOne, idxTwo, idxThree);
