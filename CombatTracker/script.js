// Helpful links: 
    // https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
    // https://www.youtube.com/watch?v=Pb-8DzAObmg

var monsters = {};

// Fetches the monster information from the monsters.json file
fetch("./monsterLibrary.json")
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(data);
        monsters = data;
        showData();
    });

let showData = function() {
    for (monster in monsters){
        console.log(monsters[monster]);
    }
    // populateLibrary();
}

// function populateLibrary() {
//     for (let x = 1;x < monsters.length;x++) {
//         console.log("populateLibrary: " + monsters[x]);
//         let list = document.getElementById("library-list");
//         let div = document.createElement("div");
//         let text = document.createTextNode(monsters[profile].Name);
//         div.appendChild(text);
//         list.appendChild(div);
//     }
// }



function populateLibrary() {
    for (let x=1;x<monstersLocal.length;x++) {
        let list = document.getElementById("library-list");
        let li = document.createElement("li");
        let div = document.createElement("div");
        li.classList.add("monster-profile");
        let text = document.createTextNode(monstersLocal[x].Name);
        li.appendChild(text);
        list.appendChild(li);
    }
}

function addToCombat(name) {
    console.log(name);
    for(select in monstersLocal){
        if(monstersLocal[select].Name == name || uniqueLocal[select].Name == name || playersLocal[select].Name == name){
            populateCombatOrder(name);
            break;
        } else{

        }
    }
}

function selectCreature(id) {
    console.log(id);
    for(select in monstersLocal){
        if(monstersLocal[select].ID == id || uniqueLocal[select].ID == id || playersLocal[select].ID == id){
            populateDetails(id);
            break;
        } else{

        }
    }
}

function populateDetails(monsterid) {
    console.log(monsterid);

}

//=================================================================================================
//=================================================================================================
//=================================================================================================
const monstersLocal = [
    {
        ID: 0,
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
        Traits: [],
        Actions: [],
        Reactions: [],
        LegendaryActions: [],
        Description: "Description here"
    },
    {
        ID: 1,
        Name: "Aarakocra",
        Type: "Medium humanoid(aarakocra), neutral good",
        Source: "Monster Manual",
        HitPoints: 13,
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
        Senses: ["passive Perception 15"],
        Languages: ["Auran"],
        Challenge: [.25, 50],
        Traits: [
            {
                Title: "Dive Attack",
                Desc: "If the aarakocra is flying and dives at least 30 feet straight toward a target and then hits it with a melee weapon attack, the attack deals an extra 3 (1d6) damage to the target"
            }
        ],
        Actions: [
            {
                Title: "Talon",
                Desc: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage."
            },
            {
                Title: "Javelin",
                Desc: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage. "
            }
        ],
        Reactions: [],
        LegendaryActions: [],
        Description: "Description here"
    },
    {
        ID: 2,
        Name: "Monster 2",
        Type: "Size type, alignment",
        Source: "Monster Manual",
        HitPoints: 1,
        ArmorClass: [12, "natural armor"],
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
        ID: 3,
        Name: "Monster 3",
        Type: "Size type, alignment",
        Source: "Monster Manual",
        HitPoints: 1,
        ArmorClass: [12, "natural armor"],
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
    }
];

const uniqueLocal = [
    {
        ID: 0,
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
        Traits: [],
        Actions: [],
        Reactions: [],
        LegendaryActions: [],
        Description: "Description here"
    },
];

const playersLocal = [
    {
        ID: 0,
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
        Traits: [],
        Actions: [],
        Reactions: [],
        LegendaryActions: [],
        Description: "Description here"
    },
];