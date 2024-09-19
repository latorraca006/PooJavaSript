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

// Criando objetos aluno, diretor e professor
const aluno = new Estudante("Amanda", 18, 1.67, 54, "Progamação de Jogos Digitais");
const diretor = new Diretor("Sergio", 45, 1.65, 65, 3000);
const professor = new Professor("Wanderson", 40, 1.65, 65, 3000);

// Mostrando no console  a saida
console.log(aluno); // Saida: Estudante {nome: 'Amanda', idade: 18, altura:1.67, peso: 54, curso: 'Progamação de Jogos Digitais'}
console.log(diretor); // Saida: Diretor {nome: 'Sergio', idade: 45, altura:1.65, peso: 65, salario: '3000'}
console.log(professor); // Saida: professor {nome: 'Wanderson', idade: 40, altura:1.65, peso: 65, salario: '3000'}