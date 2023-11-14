function mostrarRespuesta(acepto) {
    var respuesta = document.getElementById("respuesta");
    respuesta.style.display = "block";
  
    if (acepto) {
    respuesta.innerHTML = "<p>¡Has hecho muy feliz a alguien hoy!</p><img src='pikachu.jpg' alt='Corazón'>";
    var btnNo = document.getElementById("btnNo");
      btnNo.style.display = "none"; // Esta línea oculta el botón "No, gracias"
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
