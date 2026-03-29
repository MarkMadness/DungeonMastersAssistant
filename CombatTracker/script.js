// Helpful links: 
// https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
// https://www.youtube.com/watch?v=Pb-8DzAObmg

var monsters = {};
var combatOrder = [];
    // creatureArray = 
    //     creatureNameID,   // 0
    //     creatureInit,     // 1
    //     creatureName,     // 2
    //     currentHP,        // 3
    //     totalHP,          // 4
    //     creatureAC,       // 5
    //     creatureID,       // 6
    //     creatureProfileType, // 7
    //     baseHP            // 8 (true base HP for scaling)
var currentHP = 0;
var idName = 'monster';
var idCount = 0;

$(document).ready(function() {
    $("#profile-content").hide();
});

function removeAllMonsters() {
    let toRemove = [];

    for (let i = 0; i < combatOrder.length; i++) {
        if (combatOrder[i][7] === "Monster") {
            toRemove.push(combatOrder[i][0]);
        }
    }

    console.log('toRemove = ' + toRemove);
    toRemove.forEach(id => removeFromCombat(id));
}

function removeAllUnique() {
    let toRemove = [];

    for (let i = 0; i < combatOrder.length; i++) {
        if (combatOrder[i][7] === "Unique") {
            toRemove.push(combatOrder[i][0]);
        }
    }

    console.log('toRemove = ' + toRemove);
    toRemove.forEach(id => removeFromCombat(id));
}

function removeAllPlayers() {
    let toRemove = [];

    for (let i = 0; i < combatOrder.length; i++) {
        if (combatOrder[i][7] === "Player") {
            toRemove.push(combatOrder[i][0]);
        }
    }

    console.log('toRemove = ' + toRemove);
    toRemove.forEach(id => removeFromCombat(id));
}

function populateLibrary(libraryType = 'monsters') {
    // console.log('libraryType = ' + libraryType);
    let monsterArray = DB[libraryType];
    // console.log("monsterArray = " + JSON.stringify(monsterArray));
    document.getElementById("library-list").innerHTML = "";

    for (let x=0;x<monsterArray.length;x++) {
        let list = document.getElementById("library-list");
        let li = document.createElement("li");
        let div = document.createElement("div");
        li.classList.add("monster-profile");
        let onclickName = "addToCombat('" + monsterArray[x].Name + "', '" + libraryType + "')";
        li.setAttribute("onclick", onclickName);
        let text = document.createTextNode(monsterArray[x].Name);
        li.appendChild(text);
        list.appendChild(li);
    }
    // console.log("populateLibrary() worked!!!");
}

// Will need to rework the logic for the parent forin loop
function addToCombat(name, monsterType) {
    console.log("name = " + name);
    console.log("monsterType = " + monsterType);
    let collection = DB[monsterType];

    if (!collection) {
        console.error("Invalid monsterType:", monsterType);
        return;
    }

    for (let i = 0; i < collection.length; i++) {
        if (collection[i].Name === name) {
            let creature = collection[i];
            populateCombatOrder(creature, monsterType);
            // console.log('combatOrder = ' + JSON.stringify(combatOrder));
            return; // stop once found
        }
    }
}

function removeFromCombat(creatureID) {
    // console.log('removeFromCombat creatureID = ' + creatureID);
    // console.log('combatOrder before removal = ' + JSON.stringify(combatOrder));
    let remove = false;
    for (let x = combatOrder.length - 1; x >= 0; x--) {
        if (combatOrder[x][0] === creatureID) {
            combatOrder.splice(x, 1);
        }
    }
    if (combatOrder.length === 0){
        remove = true;
    }
    // console.log('combatOrder after removal = ' + combatOrder);
    reloadCombatOrder(combatOrder, remove);
}

function populateCombatOrder(addedCreature){
    idCount++;

    let creatureID = addedCreature.ID;
    let creatureNameID = idName + idCount;

    let creatureInit = Math.ceil(((Math.random() * 20) + 1) + ((addedCreature.Dexterity - 10) / 2));

    let creatureName = addedCreature.Name;

    let baseHP = addedCreature.HitPoints; // ✅ NEW: base HP stored
    let currentHP = baseHP;
    let totalHP = baseHP;


    let creatureAC = addedCreature.ArmorClass[0];
    let creatureProfileType = addedCreature.ProfileType;

    let creatureArray = [
        creatureNameID,   // 0
        creatureInit,     // 1
        creatureName,     // 2
        currentHP,        // 3
        totalHP,          // 4
        creatureAC,       // 5
        creatureID,       // 6
        creatureProfileType, // 7
        baseHP            // 8 ✅ NEW (true base HP for scaling)
    ];

    duplicateNamesCheck(creatureArray);
}

