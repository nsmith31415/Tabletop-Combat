/**
 * testStuff
 */
public class testStuff {

    public static void main(String[] args) {
        Character test = new Character();
        for(int i=0;i<=20;i++){
            System.out.println("Value: " + i + ", Modifier: " + test.getModifier(i));
        }
    }
}