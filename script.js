
var sendButton = document.querySelector(".send");

// melhorias na validação
// usando um loop
// criando um objeto factory com rules 
sendButton.addEventListener('click', (event) => {
  var fullName = document.querySelector('#full_name').value;
  var email = document.querySelector('#email').value;

  if (fullName === '') {
    alert("The fullName is required");
    return;
  }

  if (email === '') {
    alert("The Email is required");  
    return; 
  }

  // make the request and store data
});