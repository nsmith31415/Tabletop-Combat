/**
 * Character
 */
public class Character {

    private int strength;
    private int dexterity;
    private int constitution;
    private int intelligence;
    private int wisdom;
    private int charisma;

    public int getModifier(int stat){
        return ((stat-10)/2);
    }
}