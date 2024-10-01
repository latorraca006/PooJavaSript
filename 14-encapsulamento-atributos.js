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
}