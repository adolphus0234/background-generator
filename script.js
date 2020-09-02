//Select Color by Input

const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("bg-gradient");

function setGradient() {
	body.style.background = `linear-gradient(to right, 
	${color1.value}, ${color2.value})`;

	css.textContent = `${body.style.background};`;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);


// Color Randomizer

let min = 0
let max = 255
const randomButton = document.getElementById("random-bg");

const getInteger = () => Math.floor(Math.random() 
						* (max - min)) + min;

let rgbToHex = function (rgb) { 
  let hex = Number(rgb).toString(16);
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};

let fullColorHex = function(r,g,b) {   
  let red = rgbToHex(r);
  let green = rgbToHex(g);
  let blue = rgbToHex(b);
  return '#'+red+green+blue;
};

function triggerRandomBg() {
	let a = Number(getInteger());
	let b = Number(getInteger());
	let c = Number(getInteger());
	let d = Number(getInteger());
	let e = Number(getInteger());
	let f = Number(getInteger());


	let randColor1 = `rgb(${a}, ${b}, ${c})`
	let randColor2 = `rgb(${d}, ${e}, ${f})`

	body.style.background = `linear-gradient(to right, 
		${randColor1}, ${randColor2}`;

	color1.value = fullColorHex(a, b, c);
	color2.value = fullColorHex(d, e, f);		

	css.textContent = `${body.style.background};`;
}

randomButton.addEventListener("click", triggerRandomBg);