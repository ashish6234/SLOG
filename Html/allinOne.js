

// Function to display a welcome message
function displayWelcomeMessage() {
  var name = prompt("Enter your name:");
  var message = "Welcome, " + name + "! Enjoy your visit.";
  alert(message);


//   // Store the name in local storage
  localStorage.setItem("name", name);
}

// // Function to retrieve and display the stored name
// function displayStoredName() {
//   var storedName = localStorage.getItem("name");
//   if (storedName) {
//     var storedNameElement = document.getElementById("stored-name");
//     storedNameElement.textContent = "Stored Name: " + storedName;
//   }
// }

// // Event listener for button click
// var welcomeButton = document.getElementById("welcome-button");
// welcomeButton.addEventListener("click", displayWelcomeMessage);

// // Call the function to display the stored name
// displayStoredName();