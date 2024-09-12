class Pessoa {
    constructor(nome, idade, altura, peso) { // Atributos
        // Inicialização dos atributos
        this.nome = "nome";
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
    // Metodo
    falar() {
        console.log(`Ola, meu nome é ${this.nome}!`);
    }
}
// Objeto/Instancia "pessoal" criada apartir da classe pessoa
const pessoal = new Pessoal('Amanda', 18, 1.68, 54.2);
pessoal.falar(); // Chamada do metodo falar() da classe pessoa