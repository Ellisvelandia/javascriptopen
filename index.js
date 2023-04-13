const parrafo = document.getElementById("parrafo");
const texto = document.getElementById("texto");


parrafo.addEventListener("click", () => {
  parrafo.style.color = "blue";
});


texto.addEventListener("cambioTexto", (evento) => {
  console.log(evento)
  texto.innerText = evento.detail.texto;
  texto.style.color = evento.detail.color
})

function cambiarTexto(nuevoTexto, color) {
  const evento = new CustomEvent("cambioTexto", {
    details: {
      texto: nuevoTexto,
      color,
    },
  });
  texto.dispatchEvent(evento)
}

// localStorage.setItem("ellis")