function reloadCombatOrder(tableRows, removeFromCombatCondition) {
    // delete rows of table by id
    let table = document.getElementById("combat-table");
    let container = document.getElementById("initiative-container");
    
    if (tableRows.length > 1 || removeFromCombatCondition == true){
        table.remove();

        let tbl = document.createElement("table");
        tbl.setAttribute('cellspacing', 0);
        tbl.setAttribute('id', "combat-table");
        let hRow = document.createElement("tr");
        let thZero = document.createElement("th");
            thZero.setAttribute('width', '80px');
        let thOne = document.createElement("th");
            thOne.setAttribute('width', '50px');
        let thTwo = document.createElement("th");
            thTwo.setAttribute('width', '225px');
        let thThree = document.createElement("th");
            thThree.setAttribute('width', '75px');
        let thFour = document.createElement("th");
            thFour.setAttribute('width', '75px');
        let thFive = document.createElement("th");
            thFive.setAttribute('width', '50px');

        let textZero = document.createTextNode("Tier");
        let textOne = document.createTextNode("#");
        let textTwo = document.createTextNode("Name");
        let textThree = document.createTextNode("HP");
        let textFour = document.createTextNode("AC");
        let textFive = document.createTextNode("X");

        thZero.appendChild(textZero);
        thOne.appendChild(textOne);
        thTwo.appendChild(textTwo);
        thThree.appendChild(textThree);
        thFour.appendChild(textFour);
        thFive.appendChild(textFive);

        hRow.appendChild(thZero);
        hRow.appendChild(thOne);
        hRow.appendChild(thTwo);
        hRow.appendChild(thThree);
        hRow.appendChild(thFour);
        hRow.appendChild(thFive);

        tbl.appendChild(hRow);
        container.appendChild(tbl);
    }

    // Create element for new table so for loop below can function. 
    let tableNew = document.getElementById("combat-table");

    initiativeSort(tableRows);
    
    for(let i = 0; i < tableRows.length;i++){
        // Create elements for table row
        let tr = document.createElement("tr");
        let tdTier = document.createElement("td");
        let tdInit = document.createElement("td");
        let tdName = document.createElement("td");
        let tdHP = document.createElement("td");
        let tdAC = document.createElement("td");
        let tdX = document.createElement("td");
        let X = document.createTextNode("X");

        // instantiate values for creature from array index
        //let rowTier = tableRows[i][0];
        let rowID = tableRows[i][0];
        let rowInit = tableRows[i][1];
        let rowName = tableRows[i][2];
        let rowHP = tableRows[i][3];
        let rowHPTotal = tableRows[i][4];
        let rowAC = tableRows[i][5];
        let rowProfileType = tableRows[i][7];

        // nodes for tier
        let tier = document.createElement("select");
        tier.className = "ddlTier";
        // tier.id = `${rowID}-tier`;
        tier.dataset.rowId = rowID;

        const option1 = document.createElement("option");
        option1.value = "normal";
        option1.textContent = "Normal";
        option1.selected = true; // Set this option as selected by default
        tier.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = "heroic";
        option2.textContent = "Heroic";
        tier.appendChild(option2);

        const option3 = document.createElement("option");
        option3.value = "legendary";
        option3.textContent = "Legendary";
        tier.appendChild(option3);

        const option4 = document.createElement("option");
        option4.value = "godly";
        option4.textContent = "Godly";
        tier.appendChild(option4);

        // single change handler — grabs selected value, the select id, dataset rowId and the parent <tr>
        tier.addEventListener("change", function (e) {
            const selectedValue = e.target.value;
            // const selectId = e.target.id;
            const monsterName = String(rowName).replace(/\s+\d+$/,'').trim(); // removes the trailing numeric suffix like " 4" so "Monster Name 4" -> "Monster Name"
            const monsterProfileType = rowProfileType;
            const associatedRowId = e.target.dataset.rowId;
            const parentRow = e.target.closest("tr") || document.getElementById(associatedRowId);
            handleTierChange(associatedRowId, selectedValue, monsterName, monsterProfileType, parentRow);
        });

        // nodes for addedCreature
        let initiative = document.createTextNode(rowInit); // will need to add a function like RollForInitiative() to handle initiatives. Maybe even auto for NPCs, manual for PCs
        let name = document.createTextNode(rowName);
        let hitpoints = document.createTextNode(rowHP + "/" + rowHPTotal);
        let armorclass = document.createTextNode(rowAC);

        // onClick appends
        let onclickInit = "changeInit('" + rowInit + "', '" + rowID + "')";
        tdInit.setAttribute("onclick", onclickInit);
        let onclickName = "populateProfileDetails('" + rowName + "', '" + rowProfileType + "')";
        tdName.setAttribute("onclick", onclickName);
        let onclickHP = "changeHP('" + rowHP + "/" + rowHPTotal + "/" + rowID + "')";
        tdHP.setAttribute("onclick", onclickHP);
        let onclickX = 'removeFromCombat("' + rowID + '")';
        tdX.setAttribute("onclick", onclickX);

        // Append to cells
        tdTier.appendChild(tier);
        tdInit.appendChild(initiative);
        tdInit.className = "init";
        tdName.appendChild(name);
        tdHP.appendChild(hitpoints);
        tdHP.className = "hitPoints hp-full";
        tdAC.appendChild(armorclass);
        tdX.appendChild(X);

        // Append to rows
        tr.setAttribute('id', rowID);
        tr.setAttribute('class', 'combatRow');
        tr.appendChild(tdTier);
        tr.appendChild(tdInit);
        tr.appendChild(tdName);
        tr.appendChild(tdHP);
        tr.appendChild(tdAC);
        tr.appendChild(tdX);
        // Append to table
        tableNew.appendChild(tr);
    }
}

