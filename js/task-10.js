const controls = document.getElementById("controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("[data-create]");
const destroyButton = controls.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, "0")}`;
}

function createBoxes(amount) {
	for (let i = 0; i < amount; i++) {
		const box = document.createElement("div");
		const size = 30 + i * 10;
		box.style.width = size + "px";
		box.style.height = size + "px";
		box.style.backgroundColor = getRandomHexColor();
		boxesContainer.appendChild(box);
	}
}

function destroyBoxes() {
	boxesContainer.innerHTML = "";
}

createButton.addEventListener("click", () => {
	const amount = input.value;
	createBoxes(amount);
});

destroyButton.addEventListener("click", destroyBoxes);
