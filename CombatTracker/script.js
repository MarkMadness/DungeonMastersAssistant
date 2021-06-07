var profiles = [
    {
        name: "Monster 1",
        hitpoints: 15,
        armorclass: 15
    },
    {
        name: "Monster 2",
        hitpoints: 54,
        armorclass: 19
    },
    {
        name: "Monster 3",
        hitpoints: 23,
        armorclass: 18
    }
];

function populateLibrary() {
    for (profile in profiles) {
        let list = document.getElementById("library-list");
        let div = document.createElement("div");
        let text = document.createTextNode(profiles[profile].name);
        div.appendChild(text);
        list.appendChild(div);
    }
}