function handleTierChange(rowId, tierValue, monsterName, monsterProfileType, parentRow) {
    if (parentRow) {
        parentRow.dataset.tier = tierValue;
    }

    let creature = combatOrder.find(c => c[0] === rowId);
    if (!creature) return;

    let baseHP = creature[8]; // ✅ ALWAYS use stored base HP
    let newMaxHP = baseHP;

    if (tierValue === "heroic") newMaxHP = baseHP * 3;
    else if (tierValue === "legendary") newMaxHP = baseHP * 5;
    else if (tierValue === "godly") newMaxHP = baseHP * 10;

    // ✅ Update data model
    creature[3] = newMaxHP; // current HP
    creature[4] = newMaxHP; // max HP

    // ✅ Update UI
    let cellHP = $(`#${rowId} .hitPoints`);
    cellHP.text(`${newMaxHP}/${newMaxHP}`);
    cellHP.attr('onclick', `changeHP('${newMaxHP}/${newMaxHP}/${rowId}')`);
}

function alterHitPointsBasedOnTier(monsterName, monsterProfileType, tierValue) {
    let monsterLibrary;

    if (monsterProfileType === "Monster") monsterLibrary = monstersLocal;
    else if (monsterProfileType === "Unique") monsterLibrary = uniqueLocal;
    else if (monsterProfileType === "Player") monsterLibrary = playersLocal;

    let monster = monsterLibrary.find(m => m.Name === monsterName);
    if (!monster) return 0;

    let baseHP = monster.HitPoints;

    if (tierValue === "heroic") return baseHP * 3;
    if (tierValue === "legendary") return baseHP * 5;
    if (tierValue === "godly") return baseHP * 10;

    return baseHP;
}

function changeInit(initiativeNumber, tableRowID) {
    console.log('changeInit');
    // Generate a popup window with initOrder in an input window, arrows up and down, and a checkmark box
    const initModal = $('#initModal');
    var inputBox = initModal.find(".inputBox");
    var closeBtn = initModal.find(".close");
    var checkmarkBtn = initModal.find(".checkmark");
    var arrowUpBtn = initModal.find(".arrowUp");
    var arrowDownBtn = initModal.find(".arrowDown");
    inputBox.val(initiativeNumber);
    initModal.css('display', 'block');

    // Remove existing event listeners for reopen of initModal
    inputBox.off('click');
    closeBtn.off('click');
    checkmarkBtn.off('click');
    arrowUpBtn.off('click');
    arrowDownBtn.off('click');

    // On the ENTER key down or click on checkmark box, set the selected row's order to the new number
    $(document).on('keydown', function(event) {
        if (event.key === 'Enter') {
            checkmarkBtn.click();
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            var plus = parseInt(inputBox.val(), 10) + 1;
            inputBox.val(plus);
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            var minus = parseInt(inputBox.val(), 10) - 1;
            inputBox.val(minus);
        }
    });

    closeBtn.on('click', function() { initModal.css('display', 'none'); }); 

    arrowUpBtn.on('click', function() {
        var plus = parseInt(inputBox.val(), 10) + 1;
        inputBox.val(plus);
    });

    arrowDownBtn.on('click', function() {
        var minus = parseInt(inputBox.val(), 10) - 1; 
        inputBox.val(minus); 
    });

    // On the ENTER key down or click on checkmark box, subtract or add the input value and return the new value to the table
    checkmarkBtn.on('click', function() {
        let newInitText = parseInt(inputBox.val(), 10);
        var newInitattribute = "changeInit('" + newInitText + "', '" + tableRowID + "')";
    
        // second method attempting to change the text. Didn't work
        let cellInit = $(`#${tableRowID} .init`);
        cellInit.text(newInitText);
        cellInit.attr('onclick', newInitattribute);

        initModal.css('display', 'none'); 
    });
    // do something for reorganizing the table
}

