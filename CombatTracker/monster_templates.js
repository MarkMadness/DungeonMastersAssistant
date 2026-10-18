/*
 Array(monstersLocal_Template) > Object (containing Key-Value pairs)
    It's like an array of objects.
        An individual object could be considered a dictionary, though it's better to be described as object(s)
            The important distinction is that dictionary describes a usage/pattern, whereas Object is the actual JavaScript data type.
 Properties = ID, ProfileType, etc...
*/
const monstersLocal_Template = [
    { // templateMonster Name
        ID: 0,
        ParentID: null, // ID of the boss/leader monster in the encounter or the parent entity of this monster
        ChildrenIDs: [], // ID's of minions, extensions of the monster, or the next phase of a boss fight
        ProfileType: "Monster", //Unique, Player
        Name: "template",
        Type: "Size type, alignment",
        TypeCategory: "Creature Type",
        Size: "Medium",
        Source: "Homebrew",
        ArmorClass: [10, "natural armor"],
        HitPoints: 1,
        HitPointsRoll: "#d# + #",
        Speed: ["30 ft."],
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
        SavingThrows: ["Strength +5", "Dexterity +5", "Constitution +5", "Intelligence +5", "Wisdom +5", "Charisma +5"],
        Skills: ["Athletics +5", "Acrobatics +5", "Sleight of Hand +5", "Stealth +5", "Arcana +5", "History +5", "Investigation +5", 
            "Nature +5", "Religion +5", "Animal Handling +5", "Insight +5", "Medicine +5", "Persuasion +5", "Deception +5", 
            "Intimidation +5", "Perception +5", "Performance +5", "Survival +5"],
        DamageVulnerabilities: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder", 
            "Bludgeoning", "Piercing", "Slashing"],
        DamageResistances: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder", 
            "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder", 
            "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        ConditionImmunities: ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled", "Incapacitated", "Invisible", "Paralyzed", 
            "Petrified", "Poisoned", "Prone", "Restrained", "Stunned", "Unconscious"],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Truesight 120 ft.", "Tremorsense 60 ft.", "Passive Perception 10"],
        Languages: ["All", "Common", "Draconic", "Elvish", "Dwarvish", "Infernal", "Celestial", "Giant", "Gnomish", "Halfling", "Orc", 
            "Sylvan", "Abyssal", "Undercommon", "Deep Speech", "Primordial", "Goblin", "Gnoll", "Celestial", "Elvish", "Thieves' Cant", 
            "Giant", "Draconic", "Aquan", "Ignan", "Terran", "Auran", "Celestial", "Sylvan", "Telepathy 120 ft."],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Trait One",
                Desc: "Description here."
            },
            {
                Title: "Trait Two",
                Desc: "Description here."
            },
            {
                Title: "Trait Three",
                Desc: "Description here."
            }
        ],
        InnateSpellcasting: [ //Slot: 0 = At Will and for #/Day
            {
                Description: "Description here.",
                SpellModifier: "Intelligence", // Intelligence, Wisdom, or Charisma 
                SpellSaveDC: 20,
                SpellAttackModifier: 20,
                Cantrips: {
                    Slots: 0, // "At will"
                    Spells: ["All"] // All, Eldritch Blast, etc.
                },
                ThreePerDay: {
                    Slots: 0, // "Three per day"
                    Spells: []
                },
                TwoPerDay: {
                    Slots: 0, // "Two per day"
                    Spells: []
                },
                OnePerDay: {
                    Slots: 0, // "One per day"
                    Spells: []
                },
                Level1: {
                    Slots: 9,
                    Spells: ["All"]
                },
                Level2: {
                    Slots: 8,
                    Spells: ["All"]
                },
                Level3: {
                    Slots: 7,
                    Spells: ["All"]
                },
                Level4: {
                    Slots: 6,
                    Spells: ["All"]
                },
                Level5: {
                    Slots: 5,
                    Spells: ["All"]
                },
                Level6: {
                    Slots: 4,
                    Spells: ["All"]
                },
                Level7: {
                    Slots: 3,
                    Spells: ["All"]
                },
                Level8: {
                    Slots: 2,
                    Spells: ["All"]
                },
                Level9: {
                    Slots: 1,
                    Spells: ["All"]
                }
            }
        ],
        Spellcasting: [],
        Actions: [
            {
                Title: "Multiattack",
                Desc: "The creature makes two attacks: one with its 'Action Two' and one with its 'Action Three'."
            },
            {
                Title: "Action Two",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 5) slashing damage."
            },
            {
                Title: "Action Three (Recharge 5-6)",
                Desc: "Description here."
            }
        ],
        BonusActions: [
            {
                Title: "Bonus Action One",
                Desc: "Description here."
            }
        ],
        Reactions: [
            {
                Title: "Reaction One",
                Desc: "Description here."
            }
        ],
        LegendaryActions: [
            {
                Title: "Attack",
                Desc: "The creature makes one 'Action Two' attack."
            },
            {
                Title: "Big Attack (Costs 2 Actions)",
                Desc: "Description here."
            }
        ],
        LairActions: [
            "Description here.",
            "On initiative count 20 (losing initiative ties), the [template] rolls a d20. On a result of ",
            "Description here.",
            "Description here."
        ],
        RegionalEffects: [
            "Description here.",
            "Description here.",
            "Description here.",
            "Description here."
        ],
        Description: "Description here",
        Environments: ["Any"], // Any=Default, Forest, Jungle, Desert, Grassland, Plains, Tundra, Arctic, Mountain, Hills, Swamp, Marsh, Coastal, Ocean, Underwater, River, Lake, Cave, Underground, Volcanic, Ruins, Dungeon, Urban, Rural, Other
        PlaneOfExistence: ["Material Plane"], // Material Plane=Default, Feywild, Shadowfell, Astral Plane, Ethereal Plane, Beastlands, Arborea, Ysgard, Limbo, Pandemonium, Abyss, Carceri, Hades, Gehenna, Nine Hells, Acheron, Mechanus, Arcadia, Mount Celestia, Bytopia, Elysium, Outlands, Elemental Plane of Air, Elemental Plane of Earth, Elemental Plane of Fire, Elemental Plane of Water, Plane of Positive Energy, Plane of Negative Energy, Far Realm, Sigil, Other, Any
        GeographicalLocations: [], // Default=No Specific Location, Country, Region, Province, Territory, City, Town, Village, Settlement, Dungeon, Landmark, Building, etc.
            // Example = [Tridenthia, Aesis, Palace]
        Campaigns_Worlds: ["All"] // All=Default, Denethor (World), Soul of Denethor, Untitled NPC World, Halls of Creation, Chaos Hunters, Nor'Gamak's Campaign, The Black Seed, The Crimson War, Timeline Krosis War, Trials of Valor, Special Events, etc.
    },
];