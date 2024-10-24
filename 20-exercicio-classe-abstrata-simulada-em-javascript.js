class Personagem {
  #nome;
  #vida;
  #forca;
  #defesa;
  #nivel;
  #experiencia;
  #classe;
  #arma;
  #magia;
  #habilidadeEspecial;
  
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    arma,
    magia,
    habilidadeEspecial
  ) {
    if (new.target === Personagem) {
      throw new Error(
        "Não é possível instanciar a classe abstrata Personagem diretamente."
      );
    }
    this.#nome = nome;
    this.#vida = vida;
    this.#forca = forca;
    this.#defesa = defesa;
    this.#nivel = nivel;
    this.#experiencia = experiencia;
    this.#classe = classe;
    this.#arma = arma;
    this.#magia = magia;
    this.#habilidadeEspecial = habilidadeEspecial;
  }

  atacar(...args) {
    throw new Error(
      'Método "atacar()" deve ser implementado na classe derivada.'
    );
  }

  defender() {
    throw new Error(
      'Método "defender()" deve ser implementado na classe derivada.'
    );
  }

  usarMagia() {
    throw new Error(
      'Método "usarMagia()" deve ser implementado na classe derivada.'
    );
  }

  ganharExperiencia() {
    throw new Error(
      'Método "ganharExperiencia()" deve ser implementado na classe derivada.'
    );
  }

  info() {
    throw new Error(
      'Método "info()" deve ser implementado na classe derivada.'
    );
  }

  // Getters e Setters
  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }

  get vida() {
    return this.#vida;
  }
  set vida(vida) {
    this.#vida = vida;
  }

  get forca() {
    return this.#forca;
  }
  set forca(forca) {
    this.#forca = forca;
  }

  get defesa() {
    return this.#defesa;
  }
  set defesa(defesa) {
    this.#defesa = defesa;
  }

  get nivel() {
    return this.#nivel;
  }
  set nivel(nivel) {
    this.#nivel = nivel;
  }

  get experiencia() {
    return this.#experiencia;
  }
  set experiencia(experiencia) {
    this.#experiencia = experiencia;
  }

  get classe() {
    return this.#classe;
  }
  set classe(classe) {
    this.#classe = classe;
  }

  get arma() {
    return this.#arma;
  }
  set arma(arma) {
    this.#arma = arma;
  }

  get magia() {
    return this.#magia;
  }
  set magia(magia) {
    this.#magia = magia;
  }

  get habilidadeEspecial() {
    return this.#habilidadeEspecial;
  }
  set habilidadeEspecial(habilidadeEspecial) {
    this.#habilidadeEspecial = habilidadeEspecial;
  }
}

class Guerreiro extends Personagem {
  #armadura;
  #potenciaAtaque;
  
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    arma,
    magia,
    habilidadeEspecial,
    armadura,
    potenciaAtaque
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      classe,
      arma,
      magia,
      habilidadeEspecial
    );
    this.#armadura = armadura;
    this.#potenciaAtaque = potenciaAtaque;
  }

  atacar(tipoAtaque) {
    return tipoAtaque
      ? `${this.nome} ataca com ${tipoAtaque}!`
      : `${this.nome} ataca com sua arma!`;
  }

  defender() {
    return `${this.nome} se defende usando sua armadura!`;
  }

  ganharExperiencia() {
    this.experiencia += 100;
  }

  info() {
    return `Guerreiro: ${this.nome}, Vida: ${this.vida}, Força: ${this.forca}, Defesa: ${this.defesa}, Armadura: ${this.#armadura}, Potência de Ataque: ${this.#potenciaAtaque}`;
  }

  gritarGuerra() {
    return "Por Asgard! Avante!";
  }
}

class Mago extends Personagem {
  #nivelMagia;
  #elemento;
  
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    arma,
    magia,
    habilidadeEspecial,
    nivelMagia,
    elemento
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      classe,
      arma,
      magia,
      habilidadeEspecial
    );
    this.#nivelMagia = nivelMagia;
    this.#elemento = elemento;
  }

  atacar(tipoAtaque) {
    return `${this.nome} ataca com um feitiço de ${this.#elemento}!`;
  }

  defender() {
    return `${this.nome} se protege com uma barreira mágica!`;
  }

  usarMagia() {
    return `${this.nome} usa magia de nível ${this.#nivelMagia}!`;
  }

  ganharExperiencia() {
    this.experiencia += 150;
  }

  info() {
    return `Mago: ${this.nome}, Vida: ${this.vida}, Força: ${this.forca}, Defesa: ${this.defesa}, Nível de Magia: ${this.#nivelMagia}, Elemento: ${this.#elemento}`;
  }

  invocar() {
    return `${this.nome} invoca uma criatura mágica!`;
  }
}

class Arqueiro extends Personagem {
  #tipoArco;
  #precisao;
  
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    arma,
    magia,
    habilidadeEspecial,
    tipoArco,
    precisao
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      classe,
      arma,
      magia,
      habilidadeEspecial
    );
    this.#tipoArco = tipoArco;
    this.#precisao = precisao;
  }

  atacar(tipoAtaque) {
    return `${this.nome} atira uma flecha com precisão de ${this.#precisao}!`;
  }

  defender() {
    return `${this.nome} se esconde atrás de uma árvore!`;
  }

  ganharExperiencia() {
    this.experiencia += 120;
  }

  info() {
    return `Arqueiro: ${this.nome}, Vida: ${this.vida}, Força: ${this.forca}, Defesa: ${this.defesa}, Tipo de Arco: ${this.#tipoArco}, Precisão: ${this.#precisao}`;
  }

  atirarFlecha() {
    return `${this.nome} atira uma flecha!`;
  }
}

class Ladino extends Personagem {
  #habilidadeFurtiva;
  #agilidade;
  
  constructor(
    nome,
    vida,
    forca,
    defesa,
    nivel,
    experiencia,
    classe,
    arma,
    magia,
    habilidadeEspecial,
    habilidadeFurtiva,
    agilidade
  ) {
    super(
      nome,
      vida,
      forca,
      defesa,
      nivel,
      experiencia,
      classe,
      arma,
      magia,
      habilidadeEspecial
    );
    this.#habilidadeFurtiva = habilidadeFurtiva;
    this.#agilidade = agilidade;
  }

  atacar(tipoAtaque) {
    return `${this.nome} ataca furtivamente!`;
  }

  defender() {
    return `${this.nome} desaparece nas sombras!`;
  }

  usarMagia() {
    return `${this.nome} não usa magia!`;
  }

  ganharExperiencia() {
    this.experiencia += 130;
  }

  info() {
    return `Ladino: ${this.nome}, Vida: ${this.vida}, Força: ${this.forca}, Defesa: ${this.defesa}, Habilidade Furtiva: ${this.#habilidadeFurtiva}, Agilidade: ${this.#agilidade}`;
  }

  desaparecer() {
    return `${this.nome} desaparece!`;
  }
}

const guerreiro = new Guerreiro(
  "Thor",
  100,
  20,
  10,
  1,
  0,
  "Guerreiro",
  "Martelo",
  null,
  "Rage",
  "Escudo",
  30
);
console.log(guerreiro.atacar());
console.log(guerreiro.defender());
guerreiro.ganharExperiencia();
console.log(guerreiro.info());
console.log(guerreiro.gritarGuerra());

const mago = new
{
    
}