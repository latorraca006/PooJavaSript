// Classe base personagem
class personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }

    atacar() {
        console.log(`${this.nome} realiza um ataque basico!`);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebu ${dano} de dano. Vida restante: ${this.vida}`);
    }
}

// Classe Guerreiro que herda de personagem
class Guerreiro extends personagem {
    constructor(nome, vida, arma) {
        super(nome, vida);
        this.arma = arma;
    }

    atacar() {
        console.log(`${this.nome} ataca com a  ${this.arma}!`);
    }
}

// Classe Mago que herda de personagem
class Mago extends personagem {
    constructor(nome, vida, feitico) {
        super(nome, vida);
        this.feitico = feitico;
    }

    atacar() {
        console.log(`${this.nome} lanca  ${this.feitico}!`);
    }
}

// Classe Arqueiro que herda de personagem
class Arqueiro extends personagem {
    constructor(nome, vida, tipoFlecha) {
        super(nome, vida);
        this.tipoFlecha = tipoFlecha;
    }

    atacar() {
        console.log(`${this.nome} dispara flechas ${this.tipoFlecha}!`);
    }
}