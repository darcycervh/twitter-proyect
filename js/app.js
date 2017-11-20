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
  var messageInputParent = document.getElementById('textarea').parentNode;
  var countDown = '140';
  var number = countDown - messageInput.value.length;
  var boxCount = document.createElement('div');
  var contentCount = document.createTextNode(number);
  boxCount.appendChild(contentCount);
  messageInputParent.appendChild(boxCount);
  boxCount.classList.add('box-count');
/*
    Si pasa los 140 caracteres, deshabilitar el botón.
    Si pasa los 120 caracteres, mostrar el contador con OTRO color.
    Si pasa los 130 caracteres, mostrar el contador con OTRO color.
    Si pasa los 140 caracteres, mostrar el contador en negativo.*/
});

