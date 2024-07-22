const imageContainerE1 = document.querySelector(".pic-container");
i = 6;

function addNewImages() {
  for (let index = 0; index < 9; index++) {
    const newImgE1 = document.createElement("img");
    newImgE1.src = `https://picsum.photos/300?random=${++i}`
    console.log(i);
    imageContainerE1.appendChild(newImgE1);
  }
}

window.onscroll = ()=>{
  const {scrollTop, clientHeight, scrollHeight} = document.documentElement;
  if (scrollTop + clientHeight + 1 >= scrollHeight) {
    addNewImages();
  }
}