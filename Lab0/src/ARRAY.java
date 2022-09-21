import java.util.Scanner;

public class ARRAY {
    public static void Array(int n){
        int[] arr=new int[n];
        for(int i=0;i<n;i++){
            System.out.print("Enter "+i+"elem:");
            Scanner x=new Scanner(System.in);
            arr[i]=x.nextInt();
        }
        System.out.println("");
        for(int i=0;i<n;i++){
            if (arr[i]%2==0){
                System.out.print(arr[i]+",");
            }
        }
        for(int i=n-1;i>=0;i--){
            if (arr[i]%2!=0){
                System.out.print(arr[i]+",");
            }
        }
    }
}
