// import { dialogueOptions } from "./dialogueOptions.js";

var mainContainer = $("#main-container");
var header = $("#header");
var options = $("#options");
var npcName = $("#npcName");
var earthrimNextContainer = $("#earthrimNextContainer");
var earthrimNextBtn = $("#earthrimNextBtn");
var checkResultContainer = $("#checkResultContainer");
var checkSuccessBtn = $("#checkSuccessBtn");
var checkFailedBtn = $("#checkFailedBtn");
const paragraph = document.createElement("p");
const divAdd = document.createElement("div");
let history = [];
let currentRumorKey = null;
let stagedDialogueState = null;
let currentOptionsContext = null;
let rumorReturnContext = null;

$("document").ready(() => renderDialogue("initial"));

function getRandomRumorKey(excludeKey) {
    const rumorKeys = Object.keys(rumorDialogueOptions);
    const availableKeys = rumorKeys.filter(key => key !== excludeKey);

    const nextKeys = availableKeys.length > 0 ? availableKeys : rumorKeys;
    return nextKeys[Math.floor(Math.random() * nextKeys.length)];
}

function renderRandomRumor() {
    const nextRumorKey = getRandomRumorKey(currentRumorKey);
    const shouldReplaceCurrent = currentRumorKey !== null;

    renderRumorDialogue(nextRumorKey, rumorDialogueOptions[nextRumorKey], { replaceCurrent: shouldReplaceCurrent });
}

function setCurrentOptionsContext(key, dialogue, headerText) {
    currentOptionsContext = {
        key,
        dialogue,
        headerText
    };
}

function returnToPreviousOptionsFromRumor() {
    if (history[history.length - 1] === "rumors") {
        history.pop();
    }

    const context = rumorReturnContext;
    rumorReturnContext = null;
    currentRumorKey = null;
    stagedDialogueState = null;

    if (context && context.dialogue) {
        npcName.empty();
        header.empty();
        options.empty();

        hideEarthrimNextButton();
        npcName.append(context.dialogue.title);
        header.append("&nbsp;&nbsp;&nbsp;&nbsp;" + context.headerText);
        renderOptionsList(context.dialogue.options || []);
        setCurrentOptionsContext(context.key, context.dialogue, context.headerText);
        return;
    }

    const previousKey = history[history.length - 1];
    if (previousKey) {
        renderDialogue(previousKey);
    }
}

function isEarthrimDialogueNode(key, dialogue) {
    return history.includes("earthrimZone") && key !== "earthrimZone" && typeof dialogue.title === "string";
}

function getEarthrimDialogueStages(dialogue) {
    if (Array.isArray(dialogue.earthrimSequence) && dialogue.earthrimSequence.length > 0) {
        return dialogue.earthrimSequence;
    }

    // Convenience shorthand: allow header to be an array of staged lines.
    if (Array.isArray(dialogue.header) && dialogue.header.length > 0) {
        return dialogue.header;
    }

    // Allow header to be omitted when authoring staged Earthrim dialogue.
    return [dialogue.header || ""];
}

function hideEarthrimNextButton() {
    earthrimNextBtn.off("click");
    earthrimNextContainer.hide();
}

function showEarthrimNextButton(clickHandler) {
    earthrimNextBtn.text("-->");
    earthrimNextBtn.off("click");
    earthrimNextBtn.on("click", clickHandler);
    earthrimNextContainer.css("display", "flex");
}

function hideCheckResultButtons() {
    checkSuccessBtn.off("click");
    checkFailedBtn.off("click");
    checkResultContainer.hide();
}

function showCheckResultButtons(checkConfig) {
    checkSuccessBtn.text("Success");
    checkFailedBtn.text("Failed");

    checkSuccessBtn.off("click");
    checkFailedBtn.off("click");

    checkSuccessBtn.on("click", () => renderDialogue(checkConfig.successId));
    checkFailedBtn.on("click", () => renderDialogue(checkConfig.failureId));

    checkResultContainer.css("display", "flex");
}

function renderCheckPrompt(option) {
    const checkConfig = option.check || {};
    const promptText = checkConfig.prompt || "Roll for check...";

    hideEarthrimNextButton();
    header.empty();
    options.empty();

    header.append("&nbsp;&nbsp;&nbsp;&nbsp;" + promptText);
    showCheckResultButtons(checkConfig);
}

function isLocationContextNode(key) {
    const dialogue = dialogueOptions[key];
    if (!dialogue || typeof dialogue.header !== "string") {
        return false;
    }

    const headerText = dialogue.header.toLowerCase();
    const hasLocationPrompt =
        headerText.includes("who are you talking to") ||
        headerText.includes("which location are you in") ||
        headerText.includes("where are you inside") ||
        headerText.includes("where are you?");

    // Most location selectors in this data set do not define an NPC title.
    return key.startsWith("location") || (hasLocationPrompt && !dialogue.title);
}

function getNearestLocationContextFromHistory() {
    // Skip the current dialogue (last item) and walk backwards.
    for (let index = history.length - 2; index >= 0; index -= 1) {
        const candidateKey = history[index];
        if (isLocationContextNode(candidateKey)) {
            return candidateKey;
        }
    }

    return null;
}

