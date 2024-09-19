// Classe base Pessoa
class Pessoa {
    constructor(nome, idade, altura, peso) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
    }
}

// Classe Estudante que herda de pessoa
class Estudante extends Pessoa {
    constructor(nome, idade, altura, peso, curso) {
        super(nome, idade, altura, peso);
        this.curso = curso;
    }
}

// Classe Funcionario que herda de pessoa
class Funcionario extends Pessoa {
    constructor(nome, idade, altura, peso, salario) {
        super(nome, idade, altura, peso);
        this.salario = salario;
    }
}

// Classe Aluno que herda de Estudante
class Aluno extends Estudante {
    constructor(nome, idade, altura, peso, curso, matricula) {
        super(nome, idade, altura, peso, curso);
    }
}