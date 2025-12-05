import java.util.Scanner;


public class duble {
    
    public static void main(String[] agrs)
    {
        // em java as variaveis do tipo flutuante sao declarade como Double!

        Scanner scanner = new Scanner(System.in);

        int n1,n2,n3;

        n1 = scanner.nextInt();
        n2 = scanner.nextInt();
        n3 = n1+n2;

        System.out.print("A soma entre os numero " + n1 +" e " + n2 + " é :" + n3 );
    }
}
