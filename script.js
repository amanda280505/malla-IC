// Marcar o desmarcar un ramo como aprobado
function toggleRamo(el) {
  // Si está bloqueado, no hacer nada
  if (el.classList.contains("bloqueado")) return;

  // Alternar clase de aprobado
  el.classList.toggle("aprobado");

  // Actualizar todos los estados después del cambio
  updateEstado();
}

// Verifica todos los prerrequisitos y bloquea/desbloquea según corresponda
function updateEstado() {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach(ramo => {
    const prer = ramo.dataset.prer;

    if (!prer) return; // No tiene prerrequisito

    const prerRamo = document.querySelector(`.ramo[data-id='${prer}']`);

    // Si el prerrequisito no está aprobado
    if (!prerRamo || !prerRamo.classList.contains("aprobado")) {
      ramo.classList.add("bloqueado");
      ramo.classList.remove("aprobado"); // Si estaba aprobado, se revierte
    } else {
      ramo.classList.remove("bloqueado");
    }
  });
}

// Ejecutar al cargar la página
window.onload = updateEstado;

