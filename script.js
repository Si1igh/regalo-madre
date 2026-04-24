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

let elementos;

// ✅ TODO ocurre cuando la página ya cargó
window.addEventListener("load", () => {
  elementos = document.querySelectorAll(".oculto");
  mostrarElementos();

  // ✨ partículas iniciales
  crearParticulas();

  // ✨ partículas constantes
  setInterval(() => {
    crearParticulas();
  }, 4000);
});

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
    corazon.style.top = (window.innerHeight - Math.random() * 150) + "px";
    corazon.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.body.appendChild(corazon);

    setTimeout(() => {
      corazon.remove();
    }, 2000);
  }
}

function crearParticulas() {
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.classList.add("particula");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (Math.random() * 5 + 5) + "s";
    p.style.opacity = Math.random();

    document.body.appendChild(p);

    setTimeout(() => {
      p.remove();
    }, 10000);
  }
}
