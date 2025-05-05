// Imagens do slideshow
const images = [
  "img1.jpg.jpg",
  "img2.jpg.jpg",
  "img3.jpg.jpg",
  "img4.jpg.jpg",
  "img5.jpg.jpg",
  "img6.jpg.jpg",
  "img7.jpg.jpg",
  "img8.jpg.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
}, 3000); // troca a cada 3 segundos

// Chuva de coração
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  document.querySelector(".emoji-rain").appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

setInterval(createHeart, 200);
