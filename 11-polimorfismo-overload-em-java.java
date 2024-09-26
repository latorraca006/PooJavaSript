class personagem {
    // Atrtibutos
    private String nome;
    private int vida;
    // Metodo Constructor da classe Personagem
    public personagem(String nome, int vida) {
        this.nome = nome;
        this.vida = vida;
    }
    // Sobrecarga do metodo atacar
    public void atacar() {
        System.out.println(nome + "realiza um ataque basico!");
    }
    public void atacar(String arma) {
       System.out.println(nome + "ataca com o" + arma + "!");
    } 
   public void atacar(String tipoFlecha, boolean comArco) {
        if (comArco) {
            System.out.println(nome + " dispara flechas " + tipoFlecha + " com um arco!");
      }  else {
        System.out.println(nome + " dispara flechas " + tipoFlecha + " sem arcos!");
      }
    }
    public void receberDano(int dano) {
        vida -= dano;
        System.out.println(nome + "recebeu" + dano + "de dano. Vida restante:" + vida);
    }


}