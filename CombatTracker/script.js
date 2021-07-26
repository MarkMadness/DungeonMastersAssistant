// Helpful links: 
    // https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
    // https://www.youtube.com/watch?v=Pb-8DzAObmg

var monsters = {};
var combatOrder = [];

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


// Still working on adding an onclick event
function populateLibrary() {
    for (let x=1;x<monstersLocal.length;x++) {
        let list = document.getElementById("library-list");
        let li = document.createElement("li");
        let div = document.createElement("div");
        li.classList.add("monster-profile");
        //li.onclick.add("addToCombat");
        let text = document.createTextNode(monstersLocal[x].Name);
        li.appendChild(text);
        list.appendChild(li);
    }
}

// Will need to rework the logic for the parent forin loop
function addToCombat(name) {
    console.log(name);
    for(select in monstersLocal) {
        if(monstersLocal[select].Name == name) {
            let creature = monstersLocal[select];
            populateCombatOrder(creature);
            break;
        } else if(uniqueLocal[select].Name == name) {
            let creature = uniqueLocal[select];
            populateCombatOrder(creature);
            break;
        } else if(playersLocal[select].Name == name) {
            let creature = playersLocal[select];
            populateCombatOrder(creature);
            break;
        } else {
            console.log("Error >>> addToCombat() didn't work.");
        }
    }
}

// Still working on this
function populateCombatOrder(addedCreature){
    combatOrder.push(addedCreature);
    console.log(combatOrder);
    for(creature in combatOrder){
        let table = document.getElementById("combat-table");
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        //tr.classList.add("monster-profile");
        let initiative = document.createTextNode("0");
        let name = document.createTextNode(monstersLocal[x].Name);
        let hitpoints = document.createTextNode(monstersLocal[x].HitPoints);
        let armorclass = document.createTextNode(monstersLocal[x].ArmorClass);
        tr.appendChild(name);
        table.appendChild(li);
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
//#P = new paragragh