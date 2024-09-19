// Classe base Pessoa
class Pessoa {
  constructor(nome, idade, altura, peso) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
  //Metodos
  mostrarDados() {
    console.log(
      `Ola, meu nome é ${this.nome}, tenho ${this.idade} anos, tenho ${this.altura} de altura e peso ${this.peso} kg!`
    );
  }
}

// Classe Estudante que herda de pessoa
class Estudante extends Pessoa {
  constructor(nome, idade, altura, peso, curso) {
    super(nome, idade, altura, peso);
    this.curso = curso;
  }
  //Metodos
  mostrarCurso() {
    console.log(
      `Ola, meu curso é ${this.curso}!`
    );
  }
}

// Classe Funcionario que herda de pessoa
class Funcionario extends Pessoa {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso);
    this.salario = salario;
  }
  //Metodos
  mostrarSalario() {
    console.log(`Ola, meu nome é ${this.nome}, e meu salario é ${this.salario}`);
  }
}

// Classe Diretor que herda de Funcionario
class Diretor extends Funcionario {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso, salario);
  }
}

// Classe Professor que herda de Funcionario
class Professor extends Funcionario {
  constructor(nome, idade, altura, peso, salario) {
    super(nome, idade, altura, peso, salario);
  }
}

// Criando objetos aluno, diretor e professor
const aluno = new Estudante(
  "Amanda",
  18,
  1.67,
  54,
  "Progamação de Jogos Digitais"
);
aluno.mostrarDados();
aluno.mostrarCurso();

const diretor = new Diretor("Sergio", 45, 1.65, 65, 3000);
diretor.mostrarDados();
diretor.mostrarSalario();

const professor = new Professor("Wanderson", 40, 1.65, 65, 3000);
professor.mostrarDados();
professor.mostrarSalario();

