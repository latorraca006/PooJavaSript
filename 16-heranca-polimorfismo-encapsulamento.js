class Personagem {
  // Encapsulando os atributos com #, tornando - os privados.
  #nome;
  #classe;
  #nivel;
  #vida;
  #mana;

  // Metodo Construtor
  constructor(nome, classe, nivel, vida, mana) {
    this.#nome = nome;
    this.#classe = classe;
    this.#nivel = nivel;
    this.#vida = vida;
    this.#mana = mana;
  }
  // Metodos Getters e Setters
  // Metodo Getter e Setter para o atributo nome
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }
  // Metodo Getter e Setter para o atributo classe
  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }
  // Metodo Getter e Setter para o atributo nivel
  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }
  // Metodo Getter e Setter para o atributo vida
  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }
  // Metodo Getter e Setter para o atributo mana
  get mana() {
    return this.#mana;
  }
  set mana(mana) {
    this.#mana = mana;
  }
  // Metodos
  // Simulando sobrecarga com rest parameter
  atacar(...args) {
    if (args.length === 0 ) {
        console.log(`${this.#nome} realizou um ataque normal!`);
    } else if (args.length === 1) {
        console.log(`${this.#nome} atacou com um poder de ${args[0]}!`);
    } else if (args.length === 2) {
        console.log(`${this.#nome} usou ${args[1]} e atacou com ${args[0]} de poder!`);
    } else {
        console.log(`Número de argumentos inválido.`);
    }
  }

  defesa() {
    console.log(`${this.#nome} se defendeu com ${this.#nivel * 2} pontos de defesa!`);
  }

  receberDano(dano) {
    this.#vida -= dano;
    console.log(`${this.#nome} recebeu ${dano} de dano. Vida restante: ${this.#vida}`);
  }
}

// Classe derivada - Assasino
class Assasino extends Personagem {
    constructor(nome, nivel, mana, furtividade) {
        super(nome, "assasino", nivel, vida, mana);
        this.furtividade = furtividade; // Atributo especifico
    }

    // Sobredescrevendo o metodo atacar
    atacar() {
        console.log(`${this.nome} ataca silenciosamente com dano adicional pela furtividade!`);
    }

    // Metodo especifico
    usarFurtividade() {
        console.log(`${this.nome} usa sua furtividade de nivel ${this.furtividade} para se esconder !`);
    }
}
