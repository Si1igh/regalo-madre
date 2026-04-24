function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  const musica = document.getElementById("musica");

  mensaje.innerText = "Te amo mucho mamá 💖";
  mensaje.style.opacity = "1";

  crearCorazones();

  if (musica) {
  musica.play().catch(() => {});
}

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
function crearCorazones() {
  for (let i = 0; i < 10; i++) {
    const corazon = document.createElement("div");
    corazon.innerText = "💖";
    corazon.classList.add("corazon");

   corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.top = (window.innerHeight - 100) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 2000);
  }
}
