const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  // get values from the inputs
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  var countValid = 0;

  if(emailValue == ''){
    setErrorFor(email, 'Email cannot be blank.');
  }else if(!isEmail(emailValue)){
    setErrorFor(email, 'Double check your email and try again.');
  }else{
    setSuccessFor(email);
    countValid++;
  }

  if(passwordValue == ''){
    setErrorFor(password, 'Make sure you enter a password.');
  }else if(passwordValue.length < 5 || passwordValue.length > 100){
    setErrorFor(password, 'Password must be between 4 and 100 characters.');
  }else{
    setSuccessFor(password);
    countValid++;
  }

  if(countValid == 2){
      var text = "Congratulations, you have successfully registered as a member of Oui Oui Fashion! Please click confirm to continue.";
        if(confirm(text)){
          window.location.href="index.html";
        }
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

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}





