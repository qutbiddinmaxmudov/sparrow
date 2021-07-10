// Header navigation menu
const navToggler: HTMLButtonElement = document.querySelector(
  ".header__nav-toggler"
);
const navMenu: HTMLUListElement = document.querySelector(".header__list");
let navOpened: boolean = false;
const navToggle = (): void => {
  navToggler.classList.toggle("open");
  navMenu.classList.toggle("open");
  navOpened = !navOpened;
};

navToggler.onclick = navToggle;

window.onclick = (event) => {
  if (
    !event.path.includes(navMenu) &&
    navOpened &&
    !event.path.includes(navToggler)
  )
    navToggle();
};

// Random stars generator
const random = (max: number, min: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min);

const starNum = random(50, 20);

for (let i = 0; i < starNum; i++) {
  const star: HTMLSpanElement = window.document.createElement("span");
  const starSize = random(10, 3) + "px";
  const starTop = random(100, 0) + "%";
  const starLeft = random(100, 0) + "%";
  star.classList.add("star");
  star.style.height = starSize;
  star.style.width = starSize;
  star.style.top = starTop;
  star.style.left = starLeft;
  star.style.animationDelay = random(3000, 0) + "ms";
  star.style.animationDuration = random(5000, 3000) + "ms";
  window.document.body.append(star);
}

const contactBg = document.querySelector(".contact__bg");

if (contactBg) {
  document.body.append(contactBg);
  document.body.style.position = "relative";
}

const category: NodeListOf<SVGElement> = document.querySelectorAll(
  ".cube"
);
const randomColorGenerator = () => {
  const r = random(255, 0);
  const g = random(255, 0);
  const b = random(255, 0);
  return `rgb(${r},${g},${b})`;
};
category.forEach((item) => {
  const topSide: SVGPathElement = item.querySelector(".cube__top");
  const leftSide: SVGPathElement = item.querySelector(".cube__left");
  const rightSide: SVGPathElement = item.querySelector(".cube__right");
  topSide.style.fill = randomColorGenerator();
  leftSide.style.fill = randomColorGenerator();
  rightSide.style.fill = randomColorGenerator();
});
