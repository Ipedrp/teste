class AreaSegura {
  constructor(p1, p2, p3, p4) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;
  }

  // Função para verificar se o pet está dentro da área segura
  isPetDentroArea(pet) {
    const xMin = Math.min(this.p1.x, this.p2.x, this.p3.x, this.p4.x);
    const xMax = Math.max(this.p1.x, this.p2.x, this.p3.x, this.p4.x);
    const yMin = Math.min(this.p1.y, this.p2.y, this.p3.y, this.p4.y);
    const yMax = Math.max(this.p1.y, this.p2.y, this.p3.y, this.p4.y);

    return pet.x >= xMin && pet.x <= xMax && pet.y >= yMin && pet.y <= yMax;
  }
}

module.exports = AreaSegura;
