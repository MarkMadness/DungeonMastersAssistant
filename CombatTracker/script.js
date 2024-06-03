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
        let remove = false;
        for(let x = 0;x<combatOrder.length;x++){
            if (combatOrder[x][0] == creatureID)
            {
                combatOrder.splice(x, 1);
            }
        }
        if (!combatOrder[1]){
            remove = true;
        }
        reloadCombatOrder(combatOrder, remove);
    }
    
    function populateCombatOrder(addedCreature){
        idCount++;
        let creatureID = addedCreature.ID;
        let creatureNameID = idName + idCount;
        let creatureInit = 0;
        let creatureName = addedCreature.Name;
        currentHP = addedCreature.HitPoints;
        let creatureHPTotal = addedCreature.HitPoints;
        let creatureAC = addedCreature.ArmorClass[0];
        let creatureArray = [creatureNameID, creatureInit, creatureName, currentHP, creatureHPTotal, creatureAC, creatureID];
        combatOrder.push(creatureArray);
        duplicateNamesCheck(creatureArray);
        reloadCombatOrder(combatOrder, false);
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
            let thOne = document.createElement("th");
                thOne.setAttribute('width', '50px');
            let thTwo = document.createElement("th");
                thTwo.setAttribute('width', '275px');
            let thThree = document.createElement("th");
                thThree.setAttribute('width', '75px');
            let thFour = document.createElement("th");
                thFour.setAttribute('width', '75px');
            let thFive = document.createElement("th");
                thFive.setAttribute('width', '50px');

            let textOne = document.createTextNode("#");
            let textTwo = document.createTextNode("Name");
            let textThree = document.createTextNode("HP");
            let textFour = document.createTextNode("AC");
            let textFive = document.createTextNode("X");

            thOne.appendChild(textOne);
            thTwo.appendChild(textTwo);
            thThree.appendChild(textThree);
            thFour.appendChild(textFour);
            thFive.appendChild(textFive);

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
        
        for(let i = 0; i < tableRows.length;i++){
            // Create elements for table row
            let tr = document.createElement("tr");
            let tdInit = document.createElement("td");
            let tdName = document.createElement("td");
            let tdHP = document.createElement("td");
            let tdAC = document.createElement("td");
            let tdX = document.createElement("td");
            let X = document.createTextNode("X");

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
            tableNew.appendChild(tr);
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

    function duplicateNamesCheck(newCreature){
        // do an if function for creatures in CombatOrder that already have the same name as newCreature
        // if function hit = check if the same named creature already has a number at the end of it's name.
        // return combatOrder with the updated names 
        var IDCount = 0;
        if(combatOrder.length > 1)
        {
            console.log("combatOrder = " + combatOrder);
            var newName = newCreature[2]; // CreatureName index
            console.log("newName = " + newName);
            var addedID = newCreature[6]; // CreatureID index
            var numCount = 1;
            // for(var x = 0;x<combatOrder.length;x++){
            //     var currentID = combatOrder[x][6]; // CreatureID index
                
            //     if(currentID === addedID)
            //     {
            //         console.log("currentID === addedID");
            //         if(IDCount === 0){
            //             console.log("IDCount === 0");
            //             var currentName = combatOrder[x][6];
            //             combatOrder[x][6] = currentName + " " + IDCount;
            //         }
            //         IDCount++;
            //     }
            // }

            // if(IDCount > 0){
            //     console.log("IDCount > 1");
            //     combatOrder[combatOrder.length - 1][2] = newName + " " + IDCount;
            // }

            for(var i = 0;i<combatOrder.length;i++){
                var currentName = combatOrder[i][2]; // CreatureName index
                var currentNameOnly = currentName.slice(0,newName.length);
                // need to check length if there is alreayd a number at the end
                console.log("currentName = " + currentName);
                if (currentNameOnly === newName)
                {
                    console.log("if statement hit");
                    if (isNaN(currentName.slice(-1)) === true)
                    {
                        currentName = currentName + " " + numCount;
                        combatOrder[i][2] = currentName;
                        numCount++;
                    } else {
                        numCount++;
                    }
                    console.log("combatOrder after if statement = " + combatOrder);
                }
            }
            // if(numCount > 1) {
            //     combatOrder[combatOrder.length - 1][2] = newName + " " + numCount;
            // }
        }
        return combatOrder;
    }