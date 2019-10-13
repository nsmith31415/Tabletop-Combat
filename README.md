# Tabletop-Combat
A modular approach to simplifying combat for Players in Tabletop RPGs


# TODO:
* Full Character Generator (DnD or other tabletops? random, output to PDF, includes level stats)
    * Picked or random 'type' of character and generate through weighted randoms from there
    * Map generator? https://en.wikipedia.org/wiki/Procedural_generation
    * Picked or random 'type' of map and generate through weighted randoms
        * Combat/turn guide 
        * "It's your turn, what do you do? Action{Attack, Spell} Bonus Actions {} Reaction {} Movement{} (Enabled if on generated battle map
            * Timer for abilities, based on player-set action time length
                * Start combat: Actions take X seconds
                * "Your flaming sphere fizzles out this turn"
                * Track damage over time/healing over time

# Actual process list would likely be more like:
1. Create functioning classes/interactive text-based implementation of following:
    * Characters
    * Actions
    * Bonus Actions
    * Reactions
    * Spells
    * Attacks
    * Marking off uses of abilities, ammo, spell slots, or sorcery points
    * Regaining uses of abilities/etc through short rest
    * Resetting through long rest

2. Create JS React webapp interface
3. Link functions to webapp interface and virtual character sheet
4. Allow (guided, unguided?) creation of character sheet
5. Allow display of full character sheet
6. Create 'combat mode' display specifically outlining attacks, spells, and abilities, easily expandable into detailed descriptions
7. make everything look pretty
8. fix everything because making it look pretty broke it.

# ADVANCED TODO:
9. Make an import/export function using JSON files
10. Allow character storage and logins so characters don't HAVE to be saved as JSON files
