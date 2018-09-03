var sendButton = document.querySelector(".send");
var fields = ['full_name', 'email', 'phone_number', 'password'];

var Validators = {
  full_name: [required],
  email: [required],
  phone_number: [required],
  password: [required],
  full_name: [minLength3],
  password: [minLength8]
};

function required(value){
  return value == "";
}

function minLength3(value){
  return value.length < 3;
}

function minLength8(value){
  return value.length < 8;
}

sendButton.addEventListener('click', (event) => {

  fields.forEach(function (field){
    var inputValue = document.querySelector('#'+field).value;
    var fieldsValidators = Validators[field];
    
    fieldsValidators.forEach(function (funcValidate) {
      var Validation = funcValidate(inputValue);
      if (Validation === true){
        alert(field+' is invalid!')
      }
    });
  });
});