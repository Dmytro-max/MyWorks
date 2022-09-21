import java.util.Scanner;
public class Intager {
    public static void intager(int x){
        x=x%100;
        int b=x%10;
        System.out.print(b);
        System.out.print((x-b)/10);
    }
}
