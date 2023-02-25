// Helpful links: 
    // https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
    // https://www.youtube.com/watch?v=Pb-8DzAObmg

    var monsters = {};
    var combatOrder = [];
    
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
        console.log("populateLibrary() worked!!!");
    }
    
    // Will need to rework the logic for the parent forin loop
    function addToCombat(name) {
        console.log("name = " + name);
        for(select in monstersLocal) {
            if(monstersLocal[select].Name == name) {
                let creature = monstersLocal[select];
                populateCombatOrder(creature);
            }
        }
    }
    
    function populateCombatOrder(addedCreature){
        let creatureInit = 0;
        let creatureName = addedCreature.Name;
        let creatureHP = addedCreature.HitPoints;
        let creatureAC = addedCreature.ArmorClass[0];
        let creatureArray = [creatureInit, creatureName, creatureHP, creatureAC]
        combatOrder.push(creatureArray);
        console.log("combatOrder[0] = " + combatOrder[0]);
        console.log("combatOrder = " + combatOrder);
        let table = document.getElementById("combat-table");
        let tr = document.createElement("tr");
        let tdInit = document.createElement("td");
        let tdName = document.createElement("td");
        let tdHP = document.createElement("td");
        let tdAC = document.createElement("td");
        let tdX = document.createElement("td");
        // nodes for addedCreature
        let initiative = document.createTextNode("0");
        let name = document.createTextNode(creatureName);
        let hitpoints = document.createTextNode(creatureHP + "/" + creatureHP);
        let armorclass = document.createTextNode(creatureAC);
        let X = document.createTextNode("X")
        // onClick appends
        let onclickInit = "changeInit('" + creatureInit + "')";
        tdInit.setAttribute("onclick", onclickInit);
        let onclickName = "selectCreature('" + creatureName + "')";
        tdName.setAttribute("onclick", onclickName);
        let onclickHP = "changeHP('" + creatureHP + "/" + creatureHP + "')";
        tdHP.setAttribute("onclick", onclickHP);
        let onclickX = "removeFromCombat()";
        tdX.setAttribute("onclick", onclickX);
        // Append to cells
        tdInit.appendChild(initiative);
        tdName.appendChild(name);
        tdHP.appendChild(hitpoints);
        tdHP.className = "hitPoints";
        tdAC.appendChild(armorclass);
        tdX.appendChild(X);
        // Append to rows
        tr.appendChild(tdInit);
        tr.appendChild(tdName);
        tr.appendChild(tdHP);
        tr.appendChild(tdAC);
        tr.appendChild(tdX);
        // Append to table
        table.appendChild(tr);
    }
    
    function changeInit() {
        // GET the initial combat order int and store it in var initOrder
        // Generate a popup window with initOrder in an input window, arrows up and down, and a checkmark box
        // On the ENTER key down or click on checkmark box, set the selected row's order to the new number
        // do something for reorganizing the table
    }
    
    function selectCreature(name) {
        console.log(name);
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
        var hpCurrent = hpRatio[0];
        var hpTotal = hpRatio[1];
        // generate a popup window with input window, arrows up and down, and a checkmark box
        var modal = document.getElementById("hpModal");
        var inputBox = document.getElementById("inputBox");
        var closeBtn = document.getElementById("close");
        var checkmarkBtn = document.getElementById("checkmark");
        var arrowUpBtn = document.getElementById("arrowUp");
        var arrowDownBtn = document.getElementById("arrowDown");
        inputBox.setAttribute('value', hpCurrent);
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
            // Will need to figure out how to get the whole row and only change that.
                // indexOf() get the position of an element in an array

            modal.style.display = "none";
        }
    }
    
    function removeFromCombat() {
        // 
    }
    
    function populateDetails(creatureName) {
        console.log(creatureName);   
    }