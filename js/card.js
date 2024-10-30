const todo = document.getElementById("todo");
const endodoncia = document.getElementById("endodoncia");
const endo = document.getElementById("endo");
const inner = document.querySelector(".engloba_todo");
const descripcion = document.querySelector(".descripcion_especialidades");
const cerrarUno = document.querySelector("#cerrarUno");
const cerrarDos = document.querySelector("#cerrarDos");
const cerrarTres = document.querySelector("#cerrarTres");
const cerrarCuatro = document.querySelector("#cerrarCuatro");
const cerrarCinco = document.querySelector("#cerrarCinco");
const cerrarSeis = document.querySelector("#cerrarSeis");
const cerrarSiete = document.querySelector("#cerrarSiete");
const ortondoncia = document.getElementById("ortondoncia");
const odontopediatria = document.getElementById("odontopediatria");
const extracciones = document.getElementById("extracciones");
const implantes = document.getElementById("implantes");
const orto = document.getElementById("orto");
const cirmax = document.getElementById("cirmax");
const imp = document.getElementById("imp");
const odon = document.getElementById("odon");
const perio = document.getElementById("perio");
const periodoncia = document.getElementById("periodoncia");
const rehabilitacion = document.getElementById("rehabilitacion_oral");
const reha = document.getElementById("reha");
const estetica = document.getElementById("estetica");
const estetic = document.getElementById("estetic");
const cerrarOcho = document.getElementById("cerrarOcho");
const radiografia = document.getElementById("radiografia");
const radio = document.getElementById("radio");
const cerrarNueve = document.getElementById("cerrarNueve");
const ortopedia = document.getElementById("ortopedia");
const ortope = document.getElementById("ortope");
const cerrarDiez = document.getElementById("cerrarDiez");
const odontologiaGeneral = document.getElementById("odon_general");
const general = document.getElementById("general");
const cerrarOnce = document.getElementById("cerrarOnce");
const urgenciasDentales = document.getElementById("dental_urgencias");
const urgencias = document.getElementById("urgencias");
const cerrarDoce = document.getElementById("cerrarDoce");
const card = document.querySelector(".card");

endodoncia.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  endo.style.display = "block";
  descripcion.style.display = "block";

  cerrarUno.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    endo.style.display = "none";
    descripcion.style.display = "none";
  });
});

ortondoncia.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  orto.style.display = "block";
  descripcion.style.display = "block";

  cerrarDos.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    orto.style.display = "none";
    descripcion.style.display = "none";
  });
});
periodoncia.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  perio.style.display = "block";
  card.style.opacity = "0";
  descripcion.style.display = "block";

  cerrarSeis.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    perio.style.display = "none";
    descripcion.style.display = "none";
  });
});
rehabilitacion.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  reha.style.display = "block";
  descripcion.style.display = "block";

  cerrarSiete.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    reha.style.display = "none";
    descripcion.style.display = "none";
  });
});
implantes.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  imp.style.display = "block";
  descripcion.style.display = "block";

  cerrarCuatro.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    imp.style.display = "none";
    descripcion.style.display = "none";
  });
});

extracciones.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  cirmax.style.display = "block";
  descripcion.style.display = "block";

  cerrarTres.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    cirmax.style.display = "none";
    descripcion.style.display = "none";
  });
});

odontopediatria.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  odon.style.display = "block";
  descripcion.style.display = "block";

  cerrarCinco.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    odon.style.display = "none";
    descripcion.style.display = "none";
  });
});
estetica.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  estetic.style.display = "block";
  descripcion.style.display = "block";

  cerrarOcho.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    estetic.style.display = "none";
    descripcion.style.display = "none";
  });
});

radiografia.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  radio.style.display = "block";
  descripcion.style.display = "block";

  cerrarNueve.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    radio.style.display = "none";
    descripcion.style.display = "none";
  });
});

ortopedia.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  ortope.style.display = "block";
  descripcion.style.display = "block";

  cerrarDiez.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    ortope.style.display = "none";
    descripcion.style.display = "none";
  });
});

odontologiaGeneral.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  general.style.display = "block";
  descripcion.style.display = "block";

  cerrarOnce.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    general.style.display = "none";
    descripcion.style.display = "none";
  });
});

urgenciasDentales.addEventListener("click", function () {
  inner.style.transform = "rotateY(180deg)";
  card.style.opacity = "0";
  urgencias.style.display = "block";
  descripcion.style.display = "block";

  cerrarDoce.addEventListener("click", function () {
    inner.style.transform = "rotateY(0deg)";
    card.style.opacity = "1";
    urgencias.style.display = "none";
    descripcion.style.display = "none";
  });
});
