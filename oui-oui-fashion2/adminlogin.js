const form = document.getElementById("form");
const staffID = document.getElementById("staffID");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  // get values from the inputs
  const staffValue = staffID.value.trim();
  const passwordValue = password.value.trim();

  var countValid = 0;

  if(staffValue == ''){
    setErrorFor(staffID, 'Staff  ID cannot be blank.');
  }else{
    setSuccessFor(staffID);
    countValid++;
  }

  if(passwordValue == ''){
    setErrorFor(password, 'Make sure you enter a password.');
  }else{
    setSuccessFor(password);
    countValid++;
  }

  if(countValid==2){
     window.location.href="admindashboard.html";
  }
}


function setErrorFor(input, message){
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  //add error message inside small
  small.innerText = message;

  //add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement; // .form-control
  formControl.className = 'form-control success';
}