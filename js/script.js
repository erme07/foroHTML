const header = document.querySelector(".header")

const img1 = "url(../img/head/head_1.jpg)";
const img2 = "url(../img/head/head_2.jpg)";
const img3 = "url(../img/head/head_3.jpg)";
const img4 = "url(../img/head/head_4.jpg)";

const patterns = [img1, img2, img3, img4]

const aleatorio = (inferior = 0, superior = 3) => {
  let numPosibilidades = superior - inferior;
  let aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return inferior + aleatorio;
}
header.style.backgroundImage = patterns[aleatorio()];