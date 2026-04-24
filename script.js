function mostrarMensaje() {
  document.getElementById("mensaje").innerText =
  "Te amo mucho mamá 💖";
}

function scrollToSection() {
  document.getElementById("historia").scrollIntoView({
    behavior: "smooth"
  });
}
const elementos = document.querySelectorAll(".oculto");

function mostrarElementos() {
  const alturaPantalla = window.innerHeight;

  elementos.forEach(el => {
    const distancia = el.getBoundingClientRect().top;

    if (distancia < alturaPantalla - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", mostrarElementos);
