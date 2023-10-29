const widget = document.querySelector(".widget");
const changeColorButton = widget.querySelector(".change-color");
const colorSpan = widget.querySelector(".color");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;
}

changeColorButton.addEventListener("click", () => {
	const randomColor = getRandomHexColor();
	document.body.style.backgroundColor = randomColor;
	colorSpan.textContent = randomColor;
});
