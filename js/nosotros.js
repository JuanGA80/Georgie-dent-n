const btnUno = document.getElementById("btn_uno");
const btnDos = document.getElementById("btn_dos");
const btnTres = document.getElementById("btn_tres");
const textoUno = document.getElementById("texto_uno");
const textoDos = document.getElementById("texto_dos");
const textoTres = document.getElementById("texto_tres");

btnUno.addEventListener("click", function () {
  if (textoUno.style.display == "none") {
    textoUno.style.display = "block";
    textoDos.style.display = "none";
    textoTres.style.display = "none";
  }
});

btnDos.addEventListener("click", function () {
  if (textoDos.style.display == "none") {
    textoDos.style.display = "block";
    textoUno.style.display = "none";
    textoTres.style.display = "none";
  }
});

btnTres.addEventListener("click", function () {
  if (textoTres.style.display == "none") {
    textoTres.style.display = "block";
    textoDos.style.display = "none";
    textoUno.style.display = "none";
  }
});
