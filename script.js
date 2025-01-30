const $ = document;
const firstColorInput = $.querySelector("#color-a");
const secondColorInput = $.querySelector("#color-b");
const directions = $.querySelectorAll(".buttons button");
const generateBtn = $.querySelector("#submit");
const codeTextarea = $.querySelector("#code");
const copyBtn = $.querySelector("#copy");

let currentDirection = "to bottom";

const setDirection = (direction, directionElem) => {
  for (let item of directions) {
    item.classList.remove("active");
  }

  if (directionElem.tagName === "BUTTON") {
    directionElem.classList.add("active");
  } else {
    directionElem.parentElement.classList.add("active");
  }

  currentDirection = direction;
};

const genrateCssCode = () => {
  let cssCode = `background :linear-gradient(${currentDirection},${firstColorInput.value},${secondColorInput.value})`;

  codeTextarea.value = cssCode;

  document.body.style.cssText = cssCode;
};

const copyCssCode = () => {
  codeTextarea.select();
  document.execCommand("copy");

  alert('Css Code Copied 😊')
};

directions.forEach((direction) => {
  direction.addEventListener("click", (event) => {
    let direction = event.target.dataset.direction;
    setDirection(direction, event.target);
  });
});

generateBtn.addEventListener('click', genrateCssCode)
copyBtn.addEventListener('click', copyCssCode)

genrateCssCode();
