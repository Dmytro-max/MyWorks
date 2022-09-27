package lab0;


public class Case {
    public static Direction caseTask(int x){
        switch (x){
            case 0:
                return Direction.NORTH;
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
        throw new IllegalArgumentException();
    }
}
