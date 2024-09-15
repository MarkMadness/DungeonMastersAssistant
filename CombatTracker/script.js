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
        //combatOrder.push(creatureArray);
        duplicateNamesCheck(creatureArray);
        //reloadCombatOrder(combatOrder, false);
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
            tdHP.className = "hitPoints hp-green";
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
        differenceBoxValue = 0;
        var hpTotal = hpRatio[1];
        let id = hpRatio[2];
        // console.log('id = ' + id);

        // generate a popup window with input window, arrows up and down, and a checkmark box
        var modal = document.getElementById("hpModal");
        var inputBox = document.getElementById("inputBox");
        var differenceBox = document.getElementById("differenceBox");
        var closeBtn = document.getElementById("close");
        var checkmarkBtn = document.getElementById("checkmark");
        var arrowUpBtn = document.getElementById("arrowUp");
        var arrowDownBtn = document.getElementById("arrowDown");
        inputBox.setAttribute('value', currentHP);
        modal.style.display = "block";

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
            differenceBox.textContent = (difference > 0 ? '+' : '') + difference; // Display difference with a '+' sign if positive
            differenceBox.style.color = difference === 0 ? 'black' : (difference > 0 ? 'green' : 'red');
        }

        closeBtn.onclick = function() { modal.style.display = "none"; }
        arrowUpBtn.onclick = function() {
            var plus = parseInt(inputBox.value) + 1;
            inputBox.setAttribute('value', plus);
            updateDifference(plus);
        }
        arrowDownBtn.onclick = function() {
            var minus = parseInt(inputBox.value) - 1;
            inputBox.setAttribute('value', minus);
            updateDifference(minus);
        }

        // On the ENTER kwy down or click on checkmark box, subtract or add the input value to curentHP and return the new value to the table
        checkmarkBtn.onclick = function() {
            var finalValue = parseInt(inputBox.value);
            let newHPText = finalValue + '/' + hpTotal;
            console.log(newHPText);
            var newHPattribute = "changeHP('" + newHPText + "/" + id + "')";

            // second method attempting to change the text. Didn't work
            let cellHP = document.querySelector(`#${id} .hitPoints`);
            cellHP.innerText = newHPText;
            cellHP.setAttribute('onclick', newHPattribute);
            
            // removes classes beforehand to add new ones below
            cellHP.classList.remove('hp-green');
            cellHP.classList.remove('hp-yellow');
            cellHP.classList.remove('hp-orange');
            cellHP.classList.remove('hp-red');

            //check percentage of monster health and add appropriate class for color
            var percentage = Math.round((finalValue/hpTotal) * 100);
            if(percentage >= 100) {
                cellHP.classList.add('hp-green');
            } else if (percentage <= 99 && percentage >= 60){
                cellHP.classList.add('hp-yellow');
            } else if (percentage <= 59 && percentage >= 30){
                cellHP.classList.add('hp-orange');
            } else {
                cellHP.classList.add('hp-red');
            }

            // First attempt to change the text. Didn't work, but it did save the inputBox.value from before
            // // let row = document.getElementById(id);
            // // console.log('row = ' + row.innerHTML); // typeof(row) = rowobject
            // // // Will need to figure out how to get the whole row and only change that.
            // // // UPDATE: the inputBox.value remains after checkmarkBtn runs, but the DOM text doesn't update
            // // row.setAttribute("onclick", newHPattribute);
            // // row.getElementsByClassName("hitPoints").text = newText;

            differenceBox.textContent = '0';
            differenceBox.style.color = 'black';

            modal.style.display = "none";
        }
    }
    
    function populateDetails(creatureName) {
        console.log("populateDetails");   
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

        // Refresh the combat order display
        reloadCombatOrder(combatOrder, false);
    
        //return combatOrder;
    }