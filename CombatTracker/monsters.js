/*
    for InnateSpellcasting, if a slot number is 10 that means 'at will' or unlimited uses
*/

// YOUR EXISTING DATA
const monstersLocal = [
    { // templateMonster
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
        Name: "Animated Armor",
        Type: "Medium construct, unaligned",
        Source: "Monster Manual",
        HitPoints: 33,
        HitPointsRoll: "6d8 + 6",
        ArmorClass: [18, "natural armor"],
        Speed: ["25 ft."],
        Strength: 14,
        Dexterity: 11,
        Constitution: 13,
        Intelligence: 1,
        Wisdom: 3,
        Charisma: 1,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison", "Psychic"],
        ConditionImmunities: ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Paralyzed", "Petrified", "Poisoned"],
        Senses: ["Blindsight 60 ft. (blind beyond this radius)", "Passive Perception 6"],
        Languages: [],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Antimagic Susceptibility.",
                Desc: "The armor is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the armor must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                Title: "False Appearance.",
                Desc: "If the armor is motionless at the start of combat, it has advantage on its initiative roll. Moreover, if a creature has not observed the armor move or act, that creature must succeed on a DC 10 Intelligence (Investigation) check to discern that the armor is animate."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The armor makes two melee attacks."
            },
            {
                Title: "Slam.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) bludgeoning damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 8,
        ProfileType: "Monster",
        Name: "Flying Sword",
        Type: "Small construct, unaligned",
        Source: "Monster Manual",
        HitPoints: 17,
        HitPointsRoll: "5d8 - 5",
        ArmorClass: [17, "natural armor"],
        Speed: ["0 ft.", "fly 50 ft. (hover)"],
        Strength: 12,
        Dexterity: 15,
        Constitution: 11,
        Intelligence: 1,
        Wisdom: 5,
        Charisma: 1,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison", "Psychic"],
        ConditionImmunities: ["Blinded", "Charmed", "Deafened", "Frightened", "Paralyzed", "Petrified", "Poisoned"],
        Senses: ["Blindsight 60 ft. (blind beyond this radius)", "Passive Perception 7"],
        Languages: [],
        Challenge: [0.25, 50],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Antimagic Susceptibility.",
                Desc: "The sword is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the sword must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                Title: "False Appearance.",
                Desc: "While the sword remains motionless and isn't flying, it is indistinguishable from a normal sword."
            }
        ],
        Actions: [
            {
                Title: "Longsword.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) slashing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 9,
        ProfileType: "Monster",
        Name: "Rug of Smothering",
        Type: "Large construct, unaligned",
        Source: "Monster Manual",
        HitPoints: 33,
        HitPointsRoll: "6d10",
        ArmorClass: [12, "natural armor"],
        Speed: ["10 ft."],
        Strength: 17,
        Dexterity: 14,
        Constitution: 10,
        Intelligence: 1,
        Wisdom: 3,
        Charisma: 1,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison", "Psychic"],
        ConditionImmunities: ["Blinded", "Charmed", "Deafened", "Frightened", "Paralyzed", "Petrified", "Poisoned"],
        Senses: ["Blindsight 60 ft. (blind beyond this radius)", "Passive Perception 6"],
        Languages: [],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Antimagic Susceptibility.",
                Desc: "The rug is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the rug must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for 1 minute."
            },
            {
                Title: "Damage Transfer.",
                Desc: "While it is grappling a creature, the rug takes only half the damage dealt to it, and the creature grappled by the rug takes the other half."
            },
            {
                Title: "False Appearance.",
                Desc: "While the rug remains motionless, it is indistinguishable from a normal rug."
            }
        ],
        Actions: [
            {
                Title: "Smother.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. The rug attaches to the target. If the target is Medium or smaller, it is also grappled (escape DC 13) and restrained. Until this grapple ends, the rug can automatically hit the target with its Smother, and the rug can't make Smother attacks against other targets. The target, or a creature within 5 feet of it, can take an action to try to detach the rug, doing so with a successful DC 13 Strength check. On the rug's turn, if the target is still grappled and restrained, the target takes 7 (2d6) bludgeoning damage and must succeed on a DC 13 Constitution saving throw or begin suffocating."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 10,
        ProfileType: "Monster",
        Name: "Ankheg",
        Type: "Large monstrosity, unaligned",
        Source: "Monster Manual",
        HitPoints: 39,
        HitPointsRoll: "6d10 + 6",
        ArmorClass: [14, "natural armor"],
        Speed: ["30 ft.", "burrow 10 ft."],
        Strength: 17,
        Dexterity: 11,
        Constitution: 13,
        Intelligence: 1,
        Wisdom: 13,
        Charisma: 6,
        SavingThrows: [],
        Skills: ["Perception +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Tremorsense 60 ft.", "Passive Perception 13"],
        Languages: [],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage plus 3 (1d6) acid damage. If the target is a Large or smaller creature, it is grappled (escape DC 13). Until this grapple ends, the ankheg can bite only the grappled creature and has advantage on attack rolls to do so."
            },
            {
                Title: "Acid Spray (Recharge 6).",
                Desc: "The ankheg spits acid in a line 30 feet long and 5 feet wide, provided that it has no creature grappled. Each creature in the line must make a DC 13 Dexterity saving throw, taking 10 (3d6) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 11,
        ProfileType: "Monster",
        Name: "Azer",
        Type: "Medium elemental, lawful neutral",
        Source: "Monster Manual",
        HitPoints: 39,
        HitPointsRoll: "6d8 + 12",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft."],
        Strength: 17,
        Dexterity: 12,
        Constitution: 15,
        Intelligence: 12,
        Wisdom: 13,
        Charisma: 10,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Passive Perception 11"],
        Languages: ["Ignan"],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Heated Body.",
                Desc: "A creature that touches the azer or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage."
            },
            {
                Title: "Heated Weapons.",
                Desc: "When the azer hits with a metal melee weapon, it deals an extra 3 (1d6) fire damage (included in the attack)."
            },
            {
                Title: "Illumination.",
                Desc: "The azer sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The azer makes two warhammer attacks."
            },
            {
                Title: "Warhammer.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, or 7 (1d10 + 2) bludgeoning damage if used with two hands to make a melee attack, plus 3 (1d6) fire damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 12,
        ProfileType: "Monster",
        Name: "Banshee",
        Type: "Medium undead, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 58,
        HitPointsRoll: "13d8",
        ArmorClass: [12, "natural armor"],
        Speed: ["0 ft.", "fly 40 ft. (hover)"],
        Strength: 1,
        Dexterity: 14,
        Constitution: 10,
        Intelligence: 12,
        Wisdom: 11,
        Charisma: 17,
        SavingThrows: [],
        Skills: ["Perception +2"],
        DamageVulnerabilities: [],
        DamageResistances: ["Acid", "Fire", "Lightning", "Thunder", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Cold", "Necrotic", "Poison"],
        ConditionImmunities: ["Charmed", "Exhaustion", "Frightened", "Grappled", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 12"],
        Languages: ["Common", "Elvish"],
        Challenge: [4, 1100],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Detect Life.",
                Desc: "The banshee can magically sense the presence of living creatures up to 5 miles away. She knows the general direction they're in but not their exact locations."
            },
            {
                Title: "Incorporeal Movement.",
                Desc: "The banshee can move through other creatures and objects as if they were difficult terrain. She takes 5 (1d10) force damage if she ends her turn inside an object."
            }
        ],
        Actions: [
            {
                Title: "Corrupting Touch.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 13 (3d8) necrotic damage."
            },
            {
                Title: "Horrifying Visage.",
                Desc: "Each non-undead creature within 60 feet of the banshee that can see her must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. A creature frightened in this way ages 1d4 x 10 years, and it must repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to this banshee's Horrifying Visage for the next 24 hours. The aging effect can be reversed with a greater restoration spell, but only within 24 hours of it occurring."
            },
            {
                Title: "Wail (1/Day).",
                Desc: "The banshee releases a mournful wail, provided that she isn't in sunlight. Each non-undead creature within 30 feet of her that can hear her must make a DC 13 Constitution saving throw. On a failure, a creature drops to 0 hit points. On a success, a creature takes 18 (4d8) psychic damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 13,
        ProfileType: "Monster",
        Name: "Basilisk",
        Type: "Medium monstrosity, unaligned",
        Source: "Monster Manual",
        HitPoints: 52,
        HitPointsRoll: "8d8 + 16",
        ArmorClass: [15, "natural armor"],
        Speed: ["20 ft."],
        Strength: 16,
        Dexterity: 8,
        Constitution: 15,
        Intelligence: 2,
        Wisdom: 8,
        Charisma: 7,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 9"],
        Languages: [],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Petrifying Gaze.",
                Desc: "When a creature that can see the basilisk's eyes starts its turn within 30 feet of the basilisk, the basilisk can force it to make a DC 12 Constitution saving throw if the basilisk isn't incapacitated and can see the creature. If the saving throw fails by 5 or more, the creature is instantly petrified. Otherwise, a creature that fails the save begins to turn to stone and is restrained. The restrained creature must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success. The petrification lasts until the creature is freed by the greater restoration spell or other magic.#PUnless surprised, a creature can avert its eyes to avoid the saving throw at the start of its turn. If the creature does so, it can't see the basilisk until the start of its next turn, when it can avert its eyes again. If it looks at the basilisk in the meantime, it must immediately make the save.#PIf the basilisk sees its reflection within 30 feet of it in bright light, it mistakes itself for a rival and targets itself with its gaze."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d8 + 1) piercing damage plus 7 (2d6) poison damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 14,
        ProfileType: "Monster",
        Name: "Behir",
        Type: "Huge monstrosity, neutral evil",
        Source: "Monster Manual",
        HitPoints: 168,
        HitPointsRoll: "16d12 + 64",
        ArmorClass: [17, "natural armor"],
        Speed: ["50 ft.", "climb 40 ft."],
        Strength: 23,
        Dexterity: 16,
        Constitution: 18,
        Intelligence: 7,
        Wisdom: 14,
        Charisma: 12,
        SavingThrows: [],
        Skills: ["Perception +6", "Stealth +5"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Darkvision 90 ft.", "Passive Perception 16"],
        Languages: ["Draconic"],
        Challenge: [11, 7200],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The behir makes two attacks: one with its bite and one to constrict."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) piercing damage."
            },
            {
                Title: "Constrict.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one Large or smaller creature. Hit: 17 (2d10 + 6) bludgeoning damage plus 17 (2d10 + 6) piercing damage, and the target is grappled (escape DC 16). Until the grapple ends, the target is restrained, and the behir can't constrict another target."
            },
            {
                Title: "Lightning Breath (Recharge 5-6).",
                Desc: "The behir exhales a line of lightning that is 20 feet long and 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
            },
            {
                Title: "Swallow.",
                Desc: "The behir makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is also swallowed, and the grapple ends. While swallowed, the target is blinded and restrained, it has total cover against attacks and other effects outside the behir, and it takes 21 (6d6) acid damage at the start of each of the behir's turns. A behir can have only one target swallowed at a time. If the behir dies, a swallowed creature is no longer restrained by it and can escape from the corpse by using 15 feet of movement, exiting prone."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 15,
        ProfileType: "Monster",
        Name: "Beholder",
        Type: "Large aberration, lawful evil",
        Source: "Monster Manual",
        HitPoints: 180,
        HitPointsRoll: "19d10 + 76",
        ArmorClass: [18, "natural armor"],
        Speed: ["0 ft.", "fly 20 ft. (hover)"],
        Strength: 10,
        Dexterity: 14,
        Constitution: 18,
        Intelligence: 17,
        Wisdom: 15,
        Charisma: 17,
        SavingThrows: ["Intelligence +8", "Wisdom +7", "Charisma +8"],
        Skills: ["Perception +12"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 120 ft.", "Passive Perception 22"],
        Languages: ["Deep Speech", "Undercommon"],
        Challenge: [13, 10000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Antimagic Cone.",
                Desc: "The beholder's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the beholder decides which way the cone faces and whether the cone is active. The area works against the beholder's own eye rays."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage."
            },
            {
                Title: "Eye Rays.",
                Desc: "The beholder shoots three of the following eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:#P1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the beholder for 1 hour, or until the beholder harms the creature.#P2. Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.#P3. Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.#P4. Slowing Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw. On a failed save, the target's speed is halved for 1 minute, and it takes a -2 penalty to AC and Dexterity saving throws. In addition, the creature can't use reactions. On its turn, it can use either an action or a bonus action, not both. It can't make more than one attack on its turn regardless of its abilities. If the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or higher, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.#P5. Enervation Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 36 (10d6) necrotic damage on a failed save, or half as much damage on a successful one.#P6. Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the beholder moves it up to 30 feet in any direction. It is restrained by the ray's magic until the start of the beholder's next turn or until the beholder is incapacitated. If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is instead moved up to 30 feet in any direction. The beholder can also exert fine control on objects with this ray, such as manipulating a simple tool or opening a door or a container.#P7. Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or if another creature takes an action to shake it awake. This ray has no effect on constructs and undead.#P8. Petrification Ray. The targeted creature must make a DC 16 Constitution saving throw. If the save fails by 5 or more, the creature is instantly petrified. On a failed save, a creature starts to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. If successful, the effect ends. If it fails, the creature is petrified until freed by the greater restoration spell or similar magic.#P9. Disintegration Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, it is disintegrated.#P10. Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. A creature reduced to 0 hit points by this attack dies."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Eye Ray (Costs 2 Actions).",
                Desc: "The beholder uses one random eye ray."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 16,
        ProfileType: "Monster",
        Name: "Death Tyrant",
        Type: "Large undead, lawful evil",
        Source: "Monster Manual",
        HitPoints: 180,
        HitPointsRoll: "19d10 + 76",
        ArmorClass: [19, "natural armor"],
        Speed: ["0 ft.", "fly 20 ft. (hover)"],
        Strength: 10,
        Dexterity: 14,
        Constitution: 19,
        Intelligence: 17,
        Wisdom: 15,
        Charisma: 17,
        SavingThrows: ["Intelligence +8", "Wisdom +7", "Charisma +8"],
        Skills: ["Perception +12"],
        DamageVulnerabilities: [],
        DamageResistances: ["Necrotic"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Exhaustion", "Poisoned", "Prone"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 22"],
        Languages: ["Deep Speech", "Undercommon"],
        Challenge: [14, 11500],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Death Burst.",
                Desc: "When the death tyrant dies, its body disgorges viscous fluid and 2d6 eye rot zombies within 30 feet of it. Each eye rot zombie is under the DM's control and acts on its own initiative count."
            },
            {
                Title: "Turned by Light.",
                Desc: "If the death tyrant starts its turn in bright light, it must succeed on a DC 15 Charisma saving throw or flee from the light by the fastest available means on its next turn, using its move to escape rather than to attack."
            },
            {
                Title: "Antimagic Cone.",
                Desc: "The death tyrant's central eye creates an area of antimagic, as in the antimagic field spell, in a 150-foot cone. At the start of each of its turns, the death tyrant decides which way the cone faces and whether the cone is active. The area works against the death tyrant's own eye rays."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 14 (4d6) piercing damage."
            },
            {
                Title: "Eye Rays.",
                Desc: "The death tyrant shoots three of the following eye rays at random (reroll duplicates), choosing one to three targets it can see within 120 feet of it:#P1. Charm Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be charmed by the death tyrant for 1 hour, or until the death tyrant harms the creature.#P2. Paralyzing Ray. The targeted creature must succeed on a DC 16 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.#P3. Fear Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.#P4. Withering Ray. The targeted creature must make a DC 16 Constitution saving throw, taking 45 (10d8) necrotic damage on a failed save, or half as much damage on a successful one.#P5. Telekinetic Ray. If the target is a creature, it must succeed on a DC 16 Strength saving throw or the death tyrant moves it up to 30 feet in any direction. It is restrained by the ray's magic until the start of the death tyrant's next turn or until the death tyrant is incapacitated. If the target is an object weighing 300 pounds or less that isn't being worn or carried, it is instead moved up to 30 feet in any direction.#P6. Sleep Ray. The targeted creature must succeed on a DC 16 Wisdom saving throw or fall asleep and remain unconscious for 1 minute. The target awakens if it takes damage or if another creature takes an action to shake it awake. This ray has no effect on constructs and undead.#P7. Petrification Ray. The targeted creature must make a DC 16 Constitution saving throw. If the save fails by 5 or more, the creature is instantly petrified. On a failed save, a creature starts to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn, becoming petrified on a failure or ending the effect on a success.#P8. Disintegration Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 45 (10d8) force damage. If this damage reduces the creature to 0 hit points, it is disintegrated.#P9. Death Ray. The targeted creature must succeed on a DC 16 Dexterity saving throw or take 55 (10d10) necrotic damage. A creature reduced to 0 hit points by this attack dies."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Eye Ray (Costs 2 Actions).",
                Desc: "The death tyrant uses one random eye ray."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 17,
        ProfileType: "Monster",
        Name: "Spectator",
        Type: "Medium aberration, lawful neutral",
        Source: "Monster Manual",
        HitPoints: 39,
        HitPointsRoll: "6d8 + 12",
        ArmorClass: [14, "natural armor"],
        Speed: ["0 ft.", "fly 30 ft. (hover)"],
        Strength: 8,
        Dexterity: 14,
        Constitution: 14,
        Intelligence: 13,
        Wisdom: 14,
        Charisma: 11,
        SavingThrows: [],
        Skills: ["Perception +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned", "Prone"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 16"],
        Languages: ["Deep Speech", "Telepathy 60 ft."],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage."
            },
            {
                Title: "Eye Rays.",
                Desc: "The spectator shoots up to two of the following magical eye rays at random (reroll duplicates), choosing one or two targets it can see within 90 feet of it:#P1. Confusion Ray. The targeted creature must succeed on a DC 13 Wisdom saving throw or be unable to take reactions until the start of the spectator's next turn. On its turn, the creature can't move, and it uses its action to make a melee or ranged attack against a randomly determined creature within range. If no creature is within range, the creature does nothing on its turn.#P2. Paralyzing Ray. The target creature must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.#P3. Fear Ray. The targeted creature must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.#P4. Wounding Ray. The targeted creature must succeed on a DC 13 Constitution saving throw or take 16 (3d10) necrotic damage."
            },
            {
                Title: "Create Food and Water.",
                Desc: "The spectator magically creates enough food and water to sustain itself for 24 hours."
            }
        ],
        Reactions: [
            {
                Title: "Spell Reflection.",
                Desc: "When a spell that targets only the spectator is cast on it, the spectator can use its reaction to cause the spell to target its creator instead, provided the creator is within range of its own spell."
            }
        ],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 18,
        ProfileType: "Monster",
        Name: "Needle Blight",
        Type: "Medium plant, neutral evil",
        Source: "Monster Manual",
        HitPoints: 22,
        HitPointsRoll: "5d8",
        ArmorClass: [12, ""],
        Speed: ["20 ft."],
        Strength: 6,
        Dexterity: 15,
        Constitution: 11,
        Intelligence: 4,
        Wisdom: 10,
        Charisma: 3,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: ["Fire"],
        DamageResistances: ["Piercing"],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 10"],
        Languages: ["Understands Common and Druidic but can't speak"],
        Challenge: [0.25, 50],
        ExtraRewards: "",
        Traits: [
            {
                Title: "False Appearance.",
                Desc: "While the blight remains motionless, it is indistinguishable from a dead shrub."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The blight makes two claw attacks."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage."
            },
            {
                Title: "Needle Spray (Recharge 5-6).",
                Desc: "The blight launches needles in a 15-foot cone. Each creature in that area must make a DC 10 Dexterity saving throw, taking 7 (2d6) piercing damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 19,
        ProfileType: "Monster",
        Name: "Twig Blight",
        Type: "Small plant, neutral evil",
        Source: "Monster Manual",
        HitPoints: 4,
        HitPointsRoll: "1d6 + 1",
        ArmorClass: [13, "natural armor"],
        Speed: ["20 ft."],
        Strength: 6,
        Dexterity: 13,
        Constitution: 12,
        Intelligence: 4,
        Wisdom: 8,
        Charisma: 3,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: ["Fire"],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 9"],
        Languages: [],
        Challenge: [0.125, 25],
        ExtraRewards: "",
        Traits: [
            {
                Title: "False Appearance.",
                Desc: "While the blight remains motionless, it is indistinguishable from a dead shrub or shoot."
            }
        ],
        Actions: [
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 20,
        ProfileType: "Monster",
        Name: "Vine Blight",
        Type: "Medium plant, neutral evil",
        Source: "Monster Manual",
        HitPoints: 26,
        HitPointsRoll: "4d8 + 8",
        ArmorClass: [12, ""],
        Speed: ["10 ft."],
        Strength: 15,
        Dexterity: 8,
        Constitution: 14,
        Intelligence: 5,
        Wisdom: 10,
        Charisma: 3,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: ["Fire"],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: ["Blinded", "Deafened"],
        Senses: ["Blindsight 60 ft. (blind beyond this radius)", "Passive Perception 10"],
        Languages: [],
        Challenge: [0.5, 100],
        ExtraRewards: "",
        Traits: [
            {
                Title: "False Appearance.",
                Desc: "While the blight remains motionless, it is indistinguishable from an ordinary vine."
            }
        ],
        Actions: [
            {
                Title: "Constrict.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage, and the target is grappled (escape DC 12). Until the grapple ends, the target is restrained, and the blight can't constrict another target."
            },
            {
                Title: "Entangling Vines.",
                Desc: "The blight magically forces a creature it can see within 30 feet of it to succeed on a DC 12 Strength saving throw or be magically restrained by animated vines for 1 minute. The vines have AC 15 and 15 hit points. A creature, including the restrained creature, can take its action to break the vines by succeeding on a DC 12 Strength check or by dealing 15 damage to them. If the vines are destroyed, the effect ends and no other creature can be restrained by these vines."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 21,
        ProfileType: "Monster",
        Name: "Bugbear",
        Type: "Medium humanoid (goblinoid), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 27,
        HitPointsRoll: "5d8 + 5",
        ArmorClass: [16, "hide armor, shield"],
        Speed: ["30 ft."],
        Strength: 15,
        Dexterity: 14,
        Constitution: 13,
        Intelligence: 8,
        Wisdom: 11,
        Charisma: 9,
        SavingThrows: [],
        Skills: ["Stealth +6", "Survival +1"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 10"],
        Languages: ["Common", "Goblin"],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Brute.",
                Desc: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
            },
            {
                Title: "Surprise Attack.",
                Desc: "If the bugbear surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 7 (2d6) damage from the attack."
            }
        ],
        Actions: [
            {
                Title: "Morningstar.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 11 (2d8 + 2) piercing damage."
            },
            {
                Title: "Javelin.",
                Desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 9 (2d6 + 2) piercing damage in melee, or 5 (1d6 + 2) piercing damage at range."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 22,
        ProfileType: "Monster",
        Name: "Bugbear Chief",
        Type: "Medium humanoid (goblinoid), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 65,
        HitPointsRoll: "10d8 + 20",
        ArmorClass: [17, "chain shirt, shield"],
        Speed: ["30 ft."],
        Strength: 17,
        Dexterity: 15,
        Constitution: 15,
        Intelligence: 11,
        Wisdom: 10,
        Charisma: 14,
        SavingThrows: [],
        Skills: ["Athletics +5", "Intimidation +4", "Survival +2"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 10"],
        Languages: ["Common", "Goblin"],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Brute.",
                Desc: "A melee weapon deals one extra die of its damage when the bugbear hits with it (included in the attack)."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The bugbear makes two melee attacks."
            },
            {
                Title: "Morningstar.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) piercing damage."
            },
            {
                Title: "Javelin.",
                Desc: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 10 (2d6 + 3) piercing damage in melee, or 6 (1d6 + 3) piercing damage at range."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 23,
        ProfileType: "Monster",
        Name: "Bulette",
        Type: "Large monstrosity, unaligned",
        Source: "Monster Manual",
        HitPoints: 94,
        HitPointsRoll: "9d10 + 45",
        ArmorClass: [17, "natural armor"],
        Speed: ["40 ft.", "burrow 40 ft."],
        Strength: 19,
        Dexterity: 11,
        Constitution: 21,
        Intelligence: 2,
        Wisdom: 10,
        Charisma: 5,
        SavingThrows: [],
        Skills: ["Perception +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Tremorsense 60 ft.", "Passive Perception 16"],
        Languages: [],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Standing Leap.",
                Desc: "The bulette's long jump is up to 30 feet and its high jump is up to 15 feet, with or without a running start."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 30 (4d12 + 4) piercing damage."
            },
            {
                Title: "Deadly Leap.",
                Desc: "If the bulette jumps at least 15 feet as part of its movement, it can then use this action to land on its feet in a space that contains one or more other creatures. Each of those creatures must succeed on a DC 16 Dexterity saving throw or take 14 (3d6 + 4) bludgeoning damage and be knocked prone. On a successful save, the creature takes half the bludgeoning damage and isn't knocked prone."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 24,
        ProfileType: "Monster",
        Name: "Bullywug",
        Type: "Medium humanoid (bullywug), neutral evil",
        Source: "Monster Manual",
        HitPoints: 11,
        HitPointsRoll: "2d8 + 2",
        ArmorClass: [15, "natural armor, shield"],
        Speed: ["20 ft.", "swim 40 ft."],
        Strength: 12,
        Dexterity: 12,
        Constitution: 12,
        Intelligence: 7,
        Wisdom: 13,
        Charisma: 7,
        SavingThrows: [],
        Skills: ["Stealth +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 11"],
        Languages: ["Bullywug"],
        Challenge: [0.25, 50],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The bullywug can breathe air and water."
            },
            {
                Title: "Standing Leap.",
                Desc: "The bullywug's long jump is up to 20 feet and its high jump is up to 10 feet, with or without a running start."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The bullywug makes two attacks: one with its bite and one with its spear or club."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must succeed on a DC 11 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Spear.",
                Desc: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack."
            },
            {
                Title: "Club.",
                Desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 25,
        ProfileType: "Monster",
        Name: "Cambion",
        Type: "Medium fiend, any evil alignment",
        Source: "Monster Manual",
        HitPoints: 82,
        HitPointsRoll: "11d8 + 33",
        ArmorClass: [19, "natural armor"],
        Speed: ["30 ft.", "fly 60 ft."],
        Strength: 18,
        Dexterity: 15,
        Constitution: 16,
        Intelligence: 14,
        Wisdom: 13,
        Charisma: 16,
        SavingThrows: ["Strength +7", "Dexterity +5", "Wisdom +4"],
        Skills: ["Deception +6", "Insight +4", "Perception +4"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Abyssal", "Common", "Infernal", "Telepathy 120 ft."],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Damage Transformation.",
                Desc: "When the cambion is dealt slashing, piercing, or bludgeoning damage, it can use its reaction to change the damage type dealt to it to cold, fire, lightning, or poison."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The cambion's spellcasting ability is Charisma (spell save DC 14). The cambion can innately cast the following spells, requiring no material components:#PAt will: charm person, invisibility (self only)#P1/day each: fly, suggestion"
            },
            {
                Title: "Magic Resistance.",
                Desc: "The cambion has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The cambion makes two attacks: one with its fiendish dagger and one with its claw."
            },
            {
                Title: "Fiendish Dagger.",
                Desc: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 7 (1d4 + 5) piercing damage plus 10 (3d6) fire damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 26,
        ProfileType: "Monster",
        Name: "Carrion Crawler",
        Type: "Large monstrosity, unaligned",
        Source: "Monster Manual",
        HitPoints: 51,
        HitPointsRoll: "6d10 + 18",
        ArmorClass: [13, "natural armor"],
        Speed: ["30 ft.", "climb 30 ft."],
        Strength: 14,
        Dexterity: 13,
        Constitution: 16,
        Intelligence: 1,
        Wisdom: 12,
        Charisma: 5,
        SavingThrows: [],
        Skills: ["Perception +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 13"],
        Languages: [],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The carrion crawler makes two attacks: one with its tentacles and one with its bite."
            },
            {
                Title: "Tentacles.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 10 ft., one creature. Hit: 4 (2d4 - 1) poison damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (2d6) piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 27,
        ProfileType: "Monster",
        Name: "Centaur",
        Type: "Large monstrosity, neutral good",
        Source: "Monster Manual",
        HitPoints: 45,
        HitPointsRoll: "6d10 + 12",
        ArmorClass: [12, ""],
        Speed: ["50 ft."],
        Strength: 18,
        Dexterity: 14,
        Constitution: 14,
        Intelligence: 9,
        Wisdom: 13,
        Charisma: 11,
        SavingThrows: [],
        Skills: ["Athletics +6", "Perception +3", "Survival +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 13"],
        Languages: ["Elvish", "Sylvan"],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Charge.",
                Desc: "If the centaur moves at least 30 feet straight toward a target and then hits it with a pike attack on the same turn, the target takes an extra 10 (3d6) piercing damage."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The centaur makes two attacks, only one of which can be with its hooves."
            },
            {
                Title: "Pike.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
            },
            {
                Title: "Hooves.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
            },
            {
                Title: "Longbow.",
                Desc: "Ranged Weapon Attack: +5 to hit, range 150/600 ft., one target. Hit: 6 (1d8 + 2) piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 28,
        ProfileType: "Monster",
        Name: "Chimera",
        Type: "Large monstrosity, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 114,
        HitPointsRoll: "12d10 + 48",
        ArmorClass: [14, "natural armor"],
        Speed: ["30 ft.", "fly 60 ft."],
        Strength: 19,
        Dexterity: 11,
        Constitution: 19,
        Intelligence: 3,
        Wisdom: 14,
        Charisma: 10,
        SavingThrows: [],
        Skills: ["Perception +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 16"],
        Languages: ["Understands Draconic but can't speak"],
        Challenge: [6, 2300],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The chimera makes three attacks: one with its bite, one with its horns, and one with its claws. When its breath weapon is available, it can use the breath in place of its bite."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage."
            },
            {
                Title: "Horns.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 4) bludgeoning damage."
            },
            {
                Title: "Claws.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 4) slashing damage."
            },
            {
                Title: "Fire Breath (Recharge 5-6).",
                Desc: "The dragon head exhales fire in a 15-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 31 (7d8) fire damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 29,
        ProfileType: "Monster",
        Name: "Chuul",
        Type: "Large aberration, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 93,
        HitPointsRoll: "11d10 + 33",
        ArmorClass: [16, "natural armor"],
        Speed: ["30 ft.", "swim 30 ft."],
        Strength: 19,
        Dexterity: 10,
        Constitution: 16,
        Intelligence: 5,
        Wisdom: 11,
        Charisma: 5,
        SavingThrows: [],
        Skills: ["Perception +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Understands Deep Speech but can't speak"],
        Challenge: [4, 1100],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The chuul can breathe air and water."
            },
            {
                Title: "Sense Magic.",
                Desc: "The chuul senses magic within 120 feet of it at will. This trait otherwise works like the detect magic spell but isn't itself magical."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The chuul makes two claw attacks."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 9 (2d6 + 3) bludgeoning damage. The target is grappled (escape DC 14) if it's a Large or smaller creature and the chuul doesn't have two other creatures grappled."
            },
            {
                Title: "Tentacles.",
                Desc: "One creature grappled by the chuul must succeed on a DC 13 Constitution saving throw or be poisoned for 1 minute. Until this poison ends, the target is paralyzed. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 30,
        ProfileType: "Monster",
        Name: "Cloaker",
        Type: "Large aberration, chaotic neutral",
        Source: "Monster Manual",
        HitPoints: 78,
        HitPointsRoll: "12d10 + 12",
        ArmorClass: [14, ""],
        Speed: ["10 ft.", "fly 40 ft."],
        Strength: 17,
        Dexterity: 15,
        Constitution: 12,
        Intelligence: 13,
        Wisdom: 12,
        Charisma: 14,
        SavingThrows: ["Dexterity +5", "Constitution +4", "Wisdom +4"],
        Skills: ["Stealth +5"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 11"],
        Languages: ["Deep Speech", "Undercommon"],
        Challenge: [8, 3900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Damage Transfer.",
                Desc: "While attached to a creature, the cloaker takes only half the damage dealt to it (rounded down), and that creature takes the other half."
            },
            {
                Title: "False Appearance.",
                Desc: "While the cloaker remains motionless without flying, it is indistinguishable from a dark leather cloak."
            },
            {
                Title: "Light Sensitivity.",
                Desc: "While in bright light, the cloaker has disadvantage on attack rolls and Wisdom (Perception) checks that rely on sight."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The cloaker makes two attacks with its tail. If the cloaker is attached to a creature, it can use Moan and make one tail attack instead."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 8 (1d8 + 4) piercing damage, and if the target is Medium or smaller, the cloaker attaches to it. While attached, the cloaker doesn't make bite attacks. Instead, at the start of each of the target's turns, the target takes 10 (3d6) slashing damage from the cloaker's writhing form. The cloaker can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the cloaker by succeeding on a DC 16 Strength check."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
            },
            {
                Title: "Moan (Recharge 6).",
                Desc: "Each creature within 60 feet of the cloaker and aware of it must make a DC 13 Wisdom saving throw. On a failed save, a creature takes 10 (3d6) psychic damage and has disadvantage on attack rolls and ability checks until the end of its next turn. On a successful save, the creature takes half as much damage and suffers no other effect. If a creature's saving throw is successful, the creature is immune to the Moan of all cloakers (but not the phantasms created by Phantasms) for the next 1 minute."
            },
            {
                Title: "Phantasms.",
                Desc: "The cloaker creates 1d4 flying, illusory duplicates of itself that last for 1 minute. The duplicates move with it and mimic its actions, shifting position so that it's impossible to know which cloaker is the real one. If the cloaker is on the Material Plane, the duplicates appear on the Ethereal Plane and vice versa. Any creature that can see the Ethereal Plane sees only the duplicates on it. Each time a creature targets the cloaker with an attack or a harmful spell while at least one duplicate is within 5 feet of the cloaker, roll a d20 to randomly determine whether the attack or spell instead targets one of the duplicates. A creature is unaffected by this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight. A duplicate has the cloaker's AC and uses its Dexterity saving throw modifier. If an attack or harmful spell targets and hits a duplicate, the duplicate is destroyed. A duplicate's speed is 0, and it otherwise has no traits of its own. If a spell affects an area including the cloaker's space, it destroys any duplicate in that area instead of affecting the cloaker."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 31,
        ProfileType: "Monster",
        Name: "Cockatrice",
        Type: "Small monstrosity, unaligned",
        Source: "Monster Manual",
        HitPoints: 27,
        HitPointsRoll: "6d6 + 6",
        ArmorClass: [11, ""],
        Speed: ["20 ft.", "fly 40 ft."],
        Strength: 6,
        Dexterity: 12,
        Constitution: 12,
        Intelligence: 2,
        Wisdom: 13,
        Charisma: 5,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 11"],
        Languages: [],
        Challenge: [0.5, 100],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 3 (1d4 + 1) piercing damage, and the target must succeed on a DC 11 Constitution saving throw against being magically petrified. On a failed save, the creature begins to turn to stone and is restrained. It must repeat the saving throw at the end of its next turn. On a success, the effect ends. On a failure, the creature is petrified for 24 hours, after which time it is turned to stone permanently."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 32,
        ProfileType: "Monster",
        Name: "Couatl",
        Type: "Medium celestial, lawful good",
        Source: "Monster Manual",
        HitPoints: 97,
        HitPointsRoll: "13d8 + 39",
        ArmorClass: [19, "natural armor"],
        Speed: ["30 ft.", "fly 90 ft."],
        Strength: 16,
        Dexterity: 20,
        Constitution: 17,
        Intelligence: 18,
        Wisdom: 20,
        Charisma: 18,
        SavingThrows: ["Constitution +6", "Wisdom +8"],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Radiant", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: [],
        ConditionImmunities: ["Charmed", "Frightened", "Poisoned"],
        Senses: ["Truesight 120 ft.", "Passive Perception 15"],
        Languages: ["All", "Telepathy 120 ft."],
        Challenge: [4, 1100],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Innate Spellcasting.",
                Desc: "The couatl's innate spellcasting ability is Charisma (spell save DC 14). It can innately cast the following spells, requiring only verbal components:#PAt will: detect evil and good, detect magic, detect thoughts#P1/day each: bless, create food and water, protection from poison, sanctuary, shapechange (into humanoid or beast, no other action)"
            },
            {
                Title: "Magic Weapons.",
                Desc: "The couatl's weapon attacks are magical."
            },
            {
                Title: "Shielded Mind.",
                Desc: "The couatl is immune to scrying and to any effect that would sense its emotions, read its thoughts, or detect its location."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must succeed on a DC 13 Constitution saving throw against being poisoned for 24 hours. Until this poison ends, the target is unconscious. Another creature can use an action to shake the target awake."
            },
            {
                Title: "Constrict.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d6 + 3) bludgeoning damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the couatl can't constrict another target."
            },
            {
                Title: "Change Shape.",
                Desc: "The couatl magically polymorphs into a humanoid or beast that has a challenge rating equal to or less than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the couatl's choice).#PIn a new form, the couatl retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 33,
        ProfileType: "Monster",
        Name: "Crawling Claw",
        Type: "Tiny undead, neutral evil",
        Source: "Monster Manual",
        HitPoints: 2,
        HitPointsRoll: "1d4",
        ArmorClass: [12, ""],
        Speed: ["20 ft.", "climb 20 ft."],
        Strength: 13,
        Dexterity: 14,
        Constitution: 10,
        Intelligence: 5,
        Wisdom: 10,
        Charisma: 4,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Necrotic"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Blinded", "Charmed", "Deafened", "Frightened", "Paralyzed", "Poisoned"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 10"],
        Languages: [],
        Challenge: [0, 10],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 1 piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 34,
        ProfileType: "Monster",
        Name: "Cyclops",
        Type: "Huge giant, chaotic neutral",
        Source: "Monster Manual",
        HitPoints: 138,
        HitPointsRoll: "12d12 + 60",
        ArmorClass: [14, "natural armor"],
        Speed: ["30 ft."],
        Strength: 22,
        Dexterity: 11,
        Constitution: 20,
        Intelligence: 8,
        Wisdom: 6,
        Charisma: 10,
        SavingThrows: ["Strength +9", "Constitution +8"],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 8"],
        Languages: ["Giant"],
        Challenge: [6, 2300],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The cyclops makes two greatclub attacks."
            },
            {
                Title: "Greatclub.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage."
            },
            {
                Title: "Rock.",
                Desc: "Ranged Weapon Attack: +9 to hit, range 60/240 ft., one target. Hit: 22 (4d8 + 6) bludgeoning damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 35,
        ProfileType: "Monster",
        Name: "Darkmantle",
        Type: "Small monstrosity, unaligned",
        Source: "Monster Manual",
        HitPoints: 22,
        HitPointsRoll: "5d6 + 5",
        ArmorClass: [11, ""],
        Speed: ["10 ft.", "fly 30 ft."],
        Strength: 16,
        Dexterity: 12,
        Constitution: 13,
        Intelligence: 2,
        Wisdom: 10,
        Charisma: 5,
        SavingThrows: [],
        Skills: ["Stealth +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Passive Perception 10"],
        Languages: [],
        Challenge: [0.5, 100],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Echolocation.",
                Desc: "The darkmantle can't use its blindsight while deafened."
            },
            {
                Title: "False Appearance.",
                Desc: "While the darkmantle remains motionless, it is indistinguishable from a cave formation such as a stalactite or stalagmite."
            }
        ],
        Actions: [
            {
                Title: "Crush.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) bludgeoning damage, and the darkmantle attaches to the target. If the target is Medium or smaller and the darkmantle has advantage on the attack roll, it attaches to the target's head, and the target is blinded and unable to breathe while the darkmantle is attached in this way.#PWhile attached to the target's head, the darkmantle can attack no other creature except the target. The darkmantle can detach itself by spending 5 feet of its movement. As an action, a creature can try to detach the darkmantle by making a DC 13 Strength check."
            },
            {
                Title: "Darkness Aura (1/Day).",
                Desc: "A 15-foot radius of magical darkness extends out from the darkmantle, moves with it, and spreads around corners. The darkness lasts as long as the darkmantle maintains concentration, up to 10 minutes (as if concentrating on a spell). Darkvision can't penetrate this darkness, and no natural light can illuminate it. If any of the darkness overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 36,
        ProfileType: "Monster",
        Name: "Death Knight",
        Type: "Medium undead, lawful evil",
        Source: "Monster Manual",
        HitPoints: 180,
        HitPointsRoll: "19d8 + 95",
        ArmorClass: [20, "plate"],
        Speed: ["30 ft."],
        Strength: 20,
        Dexterity: 11,
        Constitution: 20,
        Intelligence: 12,
        Wisdom: 16,
        Charisma: 18,
        SavingThrows: ["Constitution +9", "Wisdom +7", "Charisma +8"],
        Skills: ["Perception +7"],
        DamageVulnerabilities: [],
        DamageResistances: ["Necrotic", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: [],
        ConditionImmunities: ["Frightened"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 17"],
        Languages: ["The languages it knew in life"],
        Challenge: [17, 18000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Aura of Despair.",
                Desc: "Any creature that starts its turn within 10 feet of the death knight must succeed on a DC 16 Wisdom saving throw or have disadvantage on attack rolls until the start of its next turn."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The death knight's innate spellcasting ability is Charisma (spell save DC 16). It can innately cast the following spells, requiring no material components:#PAt will: detect magic, discern lies, magic missile#P3/day each: command, dispel magic#P1/day each: animate dead, control undead, create undead, plane shift (self only)"
            },
            {
                Title: "Magic Resistance.",
                Desc: "The death knight has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The death knight makes three greatsword attacks. It can use Hellfire Orb in place of one greatsword attack."
            },
            {
                Title: "Greatsword.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage plus 18 (4d8) necrotic damage."
            },
            {
                Title: "Hellfire Orb (Recharge 5-6).",
                Desc: "The death knight hurls a magical, flaming orb of green fire at a point it can see within 120 feet of it. The orb explodes in a 20-foot-radius sphere on impact. Each creature in that area must make a DC 16 Dexterity saving throw, taking 45 (10d8) fire damage plus 18 (4d8) necrotic damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [
            {
                Title: "Parry.",
                Desc: "The death knight adds 4 to its AC against one melee attack that would hit it. To do so, the death knight must see the attacker and be wielding a melee weapon."
            }
        ],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 37,
        ProfileType: "Monster",
        Name: "Demilich",
        Type: "Tiny undead, neutral evil",
        Source: "Monster Manual",
        HitPoints: 80,
        HitPointsRoll: "23d4 + 23",
        ArmorClass: [20, "natural armor"],
        Speed: ["0 ft.", "fly 30 ft. (hover)"],
        Strength: 1,
        Dexterity: 20,
        Constitution: 12,
        Intelligence: 19,
        Wisdom: 17,
        Charisma: 16,
        SavingThrows: ["Constitution +6", "Wisdom +8"],
        Skills: ["Perception +13"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Necrotic", "Poison"],
        ConditionImmunities: ["Blinded", "Charmed", "Deafened", "Exhaustion", "Frightened", "Grappled", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained"],
        Senses: ["Truesight 60 ft. (blind beyond this radius)", "Passive Perception 23"],
        Languages: ["Understands the languages it knew in life but can't speak"],
        Challenge: [18, 20000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the demilich fails a saving throw, it can choose to succeed instead."
            },
            {
                Title: "Soul Trap.",
                Desc: "Whenever a creature that has a soul dies within 30 feet of the demilich, its soul is drawn from its body, provided the soul is not already trapped inside a gem, and the demilich gains 2d10 temporary hit points."
            },
            {
                Title: "Turn Resistance.",
                Desc: "The demilich has advantage on saving throws against any effect that turns undead."
            }
        ],
        Actions: [],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Discorporate.",
                Desc: "The demilich releases waves of anti-magic. Each creature within 20 feet of the demilich that can see it must make a DC 16 Charisma saving throw. On a failure, a target that is concentrating on a spell loses its concentration."
            },
            {
                Title: "Vile Radiance (Costs 2 Actions).",
                Desc: "The demilich releases vile radiance. Each creature within 15 feet of the demilich must make a DC 16 Constitution saving throw. On a failure, a creature takes 21 (6d6) necrotic damage and can't regain hit points until the end of its next turn. On a success, a creature takes half as much damage."
            },
            {
                Title: "Life Drain (Costs 3 Actions).",
                Desc: "The demilich magically targets one creature it can see within 30 feet of it. The target must succeed on a DC 16 Constitution saving throw or take 55 (10d10) necrotic damage, and the demilich regains hit points equal to half the amount of necrotic damage dealt. If this damage reduces the target to 0 hit points, the target dies, and its soul is trapped inside the demilich's skull, provided the skull has an empty gem socket."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 38,
        ProfileType: "Monster",
        Name: "Balor",
        Type: "Huge fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 262,
        HitPointsRoll: "21d12 + 126",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft."],
        Strength: 26,
        Dexterity: 15,
        Constitution: 22,
        Intelligence: 20,
        Wisdom: 16,
        Charisma: 22,
        SavingThrows: ["Strength +14", "Constitution +12", "Wisdom +9", "Charisma +12"],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Truesight 120 ft.", "Passive Perception 13"],
        Languages: ["Abyssal", "Telepathy 120 ft."],
        Challenge: [19, 22000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Death Throes.",
                Desc: "When the balor dies, it explodes, and each creature within 30 feet of it must make a DC 20 Dexterity saving throw, taking 70 (20d6) fire damage on a failed save, or half as much damage on a successful one. The explosion ignites flammable objects in that area that aren't being worn or carried, and it destroys the balor's weapons."
            },
            {
                Title: "Fire Aura.",
                Desc: "At the start of each of the balor's turns, each creature within 5 feet of it takes 10 (3d6) fire damage, and flammable objects in the aura that aren't being worn or carried ignite. A creature that touches the balor or hits it with a melee attack while within 5 feet of it takes 10 (3d6) fire damage."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The balor has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The balor makes two attacks: one with its longsword and one with its whip."
            },
            {
                Title: "Longsword.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 21 (3d8 + 8) slashing damage plus 13 (3d8) lightning damage. If the balor scores a critical hit, it rolls damage dice three times, instead of twice."
            },
            {
                Title: "Whip.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 30 ft., one target. Hit: 15 (2d6 + 8) slashing damage plus 10 (3d6) fire damage, and the target must succeed on a DC 20 Strength saving throw or be pulled up to 25 feet toward the balor."
            },
            {
                Title: "Teleport.",
                Desc: "The balor magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 39,
        ProfileType: "Monster",
        Name: "Barlgura",
        Type: "Large fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 68,
        HitPointsRoll: "8d10 + 24",
        ArmorClass: [15, "natural armor"],
        Speed: ["40 ft."],
        Strength: 18,
        Dexterity: 15,
        Constitution: 16,
        Intelligence: 6,
        Wisdom: 11,
        Charisma: 8,
        SavingThrows: [],
        Skills: ["Perception +2", "Stealth +3"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 12"],
        Languages: ["Abyssal", "Telepathy 120 ft."],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Innate Spellcasting.",
                Desc: "The barlgura's innate spellcasting ability is Wisdom. It can innately cast the following spell, requiring no material components:#P3/day: entangle"
            },
            {
                Title: "Magic Resistance.",
                Desc: "The barlgura has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The barlgura makes two fist attacks."
            },
            {
                Title: "Fist.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
            },
            {
                Title: "Leap.",
                Desc: "The barlgura jumps up to 30 feet by spending 10 feet of movement."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 40,
        ProfileType: "Monster",
        Name: "Chasme",
        Type: "Large fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 52,
        HitPointsRoll: "7d10 + 14",
        ArmorClass: [15, "natural armor"],
        Speed: ["15 ft.", "fly 30 ft."],
        Strength: 16,
        Dexterity: 15,
        Constitution: 14,
        Intelligence: 4,
        Wisdom: 12,
        Charisma: 10,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 11"],
        Languages: ["Abyssal", "Telepathy 120 ft."],
        Challenge: [6, 2300],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Magic Resistance.",
                Desc: "The chasme has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 12 (2d8 + 3) piercing damage, and the chasme attaches to the target if it is Medium or smaller. While attached, the chasme doesn't attack. Instead, at the start of each of the chasme's turns, the target takes 10 (3d6) necrotic damage. The chasme can detach itself by spending 5 feet of its movement. A creature, including the target, can take its action to detach the chasme by succeeding on a DC 13 Strength check."
            },
            {
                Title: "Buzz (Recharge 5-6).",
                Desc: "The chasme emits a maddening buzz. Each creature within 30 feet of the chasme that can hear it and that isn't a demon must succeed on a DC 12 Constitution saving throw, or the creature can't take reactions, and it must roll a d8 to determine what it does during the current turn. On a 1 to 4, the creature does nothing. On a 5 or 6, the creature takes no action or bonus action and uses all its movement to move in a randomly determined direction. On a 7 or 8, the creature makes a melee attack against a randomly determined creature within its reach or does nothing if it can't make such an attack."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 41,
        ProfileType: "Monster",
        Name: "Dretch",
        Type: "Small fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 18,
        HitPointsRoll: "4d6 + 4",
        ArmorClass: [11, "natural armor"],
        Speed: ["20 ft."],
        Strength: 11,
        Dexterity: 11,
        Constitution: 12,
        Intelligence: 5,
        Wisdom: 8,
        Charisma: 3,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 9"],
        Languages: ["Abyssal", "Telepathy 60 ft. (works only with creatures that understand Abyssal)"],
        Challenge: [0.25, 50],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dretch makes two attacks: one with its bite and one with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 3 (1d6) piercing damage."
            },
            {
                Title: "Claws.",
                Desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) slashing damage."
            },
            {
                Title: "Fetid Cloud (1/Day).",
                Desc: "A 10-foot radius of disgusting green gas extends out from the dretch. The gas spreads around corners, and its area is lightly obscured. It lasts for 1 minute or until a strong wind disperses it. Any creature that starts its turn in that area must succeed on a DC 11 Constitution saving throw or be poisoned until the start of its next turn. While poisoned in this way, the target must use its action before it can do anything else on its turn, other than moving, to try to vomit. If the target does not vomit, it can't take actions on its turn."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 42,
        ProfileType: "Monster",
        Name: "Glabrezu",
        Type: "Large fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 157,
        HitPointsRoll: "15d10 + 75",
        ArmorClass: [17, "natural armor"],
        Speed: ["40 ft."],
        Strength: 20,
        Dexterity: 15,
        Constitution: 21,
        Intelligence: 19,
        Wisdom: 17,
        Charisma: 16,
        SavingThrows: ["Strength +9", "Constitution +9", "Wisdom +7", "Charisma +7"],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Truesight 120 ft.", "Passive Perception 13"],
        Languages: ["Abyssal", "Telepathy 120 ft."],
        Challenge: [9, 5000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Innate Spellcasting.",
                Desc: "The glabrezu's innate spellcasting ability is Intelligence (spell save DC 16). The glabrezu can innately cast the following spells, requiring no material components:#PAt will: darkness, detect magic, dispel magic#P1/day each: confusion, fly, power word stun"
            },
            {
                Title: "Magic Resistance.",
                Desc: "The glabrezu has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The glabrezu makes four attacks: two with its pincers and two with its fists. Alternatively, it makes two attacks with its pincers and casts one spell."
            },
            {
                Title: "Pincer.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) bludgeoning damage, and the target is grappled (escape DC 15) if it is a Large or smaller creature and if the glabrezu doesn't already have two creatures grappled."
            },
            {
                Title: "Fist.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 43,
        ProfileType: "Monster",
        Name: "Goristro",
        Type: "Huge fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 310,
        HitPointsRoll: "20d12 + 180",
        ArmorClass: [17, "natural armor"],
        Speed: ["40 ft."],
        Strength: 22,
        Dexterity: 9,
        Constitution: 29,
        Intelligence: 3,
        Wisdom: 10,
        Charisma: 12,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Truesight 120 ft.", "Passive Perception 10"],
        Languages: ["Abyssal, telepathy 120 ft. (works only with creatures that understand Abyssal)"],
        Challenge: [17, 18000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Labyrinthine Recall.",
                Desc: "The goristro can perfectly recall any path it has traveled."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The goristro has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Siege Monster.",
                Desc: "The goristro deals double damage to objects and structures."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The goristro makes two gore attacks. It can't make gore attacks against the same target twice in a row."
            },
            {
                Title: "Gore.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 34 (6d8 + 7) piercing damage."
            },
            {
                Title: "Stomp.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one prone creature. Hit: 32 (6d6 + 11) bludgeoning damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 44,
        ProfileType: "Monster",
        Name: "Hezrou",
        Type: "Large fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 136,
        HitPointsRoll: "13d10 + 65",
        ArmorClass: [16, "natural armor"],
        Speed: ["30 ft."],
        Strength: 19,
        Dexterity: 17,
        Constitution: 20,
        Intelligence: 5,
        Wisdom: 12,
        Charisma: 13,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 11"],
        Languages: ["Abyssal", "Telepathy 120 ft."],
        Challenge: [8, 3900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Magic Resistance.",
                Desc: "The hezrou has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Stench.",
                Desc: "Any creature that starts its turn within 10 feet of the hezrou must succeed on a DC 14 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the hezrou's stench for 24 hours."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The hezrou makes two attacks: one with its bite and one with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 45,
        ProfileType: "Monster",
        Name: "Manes",
        Type: "Small fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 9,
        HitPointsRoll: "2d6 + 2",
        ArmorClass: [9, ""],
        Speed: ["20 ft."],
        Strength: 10,
        Dexterity: 9,
        Constitution: 13,
        Intelligence: 3,
        Wisdom: 8,
        Charisma: 4,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 9"],
        Languages: ["Understands Abyssal but can't speak"],
        Challenge: [0.125, 25],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 46,
        ProfileType: "Monster",
        Name: "Marilith",
        Type: "Large fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 189,
        HitPointsRoll: "18d10 + 90",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft."],
        Strength: 18,
        Dexterity: 20,
        Constitution: 20,
        Intelligence: 18,
        Wisdom: 16,
        Charisma: 20,
        SavingThrows: ["Dexterity +9", "Wisdom +7", "Charisma +9"],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Truesight 120 ft.", "Passive Perception 13"],
        Languages: ["Abyssal", "Telepathy 120 ft."],
        Challenge: [16, 15000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Magic Resistance.",
                Desc: "The marilith has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Reactive.",
                Desc: "The marilith can take one reaction on every turn in combat."
            },
            {
                Title: "Six Arms.",
                Desc: "The marilith can make up to six weapon attacks with her arms, in any combination of scimitar and tail attacks, when she takes the Attack action."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The marilith makes six attacks: five with her scimitars and one with her tail. Alternatively, she casts one spell and makes two scimitar attacks."
            },
            {
                Title: "Scimitar.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one creature. Hit: 15 (2d10 + 4) bludgeoning damage, and the target is grappled (escape DC 19) if it is a Large or smaller creature and the marilith doesn't have another creature grappled. Until this grapple ends, the target is restrained, and the marilith can automatically hit the target with her tail, and the marilith can't make tail attacks against other targets."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The marilith's innate spellcasting ability is Wisdom (spell save DC 17). The marilith can innately cast the following spells, requiring no material components:#PAt will: astral projection (self only), telekinesis"
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 47,
        ProfileType: "Monster",
        Name: "Nalfeshnee",
        Type: "Large fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 184,
        HitPointsRoll: "16d10 + 96",
        ArmorClass: [18, "natural armor"],
        Speed: ["20 ft.", "fly 30 ft."],
        Strength: 21,
        Dexterity: 10,
        Constitution: 22,
        Intelligence: 19,
        Wisdom: 12,
        Charisma: 15,
        SavingThrows: ["Constitution +10", "Intelligence +8", "Wisdom +5"],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Truesight 120 ft.", "Passive Perception 11"],
        Languages: ["Abyssal", "Telepathy 120 ft."],
        Challenge: [13, 10000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Magic Resistance.",
                Desc: "The nalfeshnee has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 32 (5d10 + 5) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
            },
            {
                Title: "Teleport.",
                Desc: "The nalfeshnee magically teleports, along with any equipment it is wearing or carrying, up to 120 feet to an unoccupied space it can see."
            },
            {
                Title: "Horror Nimbus (1/Day).",
                Desc: "The nalfeshnee magically emits scintillating, multicolored light. Each creature within 15 feet of the nalfeshnee that can see the light must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 48,
        ProfileType: "Monster",
        Name: "Quasit",
        Type: "Tiny fiend (demon, shapechanger), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 7,
        HitPointsRoll: "3d4",
        ArmorClass: [13, ""],
        Speed: ["40 ft."],
        Strength: 5,
        Dexterity: 17,
        Constitution: 10,
        Intelligence: 7,
        Wisdom: 10,
        Charisma: 10,
        SavingThrows: [],
        Skills: ["Stealth +5"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 10"],
        Languages: ["Abyssal", "Common"],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Magic Resistance.",
                Desc: "The quasit has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Shapechanger.",
                Desc: "The quasit can use its action to polymorph into a beast form that resembles a bat (speed 10 ft., fly 40 ft.), a centipede (40 ft., climb 40 ft.), or a toad (40 ft., swim 40 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            }
        ],
        Actions: [
            {
                Title: "Claw (Bite in Beast Form).",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must succeed on a DC 10 Constitution saving throw or take 5 (2d4) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Invisibility.",
                Desc: "The quasit magically turns invisible until it attacks or uses Scare, or until its concentration ends (as if concentrating on a spell). Any equipment the quasit wears or carries is invisible with it."
            },
            {
                Title: "Scare (1/Day).",
                Desc: "One creature of the quasit's choice within 20 feet of it must succeed on a DC 10 Wisdom saving throw or be frightened for 1 minute. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 49,
        ProfileType: "Monster",
        Name: "Shadow Demon",
        Type: "Medium fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 66,
        HitPointsRoll: "12d8 + 12",
        ArmorClass: [13, ""],
        Speed: ["0 ft.", "fly 40 ft. (hover)"],
        Strength: 1,
        Dexterity: 17,
        Constitution: 12,
        Intelligence: 14,
        Wisdom: 16,
        Charisma: 16,
        SavingThrows: [],
        Skills: ["Stealth +7"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison", "Radiant damage while in dim light or darkness (see Illumination Weakness)"],
        ConditionImmunities: ["Poisoned", "Prone"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 13"],
        Languages: ["Abyssal", "Telepathy 60 ft."],
        Challenge: [4, 1100],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Illumination Weakness.",
                Desc: "While in bright light, the shadow demon has disadvantage on attack rolls, ability checks, and saving throws."
            },
            {
                Title: "Incorporeal Movement.",
                Desc: "The shadow demon can move through other creatures and objects as if they were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside an object."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The shadow demon has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Shadow Stealth.",
                Desc: "While in dim light or darkness, the shadow demon can take the Hide action as a bonus action. It can't be seen while hidden unless a special sense such as truesight can detect it."
            }
        ],
        Actions: [
            {
                Title: "Claws.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) psychic damage, or 4 (1d4 + 2) psychic damage if the shadow demon is in bright light."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The shadow demon's innate spellcasting ability is Charisma (spell save DC 13). The shadow demon can innately cast the following spells, requiring no material components:#PAt will: darkness, minor illusion#P1/day: mirror image (using shadow duplicates rather than mirror images)"
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 50,
        ProfileType: "Monster",
        Name: "Vrock",
        Type: "Large fiend (demon), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 104,
        HitPointsRoll: "11d10 + 44",
        ArmorClass: [15, "natural armor"],
        Speed: ["40 ft.", "fly 60 ft."],
        Strength: 17,
        Dexterity: 15,
        Constitution: 18,
        Intelligence: 8,
        Wisdom: 13,
        Charisma: 8,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 11"],
        Languages: ["Abyssal", "Telepathy 120 ft."],
        Challenge: [6, 2300],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Magic Resistance.",
                Desc: "The vrock has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The vrock makes two attacks: one with its beak and one with its talons."
            },
            {
                Title: "Beak.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 8 (1d6 + 5) piercing damage."
            },
            {
                Title: "Talons.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 15 (3d6 + 5) slashing damage."
            },
            {
                Title: "Spores (Recharge 6).",
                Desc: "A 15-foot-radius cloud of toxic spores extends out from the vrock, centered on itself. The spores spread around corners. Each creature in the area must succeed on a DC 14 Constitution saving throw or become poisoned. While poisoned, the target takes 5 (1d10) poison damage at the start of each of its turns. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself with a success. The poison ends early if the creature is targeted by a spell that cures disease or poison, such as lesser restoration."
            },
            {
                Title: "Stunning Screech (1/Day).",
                Desc: "The vrock emits a horrific screech. Each creature within 20 feet of it that can hear it and that isn't a demon must succeed on a DC 14 Constitution saving throw or be stunned until the end of the vrock's next turn."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 51,
        ProfileType: "Monster",
        Name: "Yochlol",
        Type: "Medium fiend (demon, shapechanger), chaotic evil",
        Source: "Monster Manual",
        HitPoints: 136,
        HitPointsRoll: "16d8 + 64",
        ArmorClass: [15, "natural armor"],
        Speed: ["30 ft.", "climb 30 ft."],
        Strength: 15,
        Dexterity: 15,
        Constitution: 18,
        Intelligence: 15,
        Wisdom: 20,
        Charisma: 15,
        SavingThrows: [],
        Skills: ["Perception +9"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Fire", "Lightning", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Charmed", "Frightened", "Poisoned"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 19"],
        Languages: ["Abyssal", "Elvish", "Telepathy 60 ft."],
        Challenge: [10, 5900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Innate Spellcasting.",
                Desc: "The yochlol's innate spellcasting ability is Wisdom (spell save DC 17). It can innately cast the following spells, requiring no material components:#PAt will: darkness, detect evil and good, dispel magic, fly#P1/day each: insect plague, telepathy"
            },
            {
                Title: "Magic Resistance.",
                Desc: "The yochlol has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Shapechanger.",
                Desc: "The yochlol can use its action to polymorph into a Large spider-humanoid hybrid, a Large monstrous spider, or back into its true form, which is amorphous. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                Title: "Spider Climb.",
                Desc: "The yochlol can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The yochlol makes two attacks: one with its bite and one with its tentacle. It can use its Engulf in place of one tentacle attack."
            },
            {
                Title: "Bite (Spider or Hybrid Form Only).",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 9 (2d6 + 2) piercing damage, and the target must make a DC 14 Constitution saving throw, taking 18 (4d8) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                Title: "Tentacle.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage."
            },
            {
                Title: "Engulf (True Form Only).",
                Desc: "The yochlol moves up to its speed without provoking opportunity attacks. It can move into a Large or smaller creature's space during this movement. Whenever the yochlol enters a creature's space, that creature must make a DC 14 Dexterity saving throw. On a successful save, the creature can choose to be pushed 5 feet back or to the side of the yochlol. A creature that chooses not to be pushed suffers the consequences of a failed saving throw. On a failed save, the yochlol enters the creature's space, and the creature takes 10 (3d6) acid damage and is engulfed. The engulfed creature can't breathe, is restrained, and takes 10 (3d6) acid damage at the start of each of the yochlol's turns."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 52,
        ProfileType: "Monster",
        Name: "Barbed Devil",
        Type: "Medium fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 110,
        HitPointsRoll: "13d8 + 52",
        ArmorClass: [15, "natural armor"],
        Speed: ["30 ft."],
        Strength: 16,
        Dexterity: 17,
        Constitution: 18,
        Intelligence: 12,
        Wisdom: 14,
        Charisma: 14,
        SavingThrows: ["Strength +6", "Constitution +7", "Wisdom +5"],
        Skills: ["Deception +5", "Insight +5", "Perception +5"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 15"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Barbed Hide.",
                Desc: "At the start of each of its turns, the barbed devil deals 3 (1d6) piercing damage to any creature grappling it."
            },
            {
                Title: "Devil's Sight.",
                Desc: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The barbed devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 6 (1d6 + 3) piercing damage plus 10 (3d6) poison damage."
            },
            {
                Title: "Hurl Flame.",
                Desc: "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 53,
        ProfileType: "Monster",
        Name: "Bearded Devil",
        Type: "Medium fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 52,
        HitPointsRoll: "8d8 + 16",
        ArmorClass: [13, "natural armor"],
        Speed: ["30 ft."],
        Strength: 16,
        Dexterity: 15,
        Constitution: 15,
        Intelligence: 9,
        Wisdom: 11,
        Charisma: 11,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 10"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Devil's Sight.",
                Desc: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The devil makes two attacks: one with its glaive and one with its beard, or two with its glaive."
            },
            {
                Title: "Beard.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (2d4) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Glaive.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 54,
        ProfileType: "Monster",
        Name: "Bone Devil",
        Type: "Large fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 142,
        HitPointsRoll: "15d10 + 60",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "fly 40 ft."],
        Strength: 18,
        Dexterity: 16,
        Constitution: 18,
        Intelligence: 13,
        Wisdom: 14,
        Charisma: 16,
        SavingThrows: ["Dexterity +7", "Constitution +8", "Wisdom +6"],
        Skills: ["Deception +7", "Insight +6"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 12"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [9, 5000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Devil's Sight.",
                Desc: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The devil makes two attacks: one with its claws and one with its sting."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
            },
            {
                Title: "Sting.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one creature. Hit: 13 (2d8 + 4) piercing damage, and the target must succeed on a DC 16 Constitution saving throw or take 21 (6d6) poison damage and become poisoned for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 55,
        ProfileType: "Monster",
        Name: "Chain Devil",
        Type: "Medium fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 85,
        HitPointsRoll: "10d8 + 40",
        ArmorClass: [16, "natural armor"],
        Speed: ["30 ft."],
        Strength: 18,
        Dexterity: 15,
        Constitution: 18,
        Intelligence: 11,
        Wisdom: 12,
        Charisma: 14,
        SavingThrows: ["Strength +7", "Constitution +7", "Wisdom +4"],
        Skills: ["Perception +4"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 14"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [8, 3900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Devil's Sight.",
                Desc: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The devil makes four attacks with its chains."
            },
            {
                Title: "Chain.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it is grappled (escape DC 14) if the devil isn't already grappling two creatures."
            },
            {
                Title: "Unnerving Mask (Recharge 6).",
                Desc: "The devil magically twists its features into a horrific visage, forcing each creature within 30 feet of it that can see the devil to make a DC 14 Wisdom saving throw, unless it is already frightened. On a failed save, a creature becomes frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Animate Chains (1/Day).",
                Desc: "The devil magically animates one to four chains it can see within 60 feet of it. Each animated chain occupies its own space, has AC 15, 20 hit points, resistance to piercing damage, and immunity to poison and psychic damage. On the devil's turn, it can command each animated chain it can see to fly up to 60 feet and hit one creature it can see. Melee Weapon Attack: +7 to hit, reach 5 ft. Hit: 7 (2d4 + 2) piercing damage, and the target is grappled (escape DC 14) if it isn't already grappled by another chain. The devil can command any number of animated chains this way, provided the chains are within 60 feet of the devil, but can't command a chain that's already grappling a creature."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 56,
        ProfileType: "Monster",
        Name: "Erinyes",
        Type: "Medium fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 153,
        HitPointsRoll: "18d8 + 72",
        ArmorClass: [18, "natural armor"],
        Speed: ["30 ft.", "fly 60 ft."],
        Strength: 18,
        Dexterity: 16,
        Constitution: 18,
        Intelligence: 14,
        Wisdom: 14,
        Charisma: 18,
        SavingThrows: ["Constitution +8", "Wisdom +8", "Charisma +9"],
        Skills: ["Perception +8", "Persuasion +9"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Truesight 120 ft.", "Passive Perception 18"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [12, 8400],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Hellish Weapons.",
                Desc: "The erinyes's weapon attacks are magical and deal an extra 13 (3d8) poison damage on a hit (included in the attacks)."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The erinyes has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The erinyes makes three melee attacks or two ranged attacks."
            },
            {
                Title: "Longsword.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands, plus 13 (3d8) poison damage."
            },
            {
                Title: "Longbow.",
                Desc: "Ranged Weapon Attack: +7 to hit, range 150/600 ft., one target. Hit: 10 (2d6 + 3) piercing damage plus 13 (3d8) poison damage."
            }
        ],
        Reactions: [
            {
                Title: "Parry.",
                Desc: "The erinyes adds 4 to its AC against one melee attack that would hit it. To do so, the erinyes must see the attacker and be wielding a melee weapon."
            }
        ],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 57,
        ProfileType: "Monster",
        Name: "Horned Devil",
        Type: "Large fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 178,
        HitPointsRoll: "17d10 + 85",
        ArmorClass: [18, "natural armor"],
        Speed: ["20 ft.", "fly 60 ft."],
        Strength: 22,
        Dexterity: 17,
        Constitution: 21,
        Intelligence: 12,
        Wisdom: 16,
        Charisma: 17,
        SavingThrows: ["Strength +10", "Constitution +9", "Wisdom +7"],
        Skills: ["Perception +7"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 17"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [11, 7200],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Devil's Sight.",
                Desc: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The devil makes three melee attacks: two with its fork and one with its tail. Alternatively, it can use Hurl Flame twice."
            },
            {
                Title: "Fork.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 15 (2d8 + 6) piercing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 12 (2d6 + 6) piercing damage. If the target is a Medium or smaller creature, it must succeed on a DC 17 Strength saving throw or be knocked prone."
            },
            {
                Title: "Hurl Flame.",
                Desc: "Ranged Spell Attack: +7 to hit, range 150 ft., one target. Hit: 14 (4d6) fire damage."
            },
            {
                Title: "Infernal Torch (Recharge 6).",
                Desc: "The devil magically casts fireball (7th-level version, save DC 15), using its innate spellcasting rather than a spell slot."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 58,
        ProfileType: "Monster",
        Name: "Ice Devil",
        Type: "Large fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 180,
        HitPointsRoll: "19d10 + 76",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft."],
        Strength: 21,
        Dexterity: 14,
        Constitution: 18,
        Intelligence: 18,
        Wisdom: 15,
        Charisma: 18,
        SavingThrows: ["Constitution +9", "Wisdom +7", "Charisma +9"],
        Skills: ["Perception +7"],
        DamageVulnerabilities: ["Fire"],
        DamageResistances: ["Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Cold", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 17"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [14, 11500],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Devil's Sight.",
                Desc: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                Title: "Ice Walk.",
                Desc: "The devil can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The devil makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) bludgeoning damage."
            },
            {
                Title: "Wall of Ice (Recharge 6).",
                Desc: "The devil magically forms an opaque wall of ice on a solid surface it can see within 60 feet of it, as in the wall of ice spell, using a save DC of 17."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 59,
        ProfileType: "Monster",
        Name: "Imp",
        Type: "Tiny fiend (devil, shapechanger), lawful evil",
        Source: "Monster Manual",
        HitPoints: 10,
        HitPointsRoll: "3d4 + 3",
        ArmorClass: [13, ""],
        Speed: ["20 ft.", "fly 40 ft."],
        Strength: 6,
        Dexterity: 17,
        Constitution: 13,
        Intelligence: 11,
        Wisdom: 12,
        Charisma: 14,
        SavingThrows: [],
        Skills: ["Deception +4", "Insight +3", "Persuasion +4", "Stealth +5"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 11"],
        Languages: ["Infernal", "Common"],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Shapechanger.",
                Desc: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                Title: "Devil's Sight.",
                Desc: "Magical darkness doesn't impede the imp's darkvision."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The imp has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Sting (Bite in Beast Form).",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                Title: "Invisibility.",
                Desc: "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 60,
        ProfileType: "Monster",
        Name: "Lemure",
        Type: "Medium fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 13,
        HitPointsRoll: "3d8",
        ArmorClass: [7, ""],
        Speed: ["15 ft."],
        Strength: 10,
        Dexterity: 5,
        Constitution: 11,
        Intelligence: 1,
        Wisdom: 11,
        Charisma: 3,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Charmed", "Frightened", "Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 10"],
        Languages: ["Understands Infernal but can't speak"],
        Challenge: [0, 10],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Hellish Restoration.",
                Desc: "If the lemure dies in the Nine Hells, it rises again with all its hit points at the start of its next turn unless it is killed by a good-aligned creature or a cleric casts the disintegrate spell on its body."
            }
        ],
        Actions: [
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) slashing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 61,
        ProfileType: "Monster",
        Name: "Pit Fiend",
        Type: "Large fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 300,
        HitPointsRoll: "24d10 + 168",
        ArmorClass: [19, "natural armor"],
        Speed: ["30 ft.", "fly 60 ft."],
        Strength: 26,
        Dexterity: 14,
        Constitution: 24,
        Intelligence: 22,
        Wisdom: 18,
        Charisma: 24,
        SavingThrows: ["Dexterity +8", "Constitution +13", "Wisdom +10", "Charisma +13"],
        Skills: ["Perception +10"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Truesight 120 ft.", "Passive Perception 20"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [20, 25000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Fear Aura.",
                Desc: "Any creature hostile to the pit fiend that starts its turn within 20 feet of the pit fiend must make a DC 21 Wisdom saving throw, unless the pit fiend is incapacitated. On a failed save, the creature is frightened until the start of its next turn. If a creature's saving throw is successful, the creature is immune to the pit fiend's Fear Aura for the next 24 hours."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The pit fiend has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Magic Weapons.",
                Desc: "The pit fiend's weapon attacks are magical."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The pit fiend makes four attacks: one with its bite, one with its claw, one with its mace, and one with its tail."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 22 (4d6 + 8) piercing damage. The target must succeed on a DC 21 Constitution saving throw or become poisoned. While poisoned, the target is also unconscious. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 17 (2d8 + 8) slashing damage."
            },
            {
                Title: "Mace.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) bludgeoning damage plus 21 (6d6) fire damage."
            },
            {
                Title: "Hurl Flame.",
                Desc: "Ranged Spell Attack: +11 to hit, range 150 ft., one target. Hit: 24 (7d6) fire damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 62,
        ProfileType: "Monster",
        Name: "Spined Devil",
        Type: "Small fiend (devil), lawful evil",
        Source: "Monster Manual",
        HitPoints: 22,
        HitPointsRoll: "5d6 + 5",
        ArmorClass: [13, ""],
        Speed: ["20 ft.", "fly 40 ft."],
        Strength: 10,
        Dexterity: 15,
        Constitution: 12,
        Intelligence: 11,
        Wisdom: 14,
        Charisma: 10,
        SavingThrows: [],
        Skills: ["Perception +4"],
        DamageVulnerabilities: [],
        DamageResistances: ["Cold", "Bludgeoning, Piercing, and Slashing from non magical weapons that aren't silvered"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Darkvision 120 ft.", "Passive Perception 14"],
        Languages: ["Infernal", "Telepathy 120 ft."],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Devil's Sight.",
                Desc: "Magical darkness doesn't impede the devil's darkvision."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The devil has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The devil makes three attacks: one with its bite and two with its tail spines."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            },
            {
                Title: "Tail Spine.",
                Desc: "Ranged Weapon Attack: +4 to hit, range 20/80 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 63,
        ProfileType: "Monster",
        Name: "Allosaurus",
        Type: "Large beast, unaligned",
        Source: "Monster Manual",
        HitPoints: 51,
        HitPointsRoll: "6d10 + 18",
        ArmorClass: [13, "natural armor"],
        Speed: ["60 ft."],
        Strength: 19,
        Dexterity: 13,
        Constitution: 17,
        Intelligence: 2,
        Wisdom: 12,
        Charisma: 5,
        SavingThrows: [],
        Skills: ["Perception +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 13"],
        Languages: [],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Pounce.",
                Desc: "If the allosaurus moves at least 20 feet straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the allosaurus can make one bite attack against it as a bonus action."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The allosaurus makes two attacks: one with its bite and one with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 64,
        ProfileType: "Monster",
        Name: "Ankylosaurus",
        Type: "Huge beast, unaligned",
        Source: "Monster Manual",
        HitPoints: 68,
        HitPointsRoll: "8d12 + 16",
        ArmorClass: [15, "natural armor"],
        Speed: ["30 ft."],
        Strength: 19,
        Dexterity: 11,
        Constitution: 15,
        Intelligence: 2,
        Wisdom: 11,
        Charisma: 5,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 10"],
        Languages: [],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 18 (4d6 + 4) bludgeoning damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 65,
        ProfileType: "Monster",
        Name: "Plesiosaurus",
        Type: "Large beast, unaligned",
        Source: "Monster Manual",
        HitPoints: 68,
        HitPointsRoll: "8d10 + 24",
        ArmorClass: [13, "natural armor"],
        Speed: ["20 ft.", "swim 40 ft."],
        Strength: 18,
        Dexterity: 15,
        Constitution: 16,
        Intelligence: 2,
        Wisdom: 12,
        Charisma: 5,
        SavingThrows: [],
        Skills: ["Perception +3", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 13"],
        Languages: [],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Hold Breath.",
                Desc: "The plesiosaurus can hold its breath for 1 hour."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 66,
        ProfileType: "Monster",
        Name: "Triceratops",
        Type: "Huge beast, unaligned",
        Source: "Monster Manual",
        HitPoints: 95,
        HitPointsRoll: "10d12 + 30",
        ArmorClass: [13, "natural armor"],
        Speed: ["50 ft."],
        Strength: 22,
        Dexterity: 9,
        Constitution: 17,
        Intelligence: 2,
        Wisdom: 11,
        Charisma: 5,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 10"],
        Languages: [],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Trampling Charge.",
                Desc: "If the triceratops moves at least 20 feet straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stamp attack against it as a bonus action."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The triceratops makes two attacks, only one of which can be a gore attack."
            },
            {
                Title: "Gore.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage."
            },
            {
                Title: "Stamp.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 67,
        ProfileType: "Monster",
        Name: "Pteranodon",
        Type: "Medium beast, unaligned",
        Source: "Monster Manual",
        HitPoints: 13,
        HitPointsRoll: "3d8",
        ArmorClass: [13, ""],
        Speed: ["10 ft.", "fly 60 ft."],
        Strength: 12,
        Dexterity: 15,
        Constitution: 10,
        Intelligence: 2,
        Wisdom: 9,
        Charisma: 5,
        SavingThrows: [],
        Skills: ["Perception +1"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 11"],
        Languages: [],
        Challenge: [0.25, 50],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Flyby.",
                Desc: "The pteranodon doesn't provoke opportunity attacks when it flies out of an enemy's reach."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (1d10 + 1) piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 68,
        ProfileType: "Monster",
        Name: "Tyrannosaurus Rex",
        Type: "Huge beast, unaligned",
        Source: "Monster Manual",
        HitPoints: 136,
        HitPointsRoll: "13d12 + 52",
        ArmorClass: [13, "natural armor"],
        Speed: ["50 ft."],
        Strength: 25,
        Dexterity: 10,
        Constitution: 19,
        Intelligence: 2,
        Wisdom: 12,
        Charisma: 9,
        SavingThrows: [],
        Skills: ["Perception +5"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Passive Perception 15"],
        Languages: [],
        Challenge: [8, 3900],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target not grappled by the tyrannosaurus. Hit: 20 (3d8 + 7) bludgeoning damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 69,
        ProfileType: "Monster",
        Name: "Displacer Beast",
        Type: "Large monstrosity, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 85,
        HitPointsRoll: "10d10 + 30",
        ArmorClass: [13, "natural armor"],
        Speed: ["40 ft."],
        Strength: 18,
        Dexterity: 15,
        Constitution: 16,
        Intelligence: 6,
        Wisdom: 12,
        Charisma: 8,
        SavingThrows: [],
        Skills: ["Perception +3", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 13"],
        Languages: [],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Avoidance.",
                Desc: "If the displacer beast is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throw, and only half damage if it fails."
            },
            {
                Title: "Displacement.",
                Desc: "The displacer beast projects a magical illusion that makes it appear to be standing near its actual location, causing attack rolls against it to have disadvantage. If the displacer beast is hit by an attack, this trait is negated until the start of its next turn. This trait is also negated while the displacer beast is incapacitated or has a speed of 0."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The displacer beast makes two attacks with its tentacles."
            },
            {
                Title: "Tentacle.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage plus 3 (1d6) piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 70,
        ProfileType: "Monster",
        Name: "Doppelganger",
        Type: "Medium monstrosity (shapechanger), neutral",
        Source: "Monster Manual",
        HitPoints: 52,
        HitPointsRoll: "8d8 + 16",
        ArmorClass: [14, ""],
        Speed: ["30 ft."],
        Strength: 11,
        Dexterity: 18,
        Constitution: 14,
        Intelligence: 11,
        Wisdom: 12,
        Charisma: 14,
        SavingThrows: [],
        Skills: ["Deception +6", "Insight +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: ["Charmed"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 11"],
        Languages: ["Common"],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Shapechanger.",
                Desc: "The doppelganger can use its action to polymorph into a Small or Medium humanoid it has seen, or back into its true form. Its statistics, other than its size, are the same in each form. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies."
            },
            {
                Title: "Ambusher.",
                Desc: "In the first round of a combat, the doppelganger has advantage on attack rolls against any creature it has surprised."
            },
            {
                Title: "Surprise Attack.",
                Desc: "If the doppelganger surprises a creature and hits it with an attack during the first round of combat, the target takes an extra 10 (3d6) damage from the attack."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The doppelganger makes two melee attacks."
            },
            {
                Title: "Slam.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) bludgeoning damage."
            },
            {
                Title: "Read Thoughts.",
                Desc: "The doppelganger magically reads the surface thoughts of one creature within 60 feet of it. The effect can penetrate barriers, but 3 feet of wood or dirt, 2 feet of stone, 2 inches of metal, or a thin sheet of lead blocks it. While the target is in range, the doppelganger can continue reading its thoughts, as long as the doppelganger's concentration isn't broken (as if concentrating on a spell). While reading the target's mind, the doppelganger has advantage on Wisdom (Insight) and Charisma (Deception, Intimidation, and Persuasion) checks against the target."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Adult Blue Dracolich
        ID: 71,
        ProfileType: "Monster",
        Name: "Adult Blue Dracolich",
        Type: "Huge undead, lawful evil",
        Source: "Monster Manual",
        HitPoints: 225,
        HitPointsRoll: "18d12 + 108",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft."],
        Strength: 25,
        Dexterity: 10,
        Constitution: 23,
        Intelligence: 16,
        Wisdom: 15,
        Charisma: 19,
        SavingThrows: ["Dexterity +5", "Constitution +11", "Wisdom +7", "Charisma +9"],
        Skills: ["Perception +12", "Stealth +5"],
        DamageVulnerabilities: [],
        DamageResistances: ["Necrotic"],
        DamageImmunities: ["Lightning", "Poison"],
        ConditionImmunities: ["Charmed", "Exhaustion", "Frightened", "Paralyzed", "Poisoned"],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 22"],
        Languages: ["Common", "Draconic"],
        Challenge: [17, 18000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dracolich fails a saving throw, it can choose to succeed instead."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The dracolich has advantage on saving throws against spells and other magical effects."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dracolich can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dracolich's choice that is within 120 feet of the dracolich and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dracolich's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Lightning Breath (Recharge 5-6).",
                Desc: "The dracolich exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dracolich makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dracolich makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dracolich beats its tattered wings. Each creature within 10 feet of the dracolich must succeed on a DC 21 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. After beating its wings this way, the dracolich can fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Red Shadow Dragon
        ID: 72,
        ProfileType: "Monster",
        Name: "Young Red Shadow Dragon",
        Type: "Large dragon, chaotic evil",
        Source: "Monster Manual (Young Red Dragon base, shadow dragon reskin)",
        HitPoints: 178,
        HitPointsRoll: "17d10 + 85",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
        Strength: 23,
        Dexterity: 10,
        Constitution: 21,
        Intelligence: 14,
        Wisdom: 11,
        Charisma: 19,
        SavingThrows: ["Dexterity +4", "Constitution +9", "Wisdom +4", "Charisma +8"],
        Skills: ["Perception +8", "Stealth +8"],
        DamageVulnerabilities: [],
        DamageResistances: ["Necrotic"],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 18"],
        Languages: ["Common", "Draconic"],
        Challenge: [13, 10000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Living Shadow.",
                Desc: "While in dim light or darkness, the dragon has resistance to damage that isn't force, psychic, or radiant."
            },
            {
                Title: "Shadow Stealth.",
                Desc: "While in dim light or darkness, the dragon can take the Hide action as a bonus action."
            },
            {
                Title: "Sunlight Sensitivity.",
                Desc: "While in sunlight, the dragon has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) necrotic damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Shadow Breath (Recharge 5-6).",
                Desc: "The dragon exhales shadowy fire in a 30-foot cone. Each creature in that area must make a DC 18 Dexterity saving throw, taking 56 (16d6) necrotic damage on a failed save, or half as much damage on a successful one. A humanoid reduced to 0 hit points by this damage dies, and an undead shadow rises from its corpse and acts immediately after the dragon in the initiative count. The shadow is under the dragon's control."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Black Dragon
        ID: 73,
        ProfileType: "Monster",
        Name: "Ancient Black Dragon",
        Type: "Gargantuan dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 367,
        HitPointsRoll: "21d20 + 147",
        ArmorClass: [22, "natural armor"],
        Speed: ["40 ft.", "swim 40 ft.", "fly 80 ft."],
        Strength: 27,
        Dexterity: 14,
        Constitution: 25,
        Intelligence: 16,
        Wisdom: 15,
        Charisma: 19,
        SavingThrows: ["Dexterity +9", "Constitution +14", "Wisdom +9", "Charisma +11"],
        Skills: ["Stealth +9", "Perception +15"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Acid"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 25"],
        Languages: ["Common", "Draconic"],
        Challenge: [21, 33000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 9 (2d8) acid damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Acid Breath (Recharge 5-6).",
                Desc: "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity saving throw, taking 67 (15d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 74,
        ProfileType: "Monster",
        Name: "Adult Black Dragon",
        Type: "Huge dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 195,
        HitPointsRoll: "17d12 + 85",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "swim 40 ft.", "fly 80 ft."],
        Strength: 23,
        Dexterity: 14,
        Constitution: 21,
        Intelligence: 14,
        Wisdom: 13,
        Charisma: 17,
        SavingThrows: ["Dexterity +7", "Constitution +10", "Wisdom +6", "Charisma +8"],
        Skills: ["Stealth +7", "Perception +11"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Acid"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 21"],
        Languages: ["Common", "Draconic"],
        Challenge: [14, 11500],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) acid damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Acid Breath (Recharge 5-6).",
                Desc: "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 75,
        ProfileType: "Monster",
        Name: "Young Black Dragon",
        Type: "Large dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 127,
        HitPointsRoll: "15d10 + 45",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "swim 40 ft.", "fly 80 ft."],
        Strength: 19,
        Dexterity: 14,
        Constitution: 17,
        Intelligence: 12,
        Wisdom: 11,
        Charisma: 15,
        SavingThrows: ["Dexterity +5", "Constitution +6", "Wisdom +3", "Charisma +5"],
        Skills: ["Stealth +5", "Perception +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Acid"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 16"],
        Languages: ["Draconic"],
        Challenge: [7, 2900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) acid damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                Title: "Acid Breath (Recharge 5-6).",
                Desc: "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 49 (11d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    {
        ID: 76,
        ProfileType: "Monster",
        Name: "Black Dragon Wyrmling",
        Type: "Medium dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 33,
        HitPointsRoll: "6d8 + 6",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft.", "swim 30 ft.", "fly 60 ft."],
        Strength: 15,
        Dexterity: 14,
        Constitution: 13,
        Intelligence: 10,
        Wisdom: 11,
        Charisma: 13,
        SavingThrows: ["Dexterity +4", "Constitution +3", "Wisdom +2", "Charisma +3"],
        Skills: ["Stealth +4", "Perception +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Acid"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) acid damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) slashing damage."
            },
            {
                Title: "Acid Breath (Recharge 5-6).",
                Desc: "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 22 (5d8) acid damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Blue Dragon
        ID: 77,
        ProfileType: "Monster",
        Name: "Ancient Blue Dragon",
        Type: "Gargantuan dragon, lawful evil",
        Source: "Monster Manual",
        HitPoints: 481,
        HitPointsRoll: "26d20 + 208",
        ArmorClass: [22, "natural armor"],
        Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft."],
        Strength: 29,
        Dexterity: 10,
        Constitution: 27,
        Intelligence: 18,
        Wisdom: 17,
        Charisma: 21,
        SavingThrows: ["Dexterity +7", "Constitution +15", "Wisdom +10", "Charisma +12"],
        Skills: ["Perception +17", "Stealth +7"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 27"],
        Languages: ["Common", "Draconic"],
        Challenge: [23, 50000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +16 to hit, reach 15 ft., one target. Hit: 22 (2d10 + 11) piercing damage plus 11 (2d10) lightning damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +16 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 11) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +16 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 11) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Lightning Breath (Recharge 5-6).",
                Desc: "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 23 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 17 (2d6 + 11) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [
            "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
            "A tremor shakes the lair in a 60-foot radius. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or fall prone.",
            "A crack opens in the ground in a 15-foot radius at a point on the ground the dragon can see within 120 feet of it. The crack is 15 feet deep, and any Small or larger creature standing in the area must succeed on a DC 15 Dexterity saving throw or fall in, taking falling damage as appropriate for the depth.",
            "A wall of sand rises to form a solid wall up to 60 feet long, 20 feet high, and 5 feet thick, within 120 feet of the dragon. The wall lasts until the dragon uses this lair action again or until the dragon dies."
        ],
        Description: "Description here"
    },
    { // Adult Blue Dragon
        ID: 78,
        ProfileType: "Monster",
        Name: "Adult Blue Dragon",
        Type: "Huge dragon, lawful evil",
        Source: "Monster Manual",
        HitPoints: 212,
        HitPointsRoll: "17d12 + 102",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft."],
        Strength: 25,
        Dexterity: 10,
        Constitution: 23,
        Intelligence: 16,
        Wisdom: 15,
        Charisma: 19,
        SavingThrows: ["Dexterity +6", "Constitution +12", "Wisdom +8", "Charisma +10"],
        Skills: ["Perception +14", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 24"],
        Languages: ["Common", "Draconic"],
        Challenge: [16, 15000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 18 (2d10 + 7) piercing damage plus 5 (1d10) lightning damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 14 (2d6 + 7) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 16 (2d8 + 7) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Lightning Breath (Recharge 5-6).",
                Desc: "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 14 (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Blue Dragon
        ID: 79,
        ProfileType: "Monster",
        Name: "Young Blue Dragon",
        Type: "Large dragon, lawful evil",
        Source: "Monster Manual",
        HitPoints: 152,
        HitPointsRoll: "16d10 + 64",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft."],
        Strength: 21,
        Dexterity: 10,
        Constitution: 19,
        Intelligence: 14,
        Wisdom: 11,
        Charisma: 17,
        SavingThrows: ["Dexterity +4", "Constitution +8", "Wisdom +4", "Charisma +7"],
        Skills: ["Perception +8", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 18"],
        Languages: ["Draconic"],
        Challenge: [9, 5000],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 5 (1d10) lightning damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                Title: "Lightning Breath (Recharge 5-6).",
                Desc: "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Blue Dragon Wyrmling
        ID: 80,
        ProfileType: "Monster",
        Name: "Blue Dragon Wyrmling",
        Type: "Medium dragon, lawful evil",
        Source: "Monster Manual",
        HitPoints: 65,
        HitPointsRoll: "10d8 + 20",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft.", "burrow 15 ft.", "fly 60 ft."],
        Strength: 19,
        Dexterity: 10,
        Constitution: 15,
        Intelligence: 12,
        Wisdom: 11,
        Charisma: 15,
        SavingThrows: ["Dexterity +2", "Constitution +4", "Wisdom +2", "Charisma +4"],
        Skills: ["Perception +4", "Stealth +2"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) lightning damage."
            },
            {
                Title: "Lightning Breath (Recharge 5-6).",
                Desc: "The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 22 (4d10) lightning damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Green Dragon
        ID: 81,
        ProfileType: "Monster",
        Name: "Ancient Green Dragon",
        Type: "Gargantuan dragon, lawful evil",
        Source: "Monster Manual",
        HitPoints: 385,
        HitPointsRoll: "22d20 + 154",
        ArmorClass: [21, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 25,
        Dexterity: 12,
        Constitution: 22,
        Intelligence: 20,
        Wisdom: 17,
        Charisma: 19,
        SavingThrows: ["Dexterity +7", "Constitution +12", "Wisdom +9", "Charisma +10"],
        Skills: ["Deception +10", "Insight +9", "Perception +16", "Persuasion +10", "Stealth +7"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 26"],
        Languages: ["Common", "Draconic"],
        Challenge: [22, 41000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) poison damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Poison Breath (Recharge 5-6).",
                Desc: "The dragon exhales poisonous gas in a 90-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 77 (22d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [
            "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
            "Grasping vines and roots sprout in a 20-foot radius centered on a point the dragon can see within 120 feet of it. These plants turn the ground in that area into difficult terrain until initiative count 20 on the next round. Any creature in the area when the vines and roots appear must succeed on a DC 15 Strength saving throw or be restrained by them until the end of the dragon's next turn.",
            "The dragon casts fog cloud, centered on a point within 120 feet of it, without providing material components. The spell lasts until initiative count 20 on the next round, when the fog dissipates. Alternatively, the dragon dismisses the fog early as part of taking this lair action to create a different effect.",
            "A pocket of caustic gas explodes in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. Each creature in that area must succeed on a DC 13 Constitution saving throw or take 10 (3d6) poison damage."
        ],
        Description: "Description here"
    },
    { // Adult Green Dragon
        ID: 82,
        ProfileType: "Monster",
        Name: "Adult Green Dragon",
        Type: "Huge dragon, lawful evil",
        Source: "Monster Manual",
        HitPoints: 207,
        HitPointsRoll: "18d12 + 90",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 23,
        Dexterity: 12,
        Constitution: 21,
        Intelligence: 18,
        Wisdom: 15,
        Charisma: 17,
        SavingThrows: ["Dexterity +6", "Constitution +10", "Wisdom +7", "Charisma +8"],
        Skills: ["Deception +8", "Insight +7", "Perception +12", "Persuasion +8", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 22"],
        Languages: ["Common", "Draconic"],
        Challenge: [15, 13000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 7 (2d6) poison damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Poison Breath (Recharge 5-6).",
                Desc: "The dragon exhales poisonous gas in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 56 (16d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Green Dragon
        ID: 83,
        ProfileType: "Monster",
        Name: "Young Green Dragon",
        Type: "Large dragon, lawful evil",
        Source: "Monster Manual",
        HitPoints: 136,
        HitPointsRoll: "16d10 + 48",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 19,
        Dexterity: 12,
        Constitution: 17,
        Intelligence: 16,
        Wisdom: 13,
        Charisma: 15,
        SavingThrows: ["Dexterity +4", "Constitution +6", "Wisdom +4", "Charisma +5"],
        Skills: ["Deception +5", "Insight +4", "Perception +7", "Persuasion +5", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 17"],
        Languages: ["Draconic"],
        Challenge: [8, 3900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                Title: "Poison Breath (Recharge 5-6).",
                Desc: "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Green Dragon Wyrmling
        ID: 84,
        ProfileType: "Monster",
        Name: "Green Dragon Wyrmling",
        Type: "Medium dragon, lawful evil",
        Source: "Monster Manual",
        HitPoints: 38,
        HitPointsRoll: "7d8 + 7",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft.", "fly 60 ft.", "swim 30 ft."],
        Strength: 15,
        Dexterity: 12,
        Constitution: 13,
        Intelligence: 10,
        Wisdom: 11,
        Charisma: 13,
        SavingThrows: ["Dexterity +3", "Constitution +3", "Wisdom +2", "Charisma +3"],
        Skills: ["Deception +3", "Insight +2", "Perception +4", "Persuasion +3", "Stealth +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Poisoned"],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 3 (1d6) poison damage."
            },
            {
                Title: "Poison Breath (Recharge 5-6).",
                Desc: "The dragon exhales poisonous gas in a 15-foot cone. Each creature in that area must make a DC 11 Constitution saving throw, taking 17 (5d6) poison damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Red Dragon
        ID: 85,
        ProfileType: "Monster",
        Name: "Ancient Red Dragon",
        Type: "Gargantuan dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 546,
        HitPointsRoll: "28d20 + 252",
        ArmorClass: [22, "natural armor"],
        Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
        Strength: 30,
        Dexterity: 10,
        Constitution: 29,
        Intelligence: 18,
        Wisdom: 15,
        Charisma: 23,
        SavingThrows: ["Dexterity +7", "Constitution +16", "Wisdom +9", "Charisma +13"],
        Skills: ["Perception +17", "Stealth +7"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 27"],
        Languages: ["Common", "Draconic"],
        Challenge: [24, 62000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Fire Breath (Recharge 5-6).",
                Desc: "The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 91 (26d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [
            "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
            "Magma erupts from a point on the ground the dragon can see within 120 feet of it, forming a 5-foot-radius, 30-foot-high geyser. Each creature in the geyser's area must make a DC 15 Dexterity saving throw, taking 21 (6d6) fire damage on a failed save, or half as much damage on a successful one.",
            "A tremor shakes the lair in a 60-foot radius around the dragon. Each creature other than the dragon on the ground in that area must succeed on a DC 15 Dexterity saving throw or be knocked prone.",
            "Volcanic gases form a cloud in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners, and its area is heavily obscured. It lasts until initiative count 20 on the next round. Each creature that starts its turn in the cloud must succeed on a DC 13 Constitution saving throw or be poisoned until the start of its next turn."
        ],
        Description: "Description here"
    },
    { // Adult Red Dragon
        ID: 86,
        ProfileType: "Monster",
        Name: "Adult Red Dragon",
        Type: "Huge dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 256,
        HitPointsRoll: "19d12 + 133",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
        Strength: 27,
        Dexterity: 10,
        Constitution: 25,
        Intelligence: 16,
        Wisdom: 13,
        Charisma: 21,
        SavingThrows: ["Dexterity +6", "Constitution +13", "Wisdom +7", "Charisma +11"],
        Skills: ["Perception +13", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 23"],
        Languages: ["Common", "Draconic"],
        Challenge: [17, 18000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Fire Breath (Recharge 5-6).",
                Desc: "The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 63 (18d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Red Dragon
        ID: 87,
        ProfileType: "Monster",
        Name: "Young Red Dragon",
        Type: "Large dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 178,
        HitPointsRoll: "17d10 + 85",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
        Strength: 23,
        Dexterity: 10,
        Constitution: 21,
        Intelligence: 14,
        Wisdom: 11,
        Charisma: 19,
        SavingThrows: ["Dexterity +4", "Constitution +9", "Wisdom +4", "Charisma +8"],
        Skills: ["Perception +8", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 18"],
        Languages: ["Draconic"],
        Challenge: [10, 5900],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 3 (1d6) fire damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Fire Breath (Recharge 5-6).",
                Desc: "The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Red Dragon Wyrmling
        ID: 88,
        ProfileType: "Monster",
        Name: "Red Dragon Wyrmling",
        Type: "Medium dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 75,
        HitPointsRoll: "10d8 + 30",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft.", "climb 30 ft.", "fly 60 ft."],
        Strength: 19,
        Dexterity: 10,
        Constitution: 17,
        Intelligence: 12,
        Wisdom: 11,
        Charisma: 15,
        SavingThrows: ["Dexterity +2", "Constitution +5", "Wisdom +2", "Charisma +4"],
        Skills: ["Perception +4", "Stealth +2"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [4, 1100],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (1d10 + 4) piercing damage plus 3 (1d6) fire damage."
            },
            {
                Title: "Fire Breath (Recharge 5-6).",
                Desc: "The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 24 (7d6) fire damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient White Dragon
        ID: 89,
        ProfileType: "Monster",
        Name: "Ancient White Dragon",
        Type: "Gargantuan dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 333,
        HitPointsRoll: "18d20 + 144",
        ArmorClass: [20, "natural armor"],
        Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 26,
        Dexterity: 10,
        Constitution: 26,
        Intelligence: 10,
        Wisdom: 13,
        Charisma: 14,
        SavingThrows: ["Dexterity +6", "Constitution +14", "Wisdom +7", "Charisma +8"],
        Skills: ["Perception +13", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Cold"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 23"],
        Languages: ["Common", "Draconic"],
        Challenge: [20, 25000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Ice Walk.",
                Desc: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 20 (2d10 + 9) piercing damage plus 9 (2d8) cold damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 16 (2d6 + 9) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 18 (2d8 + 9) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Cold Breath (Recharge 5-6).",
                Desc: "The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 22 Dexterity saving throw, taking 72 (16d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 16 (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [
            "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
            "Freezing wind and snow gusts around the dragon. Each creature within 60 feet of the dragon must succeed on a DC 18 Strength saving throw or take 10 (3d6) cold damage and be pushed 20 feet away from the dragon.",
            "Jagged icicles fall in a 20-foot-radius, 40-foot-high cylinder centered on a point within 120 feet of the dragon. The cylinder is centered on a point in the air, and the icicles fall to the ground. Each creature in the cylinder when it appears must make a DC 18 Dexterity saving throw, taking 18 (4d8) piercing damage on a failed save, or half as much damage on a successful one.",
            "The dragon causes the ground within 60 feet of it to become icy difficult terrain. The ice remains until initiative count 20 on the next round. Any creature that enters the icy area or starts its turn there must succeed on a DC 18 Dexterity saving throw or fall prone."
        ],
        Description: "Description here"
    },
    { // Adult White Dragon
        ID: 90,
        ProfileType: "Monster",
        Name: "Adult White Dragon",
        Type: "Huge dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 200,
        HitPointsRoll: "16d12 + 96",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 22,
        Dexterity: 10,
        Constitution: 22,
        Intelligence: 8,
        Wisdom: 12,
        Charisma: 12,
        SavingThrows: ["Dexterity +5", "Constitution +11", "Wisdom +6", "Charisma +6"],
        Skills: ["Perception +11", "Stealth +5"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Cold"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 21"],
        Languages: ["Common", "Draconic"],
        Challenge: [13, 10000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Ice Walk.",
                Desc: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) cold damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Cold Breath (Recharge 5-6).",
                Desc: "The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 19 Dexterity saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young White Dragon
        ID: 91,
        ProfileType: "Monster",
        Name: "Young White Dragon",
        Type: "Large dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 133,
        HitPointsRoll: "14d10 + 56",
        ArmorClass: [17, "natural armor"],
        Speed: ["40 ft.", "burrow 25 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 18,
        Dexterity: 10,
        Constitution: 18,
        Intelligence: 6,
        Wisdom: 11,
        Charisma: 10,
        SavingThrows: ["Dexterity +3", "Constitution +7", "Wisdom +3", "Charisma +3"],
        Skills: ["Perception +6", "Stealth +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Cold"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 16"],
        Languages: ["Draconic"],
        Challenge: [6, 2300],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Ice Walk.",
                Desc: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 4 (1d8) cold damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                Title: "Cold Breath (Recharge 5-6).",
                Desc: "The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Dexterity saving throw, taking 45 (10d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // White Dragon Wyrmling
        ID: 92,
        ProfileType: "Monster",
        Name: "White Dragon Wyrmling",
        Type: "Medium dragon, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 32,
        HitPointsRoll: "5d8 + 10",
        ArmorClass: [16, "natural armor"],
        Speed: ["30 ft.", "burrow 15 ft.", "fly 60 ft.", "swim 30 ft."],
        Strength: 14,
        Dexterity: 10,
        Constitution: 14,
        Intelligence: 5,
        Wisdom: 10,
        Charisma: 11,
        SavingThrows: ["Dexterity +2", "Constitution +4", "Wisdom +2", "Charisma +2"],
        Skills: ["Perception +4", "Stealth +2"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Cold"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Ice Walk.",
                Desc: "The dragon can move across and climb icy surfaces without needing to make an ability check. Additionally, difficult terrain composed of ice or snow doesn't cost it extra movement."
            }
        ],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 2 (1d4) cold damage."
            },
            {
                Title: "Cold Breath (Recharge 5-6).",
                Desc: "The dragon exhales an icy blast in a 10-foot cone. Each creature in that area must make a DC 12 Dexterity saving throw, taking 22 (5d8) cold damage on a failed save, or half as much damage on a successful one."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Brass Dragon
        ID: 93,
        ProfileType: "Monster",
        Name: "Ancient Brass Dragon",
        Type: "Gargantuan dragon, chaotic good",
        Source: "Monster Manual",
        HitPoints: 297,
        HitPointsRoll: "17d20 + 119",
        ArmorClass: [20, "natural armor"],
        Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft."],
        Strength: 27,
        Dexterity: 10,
        Constitution: 25,
        Intelligence: 16,
        Wisdom: 15,
        Charisma: 19,
        SavingThrows: ["Dexterity +6", "Constitution +13", "Wisdom +8", "Charisma +10"],
        Skills: ["History +9", "Perception +14", "Persuasion +10", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 24"],
        Languages: ["Common", "Draconic"],
        Challenge: [20, 25000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 17 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PFire Breath. The dragon exhales fire in an 90-foot line that is 5 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 56 (16d6) fire damage on a failed save, or half as much damage on a successful one.#PSleep Breath. The dragon exhales sleep gas in a 90-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Adult Brass Dragon
        ID: 94,
        ProfileType: "Monster",
        Name: "Adult Brass Dragon",
        Type: "Huge dragon, chaotic good",
        Source: "Monster Manual",
        HitPoints: 172,
        HitPointsRoll: "15d12 + 75",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "burrow 30 ft.", "fly 80 ft."],
        Strength: 23,
        Dexterity: 10,
        Constitution: 21,
        Intelligence: 14,
        Wisdom: 13,
        Charisma: 17,
        SavingThrows: ["Dexterity +4", "Constitution +9", "Wisdom +5", "Charisma +7"],
        Skills: ["History +6", "Perception +9", "Persuasion +7", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 19"],
        Languages: ["Common", "Draconic"],
        Challenge: [13, 10000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PFire Breath. The dragon exhales fire in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 17 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.#PSleep Breath. The dragon exhales sleep gas in a 60-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw or fall unconscious for 10 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 18 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Brass Dragon
        ID: 95,
        ProfileType: "Monster",
        Name: "Young Brass Dragon",
        Type: "Large dragon, chaotic good",
        Source: "Monster Manual",
        HitPoints: 110,
        HitPointsRoll: "13d10 + 39",
        ArmorClass: [17, "natural armor"],
        Speed: ["40 ft.", "burrow 20 ft.", "fly 80 ft."],
        Strength: 19,
        Dexterity: 10,
        Constitution: 17,
        Intelligence: 12,
        Wisdom: 11,
        Charisma: 15,
        SavingThrows: ["Dexterity +3", "Constitution +6", "Wisdom +3", "Charisma +5"],
        Skills: ["History +4", "Perception +6", "Persuasion +5", "Stealth +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 16"],
        Languages: ["Draconic"],
        Challenge: [6, 2300],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PFire Breath. The dragon exhales fire in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 38 (11d6) fire damage on a failed save, or half as much damage on a successful one.#PSleep Breath. The dragon exhales sleep gas in a 30-foot cone. Each creature in that area must succeed on a DC 12 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Brass Dragon Wyrmling
        ID: 96,
        ProfileType: "Monster",
        Name: "Brass Dragon Wyrmling",
        Type: "Medium dragon, chaotic good",
        Source: "Monster Manual",
        HitPoints: 16,
        HitPointsRoll: "3d8 + 3",
        ArmorClass: [16, "natural armor"],
        Speed: ["30 ft.", "burrow 15 ft.", "fly 50 ft."],
        Strength: 11,
        Dexterity: 10,
        Constitution: 13,
        Intelligence: 10,
        Wisdom: 11,
        Charisma: 13,
        SavingThrows: ["Dexterity +2", "Constitution +3", "Wisdom +2", "Charisma +3"],
        Skills: ["History +2", "Perception +3", "Persuasion +3", "Stealth +2"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 13"],
        Languages: ["Draconic"],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (1d10) piercing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PFire Breath. The dragon exhales fire in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 14 (4d6) fire damage on a failed save, or half as much damage on a successful one.#PSleep Breath. The dragon exhales sleep gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw or fall unconscious for 5 minutes. This effect ends for a creature if the creature takes damage or someone uses an action to wake it."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Bronze Dragon
        ID: 97,
        ProfileType: "Monster",
        Name: "Ancient Bronze Dragon",
        Type: "Gargantuan dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 444,
        HitPointsRoll: "24d20 + 192",
        ArmorClass: [22, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 27,
        Dexterity: 10,
        Constitution: 25,
        Intelligence: 18,
        Wisdom: 17,
        Charisma: 21,
        SavingThrows: ["Dexterity +7", "Constitution +14", "Wisdom +10", "Charisma +12"],
        Skills: ["Insight +10", "Perception +17", "Persuasion +12", "Stealth +7"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 27"],
        Languages: ["Common", "Draconic"],
        Challenge: [22, 41000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 22 (2d10 + 10) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PLightning Breath. The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 21 Dexterity saving throw, taking 88 (16d10) lightning damage on a failed save, or half as much damage on a successful one.#PRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or be pushed 60 feet away from the dragon and knocked prone. On a successful save, the creature is pushed 30 feet away but not knocked prone."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [
            "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
            "A cloud of vapor forms in a 20-foot-radius sphere centered on a point the dragon can see within 120 feet of it. The cloud spreads around corners, and its area is heavily obscured. It lasts until initiative count 20 on the next round.",
            "A wave surges from a point the dragon can see within 120 feet of it and moves 30 feet in a direction the dragon designates, flowing around corners. Each creature in the wave's path must succeed on a DC 15 Strength saving throw or be pushed 20 feet, knocked prone, and be doused.",
            "The dragon casts fog cloud, without providing material components, centered on a point within 120 feet of it. The spell lasts until initiative count 20 on the next round."
        ],
        Description: "Description here"
    },
    { // Adult Bronze Dragon
        ID: 98,
        ProfileType: "Monster",
        Name: "Adult Bronze Dragon",
        Type: "Huge dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 212,
        HitPointsRoll: "17d12 + 102",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 25,
        Dexterity: 10,
        Constitution: 23,
        Intelligence: 16,
        Wisdom: 15,
        Charisma: 19,
        SavingThrows: ["Dexterity +6", "Constitution +12", "Wisdom +8", "Charisma +10"],
        Skills: ["Insight +8", "Perception +14", "Persuasion +10", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 24"],
        Languages: ["Common", "Draconic"],
        Challenge: [15, 13000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +12 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PLightning Breath. The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 66 (12d10) lightning damage on a failed save, or half as much damage on a successful one.#PRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 18 Strength saving throw or be pushed 60 feet away from the dragon and knocked prone. On a successful save, the creature is pushed 30 feet away but not knocked prone."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Bronze Dragon
        ID: 99,
        ProfileType: "Monster",
        Name: "Young Bronze Dragon",
        Type: "Large dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 142,
        HitPointsRoll: "15d10 + 60",
        ArmorClass: [17, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 21,
        Dexterity: 10,
        Constitution: 19,
        Intelligence: 14,
        Wisdom: 13,
        Charisma: 17,
        SavingThrows: ["Dexterity +3", "Constitution +7", "Wisdom +4", "Charisma +6"],
        Skills: ["Insight +4", "Perception +7", "Persuasion +6", "Stealth +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 17"],
        Languages: ["Draconic"],
        Challenge: [8, 3900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon can breathe air and water."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 10 ft., one target. Hit: 16 (2d10 + 5) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PLightning Breath. The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 15 Dexterity saving throw, taking 55 (10d10) lightning damage on a failed save, or half as much damage on a successful one.#PRepulsion Breath. The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 15 Strength saving throw or be pushed 40 feet away from the dragon and knocked prone. On a successful save, the creature is pushed 20 feet away but not knocked prone."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Bronze Dragon Wyrmling
        ID: 100,
        ProfileType: "Monster",
        Name: "Bronze Dragon Wyrmling",
        Type: "Medium dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 32,
        HitPointsRoll: "5d8 + 10",
        ArmorClass: [16, "natural armor"],
        Speed: ["30 ft.", "fly 60 ft.", "swim 30 ft."],
        Strength: 17,
        Dexterity: 10,
        Constitution: 15,
        Intelligence: 12,
        Wisdom: 11,
        Charisma: 15,
        SavingThrows: ["Dexterity +2", "Constitution +4", "Wisdom +2", "Charisma +4"],
        Skills: ["Insight +2", "Perception +4", "Persuasion +4", "Stealth +2"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Lightning"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [2, 450],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PLightning Breath. The dragon exhales lightning in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one.#PRepulsion Breath. The dragon exhales repulsion energy in a 20-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw or be pushed 20 feet away from the dragon and knocked prone. On a successful save, the creature is pushed 10 feet away but not knocked prone."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Copper Dragon
        ID: 101,
        ProfileType: "Monster",
        Name: "Ancient Copper Dragon",
        Type: "Gargantuan dragon, chaotic good",
        Source: "Monster Manual",
        HitPoints: 350,
        HitPointsRoll: "20d20 + 140",
        ArmorClass: [21, "natural armor"],
        Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
        Strength: 27,
        Dexterity: 12,
        Constitution: 21,
        Intelligence: 20,
        Wisdom: 15,
        Charisma: 17,
        SavingThrows: ["Dexterity +8", "Constitution +12", "Wisdom +9", "Charisma +10"],
        Skills: ["Deception +10", "Perception +16", "Stealth +8"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Acid"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 26"],
        Languages: ["Common", "Draconic"],
        Challenge: [21, 33000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 15 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 10 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +15 to hit, reach 20 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PAcid Breath. The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 20 Dexterity saving throw, taking 54 (12d8) acid damage on a failed save, or half as much damage on a successful one.#PSlowing Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Adult Copper Dragon
        ID: 102,
        ProfileType: "Monster",
        Name: "Adult Copper Dragon",
        Type: "Huge dragon, chaotic good",
        Source: "Monster Manual",
        HitPoints: 184,
        HitPointsRoll: "16d12 + 80",
        ArmorClass: [17, "natural armor"],
        Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
        Strength: 23,
        Dexterity: 12,
        Constitution: 21,
        Intelligence: 18,
        Wisdom: 13,
        Charisma: 17,
        SavingThrows: ["Dexterity +6", "Constitution +10", "Wisdom +6", "Charisma +8"],
        Skills: ["Deception +8", "Perception +11", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Acid"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 21"],
        Languages: ["Common", "Draconic"],
        Challenge: [14, 11500],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +11 to hit, reach 15 ft., one target. Hit: 15 (2d8 + 6) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 15 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PAcid Breath. The dragon exhales acid in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity saving throw, taking 40 (9d8) acid damage on a failed save, or half as much damage on a successful one.#PSlowing Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 16 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take 13 (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Copper Dragon
        ID: 103,
        ProfileType: "Monster",
        Name: "Young Copper Dragon",
        Type: "Large dragon, chaotic good",
        Source: "Monster Manual",
        HitPoints: 119,
        HitPointsRoll: "14d10 + 42",
        ArmorClass: [16, "natural armor"],
        Speed: ["40 ft.", "climb 40 ft.", "fly 80 ft."],
        Strength: 19,
        Dexterity: 12,
        Constitution: 17,
        Intelligence: 16,
        Wisdom: 11,
        Charisma: 15,
        SavingThrows: ["Dexterity +4", "Constitution +6", "Wisdom +3", "Charisma +5"],
        Skills: ["Deception +5", "Perception +6", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Acid"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 16"],
        Languages: ["Draconic"],
        Challenge: [7, 2900],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PAcid Breath. The dragon exhales acid in a 20-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity saving throw, taking 31 (7d8) acid damage on a failed save, or half as much damage on a successful one.#PSlowing Breath. The dragon exhales gas in a 20-foot cone. Each creature in that area must succeed on a DC 14 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Copper Dragon Wyrmling
        ID: 104,
        ProfileType: "Monster",
        Name: "Copper Dragon Wyrmling",
        Type: "Medium dragon, chaotic good",
        Source: "Monster Manual",
        HitPoints: 22,
        HitPointsRoll: "4d8 + 4",
        ArmorClass: [16, "natural armor"],
        Speed: ["30 ft.", "climb 30 ft.", "fly 60 ft."],
        Strength: 15,
        Dexterity: 12,
        Constitution: 13,
        Intelligence: 14,
        Wisdom: 11,
        Charisma: 13,
        SavingThrows: ["Dexterity +3", "Constitution +3", "Wisdom +2", "Charisma +3"],
        Skills: ["Deception +3", "Perception +4", "Stealth +3"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Acid"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PAcid Breath. The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity saving throw, taking 18 (4d8) acid damage on a failed save, or half as much damage on a successful one.#PSlowing Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 11 Constitution saving throw. On a failed save, the creature can't use reactions, its speed is halved, and it can't make more than one attack on its turn. In addition, the creature can use either an action or a bonus action on its turn, not both. These effects last for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Gold Dragon
        ID: 105,
        ProfileType: "Monster",
        Name: "Ancient Gold Dragon",
        Type: "Gargantuan dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 546,
        HitPointsRoll: "28d20 + 252",
        ArmorClass: [22, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 30,
        Dexterity: 14,
        Constitution: 29,
        Intelligence: 18,
        Wisdom: 17,
        Charisma: 28,
        SavingThrows: ["Dexterity +9", "Constitution +16", "Wisdom +10", "Charisma +16"],
        Skills: ["Insight +10", "Perception +17", "Persuasion +16", "Stealth +9"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 27"],
        Languages: ["Common", "Draconic"],
        Challenge: [24, 62000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage plus 14 (4d6) fire damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 21 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PFire Breath. The dragon exhales fire in a 90-foot cone. Each creature in that area must make a DC 24 Dexterity saving throw, taking 71 (22d6) fire damage on a failed save, or half as much damage on a successful one.#PWeakening Breath. The dragon exhales gas in a 90-foot cone. Each creature in that area must succeed on a DC 21 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [
            "On initiative count 20 (losing initiative ties), the dragon takes a lair action to cause one of the following effects; the dragon can't use the same effect two rounds in a row:",
            "The dragon exhales a gust of wind toward a point it can see within 120 feet of it. The wind fans out from that point in a 30-foot cone. Each creature in the cone must succeed on a DC 18 Strength saving throw or be pushed 20 feet away from the dragon.",
            "Sunlight sheds from a point the dragon can see within 60 feet of it, forming a sphere of bright light with a 30-foot radius. Each creature the dragon designates within that light must succeed on a DC 18 Constitution saving throw or be blinded until the light disappears at initiative count 20 on the next round.",
            "The dragon creates a tremor that shakes the ground within 60 feet of it. Each creature other than the dragon on the ground in that area must succeed on a DC 18 Dexterity saving throw or fall prone."
        ],
        Description: "Description here"
    },
    { // Adult Gold Dragon
        ID: 106,
        ProfileType: "Monster",
        Name: "Adult Gold Dragon",
        Type: "Huge dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 256,
        HitPointsRoll: "19d12 + 133",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 27,
        Dexterity: 14,
        Constitution: 25,
        Intelligence: 16,
        Wisdom: 15,
        Charisma: 24,
        SavingThrows: ["Dexterity +8", "Constitution +13", "Wisdom +8", "Charisma +13"],
        Skills: ["Insight +8", "Perception +14", "Persuasion +13", "Stealth +8"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 24"],
        Languages: ["Common", "Draconic"],
        Challenge: [17, 18000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage plus 7 (2d6) fire damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 18 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PFire Breath. The dragon exhales fire in a 60-foot cone. Each creature in that area must make a DC 21 Dexterity saving throw, taking 55 (16d6) fire damage on a failed save, or half as much damage on a successful one.#PWeakening Breath. The dragon exhales gas in a 60-foot cone. Each creature in that area must succeed on a DC 18 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Gold Dragon
        ID: 107,
        ProfileType: "Monster",
        Name: "Young Gold Dragon",
        Type: "Large dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 178,
        HitPointsRoll: "17d10 + 85",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft.", "swim 40 ft."],
        Strength: 23,
        Dexterity: 14,
        Constitution: 21,
        Intelligence: 14,
        Wisdom: 13,
        Charisma: 20,
        SavingThrows: ["Dexterity +6", "Constitution +9", "Wisdom +5", "Charisma +9"],
        Skills: ["Insight +5", "Perception +9", "Persuasion +9", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 19"],
        Languages: ["Draconic"],
        Challenge: [10, 5900],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage plus 4 (1d8) fire damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PFire Breath. The dragon exhales fire in a 30-foot cone. Each creature in that area must make a DC 17 Dexterity saving throw, taking 45 (13d6) fire damage on a failed save, or half as much damage on a successful one.#PWeakening Breath. The dragon exhales gas in a 30-foot cone. Each creature in that area must succeed on a DC 17 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Gold Dragon Wyrmling
        ID: 108,
        ProfileType: "Monster",
        Name: "Gold Dragon Wyrmling",
        Type: "Medium dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 60,
        HitPointsRoll: "8d8 + 24",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft.", "fly 60 ft.", "swim 30 ft."],
        Strength: 19,
        Dexterity: 14,
        Constitution: 17,
        Intelligence: 12,
        Wisdom: 11,
        Charisma: 16,
        SavingThrows: ["Dexterity +4", "Constitution +5", "Wisdom +2", "Charisma +5"],
        Skills: ["Insight +2", "Perception +4", "Persuasion +5", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [3, 700],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage plus 3 (1d6) fire damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PFire Breath. The dragon exhales fire in a 15-foot cone. Each creature in that area must make a DC 13 Dexterity saving throw, taking 17 (5d6) fire damage on a failed save, or half as much damage on a successful one.#PWeakening Breath. The dragon exhales gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Strength saving throw or have disadvantage on Strength-based attack rolls, Strength checks, and Strength saving throws for 1 minute."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Ancient Silver Dragon
        ID: 109,
        ProfileType: "Monster",
        Name: "Ancient Silver Dragon",
        Type: "Gargantuan dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 487,
        HitPointsRoll: "25d20 + 225",
        ArmorClass: [22, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft."],
        Strength: 30,
        Dexterity: 10,
        Constitution: 29,
        Intelligence: 18,
        Wisdom: 15,
        Charisma: 23,
        SavingThrows: ["Dexterity +7", "Constitution +16", "Wisdom +9", "Charisma +13"],
        Skills: ["Arcana +11", "History +11", "Perception +16", "Stealth +7"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Cold"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 26"],
        Languages: ["Common", "Draconic"],
        Challenge: [23, 50000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 15 ft., one target. Hit: 21 (2d10 + 10) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 17 (2d6 + 10) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 20 ft., one target. Hit: 19 (2d8 + 10) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 150 feet of the dragon and aware of it must succeed on a DC 19 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PCold Breath. The dragon exhales an icy blast in a 90-foot cone. Each creature in that area must make a DC 19 Constitution saving throw, taking 67 (15d8) cold damage on a failed save, or half as much damage on a successful one.#PParalyzing Breath. The dragon exhales paralyzing gas in a 90-foot cone. Each creature in that area must succeed on a DC 19 Constitution saving throw or be paralyzed for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, lair actions, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take 17 (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Adult Silver Dragon
        ID: 110,
        ProfileType: "Monster",
        Name: "Adult Silver Dragon",
        Type: "Huge dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 243,
        HitPointsRoll: "18d12 + 126",
        ArmorClass: [19, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft."],
        Strength: 27,
        Dexterity: 10,
        Constitution: 25,
        Intelligence: 16,
        Wisdom: 13,
        Charisma: 21,
        SavingThrows: ["Dexterity +6", "Constitution +13", "Wisdom +7", "Charisma +11"],
        Skills: ["Arcana +9", "History +9", "Perception +13", "Stealth +6"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Cold"],
        ConditionImmunities: [],
        Senses: ["Blindsight 60 ft.", "Darkvision 120 ft.", "Passive Perception 23"],
        Languages: ["Common", "Draconic"],
        Challenge: [16, 15000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the dragon fails a saving throw, it can choose to succeed instead."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon can use its Frightful Presence. It then makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +13 to hit, reach 10 ft., one target. Hit: 19 (2d10 + 8) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +13 to hit, reach 5 ft., one target. Hit: 15 (2d6 + 8) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +13 to hit, reach 15 ft., one target. Hit: 17 (2d8 + 8) bludgeoning damage."
            },
            {
                Title: "Frightful Presence.",
                Desc: "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PCold Breath. The dragon exhales an icy blast in a 60-foot cone. Each creature in that area must make a DC 17 Constitution saving throw, taking 58 (13d8) cold damage on a failed save, or half as much damage on a successful one.#PParalyzing Breath. The dragon exhales paralyzing gas in a 60-foot cone. Each creature in that area must succeed on a DC 17 Constitution saving throw or be paralyzed for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            },
            {
                Title: "Change Shape.",
                Desc: "The dragon magically polymorphs into a humanoid or beast that has a challenge rating no higher than its own, or back into its true form. It reverts to its true form if it dies. Any equipment it is wearing or carrying is absorbed or borne by the new form (the dragon's choice).#PIn a new form, the dragon retains its alignment, hit points, Hit Dice, ability to speak, proficiencies, Legendary Resistance, and Intelligence, Wisdom, and Charisma scores, as well as this action. Its statistics and capabilities are otherwise replaced by those of the new form, except any class features or legendary actions of that form."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Detect.",
                Desc: "The dragon makes a Wisdom (Perception) check."
            },
            {
                Title: "Tail Attack.",
                Desc: "The dragon makes a tail attack."
            },
            {
                Title: "Wing Attack (Costs 2 Actions).",
                Desc: "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 21 Dexterity saving throw or take 15 (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
    { // Young Silver Dragon
        ID: 111,
        ProfileType: "Monster",
        Name: "Young Silver Dragon",
        Type: "Large dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 168,
        HitPointsRoll: "16d10 + 80",
        ArmorClass: [18, "natural armor"],
        Speed: ["40 ft.", "fly 80 ft."],
        Strength: 23,
        Dexterity: 10,
        Constitution: 21,
        Intelligence: 14,
        Wisdom: 11,
        Charisma: 19,
        SavingThrows: ["Dexterity +4", "Constitution +9", "Wisdom +4", "Charisma +8"],
        Skills: ["Arcana +6", "History +6", "Perception +8", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Cold"],
        ConditionImmunities: [],
        Senses: ["Blindsight 30 ft.", "Darkvision 120 ft.", "Passive Perception 18"],
        Languages: ["Draconic"],
        Challenge: [9, 5000],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 17 (2d10 + 6) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 13 (2d6 + 6) slashing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PCold Breath. The dragon exhales an icy blast in a 30-foot cone. Each creature in that area must make a DC 15 Constitution saving throw, taking 54 (12d8) cold damage on a failed save, or half as much damage on a successful one.#PParalyzing Breath. The dragon exhales paralyzing gas in a 30-foot cone. Each creature in that area must succeed on a DC 15 Constitution saving throw or be paralyzed for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Silver Dragon Wyrmling
        ID: 112,
        ProfileType: "Monster",
        Name: "Silver Dragon Wyrmling",
        Type: "Medium dragon, lawful good",
        Source: "Monster Manual",
        HitPoints: 45,
        HitPointsRoll: "6d8 + 18",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft.", "fly 60 ft."],
        Strength: 19,
        Dexterity: 10,
        Constitution: 17,
        Intelligence: 12,
        Wisdom: 11,
        Charisma: 15,
        SavingThrows: ["Dexterity +2", "Constitution +5", "Wisdom +2", "Charisma +4"],
        Skills: ["Arcana +3", "History +3", "Perception +4", "Stealth +2"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Cold"],
        ConditionImmunities: [],
        Senses: ["Blindsight 10 ft.", "Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Draconic"],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [],
        Actions: [
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (1d10 + 4) piercing damage."
            },
            {
                Title: "Breath Weapons (Recharge 5-6).",
                Desc: "The dragon uses one of the following breath weapons.#PCold Breath. The dragon exhales an icy blast in a 15-foot cone. Each creature in that area must make a DC 13 Constitution saving throw, taking 18 (4d8) cold damage on a failed save, or half as much damage on a successful one.#PParalyzing Breath. The dragon exhales paralyzing gas in a 15-foot cone. Each creature in that area must succeed on a DC 13 Constitution saving throw or be paralyzed for 1 minute. The creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Dragon Turtle
        ID: 113,
        ProfileType: "Monster",
        Name: "Dragon Turtle",
        Type: "Gargantuan dragon, neutral",
        Source: "Monster Manual",
        HitPoints: 341,
        HitPointsRoll: "22d20 + 110",
        ArmorClass: [20, "natural armor"],
        Speed: ["20 ft.", "swim 40 ft."],
        Strength: 25,
        Dexterity: 10,
        Constitution: 20,
        Intelligence: 10,
        Wisdom: 12,
        Charisma: 12,
        SavingThrows: ["Dexterity +6", "Constitution +11", "Wisdom +7", "Charisma +7"],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Fire"],
        ConditionImmunities: [],
        Senses: ["Darkvision 120 ft.", "Passive Perception 11"],
        Languages: ["Aquan", "Draconic"],
        Challenge: [17, 18000],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Amphibious.",
                Desc: "The dragon turtle can breathe air and water."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The dragon turtle makes three attacks: one with its bite and two with its claws."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 26 (3d12 + 7) piercing damage."
            },
            {
                Title: "Claw.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 10 ft., one target. Hit: 16 (2d8 + 7) slashing damage."
            },
            {
                Title: "Tail.",
                Desc: "Melee Weapon Attack: +14 to hit, reach 15 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage."
            },
            {
                Title: "Steam Breath (Recharge 5-6).",
                Desc: "The dragon turtle exhales scalding steam in a 60-foot cone. Each creature in that area must make a DC 18 Constitution saving throw, taking 52 (15d6) fire damage on a failed save, or half as much damage on a successful one. A creature that fails the saving throw by 5 or more is also blinded for 1 minute. A blinded creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Drider
        ID: 114,
        ProfileType: "Monster",
        Name: "Drider",
        Type: "Large monstrosity, chaotic evil",
        Source: "Monster Manual",
        HitPoints: 123,
        HitPointsRoll: "13d10 + 52",
        ArmorClass: [19, "natural armor"],
        Speed: ["30 ft.", "climb 30 ft."],
        Strength: 16,
        Dexterity: 16,
        Constitution: 18,
        Intelligence: 13,
        Wisdom: 14,
        Charisma: 12,
        SavingThrows: [],
        Skills: ["Perception +6", "Stealth +7"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 120 ft.", "Passive Perception 16"],
        Languages: ["Elvish", "Undercommon"],
        Challenge: [6, 2300],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Fey Ancestry.",
                Desc: "The drider has advantage on saving throws against being charmed, and magic can't put the drider to sleep."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The drider's spellcasting ability is Wisdom (spell save DC 13). The drider can innately cast the following spells, requiring no material components:#PAt will: dancing lights#P1/day each: darkness, faerie fire"
            },
            {
                Title: "Spider Climb.",
                Desc: "The drider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
            },
            {
                Title: "Sunlight Sensitivity.",
                Desc: "While in sunlight, the drider has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The drider makes two attacks, using its bite, longsword, or shortbow in any combination."
            },
            {
                Title: "Bite.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage, and the target must make a DC 13 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one."
            },
            {
                Title: "Longsword.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) slashing damage, or 9 (1d10 + 4) slashing damage if used with two hands."
            },
            {
                Title: "Shortbow.",
                Desc: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or take 9 (2d8) poison damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Dryad
        ID: 115,
        ProfileType: "Monster",
        Name: "Dryad",
        Type: "Medium fey, neutral",
        Source: "Monster Manual",
        HitPoints: 22,
        HitPointsRoll: "5d8",
        ArmorClass: [11, "16 with barkskin"],
        Speed: ["30 ft."],
        Strength: 10,
        Dexterity: 12,
        Constitution: 11,
        Intelligence: 14,
        Wisdom: 15,
        Charisma: 18,
        SavingThrows: [],
        Skills: ["Perception +4", "Stealth +5"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 60 ft.", "Passive Perception 14"],
        Languages: ["Elvish", "Sylvan"],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Innate Spellcasting.",
                Desc: "The dryad's innate spellcasting ability is Wisdom (spell save DC 13). The dryad can innately cast the following spells, requiring no material components:#PAt will: druidcraft#P1/day each: entangle, goodberry"
            },
            {
                Title: "Magic Resistance.",
                Desc: "The dryad has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Speak with Beasts and Plants.",
                Desc: "The dryad can communicate with beasts and plants as if they shared a language."
            },
            {
                Title: "Tree Stride.",
                Desc: "Once on her turn, the dryad can use 10 feet of her movement to step magically into one living tree within her reach and emerge from a second living tree within 60 feet of the first tree, appearing in an unoccupied space within 5 feet of the second tree. Both trees must be Large or bigger."
            }
        ],
        Actions: [
            {
                Title: "Club.",
                Desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
            },
            {
                Title: "Fey Charm.",
                Desc: "The dryad targets one Humanoid or Beast that she can see within 30 feet of her. If the target can see the dryad, it must succeed on a DC 14 Wisdom saving throw or be magically charmed. The charmed creature regards the dryad as a trusted friend to be heeded and protected. Although the target isn't under the dryad's control, it takes the dryad's requests or actions in the most favorable way it can, and it is a willing target for the dryad's spells and other magical effects.#PEach time the dryad or the dryad's companions do anything harmful to the target, it can repeat the saving throw, ending the effect on itself on a success. Otherwise, the effect lasts 24 hours or until the dryad dies, is on a different plane of existence from the target, or ends the effect as a bonus action. If a target's saving throw is successful, the target is immune to the dryad's Fey Charm for the next 24 hours.#PThe dryad can have no more than one humanoid and up to three beasts charmed at a time."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Duergar
        ID: 116,
        ProfileType: "Monster",
        Name: "Duergar",
        Type: "Medium humanoid (dwarf), lawful evil",
        Source: "Monster Manual",
        HitPoints: 26,
        HitPointsRoll: "4d8 + 8",
        ArmorClass: [16, "scale mail, shield"],
        Speed: ["25 ft."],
        Strength: 14,
        Dexterity: 11,
        Constitution: 14,
        Intelligence: 11,
        Wisdom: 10,
        Charisma: 9,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Superior Darkvision 120 ft.", "Passive Perception 10"],
        Languages: ["Dwarvish", "Undercommon"],
        Challenge: [1, 200],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Duergar Resilience.",
                Desc: "The duergar has advantage on saving throws against poison, spells, illusions, and being charmed or paralyzed."
            },
            {
                Title: "Sunlight Sensitivity.",
                Desc: "While in sunlight, the duergar has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The duergar makes two war pick attacks. It can't make these attacks while enlarged."
            },
            {
                Title: "War Pick.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 2) piercing damage, or 12 (2d8 + 3) piercing damage while the duergar is enlarged."
            },
            {
                Title: "Javelin.",
                Desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, or 9 (2d6 + 2) piercing damage while the duergar is enlarged, if thrown."
            },
            {
                Title: "Enlarge (1/Day).",
                Desc: "For 1 minute, the duergar magically increases in size, along with anything it is wearing or carrying. While enlarged, the duergar is Large, doubles its damage dice on Strength-based weapon attacks (included in the attacks), and makes Strength checks and Strength saving throws with advantage. If the duergar lacks the room to become Large, it attains the maximum size possible in the space available."
            },
            {
                Title: "Invisibility (1/Day).",
                Desc: "The duergar magically turns invisible until it attacks, casts a spell, or uses its Enlarge, or until its concentration ends (as if concentrating on a spell). Any equipment the duergar wears or carries is invisible with it."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Air Elemental
        ID: 117,
        ProfileType: "Monster",
        Name: "Air Elemental",
        Type: "Large elemental, neutral",
        Source: "Monster Manual",
        HitPoints: 90,
        HitPointsRoll: "12d10 + 24",
        ArmorClass: [15, ""],
        Speed: ["0 ft.", "fly 90 ft. (hover)"],
        Strength: 14,
        Dexterity: 20,
        Constitution: 14,
        Intelligence: 6,
        Wisdom: 10,
        Charisma: 6,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Lightning", "Thunder", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Exhaustion", "Grappled", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Unconscious"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 10"],
        Languages: ["Auran"],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Air Form.",
                Desc: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The elemental makes two slam attacks."
            },
            {
                Title: "Slam.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
            },
            {
                Title: "Whirlwind (Recharge 4-6).",
                Desc: "Each creature in the elemental's space must make a DC 13 Strength saving throw. On a failure, a target takes 15 (3d8 + 2) bludgeoning damage and is flung up 20 feet away from the elemental in a random direction and knocked prone. If a thrown target strikes an object, such as a wall or floor, the target takes 3 (1d6) bludgeoning damage for every 10 feet it was thrown. If the target is thrown at another creature, that creature must succeed on a DC 13 Dexterity saving throw or take the same damage and be knocked prone.#PIf the saving throw is successful, the target takes half the bludgeoning damage and isn't flung away or knocked prone."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Earth Elemental
        ID: 118,
        ProfileType: "Monster",
        Name: "Earth Elemental",
        Type: "Large elemental, neutral",
        Source: "Monster Manual",
        HitPoints: 126,
        HitPointsRoll: "12d10 + 60",
        ArmorClass: [17, "natural armor"],
        Speed: ["30 ft.", "burrow 30 ft."],
        Strength: 20,
        Dexterity: 8,
        Constitution: 20,
        Intelligence: 5,
        Wisdom: 10,
        Charisma: 5,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: ["Thunder"],
        DamageResistances: ["Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Exhaustion", "Paralyzed", "Petrified", "Poisoned", "Unconscious"],
        Senses: ["Darkvision 60 ft.", "Tremorsense 60 ft.", "Passive Perception 10"],
        Languages: ["Terran"],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Earth Glide.",
                Desc: "The elemental can burrow through nonmagical, unworked earth and stone. While doing so, the elemental doesn't disturb the material it moves through."
            },
            {
                Title: "Siege Monster.",
                Desc: "The elemental deals double damage to objects and structures."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The elemental makes two slam attacks."
            },
            {
                Title: "Slam.",
                Desc: "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Fire Elemental
        ID: 119,
        ProfileType: "Monster",
        Name: "Fire Elemental",
        Type: "Large elemental, neutral",
        Source: "Monster Manual",
        HitPoints: 102,
        HitPointsRoll: "12d10 + 36",
        ArmorClass: [13, ""],
        Speed: ["50 ft."],
        Strength: 10,
        Dexterity: 17,
        Constitution: 16,
        Intelligence: 6,
        Wisdom: 10,
        Charisma: 7,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Fire", "Poison"],
        ConditionImmunities: ["Exhaustion", "Grappled", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Unconscious"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 10"],
        Languages: ["Ignan"],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Fire Form.",
                Desc: "The elemental can move through a space as narrow as 1 inch without squeezing. A creature that touches the elemental or hits it with a melee attack while within 5 feet of it takes 5 (1d10) fire damage. In addition, the elemental can enter a hostile creature's space and stop there. The first time it enters a target's space on a turn, that creature takes 5 (1d10) fire damage and catches fire; until someone takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
            },
            {
                Title: "Illumination.",
                Desc: "The elemental sheds bright light in a 30-foot radius and dim light for an additional 30 feet."
            },
            {
                Title: "Water Susceptibility.",
                Desc: "For every 5 feet the elemental moves in water, or for every gallon of water splashed on it, it takes 1 cold damage."
            }
        ],
        Actions: [
            {
                Title: "Touch.",
                Desc: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) fire damage. If the target is a creature or a flammable object, it ignites. Until a creature takes an action to douse the fire, the target takes 5 (1d10) fire damage at the start of each of its turns."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Water Elemental
        ID: 120,
        ProfileType: "Monster",
        Name: "Water Elemental",
        Type: "Large elemental, neutral",
        Source: "Monster Manual",
        HitPoints: 114,
        HitPointsRoll: "12d10 + 48",
        ArmorClass: [14, ""],
        Speed: ["30 ft.", "swim 90 ft."],
        Strength: 18,
        Dexterity: 14,
        Constitution: 18,
        Intelligence: 5,
        Wisdom: 10,
        Charisma: 8,
        SavingThrows: [],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: ["Acid", "Bludgeoning, Piercing, and Slashing from non magical weapons"],
        DamageImmunities: ["Poison"],
        ConditionImmunities: ["Exhaustion", "Grappled", "Paralyzed", "Petrified", "Poisoned", "Prone", "Restrained", "Unconscious"],
        Senses: ["Darkvision 60 ft.", "Passive Perception 10"],
        Languages: ["Aquan"],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Water Form.",
                Desc: "The elemental can enter a hostile creature's space and stop there. It can move through a space as narrow as 1 inch wide without squeezing."
            },
            {
                Title: "Freeze.",
                Desc: "If the elemental takes cold damage, it partially freezes; its speed is reduced by 20 feet until the end of its next turn."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The elemental makes two slam attacks."
            },
            {
                Title: "Slam.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) bludgeoning damage."
            },
            {
                Title: "Whelm (Recharge 4-6).",
                Desc: "Each creature in the elemental's space must make a DC 15 Strength saving throw. On a failure, a target takes 13 (2d8 + 4) bludgeoning damage. If it is Large or smaller, it is engulfed. The engulfed target can't breathe unless it can breathe water, is restrained, and has advantage on saving throws against exhaustion and poison. If the target is engulfed and takes cold damage, it also takes 1 cold damage.#POn a success, the target takes half as much damage, and it isn't engulfed but is instead pushed out of the elemental's space."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Drow
        ID: 121,
        ProfileType: "Monster",
        Name: "Drow",
        Type: "Medium humanoid (elf), neutral evil",
        Source: "Monster Manual",
        HitPoints: 13,
        HitPointsRoll: "3d8",
        ArmorClass: [15, "chain shirt"],
        Speed: ["30 ft."],
        Strength: 10,
        Dexterity: 14,
        Constitution: 10,
        Intelligence: 11,
        Wisdom: 11,
        Charisma: 12,
        SavingThrows: [],
        Skills: ["Perception +2", "Stealth +4"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 120 ft.", "Passive Perception 12"],
        Languages: ["Elvish", "Undercommon"],
        Challenge: [0.25, 50],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Fey Ancestry.",
                Desc: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The drow's innate spellcasting ability is Charisma (spell save DC 11). The drow can innately cast the following spells, requiring no material components:#PAt will: dancing lights#P1/day each: darkness, faerie fire"
            },
            {
                Title: "Sunlight Sensitivity.",
                Desc: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The drow makes two melee attacks, or two ranged attacks."
            },
            {
                Title: "Rapier.",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
            },
            {
                Title: "Hand Crossbow.",
                Desc: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Drow Elite Warrior
        ID: 122,
        ProfileType: "Monster",
        Name: "Drow Elite Warrior",
        Type: "Medium humanoid (elf), neutral evil",
        Source: "Monster Manual",
        HitPoints: 71,
        HitPointsRoll: "11d8 + 22",
        ArmorClass: [18, "studded leather, shield"],
        Speed: ["30 ft."],
        Strength: 13,
        Dexterity: 18,
        Constitution: 14,
        Intelligence: 11,
        Wisdom: 13,
        Charisma: 12,
        SavingThrows: ["Dexterity +7", "Constitution +5", "Wisdom +4"],
        Skills: ["Perception +4", "Stealth +10"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 120 ft.", "Passive Perception 14"],
        Languages: ["Elvish", "Undercommon"],
        Challenge: [5, 1800],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Fey Ancestry.",
                Desc: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components:#PAt will: dancing lights#P1/day each: darkness, faerie fire, levitate (self only)"
            },
            {
                Title: "Sunlight Sensitivity.",
                Desc: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The drow makes two shortsword attacks."
            },
            {
                Title: "Shortsword.",
                Desc: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage."
            },
            {
                Title: "Hand Crossbow.",
                Desc: "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit: 7 (1d6 + 4) piercing damage, and the target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake."
            }
        ],
        Reactions: [
            {
                Title: "Parry.",
                Desc: "The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon."
            }
        ],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Drow Mage
        ID: 123,
        ProfileType: "Monster",
        Name: "Drow Mage",
        Type: "Medium humanoid (elf), neutral evil",
        Source: "Monster Manual",
        HitPoints: 45,
        HitPointsRoll: "10d8",
        ArmorClass: [12, "15 with mage armor"],
        Speed: ["30 ft."],
        Strength: 9,
        Dexterity: 14,
        Constitution: 10,
        Intelligence: 17,
        Wisdom: 13,
        Charisma: 12,
        SavingThrows: ["Intelligence +6", "Wisdom +4"],
        Skills: [],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 120 ft.", "Passive Perception 11"],
        Languages: ["Elvish", "Undercommon"],
        Challenge: [7, 2900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Fey Ancestry.",
                Desc: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The drow's innate spellcasting ability is Charisma (spell save DC 12). The drow can innately cast the following spells, requiring no material components:#PAt will: dancing lights#P1/day each: darkness, faerie fire"
            },
            {
                Title: "Spellcasting.",
                Desc: "The drow is a 10th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). It requires somatic and verbal components to cast its spells. The drow has the following wizard spells prepared:#PCantrips (at will): mage hand, minor illusion, poison spray, ray of frost#P1st level (4 slots): magic missile, shield, witch bolt#P2nd level (3 slots): darkness, misty step#P3rd level (3 slots): counterspell, fly, lightning bolt#P4th level (3 slots): dimension door, greater invisibility#P5th level (2 slots): cloudkill"
            },
            {
                Title: "Sunlight Sensitivity.",
                Desc: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        Actions: [
            {
                Title: "Dagger.",
                Desc: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Drow Priestess of Lolth
        ID: 124,
        ProfileType: "Monster",
        Name: "Drow Priestess of Lolth",
        Type: "Medium humanoid (elf), neutral evil",
        Source: "Monster Manual",
        HitPoints: 71,
        HitPointsRoll: "13d8 + 13",
        ArmorClass: [16, "chain shirt"],
        Speed: ["30 ft."],
        Strength: 10,
        Dexterity: 15,
        Constitution: 12,
        Intelligence: 13,
        Wisdom: 17,
        Charisma: 16,
        SavingThrows: ["Constitution +4", "Wisdom +6", "Charisma +6"],
        Skills: ["Insight +6", "Perception +6", "Religion +4", "Stealth +5"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: [],
        ConditionImmunities: [],
        Senses: ["Darkvision 120 ft.", "Passive Perception 16"],
        Languages: ["Elvish", "Undercommon"],
        Challenge: [8, 3900],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Fey Ancestry.",
                Desc: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep."
            },
            {
                Title: "Innate Spellcasting.",
                Desc: "The drow's innate spellcasting ability is Charisma (spell save DC 14). The drow can innately cast the following spells, requiring no material components:#PAt will: dancing lights#P1/day each: darkness, faerie fire"
            },
            {
                Title: "Spellcasting.",
                Desc: "The drow is a 10th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). It has the following cleric spells prepared:#PCantrips (at will): guidance, poison spray, thaumaturgy#P1st level (4 slots): bane, command, ensnaring strike, protection from evil and good#P2nd level (3 slots): hold person, spiritual weapon#P3rd level (3 slots): animate dead, bestow curse, dispel magic#P4th level (3 slots): divination, guardian of faith#P5th level (2 slots): contagion, insect plague, mass cure wounds"
            },
            {
                Title: "Sunlight Sensitivity.",
                Desc: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight."
            }
        ],
        Actions: [
            {
                Title: "Multiattack.",
                Desc: "The priestess makes two melee attacks with her snake-headed whip."
            },
            {
                Title: "Snake-Headed Whip.",
                Desc: "Melee Weapon Attack: +5 to hit, reach 10 ft. (with the whip's serpent head), one target. Hit: 4 (1d4 + 2) slashing damage plus 10 (3d6) poison damage."
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        LairActions: [],
        Description: "Description here"
    },
    { // Empyrean
        ID: 125,
        ProfileType: "Monster",
        Name: "Empyrean",
        Type: "Huge celestial (titan), chaotic good (75%) or neutral evil (25%)",
        Source: "Mordenkainen's Tome of Foes",
        HitPoints: 313,
        HitPointsRoll: "19d12 + 190",
        ArmorClass: [22, "natural armor"],
        Speed: ["50 ft.", "fly 50 ft.", "swim 50 ft."],
        Strength: 30,
        Dexterity: 21,
        Constitution: 30,
        Intelligence: 21,
        Wisdom: 22,
        Charisma: 27,
        SavingThrows: ["Strength +17", "Intelligence +12", "Wisdom +13", "Charisma +15"],
        Skills: ["Insight +13", "Persuasion +15"],
        DamageVulnerabilities: [],
        DamageResistances: [],
        DamageImmunities: ["Bludgeoning, Piercing, and Slashing from non magical weapons"],
        ConditionImmunities: [],
        Senses: ["Truesight 120 ft.", "Passive Perception 16"],
        Languages: ["All"],
        Challenge: [23, 32500],
        ExtraRewards: "",
        Traits: [
            {
                Title: "Innate Spellcasting.",
                Desc: "The empyrean's innate spellcasting ability is Charisma (spell save DC 23, +15 to hit with spell attacks). It can innately cast the following spells, requiring no material components:#PAt will: greater restoration, pass without trace, water breathing, water walk#P1/day each: commune, dispel evil and good, earthquake, fire storm, plane shift (self only)"
            },
            {
                Title: "Legendary Resistance (3/Day).",
                Desc: "If the empyrean fails a saving throw, it can choose to succeed instead."
            },
            {
                Title: "Magic Resistance.",
                Desc: "The empyrean has advantage on saving throws against spells and other magical effects."
            },
            {
                Title: "Magic Weapons.",
                Desc: "The empyrean's weapon attacks are magical."
            }
        ],
        Actions: [
            {
                Title: "Maul.",
                Desc: "Melee Weapon Attack: +17 to hit, reach 10 ft., one target. Hit: 31 (6d6 + 10) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Constitution saving throw or be stunned until the end of the empyrean's next turn."
            },
            {
                Title: "Bolt.",
                Desc: "Ranged Spell Attack: +15 to hit, range 600 ft., one target. Hit: 24 (7d6) damage of one of the following types (empyrean's choice): acid, cold, fire, force, lightning, radiant, or thunder."
            }
        ],
        Reactions: [],
        LegendaryActions: [
            {
                Title: "Attack.",
                Desc: "The empyrean makes one attack."
            },
            {
                Title: "Bolster.",
                Desc: "The empyrean bolsters all non hostile creatures within 120 feet of it until the end of its next turn. Bolstered creatures can't be charmed or frightened, and they gain advantage on ability checks and saving throws until the end of the empyrean's next turn."
            },
            {
                Title: "Trembling Strike (Costs 2 Actions).",
                Desc: "The empyrean strikes the ground with its maul, triggering an earth tremor. All other creatures on the ground within 60 feet of the empyrean must succeed on a DC 25 Strength saving throw or be knocked prone."
            }
        ],
        LairActions: [],
        Description: "Description here"
    },
];
const uniqueLocal = [
    { // templateUnique
        ID: 100000,
        ProfileType: "Unique",
        Name: "template name",
        Type: "Size type, alignment",
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
    {
        ID: 100001,
        ProfileType: "Unique",
        Name: "Omega",
        Type: "gargantuan construct, neutral",
        Source: "Homebrew",
        HitPoints: 999,
        HitPointsRoll: "",
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
const playersLocal = [
    { // templatePlayer
        ID: 1000000,
        ProfileType: "Player",
        Name: "RealLifeName (CharacterName)",
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
    {
        ID: 1000001,
        ProfileType: "Player",
        Name: "Adam (CharacterName)",
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

// NEW WRAPPER
const DB = {
    monsters: monstersLocal,
    unique: uniqueLocal,
    players: playersLocal
};

// NEW INDEX SYSTEM
const Index = {
    monsters: {},
    unique: {},
    players: {}
};

["monsters", "unique", "players"].forEach(type => {
    DB[type].forEach(entry => {
        Index[type][entry.Name.toLowerCase()] = entry;
    });
});
