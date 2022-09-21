package lab0;
enum Side{NORTH,WEST,SOUTH,EAST}
public class Case {
    public static Side casetask(int x){
        switch (x){
            case 0:
                return Side.NORTH;
            case 1:
                System.out.println("Захід");
                break;
            case 2:
                System.out.println("Південь");
                break;
            case 3:
                System.out.println("Схід");
                break;
        }
    }
}
