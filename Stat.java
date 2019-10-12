/**
 * Stat
 * D&D style stats, where stat modifier = (stat-10)/2
 */
public class Stat {
    private int stat;
    private int mod;
    public Stat(int s){
        stat = s;
        mod = (s-10)/2;
    }
    /**
     * @param stat the stat to set
     */
    public void setStat(int stat) {
        this.stat = stat;
        setMod(stat);
    }
    /**
     * @param stat the stat to use to set the mod
     */
    public void setMod(int stat) {
        this.mod = (stat-10)/2;
    }

    /**
     * @return the stat
     */
    public int getStat() {
        return stat;
    }
    /**
     * @return the mod
     */
    public int getMod() {
        return mod;
    }
}