function selectCreature(name) {
    // console.log(name);
    for(select in monstersLocal){
        if(monstersLocal[select].Name == name){
            populateDetails(name);
            break;
        } else{

        }
    }
}

function changeHP(hpPassed) {
    // GET the current and total HP ints and assign to var currentHP and var totalHP
    var hpRatio = hpPassed.split("/");
    var currentHP = parseInt(hpRatio[0], 10);
    var hpTotal = parseInt(hpRatio[1], 10);
    let id = hpRatio[2];
    // console.log('id = ' + id);

    // generate a popup window with input window, arrows up and down, and a checkmark box
    const hpModal = $('#hpModal');
    var inputBox = hpModal.find(".inputBox");
    var differenceBox = hpModal.find(".differenceBox");
    var closeBtn = hpModal.find(".close");
    var checkmarkBtn = hpModal.find(".checkmark");
    var arrowUpBtn = hpModal.find(".arrowUp");
    var arrowDownBtn = hpModal.find(".arrowDown");
    inputBox.val(currentHP); // Use .attr() instead of setAttribute
    hpModal.css('display', 'block'); // Use .css() instead of style.display

    // Remove existing event listeners for reopen of hpModal
    inputBox.off('click');
    closeBtn.off('click');
    checkmarkBtn.off('click');
    arrowUpBtn.off('click');
    arrowDownBtn.off('click');

    // var modal = hpModal.getElementById("hpModal");
    // var inputBox = document.getElementById("inputBox");
    // var differenceBox = document.getElementById("differenceBox");
    // var closeBtn = document.getElementById("close");
    // var checkmarkBtn = document.getElementById("checkmark");
    // var arrowUpBtn = document.getElementById("arrowUp");
    // var arrowDownBtn = document.getElementById("arrowDown");
    // inputBox.setAttribute('value', currentHP);
    // hpModal.style.display = "block";

    // button functions
    // function differenceFromOriginal(changed){
    //     if(changed > currentHP){
    //         inputBox.style.color = "green";
    //     } else if (changed < currentHP) {
    //         inputBox.style.color = "red";
    //     } else {
    //         inputBox.style.color = "black";
    //     }
    // }

    function updateDifference(changed) {
        var difference = changed - currentHP;
        differenceBox.text((difference > 0 ? '+' : '') + difference); // Use .text() instead of textContent
        differenceBox.css('color', difference === 0 ? 'black' : (difference > 0 ? 'green' : 'red')); // Use .css() instead of style.color
    }

    closeBtn.on('click', function() { hpModal.css('display', 'none'); }); // Use .on('click') instead of onclick

    arrowUpBtn.on('click', function() {
        var plus = parseInt(inputBox.val(), 10) + 1; // Use .val() instead of .value
        inputBox.val(plus); // Use .val() instead of setAttribute
        updateDifference(plus);
    });

    arrowDownBtn.on('click', function() {
        var minus = parseInt(inputBox.val(), 10) - 1; // Use .val() instead of .value
        inputBox.val(minus); // Use .val() instead of setAttribute
        updateDifference(minus);
    });

    $(document).off('keydown');
    $(document).on('keydown', function(event) {
        if (event.key === 'Enter') {
            checkmarkBtn.click();
        } else if (event.key === 'ArrowUp') {
            event.preventDefault();
            var plus = parseInt(inputBox.val(), 10) + 1;
            inputBox.val(plus);
            updateDifference(plus);
        } else if (event.key === 'ArrowDown') {
            event.preventDefault();
            var minus = parseInt(inputBox.val(), 10) - 1;
            inputBox.val(minus);
            updateDifference(minus);
        }
    });

    // On the ENTER key down or click on checkmark box, subtract or add the input value to currentHP and return the new value to the table
    checkmarkBtn.on('click', function() {
        var finalValue = parseInt(inputBox.val(), 10); // Ensure the value is parsed as an integer
        let newHPText = finalValue + '/' + hpTotal;
        console.log(newHPText);
        var newHPattribute = "changeHP('" + newHPText + "/" + id + "')";
    
        // second method attempting to change the text. Didn't work
        let cellHP = $(`#${id} .hitPoints`); // Use jQuery selector
        cellHP.text(newHPText); // Use .text() instead of innerText
        cellHP.attr('onclick', newHPattribute); // Use .attr() instead of setAttribute
        
        // removes classes beforehand to add new ones below
        cellHP.removeClass('hp-full hp-mostlyfull hp-halfway hp-critical'); // Use .removeClass() instead of classList.remove
    
        //check percentage of monster health and add appropriate class for color
        var percentage = Math.round((finalValue / hpTotal) * 100);
        if (percentage >= 100) {
            cellHP.addClass('hp-full'); // Use .addClass() instead of classList.add
        } else if (percentage <= 99 && percentage >= 60) {
            cellHP.addClass('hp-mostlyfull'); // Use .addClass() instead of classList.add
        } else if (percentage <= 59 && percentage >= 30) {
            cellHP.addClass('hp-halfway'); // Use .addClass() instead of classList.add
        } else {
            cellHP.addClass('hp-critical'); // Use .addClass() instead of classList.add
        }

        // First attempt to change the text. Didn't work, but it did save the inputBox.value from before
        // // let row = document.getElementById(id);
        // // console.log('row = ' + row.innerHTML); // typeof(row) = rowobject
        // // // Will need to figure out how to get the whole row and only change that.
        // // // UPDATE: the inputBox.value remains after checkmarkBtn runs, but the DOM text doesn't update
        // // row.setAttribute("onclick", newHPattribute);
        // // row.getElementsByClassName("hitPoints").text = newText;

        differenceBox.text('0'); // Use .text() instead of textContent
        differenceBox.css('color', 'black'); // Use .css() instead of style.color

        hpModal.css('display', 'none'); // Use .css() instead of style.display
    });
}
    
