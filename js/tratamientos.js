const textoUno = document.querySelector("#texto_uno");
const textoDos = document.querySelector("#texto_dos");
const textoTres = document.querySelector("#texto_tres");
const textoCuatro = document.querySelector("#texto_cuatro");
const textoCinco = document.querySelector("#texto_cinco");
const textoSeis = document.querySelector("#texto_seis");
const textoSiete = document.querySelector("#texto_siete");
const textoOcho = document.querySelector("#texto_ocho");
const textoNueve = document.querySelector("#texto_nueve");
const textoDiez = document.querySelector("#texto_diez");
const textoOnce = document.querySelector("#texto_once");
const modalTexto = document.querySelector(".container_tratamientos");
const cerrarModal = document.getElementById("cerrarTratamientos");
const tratamientoUno = document.getElementById("trata_uno");
const tratamientoDos = document.getElementById("trata_dos");
const tratamientoTres = document.getElementById("trata_tres");
const tratamientoCuatro = document.getElementById("trata_cuatro");
const tratamientoCinco = document.getElementById("trata_cinco");
const tratamientoSeis = document.getElementById("trata_seis");
const tratamientoSiete = document.getElementById("trata_siete");
const tratamientoOcho = document.getElementById("trata_ocho");
const tratamientoNueve = document.getElementById("trata_nueve");
const tratamientoDiez = document.getElementById("trata_diez");
const tratamientoOnce = document.getElementById("trata_once");

tratamientoUno.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoUno.classList.add("aparecer_texto_dos");
});
tratamientoDos.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoDos.classList.add("aparecer_texto_dos");
});
tratamientoTres.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoTres.classList.add("aparecer_texto_dos");
});
tratamientoCuatro.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoCuatro.classList.add("aparecer_texto_dos");
});
tratamientoCinco.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoCinco.classList.add("aparecer_texto_dos");
});
tratamientoSeis.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoSeis.classList.add("aparecer_texto_dos");
});
tratamientoSiete.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoSiete.classList.add("aparecer_texto_dos");
});
tratamientoOcho.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoOcho.classList.add("aparecer_texto_dos");
});
tratamientoNueve.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoNueve.classList.add("aparecer_texto_dos");
});

tratamientoDiez.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoDiez.classList.add("aparecer_texto_dos");
});

tratamientoOnce.addEventListener("click", function () {
  modalTexto.classList.add("move_texto");
  textoOnce.classList.add("aparecer_texto_dos");
});

cerrarModal.addEventListener("click", function () {
  modalTexto.classList.remove("move_texto");
  textoUno.classList.remove("aparecer_texto_dos");
  textoDos.classList.remove("aparecer_texto_dos");
  textoTres.classList.remove("aparecer_texto_dos");
  textoCuatro.classList.remove("aparecer_texto_dos");
  textoCinco.classList.remove("aparecer_texto_dos");
  textoSeis.classList.remove("aparecer_texto_dos");
  textoSiete.classList.remove("aparecer_texto_dos");
  textoOcho.classList.remove("aparecer_texto_dos");
  textoNueve.classList.remove("aparecer_texto_dos");
  textoDiez.classList.remove("aparecer_texto_dos");
  textoOnce.classList.remove("aparecer_texto_dos");
});
