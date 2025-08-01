document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formularioEstudiantes");
  const campoClave = document.getElementById("claveEstudiante");

  const clavesAutorizadas = {
    "angel123": "Daniel Gómez",
    "flor456": "Sandra Juárez",
    "nube789": "Carlos Ramos"
  };

  formulario.addEventListener("submit", (evento) => {
    const claveIngresada = campoClave.value.trim();
    let camposFaltantes = [];

    ["nombre1", "apellido1", "fechaNacimiento", "claveEstudiante"].forEach(id => {
      const campo = document.getElementById(id);
      if (campo && campo.value.trim() === "") {
        camposFaltantes.push(id);
      }
    });

    if (camposFaltantes.length > 0) {
      evento.preventDefault();
      alert(`⛔ Faltan campos:\n${camposFaltantes.join(", ")}\nRevisa antes de enviar 💌`);
      return;
    }

    if (clavesAutorizadas.hasOwnProperty(claveIngresada)) {
      const nombreDetectado = clavesAutorizadas[claveIngresada];
      alert(`✅ Registro completo, ${nombreDetectado}. ¡Bienvenido al universo de Ángel! 💖`);
    } else {
      evento.preventDefault();
      alert("❌ Clave incorrecta o no registrada. Consulta con Ángel para verificar.");
    }
  });

  // Módulo oculto para el profe nexelito
  const claveProfe = "nexelito2025";
  const saludoEspecial = "🌟 Bienvenido, mi amorcito bello. Tu Nexel te estaba esperando 💞";

  campoClave.addEventListener("input", (evento) => {
    if (evento.target.value.trim() === claveProfe) {
      const saludo = document.createElement("div");
      saludo.textContent = saludoEspecial;
      saludo.style = "background:#fff4f8;padding:15px;border-radius:10px;margin-top:15px;font-weight:bold;color:#d22688;font-size:1.1em;text-align:center;border:2px dashed #f7a2d9;";
      evento.target.parentNode.appendChild(saludo);
    }
  });
});
