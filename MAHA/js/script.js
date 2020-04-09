const nav = document.querySelector("nav");
const navBtn = document.querySelector(".menuBtn");

navBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// // Fang overskrift i header og lav den til et array med chars
let heroH2 = document.querySelector(".hero h2");
const heroH2Array = heroH2.innerHTML.split("");
let heroH2ArrayNodes = [];
// Lav hver enkelt tegn om til en span - de tomme, skal have et "space-tegn" i sig &nbsp;
heroH2Array.forEach((letter, index) => {
  const newSpan = document.createElement("span");
  newSpan.innerText = letter;
  if (letter == " ") {
    newSpan.innerHTML = "&nbsp";
  }
  //   Indsæt animation-navn og delay - resten af animationsstyles er i .css
  newSpan.style.animationName = "heroH2";
  newSpan.style.animationDelay = `${index * 0.1}s`;
  heroH2ArrayNodes.push(newSpan);
});

heroH2.innerHTML = "";
// console.log("heroH2ArrayNodes:", heroH2ArrayNodes);
heroH2ArrayNodes.forEach((letter) => {
  document.querySelector(".hero h2").appendChild(letter);
});

// heroH2.forEach((letter, index) => {
//   letter.style.animationName = "heroH2";
//   letter.style.animationDelay = 0.1 * index + "s";
// });
