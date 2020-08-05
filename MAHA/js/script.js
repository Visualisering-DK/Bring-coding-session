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

// Håndtering af "næste sektion-knap"
// For hver sektion, skab og indsæt knap
const sections = document.querySelectorAll("section");
sections.forEach((section, index) => {
  const nextSection = document.createElement("span");
  nextSection.classList.add("nextSection");
  const arrow = document.createElement("img");
  arrow.src =
    "http://www.myiconfinder.com/uploads/iconsets/20-20-7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png";
  // Alle pile på nær den sidste skal vende ned (roteres 90 deg)
  if (index !== sections.length - 1) {
    arrow.classList.add("downArrow");
  } else {
    arrow.classList.add("upArrow");
  }

  nextSection.appendChild(arrow);
  // Nu er pil lavet og indsat, nu skal der tilføjes eventlistener:
  nextSection.addEventListener("click", () => {
    // Den sidste pil skal scrolle til top-section
    if (index === sections.length - 1) {
      sections[0].scrollIntoView({ behavior: "smooth" });
    } else {
      // Alle andre pile skal til næste section
      sections[index + 1].scrollIntoView({ behavior: "smooth" });
    }
  });
  section.appendChild(nextSection);
});
