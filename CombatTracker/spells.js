/*
 Array(spellsLocal) > Object (containing Key-Value pairs)
    It's like an array of objects.
        An individual object could be considered a dictionary, though it's better to be described as object(s)
            The important distinction is that dictionary describes a usage/pattern, whereas Object is the actual JavaScript data type.
 Properties = ID, Name, Source, etc...
*/
const spellsLocal = [
    { // templateSpell Name
        ID: 0,
        Name: "template",
        Type: "Spell type", //Conuration, Abjuration, 
        Level: 0, // 0 is cantrip, 1 = 1st-Level, etc
        CastingTime: 1, // 1 = 1 Action
        Range: "Range of the spell",
        Components: ["V", "S"], // V = Verbal, S = 
        Duration: "Duration of the spell",
        Source: "Homebrew",
        InnateSpellcasting: [
            {
                Description: "Omega’s innate spellcasting ability is Intelligence, Wisdom, or Charisma depending on the spell (spell save DC 20, +20 to hit). Omega can innately cast the following spells, requiring no material components (Roll 10d12 for damage of all spells that deal damage):",
                Cantrips: {
                    Slots: "at will",
                    Spells: ["all cantrips"]
                },
                ThreePerDay: {
                    Slots: "3/Day",
                    Spells: ["all three per day spells"]
                },
                TwoPerDay: {
                    Slots: "2/Day",
                    Spells: ["all two per day spells"]
                },
                OnePerDay: {
                    Slots: "1/Day",
                    Spells: ["all one per day spells"]
                },
                Level1: {
                    Slots: 9,
                    Spells: ["all level 1 spells"]
                },
                Level2: {
                    Slots: 8,
                    Spells: ["all level 2 spells"]
                },
                Level3: {
                    Slots: 7,
                    Spells: ["all level 3 spells"]
                },
                Level4: {
                    Slots: 6,
                    Spells: ["all level 4 spells"]
                },
                Level5: {
                    Slots: 5,
                    Spells: ["all level 5 spells"]
                },
                Level6: {
                    Slots: 4,
                    Spells: ["all level 6 spells"]
                },
                Level7: {
                    Slots: 3,
                    Spells: ["all level 7 spells"]
                },
                Level8: {
                    Slots: 2,
                    Spells: ["all level 8 spells"]
                },
                Level9: {
                    Slots: 1,
                    Spells: ["all level 9 spells"]
                }
            }
        ]
    },
];