class Maquiagem {
    #self; 
    #marca; 
    #cor; 
    #tipo; 
    #preco; 
    #quantidade;
    #validade; 
    #descricao; 
    #aplicacao; 
    #efeito; 
    #duracao;

    constructor(self, marca, cor, tipo, preco, quantidade, validade, descricao, aplicacao, efeito, duracao){
    this.#self = self; 
    this.#marca = marca;
    this.#cor = cor;
    this.#tipo = tipo;
    this.#preco = preco;
    this.#quantidade = quantidade;
    this.#validade = validade;
    this.#descricao = descricao;
    this.#aplicacao = aplicacao;
    this.#efeito = efeito;
    this.#duracao = duracao;
    }
    // Metodos Getters e Setters
    // Metodo Getter e Setter para o atributo nome
    get self() {
        return this.#self;
    }
    set self(self) {
        this.#self = self;
    }

     get marca() {
        return this.#marca;
    }
    set marca(marca) {
        this.#marca = marca;
    }

     get cor() {
        return this.#cor;
    }
    set cor(cor) {
        this.#cor = cor;
    }

      get tipo() {
        return this.#tipo;
    }
    set tipo(tipo) {
        this.#tipo = tipo;
    }

     get preco() {
        return this.#preco;
    }
    set preco(preco) {
        this.#preco = preco;
    }

     get quantidade() {
        return this.#quantidade;
    }
    set quantidade(quantidade) {
        this.#quantidade = quantidade;
    }

      get validade() {
        return this.#validade;
    }
    set validade(validade) {
        this.#validade = validade;
    }

          get descricao() {
        return this.#descricao;
    }
    set descricao(descricao) {
        this.#descricao = descricao;
    }

        get aplicacao() {
        return this.#aplicacao;
    }
    set aplicacao(aplicacao) {
        this.#aplicacao = aplicacao;
    }

     get efeito() {
        return this.#efeito;
    }
    set efeito(efeito) {
        this.#efeito = efeito;
    }

    
     get duracao() {
        return this.#duracao;
    }
    set duracao(duracao) {
        this.#duracao = duracao;
    }

}




    