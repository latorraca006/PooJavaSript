class Personagem {
    constructor(nome, vida) {
        this.nome = nome;
        this.vida = vida;
    }
    // simulacao de sobrecarga
    atacar(...args) {
        if (args.length === 0) {
            console.log(`${this.nome} atacou ${args[0].nome}`);
        } else if (args.length === 1) {
            const arma = args[0];
            console.log(`${this.nome} ataca com o $!`);
        } else if (args.length === 2) {
            const [tipoFlecha, comArco] = args;
            if (comArco) {
                console.log(`${this.nome} dispara flechas${tipoFlecha} com arco!`);
            } else {
                console.log(`${this.nome} ataca com ${tipoFlecha} sem arco!`);
            }
        } else {
            console.log(`Numero de argumentos nao suportado.`);
        }
    }
    receberDano(dano) {
        this.vida -= dano;
        console.log(`{$this.nome} recebeu {$dano} de dano. Vida restante: {$this.nome}`);
    }
}