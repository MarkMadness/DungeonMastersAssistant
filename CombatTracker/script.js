// Helpful links: 
    // https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
    // https://www.youtube.com/watch?v=Pb-8DzAObmg

    var monsters = {};
    var combatOrder = [];
    var currentHP = 0;
    var idName = 'monster';
    var idCount = 0;
    
    // // Fetches the monster information from the monsters.json file
    // fetch("./monsterLibrary.json")
    //     .then(function(response) {
    //         return response.json();
    //     }).then(function(data) {
    //         console.log(data);
    //         monsters = data;
    //         showData();
    //     });
    //
    // let showData = function() {
    //     for (monster in monsters){
    //         console.log(monsters[monster]);
    //     }
    // }
    
    function populateLibrary() {
        for (let x=1;x<monstersLocal.length;x++) {
            let list = document.getElementById("library-list");
            let li = document.createElement("li");
            let div = document.createElement("div");
            li.classList.add("monster-profile");
            let onclickName = "addToCombat('" + monstersLocal[x].Name + "')";
            li.setAttribute("onclick", onclickName);
            let text = document.createTextNode(monstersLocal[x].Name);
            li.appendChild(text);
            list.appendChild(li);
        }
        // console.log("populateLibrary() worked!!!");
    }
    
    // Will need to rework the logic for the parent forin loop
    function addToCombat(name) {
        // console.log("name = " + name);
        for(select in monstersLocal) {
            if(monstersLocal[select].Name == name) {
                let creature = monstersLocal[select];
                populateCombatOrder(creature);
            }
        }
    }

    function removeFromCombat(creatureID) {
        // TODO removes specific creature from the combatOrder array. Need to reload the table. 
            // Have to build reloadCombatOrder()
        console.log('removeFromCombat + ' + creatureID);
        for(let x = 0;x<combatOrder.length;x++){
            if (combatOrder[x][0] == creatureID)
            {
                combatOrder.splice(x, 1);
            }
        }
        console.log("combatOrder = " + combatOrder);
    }
    
    function populateCombatOrder(addedCreature){
        idCount++;
        let creatureID = idName + idCount;
        // console.log('creatureID = ' + creatureID);
        let creatureInit = 0;
        let creatureName = addedCreature.Name;
        currentHP = addedCreature.HitPoints;
        let creatureHPTotal = addedCreature.HitPoints;
        let creatureAC = addedCreature.ArmorClass[0];
        let creatureArray = [creatureID, creatureInit, creatureName, currentHP, creatureHPTotal, creatureAC]
        combatOrder.push(creatureArray);
        // console.log("combatOrder[0] = " + combatOrder[0]);
        //console.log("combatOrder = " + combatOrder);

        reloadCombatOrder(combatOrder);
        // // Create elements for table row
        // let table = document.getElementById("combat-table");
        // let tr = document.createElement("tr");
        // let tdInit = document.createElement("td");
        // let tdName = document.createElement("td");
        // let tdHP = document.createElement("td");
        // let tdAC = document.createElement("td");
        // let tdX = document.createElement("td");

        // // nodes for addedCreature
        // let initiative = document.createTextNode("0"); // will need to add a function like RollForInitiative() to handle initiatives. Maybe even auto for NPCs, manual for PCs
        // let name = document.createTextNode(creatureName);
        // let hitpoints = document.createTextNode(currentHP + "/" + creatureHPTotal);
        // let armorclass = document.createTextNode(creatureAC);
        // let X = document.createTextNode("X")
        // // onClick appends
        // let onclickInit = "changeInit('" + creatureInit + "')";
        // tdInit.setAttribute("onclick", onclickInit);
        // let onclickName = "selectCreature('" + creatureName + "')";
        // tdName.setAttribute("onclick", onclickName);
        // let onclickHP = "changeHP('" + currentHP + "/" + creatureHPTotal + "/" + creatureID + "')";
        // tdHP.setAttribute("onclick", onclickHP);
        // let onclickX = 'removeFromCombat("' + creatureID + '")';
        // tdX.setAttribute("onclick", onclickX);
        // // Append to cells
        // tdInit.appendChild(initiative);
        // tdName.appendChild(name);
        // tdHP.appendChild(hitpoints);
        // tdHP.className = "hitPoints";
        // tdAC.appendChild(armorclass);
        // tdX.appendChild(X);
        // // Append to rows
        // tr.setAttribute('id', creatureID);
        // tr.appendChild(tdInit);
        // tr.appendChild(tdName);
        // tr.appendChild(tdHP);
        // tr.appendChild(tdAC);
        // tr.appendChild(tdX);
        // // Append to table
        // table.appendChild(tr);
    }

    function reloadCombatOrder(tableRows) {
        // TODO: work on condition below to remove previous table if there is a table currently in combat order that needs updating
        // delete rows of table by id
        let tableEl = document.getElementById("combat-table");
        console.log('tableEl = ' + JSON.stringify(tableEl)); //returns as {} no matter how many rows are in combatOrder
        if (tableRows.length > 1){

        }

        // Create elements for table row
        let table = document.getElementById("combat-table");
        let tr = document.createElement("tr");
        let tdInit = document.createElement("td");
        let tdName = document.createElement("td");
        let tdHP = document.createElement("td");
        let tdAC = document.createElement("td");
        let tdX = document.createElement("td");
        let X = document.createTextNode("X");

        for(let i = 0; i < tableRows.length;i++){
            console.log(tableRows);
            // instantiate values for creture from array index
            let rowID = tableRows[i][0];
            let rowInit = tableRows[i][1];
            let rowName = tableRows[i][2];
            let rowHP = tableRows[i][3];
            let rowHPTotal = tableRows[i][4];
            let rowAC = tableRows[i][5];

            // nodes for addedCreature
            let initiative = document.createTextNode(rowInit); // will need to add a function like RollForInitiative() to handle initiatives. Maybe even auto for NPCs, manual for PCs
            let name = document.createTextNode(rowName);
            let hitpoints = document.createTextNode(rowHP + "/" + rowHPTotal);
            let armorclass = document.createTextNode(rowAC);

            // onClick appends
            let onclickInit = "changeInit('" + rowInit + "')";
            tdInit.setAttribute("onclick", onclickInit);
            let onclickName = "selectCreature('" + rowName + "')";
            tdName.setAttribute("onclick", onclickName);
            let onclickHP = "changeHP('" + rowHP + "/" + rowHPTotal + "/" + rowID + "')";
            tdHP.setAttribute("onclick", onclickHP);
            let onclickX = 'removeFromCombat("' + rowID + '")';
            tdX.setAttribute("onclick", onclickX);

            // Append to cells
            tdInit.appendChild(initiative);
            tdName.appendChild(name);
            tdHP.appendChild(hitpoints);
            tdHP.className = "hitPoints";
            tdAC.appendChild(armorclass);
            tdX.appendChild(X);

            // Append to rows
            tr.setAttribute('id', rowID);
            tr.setAttribute('class', 'combatRow');
            tr.appendChild(tdInit);
            tr.appendChild(tdName);
            tr.appendChild(tdHP);
            tr.appendChild(tdAC);
            tr.appendChild(tdX);
            // Append to table
            table.appendChild(tr);
        }
    }
    
    function changeInit() {
        console.log('changeInit');
        // GET the initial combat order int and store it in var initOrder
        // Generate a popup window with initOrder in an input window, arrows up and down, and a checkmark box
        // On the ENTER key down or click on checkmark box, set the selected row's order to the new number
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
        currentHP = hpRatio[0];
        var hpTotal = hpRatio[1];
        let id = hpRatio[2];
        // console.log('id = ' + id);

        // generate a popup window with input window, arrows up and down, and a checkmark box
        var modal = document.getElementById("hpModal");
        var inputBox = document.getElementById("inputBox");
        var closeBtn = document.getElementById("close");
        var checkmarkBtn = document.getElementById("checkmark");
        var arrowUpBtn = document.getElementById("arrowUp");
        var arrowDownBtn = document.getElementById("arrowDown");
        inputBox.setAttribute('value', currentHP);
        modal.style.display = "block";

        // button functions
        closeBtn.onclick = function() { modal.style.display = "none"; }
        arrowUpBtn.onclick = function() {
            var plus = parseInt(inputBox.value) + 1;
            inputBox.setAttribute('value', plus);
        }
        arrowDownBtn.onclick = function() {
            var minus = parseInt(inputBox.value) - 1;
            inputBox.setAttribute('value', minus);
        }

        // On the ENTER kwy down or click on checkmark box, subtract or add the input value to curentHP and return the new value to the table
        checkmarkBtn.onclick = function() {
            var finalValue = parseInt(inputBox.value);
            let newText = finalValue + '/' + hpTotal + '/' + id;
            console.log(newText);
            var newHPattribute = "changeHP('" + newText + "')";

            // second method attempting to change the text. Didn't work
            let changeText = document.querySelector('#' + id);
            console.log(changeText.childNodes[2]);
            changeText.addEventListener("click", function() {
                changeText.childNodes[2].newText = newText;
            });

            // First attempt to change the text. Didn't work, but it did save the inputBox.value from before
            // // let row = document.getElementById(id);
            // // console.log('row = ' + row.innerHTML); // typeof(row) = rowobject
            // // // Will need to figure out how to get the whole row and only change that.
            // // // UPDATE: the inputBox.value remains after checkmarkBtn runs, but the DOM text doesn't update
            // // row.setAttribute("onclick", newHPattribute);
            // // row.getElementsByClassName("hitPoints").text = newText;

            modal.style.display = "none";
        }
    }
    
    function populateDetails(creatureName) {
        console.log("populateDetails");   
    }

    function clearCombatOrder(){
        console.log("clearCombatOrder");
        // add 'idCount reset to 0' here
    }