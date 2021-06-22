// Fetches the monster information from the monsters.json file
const monsters = fetch("./monsters.json").then(response => {
    return response.json();
}).then(data => console.log(data));

// const monsterLibrary = JSON.parse(monsters);

console.log(monsters[0]);

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