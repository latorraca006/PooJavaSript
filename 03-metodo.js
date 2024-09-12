class Pessoa {
    constructor(nome, altura, peso, genero) { // Atributos
        // Inicialização dos atributos
        this.nome = nome;
        this.altura = altura;
        this.peso = peso;
        this.genero = genero;
    }
    //Metodos
    falar() {
    console.log(`Ola, meu nome é ${this.nome}!`);
    }
}