const abrirUno = document.querySelector("#conoceUno");
const abrirDos = document.querySelector("#conoceDos");
const abrirTres = document.querySelector("#conoceTres");
const abrirCuatro = document.querySelector("#conoceCuatro");
const abrirCinco = document.querySelector("#conoceCinco");
const abrirSeis = document.querySelector("#conoceSeis");
const abrirSiete = document.querySelector("#conoceSiete");
const abrirOcho = document.querySelector("#conoceOcho");
const modal = document.querySelector(".container_texto");
const cerrar = document.getElementById("cierro");
const copyUno = document.getElementById("copy_uno");
const copyDos = document.getElementById("copy_dos");
const copyTres = document.getElementById("copy_tres");
const copyCuatro = document.getElementById("copy_cuatro");
const copyCinco = document.getElementById("copy_cinco");
const copySeis = document.getElementById("copy_seis");
const copySiete = document.getElementById("copy_siete");
const copyOcho = document.getElementById("copy_ocho");

abrirUno.addEventListener("click", function () {
  modal.classList.add("move");
  copyTres.classList.add("aparecer_texto");
});
abrirDos.addEventListener("click", function () {
  modal.classList.add("move");
  copyUno.classList.add("aparecer_texto");
});
abrirTres.addEventListener("click", function () {
  modal.classList.add("move");
  copyDos.classList.add("aparecer_texto");
});
abrirCuatro.addEventListener("click", function () {
  modal.classList.add("move");
  copyCuatro.classList.add("aparecer_texto");
});
abrirCinco.addEventListener("click", function () {
  modal.classList.add("move");
  copyCinco.classList.add("aparecer_texto");
});
abrirSeis.addEventListener("click", function () {
  modal.classList.add("move");
  copySeis.classList.add("aparecer_texto");
});
abrirSiete.addEventListener("click", function () {
  modal.classList.add("move");
  copySiete.classList.add("aparecer_texto");
});
abrirOcho.addEventListener("click", function () {
  modal.classList.add("move");
  copyOcho.classList.add("aparecer_texto");
});

cerrar.addEventListener("click", function () {
  modal.classList.remove("move");
  copyUno.classList.remove("aparecer_texto");
  copyDos.classList.remove("aparecer_texto");
  copyTres.classList.remove("aparecer_texto");
  copyCuatro.classList.remove("aparecer_texto");
  copyCinco.classList.remove("aparecer_texto");
  copySeis.classList.remove("aparecer_texto");
  copySiete.classList.remove("aparecer_texto");
  copyOcho.classList.remove("aparecer_texto");
});
