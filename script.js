function mostrarRespuesta(acepto) {
    var respuesta = document.getElementById("respuesta");
    respuesta.style.display = "block";
  
    if (acepto) {
      respuesta.innerHTML = "<p>¡Has hecho muy feliz a alguien hoy!</p><img src='pikachu.jpg' alt='Corazón'>";
    }
  }
  
  function moverBotonNo() {
    var btnNo = document.getElementById("btnNo");
    var xPos = Math.floor(Math.random() * window.innerWidth - btnNo.clientWidth);
    var yPos = Math.floor(Math.random() * window.innerHeight - btnNo.clientHeight);
    btnNo.style.position = "absolute";
    btnNo.style.left = xPos + "px";
    btnNo.style.top = yPos + "px";
  }