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
        console.log(`${this.nome} recebu ${dano} de dano. Vida restante: ${this.vida}`)};
    }
}