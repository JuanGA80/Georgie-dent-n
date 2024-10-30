let botonmenu = document.getElementById("btn-menu");
let menu = document.querySelector(".menu");
let link = document.querySelectorAll(".menu_links");

botonmenu.addEventListener("click", function () {
  menu.classList.toggle("mostrar");
  for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function () {
      menu.classList.remove("mostrar");
    });
  }
});

const btnContacto = document.querySelector(".icono_principal");
const caja = document.querySelector(".contactos");
let contacto = document.querySelector(".contacto");
btnContacto.addEventListener("click", function () {
  caja.classList.toggle("aparecer");
  contacto.style.display = "none";
});

let listElements = document.getElementById("hide-button");
let verMas = document.getElementById("mas");

listElements.addEventListener("click", () => {
  let height = 0;

  let menu = listElements.nextElementSibling;
  if (menu.clientHeight == "0") {
    height = menu.scrollHeight;
    verMas.innerText = "Ver menos";
  } else {
    verMas.innerHTML = "Ver más";
  }

  menu.style.height = `${height}px`;
});
