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

// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    constructor(nome, arma) {
        super(nome);
        this.arma = arma;
    }

    //implementação dos metodos abstratos da classe personagem
    atacar() {
        console.log(`${this.nome} ataca com a ${this.arma}!`);
    }

    defender() {
        console.log(`${this.nome} se defendeu com um escudo!`);
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
        console.log(`${this.nome} defende-se com um escudo de magia!`);
    }
}

// Criando instancias e testando o comportamento try 
{
const personagem = new Personagem("invalido"); // Isso vai lançar um erro
} catch (error) {
    console.log(error.message); // "nao é possivel instanciar a classe abstrata personagem diretamente."
}

const guerreiro = new Guerreiro("Thorin", "espada");
guerreiro.atacar(); // "Thorin atacada com a espada!"
guerreiro.defender(); // "Thorin levanta o escudo para se defender!"

const mago = new mago("Gandalf", "Bola de fogo");
mago.atacar(); //"Gandalf lança a magia Bola de fogo!"
mago.defender(); //"Gandalf usa um escudo magico para se defender!"