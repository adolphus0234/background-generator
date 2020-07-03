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

function triggerRandomBg() {
	body.style.background = `linear-gradient(to right, 
		rgb(${Number(getInteger())}, ${Number(getInteger())}, 
		${Number(getInteger())}), rgb(${Number(getInteger())}, 
		${Number(getInteger())}, ${Number(getInteger())})`;

	css.textContent = `${body.style.background};`;
}

randomButton.addEventListener("click", triggerRandomBg);