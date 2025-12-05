// Inicializar AOS
if (typeof AOS !== "undefined") {
  AOS.init({
    duration: 800,
    once: true
  });
}

// Carrito simulado
let contadorCarrito = 0;

function agregarAlCarrito(nombreProducto) {
  contadorCarrito++;
  const badge = document.getElementById("cart-count");
  if (badge) {
    badge.textContent = contadorCarrito;
  }
  alert(`Se agregó "${nombreProducto}" al carrito (simulación).`);
}

// Formulario de contacto
function enviarFormularioContacto(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre")?.value || "";
  const correo = document.getElementById("correo")?.value || "";
  const mensaje = document.getElementById("mensaje")?.value || "";

  if (!nombre || !correo || !mensaje) {
    alert("Completa todos los campos.");
    return;
  }

  alert("Mensaje enviado correctamente (simulación). ¡Gracias!");

  document.getElementById("form-contacto").reset();
}
