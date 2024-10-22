// Classe abstrata "Personagem"
abstact class Personagem {
    protected String nome;

    // Construtor da classe Personagem
    public Personagem(String nome) {
        this.nome = nome;
    }

    // Metodos abstratos
    public abstract void atacar();
    public abstract void defender();
}

// Classe derivada "Guerreiro"
class Guerreiro extends Personagem {
    private String arma;

    // Construtor da classe Guerreiro
    public Guerreiro(String nome, String arma) {
        super(nome);
        this.arma = arma;
    }

    // sobrescrita do metodo atacar da classe abstrata personagem
    @Override
    public void atacar() {
        System.out.println(nome + " ataca com a " + arma + "!");
    }

    // sobrescrita do metodo defender da classe abstrata personagem
    @Override
    public void defender() {
        System.out.println(nome + " defende-se com a " + arma + "!");
    }
}

// Classe derivada "Mago"
class Mago extends Personagem {
    private String magia;

    // Construtor da classe Mago
    public Mago(String nome, String magia) {
        super(nome);
        this.magia = magia;
    }

    // sobrescrita do metodo atacar da classe abstrata personagem
    @Override
    public void atacar() {
        System.out.println(nome + " lanca a magia " + magia + "!");
    }

    // sobrescrita do metodo defender da classe abstrata personagem
    @Override
    public void defender() {
        System.out.println(nome + " usa o escudo magico para se defender!");
    }
}

// Classe principal
public class main {
    public static void main(String[] args) {
        // criando objetos/instancias
        //personagem personagem = new personagem("invalido"); // nao é possivel instanciar

        Guerreiro guerreiro = new Guerreiro("Thorin", "Espada");
        guerreiro.atacar(); // saida: " Thorin ataca com a espada!"
        guerreiro.defender(); // saida: "Thorin levanta o escudo para se defender!"

        Mago mago = new Mago("Gandalf", "Bola de Fogo");
        mago.atacar(); // saida: "Gandalf lança a magia bola de fogo!"
        mago.defender(); // saida: "Gandalf usa o escudo magico para se defender!"
    }
}