const express = require('express');
const Coordenadas = require('./coordenadas');
const AreaSegura = require('./areaSegura');

const app = express();
app.use(express.json());

// Definindo a área segura
// Definindo a área segura com quatro coordenadas
const areaSegura = new AreaSegura(
  new Coordenadas(0, 10),  // Superior esquerda
  new Coordenadas(10, 10), // Superior direita
  new Coordenadas(10, 0),  // Inferior direita
  new Coordenadas(0, 0)    // Inferior esquerda
);
app.post('/verificar-pet', (req, res) => {
  const { x, y } = req.body;
  const pet = new Coordenadas(x, y);

  if (areaSegura.isPetDentroArea(pet)) {
    res.status(200).send({ mensagem: 'O pet está DENTRO da área segura.' });
  } else {
    res.status(200).send({ mensagem: 'O pet está FORA da área segura.' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
