var sendButton = document.querySelector(".send");
var fields = ['full_name', 'email', 'phone_number', 'password'];

var emptyValidators = {
  full_name: [required],
  email: [required],
  phone_number: [required],
  password: [required]
};

var lengthValidators = {
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
    var fieldsEmptyValidators = emptyValidators[field];
    var fieldsLengthValidators = lengthValidators[field];
    
    fieldsEmptyValidators.forEach(function (funcValidate) {
      var emptyValidation = funcValidate(inputValue);
      if (emptyValidation === true){
        alert(field+' is invalid!')
      }
    });
    if(fieldsLengthValidators){
      fieldsLengthValidators.forEach(function (funcValidate) {
        var lengthValidation = funcValidate(inputValue);
        if (lengthValidation === true){
          alert(field+' is too short!')
        }
      });
    }
  });
});