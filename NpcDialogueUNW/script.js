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