let width = window.innerWidth;
let height = window.innerHeight;
/**
 * Selecionando o elemento de class 'intro' para possamos utilizar em uma variável de mesmo nome.
 */
const intro = document.getElementsByClassName('intro')[0];
const historia = document.getElementsByClassName('historia')[0];
const paragrafos = document.getElementsByClassName('paragrafos')[0];

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
}
