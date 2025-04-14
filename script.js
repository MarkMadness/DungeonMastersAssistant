// import { dialogueOptions } from "./dialogueOptions.js";

var mainContainer = $("#main-container");
var header = $("#header");
var options = $("#options");
var npcName = $("#npcName");
const paragraph = document.createElement("p");
const divAdd = document.createElement("div");

$("document").ready(() => renderDialogue("initial"));

function renderDialogue(key) {
    // Get dialogue data
    const $dialogue = dialogueOptions[key];

    if (!$dialogue) {
        header.append("Dialogue not found!");
        return;
    }

    if($dialogue.returnToParent) {returnToParent();}

    npcName.empty();
    header.empty();
    options.empty();

    if($("#btnSecondHome").attr("display") == "none") {
        $("#btnSecondHome").css("display", "block");
        $("#btnSecondHome").addEventListener("click", () => renderDialogue(key));
    }

    if($("#btnThirdHome").attr("display") == "none") {
        $("#btnThirdHome").css("display", "block");
        $("#btnThirdHome").addEventListener("click", () => renderDialogue(key));
    }

    if($("#btnFourthHome").attr("display") == "none") {
        $("#btnFourthHome").css("display", "block");
        $("#btnFourthHome").addEventListener("click", () => renderDialogue(key));
    }

    npcName.append($dialogue.title);
    header.append($dialogue.header);

    // Create buttons for options
    $dialogue.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option.text;
        btn.setAttribute("id", option.id);
        btn.addEventListener("click", () => renderDialogue(option.id));
        options.append(btn);
    });
}

function returnToParent() {
    if ($("#btnFourthHome").css("display") === "block") {
        $("#btnFourthHome").trigger("click");
        return;
    } else if ($("#btnThirdHome").css("display") === "block") {
        $("#btnThirdHome").trigger("click");
        return;
    } else if ($("#btnSecondHome").css("display") === "block") {
        $("#btnSecondHome").trigger("click");
        return;
    }

}