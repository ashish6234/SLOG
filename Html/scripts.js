const URL = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3"


fetch(URL)
.then((res)=>{
    return res.json()

})
.then((data)=>{
    console.log(data)

})
    
const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let errors = [];

  if (nameInput.value.trim() === '') {
    errors.push('Name is required');
  }

  if (emailInput.value.trim() === '') {
    errors.push('Email is required');
  } else if (!isValidEmail(emailInput.value.trim())) {
    errors.push('Email is not valid');
  }

  if (passwordInput.value.trim() === '') {
    errors.push('Password is required');
  }

  if (errors.length > 0) {
    displayErrors(errors);
  } else {
    form.submit();
  }
});

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function displayErrors(errors) {
  const errorContainer = document.createElement('div');
  errorContainer.classList.add('error');

  errors.forEach(error => {
    const errorItem = document.createElement('p');
    errorItem.textContent = error;
    errorContainer.appendChild(errorItem);
  });

  form.appendChild(errorContainer);
}