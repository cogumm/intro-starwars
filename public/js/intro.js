let width = window.innerWidth;
let height = window.innerHeight;
/**
 * Selecionando o elemento de class 'intro' para possamos utilizar em uma variável de mesmo nome.
 */
const intro = document.getElementsByClassName('intro')[0];

intro.style.fontSize = width / 30 + 'px';

/**
 * Escrevendo o tamanho das letras de maneira responsível.
 */
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;

  intro.style.fontSize = width / 30 + 'px';
});
