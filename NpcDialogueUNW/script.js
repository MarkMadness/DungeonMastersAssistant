// import { dialogueOptions } from "./dialogueOptions.js";

var mainContainer = $("#main-container");
var header = $("#header");
var options = $("#options");
var npcName = $("#npcName");
const paragraph = document.createElement("p");
const divAdd = document.createElement("div");
let history = [];

$("document").ready(() => renderDialogue("initial"));

function renderDialogue(key) {
    if (history.length === 0 || history[history.length - 1] !== key) {
        history.push(key);
    }

    // Get dialogue data
    const $dialogue = dialogueOptions[key];

    npcName.empty();
    header.empty();
    options.empty();

    if (!$dialogue) {
        header.append("Dialogue not found!");
        return;
    }

    npcName.append($dialogue.title);
    header.append("&nbsp;&nbsp;&nbsp;&nbsp;" + $dialogue.header);

    // Create buttons for options
    $dialogue.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        btn.setAttribute("id", option.id);
        
        if (option.goBack) {
            btn.addEventListener("click", () => goBack());
        } else if (option.openStore) {
            // Handle store options
            btn.addEventListener("click", () => openStoreModal(option.storeData));
        } else {
            btn.addEventListener("click", () => renderDialogue(option.id));
        }

        options.append(btn);
    });
}

function goHome() {
    renderDialogue('initial');
    history = []; // Clear history when going home
}

function goBack() {
    // Remove the current dialogue from the history stack
    history.pop();

    // Get the previous dialogue key
    const previousKey = history[history.length - 1];

    // Render the previous dialogue
    if (previousKey) {
        renderDialogue(previousKey);
    }
}

// Store Modal Functions
function convertCopperToCoins(copperAmount) {
    const gold = Math.floor(copperAmount / 100);
    const silver = Math.floor((copperAmount % 100) / 10);
    const copper = copperAmount % 10;
    
    let priceString = "";
    if (gold > 0) {
        priceString += `${gold} gp`;
    }
    if (silver > 0) {
        if (priceString.length > 0) priceString += " ";
        priceString += `${silver} sp`;
    }
    if (copper > 0 || priceString.length === 0) {
        if (priceString.length > 0) priceString += " ";
        priceString += `${copper} cp`;
    }
    
    return priceString;
}

function openStoreModal(storeData) {
    const modal = document.getElementById('storeModal');
    const storeTitle = document.getElementById('storeTitle');
    const storeTableBody = document.getElementById('storeTableBody');
    
    // Set the store title
    storeTitle.textContent = storeData.title;
    
    // Clear existing table rows
    storeTableBody.innerHTML = '';
    
    // Populate table with items
    storeData.items.forEach(item => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const priceCell = document.createElement('td');
        
        nameCell.textContent = item.name;
        priceCell.textContent = convertCopperToCoins(item.price);
        
        row.appendChild(nameCell);
        row.appendChild(priceCell);
        storeTableBody.appendChild(row);
    });
    
    // Show the modal
    modal.style.display = 'block';
}

function closeStoreModal() {
    const modal = document.getElementById('storeModal');
    modal.style.display = 'none';
}

// Modal event listeners
$(document).ready(function() {
    // Close modal when clicking the X
    $('.close').click(closeStoreModal);
    
    // Close modal when clicking the close button
    $('#closeModalBtn').click(closeStoreModal);
    
    // Close modal when clicking outside of it
    $(window).click(function(event) {
        const modal = document.getElementById('storeModal');
        if (event.target === modal) {
            closeStoreModal();
        }
    });
});