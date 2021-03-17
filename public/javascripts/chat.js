var socket = io("https://dry-sierra-09836.herokuapp.com/",{ 'forceNew': true });
  var nombre = document.querySelector("#nombre");
  var form = document.getElementById('form');
  var input = document.getElementById('input');
  const mensajes = document.querySelector("#messages");
  const oldHTML = mensajes.innerHTML
  socket.on('messages', function(data) {    
      let mensajies =  data.map(element => {
        console.log(element.name)
         return `<li>${element.text} de <strong>${element.name}</strong></li>`
       });
       mensajes.innerHTML = `${mensajies}`
       
    });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let mensaje = {
      name : nombre.value,
      text: input.value
    }
    if (input.value && nombre.value) {
      socket.emit('new-message', mensaje);
      input.value = '';
    }
  });