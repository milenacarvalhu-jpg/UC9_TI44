import java.util.Scanner;

public class calculadora {
    
    
    Scanner scann = new Scanner(System.in);


    public static void main(String[] agrs){

        System.out.print("-------Bem vindo a Calculadora---------");

        String user = scann.nextLine();
        
    }

    public void Soma(double n3)
    {
        double n1,n2;

        System.out.print("Digite um Numero :");
        n1 = scann.nextDouble();
        System.out.print("Digite outro Numero :");
        n2 = scann.nextDouble();

         n3 = n1+n2;

    } 
}
