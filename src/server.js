// Habilitando o dotenv.
require('dotenv').config();

// Adicionando o express na aplicação.
const express = require('express');

// Instânciando o express.
const server = express();

// "Falando" pro express para executar arquivos estáticos.
server.use(express.static('public'));

server.get('/', (req, res) => res.json({
  app: 'Intro Star Wars',
  author: 'Gabriel "CoGUMm" Vilar',
  mail: 'gabriel@cogumm.net',
}));

/**
 * Rodando o servidor back-end.
 */
server.listen(process.env.PORT_APP || 3001, () => {
  console.log(
    'Servidor backend inicializado com sucesso na porta '
    + process.env.PORT_APP || 3001,
  );
});
