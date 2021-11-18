var commonSelected = [];
var uncommonSelected = [];
var rareSelected = [];
var veryrareSelected = [];
var errorSelected = [];

const commonGems = ['Azurite', 'Banded Agate', 'Blue Quartz', 'Eye Agate', 'Hematite',
'Lapis Lazuli', 'Malachite', 'Moss Agate', 'Obsidian', 'Rhodochrosite',
'Tiger Eye', 'Turquoise'];
const uncommonGems = ['Bloodstone', 'Carnelian', 'Chalcedony', 'Chrysoprase', 'Citrine',
'Jasper', 'Moonstone', 'Onyx', 'Quartz', 'Sardonyx',
'Star Rose Quartz', 'Zircon'];
const rareGems = ['Amber', 'Amethyst', 'Chrysoberyl', 'Coral', 'Garnet', 
'Painite', 'Jade', 'Jet', 'Pearl', 'Spinel', 
'Tourmaline'];
const veryRareGems = ['Blue Sapphire', 'Emerald', 'Fire Opal', 'Opal', 'Star Ruby',
'Star Sapphire', 'Yellow Sapphire', 'Black Sapphire', 'Diamond', 'Jacinth',
'Ruby'];
const magicalItems = ['Trident of fish Command (Harbors/Ports)', 'Ring of Swimming', 'Wand of Magic Detection', 'Ring of Jumping', 'Ring of Warmth (cities in the north or in Falmora or Norden)', 
'Ring of Water Walking', 'Amulet of Proof against Detection and Location', 'Deck of Illusions', 'Lantern of Revealing', 'Restorative Ointment', 
'Stone of Good Luck', 'Wand of Web', 'Bag of Tricks', 'Boots of Striding and Springing', 'Gloves of Swimming and Climbing', 
'Slippers of Spider Climbing', 'Rope of Climbing', 'Wand of Magic Missiles', 'Wand of Secrets', 'Wand of the War Mage (+1, +2, or +3)', //Rope of Climbing = last minor city item
'Adamantine Armor', 'Mithral Armor', 'Javelin of Lightning', 'Immovable Rod', 'Bag of Holding', 
'Boots of Elvenkind', 'Boots of the Winterlands', 'Bracers of Archery', 'Circle of Blasting', 'Cloak of Elvenkind', 
'Cloak of Protection', 'Cloak of the Manta Ray (cities near water)', 'Dust of Disappearance', 'Dust of Dryness', 'Dust of Sneezing and Choking', 
'Efficient Quiver', 'Elemental Gem', 'Eversmoking Bottle', 'Eyes of Minute Seeing', 'Eyes of the Eagle', 
'Gem of Brightness', 'Gloves of Missile Snaring', 'Goggles of Night', 'Hat of Disguise', 'Headband of Intellect', 
'Helm of Comprehending Languages', 'Medallion of Thoughts', 'Necklace of Adaption', 'Pearl of Power', 'Periapt of Wound Closure', 
'Pipes of Haunting', 'Pipes of the Sewers', 'Robe of Useful Items', 'Wind Fan', 'Handy Haversack', 
'Ring of Feather Falling', 'Ring of Free Action', 'Rind of Resistance', 'Amulet of Health'];