function populateDetails(creatureName) {
    console.log("populateDetails");   
}

function populateProfileDetails(creatureName, creatureType) {
    console.log('creatureName = ' + creatureName + ', creatureType = ' + creatureType); 
    const $content = $("#profile-content");
    $content.show();
    $('#profile-placeholder').hide();
    const $name = creatureName.replace(/\s\d+$/, ' ').trim(); // removes trailing numeric suffix like " 4" so "Monster Name 4" -> "Monster Name"
    //console.log('$name: ', $name);
    //console.log('$name length: ', $name.length);
    let monsterLibrary;

    if (creatureType === "Monster") {
        monsterLibrary = monstersLocal;
    } else if (creatureType === "Unique") {
        monsterLibrary = uniqueLocal;
    } else if (creatureType === "Player") {
        monsterLibrary = playersLocal;
    }

    // // =========Works on PC=============
    // const $creature = monsterLibrary.find(monster => monster.Name === $name);
    // // =========Works on PC=============
    // =========Works on Mac=============
    if (!Array.isArray(monsterLibrary)) {
        console.error('monsterLibrary is not an array for type:', creatureType, monsterLibrary);
    }

    const normalizedTarget = String($name).trim().normalize('NFC').replace(/\s+/g, ' ').toLowerCase();

    const $creature =
        (Array.isArray(monsterLibrary) && (
            // exact match (normalized)
            monsterLibrary.find(m => String(m.Name || '').trim().normalize('NFC').toLowerCase() === normalizedTarget) ||
            // case-insensitive / normalized prefix (handles "Goblin 1" vs "Goblin")
            monsterLibrary.find(m => String(m.Name || '').trim().normalize('NFC').toLowerCase().startsWith(normalizedTarget)) ||
            // fallback: contains
            monsterLibrary.find(m => String(m.Name || '').trim().normalize('NFC').toLowerCase().includes(normalizedTarget))
        )) || null;

    console.log('populateProfileDetails lookup:', { target: normalizedTarget, found: $creature ? $creature.Name : null });

    // =========Works on Mac=============

    if($creature) {
        $content.find("#profile-name").html("<strong>" + $creature.Name + "</strong>");
        $content.find("#profile-source").text($creature.Source);
        $content.find("#profile-type").text($creature.Type); 

        $content.find("#profile-armorclass").html("<strong>Armor Class</strong> " + $creature.ArmorClass[0] + ", " + $creature.ArmorClass[1]);
        $content.find("#profile-hitpoints").html("<strong>Hit Points</strong> " + $creature.HitPoints + ($creature.HitPointsRoll != "" ? " (" + $creature.HitPointsRoll + ")" : ""));
        if($creature.Speed.length > 1) {
            $content.find("#profile-speed").html("<strong>Speed</strong> " + $creature.Speed.toString().replace(',', ', '));
        } else {
            $content.find("#profile-speed").html("<strong>Speed</strong> " + $creature.Speed);
        }

        let strMod = Math.floor(($creature.Strength - 10) / 2);
        let dexMod = Math.floor(($creature.Dexterity - 10) / 2);
        let conMod = Math.floor(($creature.Constitution - 10) / 2);
        let intMod = Math.floor(($creature.Intelligence - 10) / 2);
        let wisMod = Math.floor(($creature.Wisdom - 10) / 2);
        let chaMod = Math.floor(($creature.Charisma - 10) / 2);
        $content.find("#profile-str").html("STR " + $creature.Strength + "<br>" + (strMod >= 0 ? "+" + strMod : strMod));
        $content.find("#profile-dex").html("DEX " + $creature.Dexterity + "<br>" + (dexMod >= 0 ? "+" + dexMod : dexMod));
        $content.find("#profile-con").html("CON " + $creature.Constitution + "<br>" + (conMod >= 0 ? "+" + conMod : conMod));
        $content.find("#profile-int").html("INT " + $creature.Intelligence + "<br>" + (intMod >= 0 ? "+" + intMod : intMod));
        $content.find("#profile-wis").html("WIS " + $creature.Wisdom + "<br>" + (wisMod >= 0 ? "+" + wisMod : wisMod));
        $content.find("#profile-cha").html("CHA " + $creature.Charisma + "<br>" + (chaMod >= 0 ? "+" + chaMod : chaMod));

        if($creature.SavingThrows.length > 0) {
            $content.find("#profile-saves").show();
            $content.find("#profile-saves").html("<strong>Saving Throws</strong> " + $creature.SavingThrows.toString().replace(',', ', '));
        } else {
            $content.find("#profile-saves").hide();
        }
        if($creature.Skills.length > 0) {
            $content.find("#profile-skills").show();
            $content.find("#profile-skills").html("<strong>Skills</strong> " + $creature.Skills.toString().replace(',', ', '));
        } else {
            $content.find("#profile-skills").hide();
        }
        if($creature.DamageVulnerabilities.length > 0) {
            $content.find("#profile-damagevuln").show();
            $content.find("#profile-damagevuln").html("<strong>Damage Vulnerabilities</strong> " + $creature.DamageVulnerabilities.toString().replace(',', ', '));
        } else {
            $content.find("#profile-damagevuln").hide();
        }
        if($creature.DamageResistances.length > 0) {
            $content.find("#profile-damageres").show();
            $content.find("#profile-damageres").html("<strong>Damage Resistances</strong> " + $creature.DamageResistances.toString().replace(',', ', '));
        } else {
            $content.find("#profile-damageres").hide();
        }
        if($creature.DamageImmunities.length > 0) {
            $content.find("#profile-damageimm").show();
            $content.find("#profile-damageimm").html("<strong>Damage Immunities</strong> " + $creature.DamageImmunities.toString().replace(',', ', '));
        } else {
            $content.find("#profile-damageimm").hide();
        }
        if($creature.ConditionImmunities.length > 0) {
            $content.find("#profile-conditionimm").show();
            $content.find("#profile-conditionimm").html("<strong>Condition Immunities</strong> " + $creature.ConditionImmunities.toString().replace(',', ', '));
        } else {
            $content.find("#profile-conditionimm").hide();
        }
        if($creature.Senses.length > 0) {
            $content.find("#profile-senses").show();
            $content.find("#profile-senses").html("<strong>Senses</strong> " + $creature.Senses.toString().replace(',', ', '));
        } else {
            $content.find("#profile-senses").hide();
        }
        if($creature.Languages.length > 0) {
            $content.find("#profile-languages").show();
            $content.find("#profile-languages").html("<strong>Languages</strong> " + $creature.Languages.toString().replace(',', ', '));
        } else {
            $content.find("#profile-languages").hide();
        }
        $content.find("#profile-challenge").html("<strong>Challenge</strong> " + $creature.Challenge[0] + " (" + $creature.Challenge[1] + " XP)");
        if($creature.ExtraRewards != null) {
            $content.find("#profile-extra-rewards").show();
            $content.find("#profile-extra-rewards").html("<strong>Extra Rewards</strong> " + $creature.ExtraRewards);
        } else {
            $content.find("#profile-extra-rewards").hide();
        }

        if($creature.Traits.length > 0) {
            $content.find("#profile-traits").show();
            $content.find("#profile-traits").html("<strong>Traits</strong><br>");
            for(let i = 0; i < $creature.Traits.length; i++) {
                $content.find("#profile-traits")
                .append("<p class='text-md'><strong>" + $creature.Traits[i].Title + "</strong></p><p class='text-md'> " + $creature.Traits[i].Desc + "<p/><br>");
            }

            if($creature.InnateSpellcasting != null) {
                $content.find("#profile-innateSpellcasting").show();
                $content.find("#profile-innateSpellcasting").html("<strong>Innate Spellcasting</strong><br>");
                
                const cis = $creature.InnateSpellcasting[0];
                // console.log('InnateSpellcasting = ' + JSON.stringify(cis));

                $content.find("#profile-innateSpellcasting")
                   .append("<p class='text-md'> " + cis.Description + "<p/><br>" + 
                       "<p class='text-md'>Cantrips (" + cis.Cantrips.Slots + "): <i>" + cis.Cantrips.Spells + "</i><p/>");

                    if(cis.Level1) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 1 (" + cis.Level1.Slots + " slots): <i>" + cis.Level1.Spells + "</i><p/>");
                    }

                    if(cis.Level2) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 2 (" + cis.Level2.Slots + " slots): <i>" + cis.Level2.Spells + "</i><p/>");
                    }

                    if(cis.Level3) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 3 (" + cis.Level3.Slots + " slots): <i>" + cis.Level3.Spells + "</i><p/>");
                    }

                    if(cis.Level4) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 4 (" + cis.Level4.Slots + " slots): <i>" + cis.Level4.Spells + "</i><p/>");
                    }

                    if(cis.Level5) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 5 (" + cis.Level5.Slots + " slots): <i>" + cis.Level5.Spells + "</i><p/>");
                    }

                    if(cis.Level6) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 6 (" + cis.Level6.Slots + " slots): <i>" + cis.Level6.Spells + "</i><p/>");
                    }

                    if(cis.Level7) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 7 (" + cis.Level7.Slots + " slots): <i>" + cis.Level7.Spells + "</i><p/>");
                    }

                    if(cis.Level8) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 8 (" + cis.Level8.Slots + " slots): <i>" + cis.Level8.Spells + "</i><p/>");
                    }

                    if(cis.Level9) {
                        $content.find("#profile-innateSpellcasting")
                        .append("<p class='text-md'>Level 9 (" + cis.Level9.Slots + " slots): <i>" + cis.Level9.Spells + "</i><p/>");
                    }

            } else {
                $content.find("#profile-innateSpellcasting").hide();
            }
        } else {
            $content.find("#profile-traits").hide();
        }

        if($creature.Actions.length > 0) {
            $content.find("#profile-actions").show();
            $content.find("#profile-actions").html("<strong>Actions</strong><br>");
            for(let i = 0; i < $creature.Actions.length; i++) {
                $content.find("#profile-actions")
                .append("<p class='text-md'><strong>" + $creature.Actions[i].Title + "</strong></p><p class='text-md'> " + $creature.Actions[i].Desc + "<p/><br>");
            }
        } else {
            $content.find("#profile-actions").hide();
        }
        
        if($creature.Reactions.length > 0) {
            $content.find("#profile-reactions").show();
            $content.find("#profile-reactions").html("<strong>Reactions</strong><br>");
            for(let i = 0; i < $creature.Reactions.length; i++) {
                $content.find("#profile-reactions")
                .append("<p class='text-md'><strong>" + $creature.Reactions[i].Title + "</strong></p><p class='text-md'> " + $creature.Reactions[i].Desc + "<p/><br>");
            }
        } else {
            $content.find("#profile-reactions").hide();
        }

        if($creature.LegendaryActions.length > 0) {
            $content.find("#profile-legendaryactions").show();
            $content.find("#profile-legendaryactions").html("<strong>Legendary Actions</strong><br>");
            $content.find("#profile-legendaryactions").append("<p class='text-md text-italic'>The " + $creature.Name + " can take 3 legendary actions, choosing from the options below. Only one " +
                "legendary action option can be used at a time and only at the end of another " + $creature.Name + "'s turn. " + 
                "The " + $creature.Name + " regains spent legendary actions at the start of its turn.</p><br>");
            for(let i = 0; i < $creature.LegendaryActions.length; i++) {
                $content.find("#profile-legendaryactions")
                .append("<p class='text-md'><strong>" + $creature.LegendaryActions[i].Title + ".</strong> " + $creature.LegendaryActions[i].Desc + "<p/><br>");
            }
        } else {
            $content.find("#profile-legendaryactions").hide();
        }

        if($creature.LairActions != null) {
            $content.find("#profile-lair-actions").show();
            $content.find("#profile-lair-actions").html("<strong>Lair Actions</strong><br>");
            for(let i = 0; i < $creature.LairActions.length; i++) {
                if(i == 0){
                    $content.find("#profile-lair-actions").append("<p class='text-md text-italic'>" + $creature.LairActions[i] + "</p><br>");
                } else {
                    $content.find("#profile-lair-actions").append("<p class='text-md'>" + $creature.LairActions[i] + "</p><br>");
                }
            }
        } else {
            $content.find("#profile-lair-actions").hide();
        }

        if($creature.Description != null) {
            $content.find("#profile-description").show();
            $content.find("#profile-description").html("<strong>Description</strong><br>");
            $content.find("#profile-description").append("<p class='text-md'>" + $creature.Description + "</p><br>");
        } else {
            $content.find("#profile-description").hide();
        }
    } else {
        console.log('Monster profile in monstersLocal not found');
    }
}

