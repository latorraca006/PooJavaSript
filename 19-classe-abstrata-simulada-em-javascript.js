// Classe base "Personagem" simulando uma classe abstrata
class Personagem {
    constructor(nome) {
        if (new.target === Personagem) {
            throw new error("Não é possivel instanciar a classe abstrata Personagem diretamente!");
        }
        this.nome = nome;
    }

    // Metodo abstrato simulado
    atacar() {
        throw new error("O metodo atacar() deve ser implementada pela classe derivada.");
    }

    // Metodo abstrato simulado
    defender() {
        throw new error("O metodo defender() deve ser implementado pela classe derivada.");
    }
}


// Classe derivada "Mago"
class Mago extends Personagem {
constructor(nome, magia) {
    super(nome);
    this.magia = magia;
}

//implementação dos metodos abstratos da classe personagem
atacar() {
    console.log(`${this.nome} lança a magia ${this.magia}!`);
}

defender() {
    console.log(`${this.nome} utiliza a magia ${this.magia} para defender!`);
}
}