// function gemSelect(rarity) {
//     console.log("rarity = " + rarity);
//     if (rarity = 'common') {
//         let gems = ['Azurite', 'Banded Agate', 'Blue Quartz', 'Eye Agate', 'Hematite',
//             'Lapis Lazuli', 'Malachite', 'Moss Agate', 'Obsidian', 'Rhodochrosite',
//             'Tiger Eye', 'Turquoise'
//         ];
//         let randomNum = Math.floor(Math.random() * 12);
//         let selectedGem = gems[randomNum];
//         commonSelected.push(selectedGem);
//         commonSelected.sort();
//     } else if (rarity = 'uncommon') {
//         let gems = ['Bloodstone', 'Carnelian', 'Chalcedony', 'Chrysoprase', 'Citrine',
//         'Jasper', 'Moonstone', 'Onyx', 'Quartz', 'Sardonyx',
//         'Star Rose Quartz', 'Zircon'
//         ];
//         let randomNum = Math.floor(Math.random() * 12);
//         let selectedGem = gems[randomNum];
//         uncommonSelected.push(selectedGem);
//         uncommonSelected.sort();
//     } else if (rarity = 'rare') {
//         let gems = ['Amber', 'Amethyst', 'Chrysoberyl', 'Coral', 'Garnet', 
//         'Painite', 'Jade', 'Jet', 'Pearl', 'Spinel', 
//         'Tourmaline'
//         ];
//         let randomNum = Math.floor(Math.random() * 11);
//         let selectedGem = gems[randomNum];
//         rareSelected.push(selectedGem);
//         rareSelected.sort();
//     } else if (rarity = 'very rare') {
//         let gems = ['Blue Sapphire', 'Emerald', 'Fire Opal', 'Opal', 'Star Ruby',
//         'Star Sapphire', 'Yellow Sapphire', 'Black Sapphire', 'Diamond', 'Jacinth',
//         'Ruby'
//         ];
//         let randomNum = Math.floor(Math.random() * 11);
//         let selectedGem = gems[randomNum];
//         veryrareSelected.push(selectedGem);
//         veryrareSelected.sort();
//     } else {
//         errorSelected.push('error');
//     }   

//     console.log("commonSelected = " + commonSelected);
//     console.log("uncommonSelected = " + uncommonSelected);
//     console.log("rareSelected = " + rareSelected);
//     console.log("veryrareSelected = " + veryrareSelected);

// document.getElementById('gems-area').innerHTML = commonSelected + "\n" + uncommonSelected + "\n" + rareSelected + "\n" + veryrareSelected + "\n" + errorSelected;
// }

function commonSelect() {
    let randomNum = Math.floor(Math.random() * 12);
    let selectedGem = commonGems[randomNum];
    commonSelected.push(selectedGem);
    commonSelected.sort();
    populateText();
}

function uncommonSelect() {
    let randomNum = Math.floor(Math.random() * 12);
    let selectedGem = uncommonGems[randomNum];
    uncommonSelected.push(selectedGem);
    uncommonSelected.sort();
    populateText();
}

function rareSelect() {
    let randomNum = Math.floor(Math.random() * 11);
    let selectedGem = rareGems[randomNum];
    rareSelected.push(selectedGem);
    rareSelected.sort();
    populateText();
}

function veryRareSelect() {
    let randomNum = Math.floor(Math.random() * 11);
    let selectedGem = veryRareGems[randomNum];
    veryrareSelected.push(selectedGem);
    veryrareSelected.sort();
    populateText();
}

function magicalItemsSelect() {
    let randomNum = Math.floor(Math.random() * 100);
    if(randomNum <= 25){
        let selectNum = (Math.floor(Math.random() * 5) + 54) - 1;
        let selectedItem = magicalItems[selectNum];
        document.getElementById('majorcities').innerHTML = selectedItem;
        document.getElementById('minorcities').innerHTML = '';
        document.getElementById('echoshards').innerHTML = '';
    } else if (randomNum <= 40) {
        let selectNumMajor = (Math.floor(Math.random() * 54)) - 1;
        let selectNumMinor = (Math.floor(Math.random() * 17)) - 1;
        let selectedItemMajor = magicalItems[selectNumMajor];
        let selectedItemMinor = magicalItems[selectNumMinor];
        document.getElementById('majorcities').innerHTML = selectedItemMajor;
        document.getElementById('minorcities').innerHTML = selectedItemMinor;
        document.getElementById('echoshards').innerHTML = '';
    } else {
        let echoShard = 50 * (100 - randomNum);
        document.getElementById('majorcities').innerHTML = '';
        document.getElementById('minorcities').innerHTML = '';
        document.getElementById('echoshards').innerHTML = echoShard;
    }
}

function populateText() {
    // console.log("commonSelected = " + commonSelected);
    // console.log("uncommonSelected = " + uncommonSelected);
    // console.log("rareSelected = " + rareSelected);
    // console.log("veryrareSelected = " + veryrareSelected);
    document.getElementById('gems-area').innerHTML = "     COMMON GEMS:" + "\n" + commonSelected + "\n" + "     UNCOMMON GEMS:" + "\n" + uncommonSelected + "\n" + "     RARE GEMS:" + "\n" + rareSelected + "\n" + "     VERY RARE GEMS:" + "\n" + veryrareSelected;
}
