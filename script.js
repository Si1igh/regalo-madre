function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");

  mensaje.innerText = "Te amo mucho mamá 💖";
  mensaje.style.opacity = "1";

  setTimeout(() => {
    document.getElementById("carta").scrollIntoView({
      behavior: "smooth"
    });
  }, 1500);
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
