// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

console.log("hello");

const toggledParagraph = document.querySelector('.show');


function toggleParagraph() {
	toggledParagraph.classList.toggle("show");
	toggledParagraph.classList.toggle("hide");
	console.log(toggledParagraph);
}

toggleParagraph();

const toggledButton = document.querySelector('#toggle-control');


toggledButton.addEventListener("click", toggleParagraph);
