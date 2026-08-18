// import { dialogueOptions } from "./dialogueOptions.js";

var mainContainer = $("#main-container");
var header = $("#header");
var options = $("#options");
var npcName = $("#npcName");
const paragraph = document.createElement("p");
const divAdd = document.createElement("div");
let history = [];
let currentRumorIndex = null;

$("document").ready(() => renderDialogue("initial"));

function getRandomRumorIndex(excludeIndex) {
    const availableIndices = rumorDialogueOptions
        .map((_, index) => index)
        .filter(index => index !== excludeIndex);

    const nextIndices = availableIndices.length > 0 ? availableIndices : rumorDialogueOptions.map((_, index) => index);
    return nextIndices[Math.floor(Math.random() * nextIndices.length)];
}

function renderRandomRumor() {
    const nextRumorIndex = getRandomRumorIndex(currentRumorIndex);
    const shouldReplaceCurrent = currentRumorIndex !== null;

    renderRumorDialogue(rumorDialogueOptions[nextRumorIndex], { replaceCurrent: shouldReplaceCurrent, rumorIndex: nextRumorIndex });
}

function renderRumorDialogue(headerText, renderOptions = {}) {
    const { replaceCurrent = false, rumorIndex = null } = renderOptions;

    if (replaceCurrent && history.length > 0) {
        history[history.length - 1] = "rumors";
    } else if (history.length === 0 || history[history.length - 1] !== "rumors") {
        history.push("rumors");
    }

    currentRumorIndex = rumorIndex;

    npcName.empty();
    header.empty();
    options.empty();

    npcName.append("Rumors");
    header.append("&nbsp;&nbsp;&nbsp;&nbsp;" + headerText);

    [
        { id: "rumorBack", text: "Back", goBackLevels: 1 },
        { id: "rumors", text: "Another rumor." },
        { id: "rumorGoodbye", text: "Goodbye.", goBackLevels: 2 }
    ].forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        btn.setAttribute("id", option.id);

        if (option.goBackLevels) {
            btn.addEventListener("click", () => goBack(option.goBackLevels));
        } else {
            btn.addEventListener("click", () => renderRandomRumor());
        }

        options.append(btn);
    });
}

function renderDialogue(key, renderOptions = {}) {
    const { replaceCurrent = false } = renderOptions;

    if (replaceCurrent && history.length > 0) {
        history[history.length - 1] = key;
    } else if (history.length === 0 || history[history.length - 1] !== key) {
        history.push(key);
    }

    if (key !== "rumors") {
        currentRumorIndex = null;
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
        } else if (option.goBackLevels) {
            btn.addEventListener("click", () => goBack(option.goBackLevels));
        } else if (option.openStore) {
            // Handle store options
            btn.addEventListener("click", () => openStoreModal(option.storeData));
        } else if (option.randomRumor || option.id === "rumors") {
            btn.addEventListener("click", () => renderRandomRumor());
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

function goBack(levels = 1) {
    // Remove the current dialogue and any requested parent scopes from the history stack
    for (let index = 0; index < levels; index += 1) {
        history.pop();
    }

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