function clearCombatOrder(){
    combatOrder = [];
    $('#combat-table').empty().html(
        `<tr>
            <th style="width: 50px">#</th>
            <th style="width: 275px">Name</th>
            <th style="width: 75px">HP</th>
            <th style="width: 75px">AC</th>
            <th style="width: 50px">X</th>
        </tr>`);
}

function duplicateNamesCheck(newCreature){
    // do an if function for creatures in CombatOrder that already have the same name as newCreature
    // if function hit = check if the same named creature already has a number at the end of it's name.
    // return combatOrder with the updated names 
    // maybe need to store numCount and when checking duplicate names add it to new monster based on latest number. 
        // Currently, it adds based on number of same monsters rather than the latest number, which results in monster 1, monster 3, monster 3
    // // if(combatOrder.length > 1)
    // // {
    // //     var newName = newCreature[2]; // CreatureName index
    // //     var numCount = 1;

    // //     for(var i = 0;i<combatOrder.length;i++){
    // //         var currentName = combatOrder[i][2]; // CreatureName index
    // //         var currentNameOnly = currentName.slice(0,newName.length);
    // //         // need to check length if there is already a number at the end
    // //         console.log("currentName = " + currentName);
    // //         if (currentNameOnly === newName)
    // //         {
    // //             console.log("if statement hit");
    // //             if (isNaN(currentName.slice(-1)) === true)
    // //             {
    // //                 currentName = currentName + " " + numCount;
    // //                 combatOrder[i][2] = currentName;
    // //                 numCount++;
    // //             } else {
    // //                 numCount++;
    // //             }
                
    // //         }
    // //     }
    // //     console.log("combatOrder after if statement = " + combatOrder);
    // // }




    if (newCreature[7] !== "Monster") {
        combatOrder.push(newCreature);
        reloadCombatOrder(combatOrder, false);
        return;
    }
    // Extract the base name from the newCreature
    let newName = newCreature[2]; // The name of the new creature
    let baseName = newName.trim(); // Base name, initially the full name

    // Initialize the maximum number found
    let maxNumber = 0;

    // Iterate over existing names in combatOrder to find the highest number for the base name
    for (let i = 0; i < combatOrder.length; i++) {
        let currentName = combatOrder[i][2];
        // Split currentName into baseName and number
        let nameParts = currentName.trim().split(/\s+/);
        let currentNumber = parseInt(nameParts.pop(), 10); // Try to parse the last part as a number
        let currentBaseName = nameParts.join(" "); // Join the remaining parts as the base name

        // Check if the base names match and update maxNumber if necessary
        if (currentBaseName === newName && !isNaN(currentNumber)) {
            maxNumber = Math.max(maxNumber, currentNumber);
        }
    }

    // Assign the new number to the newCreature
    newCreature[2] = `${newName} ${maxNumber + 1}`;
    combatOrder.push(newCreature);
    // console.log('combatOrder = ' + JSON.stringify(combatOrder));

    // Refresh the combat order display
    reloadCombatOrder(combatOrder, false);

    //return combatOrder;
}

function initiativeSort(table = combatOrder){
    return table.sort((a, b) => b[1] - a[1]);
}