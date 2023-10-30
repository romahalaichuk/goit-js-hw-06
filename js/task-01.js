const categoriesList = document.querySelectorAll("#categories .item");

console.log("Number of categories: " + categoriesList.length);

categoriesList.forEach((category) => {
	const categoryName = category.querySelector("h2").textContent;

	const elements = category.querySelectorAll("ul li");

	console.log("Category: " + categoryName);
	console.log("Elements: " + elements.length);
});
