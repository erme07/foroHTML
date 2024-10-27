const header = document.querySelector(".header")

const img1 = 'url("https://raw.githubusercontent.com/erme07/foroHTML/master/img/head/head_1.jpg")';
const img2 = 'url("https://raw.githubusercontent.com/erme07/foroHTML/master/img/head/head_2.jpg")';
const img3 = 'url("https://raw.githubusercontent.com/erme07/foroHTML/master/img/head/head_3.jpg")';
const img4 = 'url("https://raw.githubusercontent.com/erme07/foroHTML/master/img/head/head_4.jpg")';

const patterns = [img1, img2, img3, img4]

const aleatorio = (inferior = 0, superior = 3) => {
  let numPosibilidades = superior - inferior;
  let aleatorio = Math.random() * (numPosibilidades + 1);
  aleatorio = Math.floor(aleatorio);
  return inferior + aleatorio;
}
header.style.backgroundImage = patterns[aleatorio()];

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("toTheTop"))
    scrollTo(0, 0);
})