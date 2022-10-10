import java.util.Scanner;

public class CalculadoraIMC {
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in); //scanner é um método que precisa ser importado. A variável entrada se torna scanner?

        System.out.println("Qual seu nome?");
        String nome = entrada.nextLine();   //variável nome recebe a próxima string que escrever no terminal



        System.out.println("Qual a sua idade");
        int idade = entrada.nextInt(); //variável idade recebe a próxima int que escrever no terminal

        System.out.println("Qual sua altura(m)?");
        double altura = entrada.nextDouble(); // variável altura recebe a próxima double que escrever no terminal

        System.out.println("Qual o seu peso?");
        double peso = entrada.nextDouble();

        //calcula o IMC = peso / altura ^ 2

        double imc = peso / Math.pow(altura, 2);

        System.out.println("Olá, meu nome é " + nome + " e tenho " + idade + " anos! e meu IMC é igual a: " + imc);

        System.out.printf("Meu IMC é igual a %.2f \n", imc);

        System.out.printf("Olá, meu nome é %s e tenho %d anos! Meu peso é %f e minha altura é %f \n", nome, idade, peso, altura );

    }
}
