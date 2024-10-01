class Volei {
  constructor(
    nome,
    idade,
    altura,
    peso,
    posicao,
    nivel,
    pontos,
    partidasJogadas,
    vitorias,
    derrotas,
    servicos
  ) {
    this.nome = nome;
    this.idade = idade;
    this.altura = altura; // em cm
    this.peso = peso; // em kg
    this.posicao = posicao; // ex: atacante, levantador, etc.
    this.nivel = nivel; // ex: iniciante, intermediário, avançado
    this.pontos = pontos; // pontos acumulados
    this.partidasJogadas = partidasJogadas; // número de partidas jogadas
    this.vitorias = vitorias; // número de vitórias
    this.derrotas = derrotas; // número de derrotas
    this.servicos = servicos; // número de serviços feitos
  }

  // Simulação de sobrecarga
  servir(...args) {
    if (args.length === 0) {
      console.log(`${this.nome} fez um serviço básico!`);
    } else if (args.length === 1) {
      const tipoServico = args[0];
      console.log(`${this.nome} fez um serviço ${tipoServico}!`);
    } else if (args.length === 2) {
      const [tipoServico, forca] = args;
      console.log(
        `${this.nome} fez um serviço ${tipoServico} com força ${forca}!`
      );
    } else {
      console.log(`Número de argumentos não suportado.`);
    }
  }

  marcarPonto() {
    this.pontos++;
    console.log(
      `${this.nome} marcou um ponto! Total de pontos: ${this.pontos}`
    );
  }

  jogarPartida(vitoria) {
    this.partidasJogadas++;
    if (vitoria) {
      this.vitorias++;
      console.log(
        `${this.nome} ganhou a partida! Total de vitórias: ${this.vitorias}`
      );
    } else {
      this.derrotas++;
      console.log(
        `${this.nome} perdeu a partida. Total de derrotas: ${this.derrotas}`
      );
    }
  }

  mostrarEstatisticas() {
    console.log(`Estatísticas de ${this.nome}:`);
    console.log(
      `Idade: ${this.idade}, Altura: ${this.altura}cm, Peso: ${this.peso}kg`
    );
    console.log(`Posição: ${this.posicao}, Nível: ${this.nivel}`);
    console.log(
      `Pontos: ${this.pontos}, Partidas Jogadas: ${this.partidasJogadas}`
    );
    console.log(
      `Vitórias: ${this.vitorias}, Derrotas: ${this.derrotas}, Serviços: ${this.servicos}`
    );
  }
}

class Veiculo {
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  info() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
  }

  som() {
    return "Som do veículo.";
  }
}
