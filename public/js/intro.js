let width = window.innerWidth;
let height = window.innerHeight;
/**
 * Selecionando o elemento de class 'intro' para possamos utilizar em uma variável de mesmo nome.
 */
const intro = document.getElementsByClassName('intro')[0];

const historia = document.getElementsByClassName('historia')[0];
const paragrafos = document.getElementsByClassName('paragrafos')[0];
const song = document.getElementById('song');

intro.style.fontSize = width / 30 + 'px';
historia.style.fontSize = width / 20 + 'px';
paragrafos.style.height = height + 'px';

/**
 * Escrevendo o tamanho das letras de maneira responsível.
 */
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  intro.style.fontSize = width / 30 + 'px';

  historia.style.fontSize = width / 20 + 'px';
  paragrafos.style.height = height + 'px';
});

/**
 * Função para iniciar a estória.
 */
function start() {
  intro.className = 'intro intro_texto intro_animacao';

  historia.className = 'historia historia_texto historia_animacao';

  // Tocando a música.
  song.play();
}

/**
 * Efeito do fundo de estrelas.
 */
let canvas = document.getElementById('star');
const ctx = canvas.getContext('2d');

canvas.width = width;
canvas.height = height;

const num = 100;
const size = 2;
const elements = [];

function inicio() {
  for (let i = 0; i < num; i++) {
    elements[i] = {
      x: Math.ceil(Math.random() * width),
      y: Math.ceil(Math.random() * height),
      size: Math.random() * size,
    };
  }
}

function stars() {
  ctx.clearRect(0, 0, width, height);
  for (let i = 0; i < num; i++) {
    const e = elements[i];
    ctx.beginPath();
    ctx.fillStyle = '#FFFFFF';
    ctx.arc(e.x, e.y, e.size, 0, 2 * Math.PI);
    ctx.fill();
  }
}

inicio();
stars();
