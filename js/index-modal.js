const indexModal = document.getElementById("indexModal");
const myTimeout = setTimeout(myModal, 3000);

function myModal() {
  indexModal.classList.add("show-index-modal");
  const cerrarIndexModal = document.getElementById("cerrarIndexModal");
  cerrarIndexModal.addEventListener("click", () => {
    indexModal.classList.remove("show-index-modal");
  });
}
const cerrarModal = document.getElementById("cerrarModal");
cerrarModal.addEventListener("click", () => {
    indexModal.classList.remove("show-index-modal");
  });