function redirectFromGoodbye(option) {
    const explicitTarget = option.goTo;
    const targetKey = explicitTarget || getNearestLocationContextFromHistory();

    if (!targetKey || !dialogueOptions[targetKey]) {
        goBack();
        return;
    }

    const targetHistoryIndex = history.lastIndexOf(targetKey);
    if (targetHistoryIndex >= 0) {
        history = history.slice(0, targetHistoryIndex + 1);
        renderDialogue(targetKey, { replaceCurrent: true });
        return;
    }

    renderDialogue(targetKey);
}

function renderOptionsList(optionsList) {
    options.empty();
    hideCheckResultButtons();

    optionsList.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        btn.setAttribute("id", option.id);

        if (option.goBack) {
            if (option.id === "goodbye") {
                btn.addEventListener("click", () => redirectFromGoodbye(option));
            } else {
                btn.addEventListener("click", () => goBack());
            }
        } else if (option.goBackLevels) {
            btn.addEventListener("click", () => goBack(option.goBackLevels));
        } else if (option.check && option.check.successId && option.check.failureId) {
            btn.addEventListener("click", () => renderCheckPrompt(option));
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

function beginEarthrimStagedDialogue(key, dialogue) {
    const stages = getEarthrimDialogueStages(dialogue);

    stagedDialogueState = {
        key,
        dialogue,
        stages,
        stageIndex: 0
    };

    options.empty();
    hideCheckResultButtons();
    header.html("&nbsp;&nbsp;&nbsp;&nbsp;" + stages[0]);

    if (stages.length > 1) {
        showEarthrimNextButton(advanceEarthrimDialogue);
        return;
    }

    if (dialogue.options && dialogue.options.length > 0) {
        showEarthrimNextButton(advanceEarthrimDialogue);
    } else {
        hideEarthrimNextButton();
    }
}

function advanceEarthrimDialogue() {
    if (!stagedDialogueState) {
        return;
    }

    const { dialogue, stages, stageIndex } = stagedDialogueState;
    const nextStageIndex = stageIndex + 1;

    if (nextStageIndex < stages.length) {
        stagedDialogueState.stageIndex = nextStageIndex;
        header.html("&nbsp;&nbsp;&nbsp;&nbsp;" + stages[nextStageIndex]);

        if (nextStageIndex === stages.length - 1) {
            if (dialogue.options && dialogue.options.length > 0) {
                showEarthrimNextButton(advanceEarthrimDialogue);
            } else {
                hideEarthrimNextButton();
                stagedDialogueState = null;
            }
        }

        return;
    }

    hideEarthrimNextButton();
    renderOptionsList(dialogue.options || []);
    setCurrentOptionsContext(stagedDialogueState.key, dialogue, stages[stages.length - 1]);
    stagedDialogueState = null;
}

function renderRumorDialogue(rumorKey, rumorHeader, renderOptions = {}) {
    const { replaceCurrent = false } = renderOptions;
    const previousKey = history[history.length - 1];

    if (currentOptionsContext && currentOptionsContext.key === previousKey) {
        rumorReturnContext = { ...currentOptionsContext };
    } else {
        rumorReturnContext = null;
    }

    if (replaceCurrent && history.length > 0) {
        history[history.length - 1] = "rumors";
    } else if (history.length === 0 || history[history.length - 1] !== "rumors") {
        history.push("rumors");
    }

    currentRumorKey = rumorKey;
    stagedDialogueState = null;

    npcName.empty();
    header.empty();
    options.empty();
    hideCheckResultButtons();

    npcName.append("Rumors");
    header.append("&nbsp;&nbsp;&nbsp;&nbsp;" + rumorHeader);

    // After a rumor is shown, advancing always returns to the previous NPC options.
    showEarthrimNextButton(() => returnToPreviousOptionsFromRumor());
}

function renderDialogue(key, renderOptions = {}) {
    const { replaceCurrent = false } = renderOptions;

    if (replaceCurrent && history.length > 0) {
        history[history.length - 1] = key;
    } else if (history.length === 0 || history[history.length - 1] !== key) {
        history.push(key);
    }

    if (key !== "rumors") {
        currentRumorKey = null;
    }

    stagedDialogueState = null;
    currentOptionsContext = null;

    // Get dialogue data
    const $dialogue = dialogueOptions[key];

    npcName.empty();
    header.empty();
    options.empty();
    hideCheckResultButtons();

    if (!$dialogue) {
        hideEarthrimNextButton();
        header.append("Dialogue not found!");
        return;
    }

    npcName.append($dialogue.title);

    if (isEarthrimDialogueNode(key, $dialogue)) {
        beginEarthrimStagedDialogue(key, $dialogue);
        return;
    }

    hideEarthrimNextButton();
    const singleHeader = Array.isArray($dialogue.header)
        ? ($dialogue.header[0] || "")
        : ($dialogue.header || "");
    header.append("&nbsp;&nbsp;&nbsp;&nbsp;" + singleHeader);
    renderOptionsList($dialogue.options || []);
    setCurrentOptionsContext(key, $dialogue, singleHeader);
}

function goHome() {
    renderDialogue('initial');
    hideEarthrimNextButton();
    hideCheckResultButtons();
    stagedDialogueState = null;
    currentOptionsContext = null;
    rumorReturnContext = null;
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