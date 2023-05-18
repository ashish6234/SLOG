// Check if the user is already signed up
function checkSignUp() {
  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');

  var signupLink = document.getElementById('signup-link');

  if (!username || !password) {
    // Redirect to the sign-up page
    signupLink.innerHTML = "Not signed up yet? <a href='formsignup.html'>Sign up here</a>.";
  }
}

// Check if the user is already logged in
function checkLogin() {
  var username = localStorage.getItem('username');
  var password = localStorage.getItem('password');

  if (username && password) {
    // Redirect to the login page
    window.location.href = 'formStore.html';
  }
}

// Sign up function
function signUp(event) {
  event.preventDefault();

  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');

  var username = usernameInput.value;
  var password = passwordInput.value;

  if (username && password) {
    // Store the credentials in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Sign up successful! Please log in.');

    // Clear the input fields
    usernameInput.value = '';
    passwordInput.value = '';
  } else {
    alert('Please enter a username and password.');
  }
}

// Login function
function login(event) {
  event.preventDefault();

  var usernameInput = document.getElementById('username');
  var passwordInput = document.getElementById('password');

  var username = usernameInput.value;
  var password = passwordInput.value;

  var storedUsername = localStorage.getItem('username');
  var storedPassword = localStorage.getItem('password');

  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');

    // Redirect to the home page or perform additional actions
    // For now, just clear the input fields
    usernameInput.value = '';
    passwordInput.value = '';
  } else {
    alert('Invalid username or password.');
  }
}

checkSignUp();
checkLogin();