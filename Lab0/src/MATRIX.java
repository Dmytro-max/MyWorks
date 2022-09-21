import java.util.Scanner;

public class MATRIX {
    public static void Matrix(int m,int n){
        int[][] mass=new int[m][n];
        for(int i=0;i<m;i++){
            for (int y=0;y<n;y++){
                System.out.print("Enter elem ["+i+"]["+y+"]"+":");
                Scanner x=new Scanner(System.in);
                mass[i][y]=x.nextInt();
            }
        }
        for(int i=0;i<m;i++){
            for (int y=1;y<n;y+=2){
                System.out.print(mass[i][y]+",");
            }
        }
        System.out.println("");
    }
}
