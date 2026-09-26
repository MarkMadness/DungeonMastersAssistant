const monstersLocal_Template = [
    { // templateMonster
        ID: 0,
        ProfileType: "Monster",
        Name: "template",
        Type: "Size type, alignment",
        TypeCategory: "Creature Type",
        Source: "Monster Manual",
        HitPoints: 1,
        HitPointsRoll: "#d# + #",
        ArmorClass: [10, "natural armor"],
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
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                Title: "Trait Two",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                Title: "Trait Three",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
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
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 18 (2d8 + 5) piercing damage. " +
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        Reactions: [
            {
                Title: "Reaction One",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        LegendaryActions: [
            {
                Title: "Attack",
                Desc: "The creature makes one 'Action Two' attack."
            },
            {
                Title: "Big Attack (Costs 2 Actions)",
                Desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ],
        LairActions: [
            "Lorem ipsum dolor sit amet",
            "On initiative count 20 (losing initiative ties), the [template] rolls a d20. On a result of ",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
        ],
        RegionalEffects: [
            "Lorem ipsum dolor sit amet",
            "On initiative count 20 (losing initiative ties), the [template] rolls a d20. On a result of ",
            "Lorem ipsum dolor sit amet",
            "Lorem ipsum dolor sit amet"
        ],
        Description: "Description here"
    },
];

const uniqueLocal_Template = [
    { // templateUnique
        ID: 100000,
        ProfileType: "Unique",
        Name: "template name",
        Type: "Size type, alignment",
        TypeCategory: "Creature Type",
        Source: "Monster Manual",
        HitPoints: 1,
        HitPointsRoll: "",
        ArmorClass: [10, "natural armor"],
        Speed: ["30 ft."],
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: [],
        Languages: [],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [],
        InnateSpellcasting: [
            {
                Description: "",
                Cantrips: {
                    Slots: "at will",
                    Spells: [""]
                },
                Level1: {
                    Slots: 4,
                    Spells: [""]
                },
                Level2: {
                    Slots: 3,
                    Spells: [""]
                },
                Level3: {
                    Slots: 3,
                    Spells: [""]
                },
                Level4: {
                    Slots: 3,
                    Spells: [""]
                },
                Level5: {
                    Slots: 2,
                    Spells: [""]  
                },
                Level6: {
                    Slots: 1,
                    Spells: [""]  
                },
                Level7: {
                    Slots: 1,
                    Spells: [""]
                },
                Level8: {
                    Slots: 1,
                    Spells: [""]
                },
                Level9: {
                    Slots: 1,
                    Spells: [""]
                }
            }
        ],
        Actions: [],
        Reactions: [],
        LegendaryActions: [],
        Description: "Description here"
    },
];

const playersLocal_Template = [
    { // templatePlayer
        ID: 1000000,
        ProfileType: "Player",
        Name: "CharacterName (RealLifeName)",
        Type: "Medium humanoid(), alignment",
        Source: "Player's Handbook",
        HitPoints: 1,
        HitPointsRoll: "",
        ArmorClass: [10, "natural armor"],
        Speed: ["30 ft."],
        Strength: 10,
        Dexterity: 10,
        Constitution: 10,
        Intelligence: 10,
        Wisdom: 10,
        Charisma: 10,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: [],
        Languages: [],
        Challenge: [1, 200],
        Traits: [],
        Actions: [],
        Reactions: [],
        LegendaryActions: [],
        Description: "Description here"
    },
];