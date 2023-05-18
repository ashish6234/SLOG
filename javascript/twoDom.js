// get the paragraph element by its ID
const myParagraph = document.getElementById("my-paragraph");

// change the text of the paragraph
myParagraph.textContent = "This paragraph has been manipulated with JavaScript!";

// get the button element by its ID
const myButton = document.getElementById("my-button");


// add an event listener to the button
myButton.addEventListener("click", function() {
	alert("Button clicked!");
});