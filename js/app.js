var messageInput = document.getElementById('textarea');
var button = document.getElementById('button');
var listMessage = document.getElementById('list-message');

button.addEventListener('click', function() {
  var message = messageInput.value;
  var newMessage = document.createElement('div');
  var content = document.createTextNode(message);
  newMessage.appendChild(content);
  listMessage.appendChild(newMessage);
  listMessage.classList.add('list-message');
});

messageInput.addEventListener('keydown', function() {
  var countDown = 140;
  var number = countDown - messageInput.value.length;
  var boxCount = document.getElementById('input-number').parentNode;
  var otherInput = document.createElement('input');
 
  var content = document.createTextNode(number);
  
  otherInput.appendChild(content);
  boxCount.appendChild(otherInput);
  otherInput.setAttribute('value', number);
  otherInput.classList.add('box-count');
  /*
    Si pasa los 140 caracteres, deshabilitar el botón.
    Si pasa los 120 caracteres, mostrar el contador con OTRO color.
    Si pasa los 130 caracteres, mostrar el contador con OTRO color.
    Si pasa los 140 caracteres, mostrar el contador en negativo.*/
  /*
    if(number<=0){
        otherInput.classList.add('red');
        //button.setAttribute('disabled',button);
    }*/
  if (number <= 20) {
    otherInput.classList.add('blue');
  }
  if (number <= 10) {
    otherInput.classList.add('purple');
  }
  if (number <= 0) {
    otherInput.classList.add('red');
    button.setAttribute('disabled',button);
  }
});

