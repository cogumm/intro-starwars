// Habilitando o dotenv.
require('dotenv').config();

// Adicionando o express na aplicação.
const express = require('express');

// Instânciando o express.
const server = express();

server.use(express.static('public'));

server.get('/', (req, res) => {
  res.send('Intro Star Wars');
});

/**
 * Rodando o servidor back-end.
 */
server.listen(process.env.PORT_APP || 3001, () => {
  console.log(
    'Servidor backend inicializado com sucesso na porta '
    + process.env.PORT_APP || 3001,
  );
});
