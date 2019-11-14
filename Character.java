/**
 * Character (Character Sheet)
 * Key Elements:
 *  Level
 *    Class
 *    Health (Temp healht?)
 *  Stats
 *    Skills
 *    Saving Throws
 *  Combat
 *    Attacks
 *    Spells
 *      Spell slots
 *      Casting time (Action/Bonus Action/Reaction)
 * Abilities   
 *    Actions
 *    Bonus Actions
 *    Reactions
 * Rests
 *    Long rest (reset everything)
 *    Short rest (reset some things)
 */
public class Character {

    //Stats
    private Stat strength;
    private Stat dexterity;
    private Stat constitution;
    private Stat intelligence;
    private Stat wisdom;
    private Stat charisma;

    //Level
    private int level;
    private int proficiency;

    //Default constructor - all stats = 0 until character manually changes
    public Character(){
        strength = new Stat(0);
        dexterity = new Stat(0);
        constitution = new Stat(0);
        intelligence = new Stat(0);
        wisdom = new Stat(0);
        charisma = new Stat(0);

    }

    //array constructor - stats set in order (idk if this is needed)
    public Character(int[] statarray){
        strength = new Stat(statarray[0]);
        dexterity = new Stat(statarray[1]);
        constitution = new Stat(statarray[2]);
        intelligence = new Stat(statarray[3]);
        wisdom = new Stat(statarray[4]);
        charisma = new Stat(statarray[5]);
    }
    public int getModifier(int stat){
        return ((stat-10)/2);
    }
}