document.getElementById("myForm").onsubmit = function (event) {
	event.preventDefault(); // Zabránit výchozímu chování formuláře

	let text = document.getElementById("text").value;
	let input = document.getElementById("input").value;

	let newCard = document.createElement("li");

	newCard.innerHTML = "<h3>" + text + "</h3>" + "<p>" + input + "</p>";
	document.querySelector(".cards ul").appendChild(newCard);
	document.getElementById("myForm").reset();
};
