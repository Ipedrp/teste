const Coordenadas = require('./coordenadas');

class AreaSegura {
  constructor(superiorEsquerda, inferiorDireita) {
    this.superiorEsquerda = superiorEsquerda;
    this.inferiorDireita = inferiorDireita;
  }

  isPetDentroArea(pet) {
    const { x, y } = pet;

    // Verifica se as coordenadas do pet estão dentro dos limites da área segura
    return x >= this.superiorEsquerda.x && x <= this.inferiorDireita.x &&
           y >= this.inferiorDireita.y && y <= this.superiorEsquerda.y;
  }
}

module.exports = AreaSegura;
