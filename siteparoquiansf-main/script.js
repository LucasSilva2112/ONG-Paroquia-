// BIBLIOTECA https://michalsnik.github.io/aos/
AOS.init();

// INSTRUÇÕES PARA MENU MOBILE
const btnMobile = document.getElementById('btn-mobile');
  function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
const nav = document.getElementById('nav');
  nav.classList.toggle('active');
const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
  event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
} else {
  event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
}
}
document.querySelectorAll('#menu a').forEach(item => {
  item.addEventListener('click', () => {
  const nav = document.getElementById('nav');
      nav.classList.remove('active');
      btnMobile.setAttribute('aria-expanded', false);
      btnMobile.setAttribute('aria-label', 'Abrir Menu');
  });
});
window.addEventListener('scroll', function() {
  var nav = document.getElementById('nav');
  var scrollTop = window.scrollY;

  if (scrollTop > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Adicionado rolagem suave aos links da navbar - YANN
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});


const body = document.querySelector('body');

const toggleScrollLock = () => {
  body.classList.toggle('scroll-lock');
};

const closeModal = (modal, fade) => {
  modal.classList.add('hide');
  fade.classList.add('hide');
  toggleScrollLock(); 
};

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
      closeModal(modalDoacoes, fadeDoacoes);
      closeModal(modalConfissoes, fadeConfissoes);
      closeModal(modalSecretaria2, fadeSecretaria2);
      closeModal(modalContato, fadeContato);
      closeModal(modalMissas, fadeMissas);
      closeModal(modalHomilia, fadeHomilia);
      closeModal(modalLiturgiadiaria, fadeLiturgiadiaria);
      closeModal(modalSantos, fadeSantos);
  }
});


// INSTRUÇÕES MODAIS DE TODA A PÁGINA
const openModalButtons = document.querySelectorAll(".open-modal-doacoes, .open-modal-confissoes, .open-modal-missas, .open-modal-secretaria2, .open-modal-contato, .open-modal-homilia, .open-modal-liturgiadiaria, .open-modal-santos");
const closeModalButtons = document.querySelectorAll("#close-modal-doacoes, #close-modal-confissoes, #close-modal-missas, #close-modal-secretaria2, #close-modal-contato, #close-modal-homilia, #close-modal-liturgiadiaria, #close-modal-santos");
const modalDoacoes = document.querySelector("#modal-doacoes");
const modalConfissoes = document.querySelector("#modal-confissoes");
const modalSecretaria2 = document.querySelector("#modal-secretaria2");
const modalContato = document.querySelector("#modal-contato");
const modalMissas = document.querySelector("#modal-missas");
const modalHomilia = document.querySelector("#modal-homilia");
const modalLiturgiadiaria = document.querySelector("#modal-liturgiadiaria");
const modalSantos = document.querySelector("#modal-santos");
const fadeDoacoes = document.querySelector("#fade-doacoes");
const fadeConfissoes = document.querySelector("#fade-confissoes");
const fadeSecretaria2 = document.querySelector("#fade-secretaria2");
const fadeContato = document.querySelector("#fade-contato");
const fadeMissas = document.querySelector("#fade-missas");
const fadeHomilia = document.querySelector("#fade-homilia");
const fadeLiturgiadiaria = document.querySelector("#fade-liturgiadiaria");
const fadeSantos = document.querySelector("#fade-santos");

const toggleModal = (modal, fade) => {
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
      if (button.classList.contains('open-modal-doacoes')) {
          toggleModal(modalDoacoes, fadeDoacoes);
          const campaignTitle = button.parentElement.querySelector("strong").textContent;
          document.querySelector(".modal-header-doacoes h2").textContent = campaignTitle;
      } else if (button.classList.contains('open-modal-confissoes')) {
          toggleModal(modalConfissoes, fadeConfissoes);
      } else if (button.classList.contains('open-modal-secretaria2')) {
          toggleModal(modalSecretaria2, fadeSecretaria2);
      } else if (button.classList.contains('open-modal-contato')) {
          toggleModal(modalContato, fadeContato);
      } else if (button.classList.contains('open-modal-missas')) {
          toggleModal(modalMissas, fadeMissas);
      } else if (button.classList.contains('open-modal-homilia')) {
          toggleModal(modalHomilia, fadeHomilia);
      } else if (button.classList.contains('open-modal-liturgiadiaria')) {
          toggleModal(modalLiturgiadiaria, fadeLiturgiadiaria);
      } else if (button.classList.contains('open-modal-santos')) {
          toggleModal(modalSantos, fadeSantos);
      }
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
      if (button.id === 'close-modal-doacoes') {
          toggleModal(modalDoacoes, fadeDoacoes);
      } else if (button.id === 'close-modal-confissoes') {
          toggleModal(modalConfissoes, fadeConfissoes);
      } else if (button.id === 'close-modal-secretaria2') {
          toggleModal(modalSecretaria2, fadeSecretaria2);
      } else if (button.id === 'close-modal-contato') {
          toggleModal(modalContato, fadeContato);
      } else if (button.id === 'close-modal-missas') {
          toggleModal(modalMissas, fadeMissas);
      } else if (button.id === 'close-modal-homilia') {
          toggleModal(modalHomilia, fadeHomilia);
      } else if (button.id === 'close-modal-liturgiadiaria') {
          toggleModal(modalLiturgiadiaria, fadeLiturgiadiaria);
      } else if (button.id === 'close-modal-santos') {
          toggleModal(modalSantos, fadeSantos);
      }
  });
});

fadeDoacoes.addEventListener("click", () => {
  toggleModal(modalDoacoes, fadeDoacoes);
});

fadeConfissoes.addEventListener("click", () => {
  toggleModal(modalConfissoes, fadeConfissoes);
});

fadeSecretaria2.addEventListener("click", () => {
  toggleModal(modalSecretaria2, fadeSecretaria2);
});

fadeContato.addEventListener("click", () => {
  toggleModal(modalContato, fadeContato);
});

fadeMissas.addEventListener("click", () => {
  toggleModal(modalMissas, fadeMissas);
});

fadeHomilia.addEventListener("click", () => {
  toggleModal(modalHomilia, fadeHomilia);
});

fadeLiturgiadiaria.addEventListener("click", () => {
  toggleModal(modalLiturgiadiaria, fadeLiturgiadiaria);
});

fadeSantos.addEventListener("click", () => {
  toggleModal(modalSantos, fadeSantos);
});




// INSTRUÇÃO PARA O COPIA E COLA DO QRCODE
  document.getElementById("copy-button").addEventListener("click", function() {
      const copyText = document.getElementById("copy-text");
      const textArea = document.createElement("textarea");
      textArea.value = copyText.innerText;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      const copySuccessMsg = document.querySelector('.copy-success-msg');
      copySuccessMsg.classList.remove('hide');
      setTimeout(function() {
          copySuccessMsg.classList.add('hide');
      }, 2000);

  });

