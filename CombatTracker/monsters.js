/*
    for InnateSpellcasting, if a slot number is 10 that means 'at will' or unlimited uses
*/

window.monstersLocal = [
    {
        ID: 0,
        ProfileType: "Monster",
        Name: "template",
        Type: "Size type, alignment",
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
            "Intimidation +5", "Performance +5", "Survival +5"],
        DamageVulnerabilities: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder", 
            "Bludgeoning", "Piercing", "Slashing"],
        DamageResistances: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder", 
            "Bludgeoning", "Piercing", "Slashing", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder", 
            "Bludgeoning", "Piercing", "Slashing", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        ConditionImmunities: ["Blinded", "Charmed", "Deafened", "Frightened", "Grappled", "Incapacitated", "Invisible", "Paralyzed", 
            "Petrified", "Poisoned", "Prone", "Restrained", "Stunned", "Unconscious"],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Truesight 120 ft.", "Tremorsense 60 ft.", "Passive Perception 10"],
        Languages: ["Common", "Draconic", "Elvish", "Dwarvish", "Infernal", "Celestial", "Giant", "Gnomish", "Halfling", "Orc", 
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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "On initiative count 20 (losing initiative ties), the [template] rolls a d20. On a result of 11 or higher, the [template] " +
                "takes a lair action to cause one of the following effects. It can't use the same effect two rounds in a row. ",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna " +
                "aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis " +
                "aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
                "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        ],
        Description: "Description here"
    },
    {
        ID: 1,
        ProfileType: "Monster",
        Name: "Aarakocra",
        Type: "Medium humanoid(aarakocra), neutral good",
        Source: "Monster Manual",
        HitPoints: 13,
        HitPointsRoll: "3d8",
        ArmorClass: [12, "natural armor"],
        Speed: ["30 ft."],
        Strength: 10,
        Dexterity: 14,
        Constitution: 10,
        Intelligence: 11,
        Wisdom: 12,
        Charisma: 11,
        SavingThrows: [],
        Skills: ["Perception +5"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 15"],
        Languages: ["Auran"],
        Challenge: [.25, 50],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Dive Attack.",
                Desc: "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target"
            }
        ],
        Actions: [
            {
                Title: "Talon.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."
            },
            {
                Title: "Javelin.",
                Desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage. "
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 2,
        ProfileType: "Monster",
        Name: "Aboleth",
        Type: "Large aberration, lawful evil",
        Source: "Monster Manual",
        HitPoints: 135,
        HitPointsRoll: "18d10 + 36",
        ArmorClass: [17, "natural armor"],
        Speed: ["10 ft.", "swim 40 ft."],
        Strength: 21,
        Dexterity: 9,
        Constitution: 15,
        Intelligence: 18,
        Wisdom: 15,
        Charisma: 18,
        SavingThrows: ["Constitution +6", "Intelligence +8", "Wisdom +6"],
        Skills: ["History +12", "Perception +10"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 120 ft.", "Passive Perception 20"],
        Languages: ["Deep Speech", "Telepathy 120 ft."],
        Challenge: [10, 5900],
        ExtraRewards: null,
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The aboleth can breathe air and water."
            },
            {
                Title: "Mucous Cloud.",
                Desc: "While underwater, the aboleth is surrounded by transformative mucus. A creature that touches the aboleth or that hits it with a melee attack while within 5 feet of it must make a DC 14 Constitution saving throw. On a failure, the creature is diseased for 1d4 hours. The diseased creature can breathe only underwater."
            },
            {
                Title: "Probing Telepathy.",
                Desc: "If a creature communicates telepathically with the aboleth, the aboleth learns the creature's greatest desires if the aboleth can see the creature."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The aboleth makes three tentacle attacks."
            },
            {
                Title: "Tentacle.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 10ft., one target. Hit: 12 (2d6 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Constitution saving throw or become diseased. The disease has no effect for 1 minute and can be removed by any magic that cures disease. After 1 minute, the diseased creature's skin becomes translucent and slimy, the creature can't regain hit points unless it is underwater, and the disease can be removed only by heal or another disease-curing spell of 6th level or higher. When the creature is outside a body of water, it takes 6 (1d12) acid damage every 10 minutes unless moisture is applied to the skin before 10 minutes have passed."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 10ft. one target. Hit: 15 (3d6 + 5) bludgeoning damage."
            },
            {
                Title: "Enslave (3/Day).",
                Desc: "The aboleth targets one creature it can see within 30 feet of it. The target must succeed on a DC 14 Wisdom saving throw or be magically charmed by the aboleth until the aboleth dies or until it is on a different plane of existence from the target. The charmed target is under the aboleth's control and can't take reactions, and the aboleth and the target can communicate telepathically with each other over any distance.#PWhenever the charmed target takes damage, the target can repeat the saving throw. On a success, the effect ends. No more than once every 24 hours, the target can also repeat the saving throw when it is at least 1 mile away from the aboleth."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The aboleth makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Swipe.",
                Desc: "The aboleth makes one tail attack."
            },
            {
                Title: "Psychic Drain (Costs 2 Actions).",
                Desc: "One creature charmed by the aboleth takes 10 (3d6) psychic damage, and the aboleth regains hit points equal to the damage the creature takes."
            }
        ],
        LairActions: ["When fighting inside its lair, an aboleth can invoke the ambient magic to take lair actions. On initiative count 20 (losing initiative ties), the aboleth takes a lair action to cause one of the following effects:", "The aboleth casts phantasmal force (no components required) on any number of creatures it can see within 60 feet of it. While maintaining concentration on this effect, the aboleth can't take other lair actions. If a target succeeds on the saving throw or if the effect ends for it, the target is immune to the aboleth's phantasmal force lair action for the next 24 hours, although such a creature can choose to be affected.", " Pools of water within 90 feet of the aboleth surge outward in a grasping tide. Any creature on the ground within 20 feet of such a pool must succeed on a DC 14 Strength saving throw or be pulled up to 20 feet into the water and knocked prone. The aboleth can't use this lair action again until it has used a different one.", "Water in the aboleth's lair magically becomes a conduit for the creature's rage. The aboleth can target any number of creatures it can see in such water within 90 feet of it. A target must succeed on a DC 14 Wisdom saving throw or take 7 (2d6) psychic damage. The aboleth can't use this lair action again until it has used a different one."],
        Description: "Description here"
    },
    {
        ID: 3,
        ProfileType: "Monster",
        Name: "Deva",
        Type: "Medium Celestial, lawful good",
        Source: "Monster Manual",
        HitPoints: 136,
        HitPointsRoll: "16d8 + 64",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft.", "fly 90 ft."],
        Strength: 18,
        Dexterity: 18,
        Constitution: 18,
        Intelligence: 17,
        Wisdom: 20,
        Charisma: 20,
        SavingThrows: ["Wisdom +9", "Charisma +9"],
        Skills: ["Insight +7", "Perception +9"],
        DamageVulnerabilities: [],
        DamageResistances: ["radiant", "bludgeoning, piercing, and slashing from non magical weapons"],
        DamageImmunities: [],
        ConditionImmunities: ["Charmed", "Exhaustion", "Frightened"],
        Senses: ["darkvision 120 ft.", "passive Perception 19"],
        Languages: ["all", "telepathy 120 ft."],
        Challenge: [10, 5900],
        ExtraRewards: "1 Quartz (1d10 = 8-10)",
        Traits: [
            {
                Title: "Angelic Weapons.",
                Desc: " The deva's weapon attacks are magical. When the deva hits with any wea pon, the weapon deals an extra 4d8 radiant damage (included in the attack). "
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The deva's spell casting ability is Charisma (spell save DC 17). The deva can innately cast the following spells, requiring only verbal components:#PAt will: detect evil and good#P1/day each: commune, raise dead"
            },
            {
                Title: "Magic Resistance",
                Desc: "The deva has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The deva makes two melee attacks. "
            },
            {
                Title: "Mace.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 18 (4d8) radiant damage."
            },
            {
                Title: "Healing Touch (3/Day).",
                Desc: "The deva touches another creature. The target magically regains 20 (4d8 + 2) hit points and is freed from any curse, disease, poison, blindness, or deafness. "
            },
            {
                Title: "Change Shape.",
                Desc: "The deva magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the deva's choice).#PIn a new form, the deva retain s its game statistics and ability to speak, but its AC, movement modes, Strength, Dexterity, and special senses are replaced by those of the new form, and it gains any statistics and capabilities (except class features, legendary actions, and lair actions) that the new form has but that it lacks."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 5,
        ProfileType: "Monster",
        Name: "Planetar",
        Type: "Size type, alignment",
        Source: "Monster Manual",
        HitPoints: 200,
        HitPointsRoll: "16d10 + 112",
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
        ExtraRewards: "1 Pearl (1d10 = 4-10)",
        Traits: [
            {
                Title: "",
                Desc: ""
            }
        ],
        Actions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        Reactions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        LegendaryActions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 6,
        ProfileType: "Monster",
        Name: "Solar",
        Type: "Size type, alignment",
        Source: "Monster Manual",
        HitPoints: 243,
        HitPointsRoll: "18d10 + 144",
        ArmorClass: [10, "natural armor"],
        Speed: ["30 ft."],
        Strength: 8,
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
        ExtraRewards: "1 Diamond",
        Traits: [
            {
                Title: "",
                Desc: ""
            }
        ],
        Actions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        Reactions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        LegendaryActions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 7,
        ProfileType: "Monster",
        Name: "template name",
        Type: "Size type, alignment",
        Source: "Monster Manual",
        HitPoints: 1,
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
        ExtraRewards: "1 Quartz (1d10 = 8-10)",
        Traits: [
            {
                Title: "",
                Desc: ""
            }
        ],
        Actions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        Reactions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        LegendaryActions: [
            {
                Title: "",
                Desc: ""
            }
        ],
        LairActions: [],
        Description: "Description here"
    }
];

window.uniqueLocal = [
    {
        ID: 100000,
        ProfileType: "Unique",
        Name: "template name",
        Type: "Size type, alignment",
        Source: "Monster Manual",
        HitPoints: 1,
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
    {
        ID: 100001,
        ProfileType: "Unique",
        Name: "Omega",
        Type: "gargantuan construct, neutral",
        Source: "Homebrew",
        HitPoints: 999,
        ArmorClass: [25, "natural armor"],
        Speed: ["100 ft.", "fly 100 ft.", "climb 100 ft.", "swim 100 ft.", "hover 100 ft."],
        Strength: 30,
        Dexterity: 30,
        Constitution: 30,
        Intelligence: 30,
        Wisdom: 30,
        Charisma: 30,
        SavingThrows: ["Strength +20", "Dexterity +20", "Constitution +20", "Intelligence +20", "Wisdom +20", "Charisma +20"],
        Skills: ["All +20"],
        DamageVulnerabilities: [],
        DamageResistances: ["Acid", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Poison", "Psychic", "Radiant", "Thunder"],
        DamageImmunities: ["Bludgeoning, Piercing, and Slashing from non-magical weapons"],
        ConditionImmunities: ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled", "Incapacitated", "Paralyzed", "Petrified", "Poisoned", "Prone", "Stunned", "Unconscious"],
        Senses: ["blindsight 60 ft.", "darkvision 120 ft.", "tremorsense 60 ft.", "truesight 120 ft.", "passive perception 30"],
        Languages: ["All", "telepathy 5 miles"],
        Challenge: [30, 155000],
        ExtraRewards: "REWARD: 100 boons, 50 Very Rare Gems, 50 Rare Gems, 50 Uncommon Gems, 50 Common Gems, +3 magical item for each player’s choice, 10 spell scrolls, 1,000,000 gold, 50 Supreme Healing potions",
        Traits: [
            {
                Title: "Legendary Resistances (3/Combat)",
                Desc: "If Omega fails a save, it can choose to succeed instead."
            },
            {
                Title: "Magic Resistance",
                Desc: "Omega has advantage on saving throws against spells and other magical effects.",
            },
            {
                Title: "Magical Weapons",
                Desc: "All Omega’s attacks are magical.",
            },
            {
                Title: "Show of Endurance",
                Desc: "Omega doesn’t show any sign of tiredness, wear & tear, or any indication of the state of hit points or condition.",
            },
            {
                Title: "Immune to Finishers",
                Desc: "Omega cannot be instantly killed by a skill like Quivering Palm, Power Word Kill, or Wish. Instead, Omega automatically saves and takes the successful save amount of damage. If damage isn’t described in the spell, attacker rolls 55 (10d10) force damage.",
            },
        ],
        InnateSpellcasting: [
            {
                Description: "Omega’s innate spellcasting ability is Intelligence, Wisdom, or Charisma depending on the spell (spell save DC 20, +20 to hit). Omega can innately cast the following spells, requiring no material components (Roll 10d12 for damage of all spells that deal damage):",
                Cantrips: {
                    Slots: "at will",
                    Spells: ["all cantrips"]
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
        ],
        Actions: [
            {
                Title: "Melee Offense",
                Desc: "Melee Weapon Attack: +20 to hit, reach 10 ft., one target. Omega channels energy into its hand creating the shape of the desired weapon with the following damage. For every attack, choose which type of attack it will be from the list below:" +  "\n" +
                "Blugeoning | Mace, Hammer, Flail, Maul, Staff | Hit: 26 (4d12 bludgeoning damage)" + "\n" +
                "Slashing | Axe, Sickle, Glaive, Halberd, Sword, Bladed Whip | Hit: 26 (4d12 slashing damage)" + "\n" +
                "Piercing | Dagger, Javelin, Spear, Lance, Morningstar, Rapier, Trident | Hit: 26 (4d12 piercing damage)" + "\n" +
                "Then select what kind of damage is inflicted from the list below:" + "\n" +
                "Acid, Cold, Fire, Force, Lightning, Necrotic, Psychic, Radiant, Thunder" + "\n" +
                "Hit: 26 (4d12) type damage",
            },
            {
                Title: "Ranged Offense",
                Desc: "Ranged Weapon Attack: +20 to hit, reach 1,000 ft., one target. Omega channels energy into its hand creating the shape of the desired weapon with the following damage. For every attack, choose which type of attack it will be from the list below:" +  "\n" +
                "Blugeoning | Sling | Hit: 26 (4d12 bludgeoning damage)" + "\n" +
                "Slashing | Bladed Whip | Hit: 26 (4d12 slashing damage)" + "\n" +
                "Piercing | Crossbow, Dart, Bow, Blowgun | Hit: 26 (4d12 piercing damage)" + "\n" +
                "Then select what kind of damage is inflicted from the list below:" + "\n" +
                "Acid, Cold, Fire, Force, Lightning, Necrotic, Psychic, Radiant, Thunder" + "\n" +
                "Hit: 26 (4d12) type damage",
            },
            {
                Title: "Scythe of Near Death (Recharge 20)",
                Desc: "Melee Weapon Attack: +20 to hit, reach 15 ft., one target. " +  "\n" +
                "If attack hits, a scythe of pure cosmic energy forms in Omega’s hands. It swings at its target, the energy from the blade forming a tornado of colorful energy swirling around the target. It spirals in closer darkening the world around the target for a brief moment as a spark of cosmic light explodes from the target. The target takes an enormous amount of damage leaving them with one hit point remaining." +  "\n" +
                "If attack misses, cosmic light explodes around the target. If the target is a conscious being, they get the feeling if that hit them they would have been near death." +  "\n" +
                "Whether the attack hit or missed, Omega falls prone to one knee and cannot take any actions, legendary actions, or reactions until its next turn.",
            },
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Attack",
                Desc: "Omega makes one attack.",
            },
            {
                Title: "Move",
                Desc: "Move up to Omega’s full speed.",
            },
            {
                Title: "Parry",
                Desc: "Omega can add +2 to his AC to parry an attack that would hit him.",
            },
        ],
        Description: "Description here"
    },
];

window.playersLocal = [
    {
        ID: 1000000,
        ProfileType: "Player",
        Name: "RealLifeName (CharacterName)",
        Type: "Medium humanoid(), alignment",
        Source: "Player's Handbook",
        HitPoints: 1,
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
    {
        ID: 1000001,
        ProfileType: "Player",
        Name: "Adam (CharacterName)",
        Type: "Medium humanoid(), alignment",
        Source: "Player's Handbook",
        HitPoints: 1,
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