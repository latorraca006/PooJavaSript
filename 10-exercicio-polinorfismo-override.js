// Classe base Musica
class Musica {
  constructor(nome, vida) {
    this.nome = nome;
    this.vida = vida; // Inicializa a vida aqui
  }

  // Método para emitir som
  tocar() {
    console.log(`${this.nome} toca uma melodia!`);
  }

  // Método para receber dano
  FinalizaDeTocar(dano) {
    this.vida -= dano;
    console.log(
      `${this.nome} Amanda ${dano}toca violão de forma envolvente ${this.vida}`
    );
  }
}

// Classe MPB que herda de Musica
class MPB extends Musica {
  constructor(nome, vida, instrumento) {
    super(nome, vida);
    this.instrumento = instrumento;
  }

  // Método para emitir som específico
  tocar() {
    console.log(`${this.nome} toca ${this.instrumento} de forma envolvente!`);
  }
}

// Classe Sertanejo que herda de Musica
class Sertanejo extends Musica {
  constructor(nome, vida, estilo) {
    super(nome, vida);
    this.estilo = estilo;
  }

  // Método para emitir som específico
  tocar() {
    console.log(`${this.nome} canta uma canção ${this.estilo}!`);
  }
}

// Classe Internacional que herda de Musica
class Internacional extends Musica {
  constructor(nome, vida, estiloMusical) {
    super(nome, vida);
    this.estiloMusical = estiloMusical;
  }

  // Método para emitir som específico
  tocar() {
    console.log(`${this.nome} performa um hit ${this.estiloMusical}!`);
  }
}

// Criando instâncias de MPB, Sertanejo e Internacional
const mpb = new MPB("Amanda", 100, "violão");
mpb.tocar(); // saída: Amanda toca violão de forma envolvente!
mpb.FinalizaDeTocar(20); // saída: Amanda terminou de tocar o violao

const sertanejo = new Sertanejo("Amanda", 80, "romântico");
sertanejo.tocar(); // saída: Amanda canta uma canção romântico!
sertanejo.EncantouOPublico(15); // saída: Amanda encanta o publico

const internacional = new Internacional("Amanda", 120, "pop");
internacional.tocar(); // saída: Amanda performa um hit pop!
internacional.RecebePremio(10); // saída: Amanda recebeu premio por seu hit
