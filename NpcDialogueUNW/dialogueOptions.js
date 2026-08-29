
//const $firstPara = "&nbsp;&nbsp;&nbsp;&nbsp;";
const $newPara = "<br>&nbsp;&nbsp;&nbsp;&nbsp;";

const dialogueOptions = {
    initial: {
        header: "What zone are you in?",
        options: [
            { id: "arezothZone", text: "Arezoth" },
            { id: "earthrimZone", text: "Earthrim" }
        ]
    },
//#region Arezoth
    arezothZone: {
        header: "You are in Arezoth. Where are you?",
        options: [
            { id: "locationSilvershire", text: "Silvershire" },
            { id: "locationGlintmere", text: "Glintmere" },
            { id: "locationBarleyshadeFields", text: "Barleyshade Fields" },
            { id: "locationThornrootPeak", text: "Thornroot Peak" },
            { id: "locationUnnamedTown", text: "Unnamed Town"},
        ]
    },
    //#region Silvershire
        locationSilvershire: {
            header: "You are in Silvershire. Which location are you in?",
            options: [
                { id: "gildedAcornInn", text: "The Gilded Acorn Inn" },
                { id: "silverleafMarket", text: "Silverleaf Market/Streets" },
                { id: "mayorsOffice", text: "Mayor’s Office / Silvershire Council House" },
                { id: "moonroseGuildhall", text: "The Moonrose Guildhall" },
                { id: "farrowfootsTrinketry", text: "Farrowfoot’s Trinketry" },
                { id: "briellasBloom", text: "Briella’s Bloom" },
                { id: "barracks", text: "Barracks" },
            ]
        },
            gildedAcornInn: {
                header: "You are in The Gilded Acorn Inn. Who are you talking to?",
                options: [
                    { id: "silvershireTownGuard", text: "Town Guard" },
                    { id: "silvershireHenricThistledown", text: "Henric Thistledown" },
                    { id: "silvershireOlmaThistledown", text: "Olma Thistledown" },
                    { id: "silvershireWendellPerlow", text: `Wendel "Winks" Perlow` },
                ]
            },
            silverleafMarket: {
                header: "You are in the Silverleaf Market/Streets. Who are you talking to?",
                options: [
                    { id: "silvershireTownGuard", text: "Town Guard" },
                    { id: "silvershireGreg", text: "Greg" },
                    { id: "silvershireCabbageMan", text: "Cabbage Man" },
                    { id: "silvershireErritMarwin", text: "Errit Marwin" },
                    // { id: "silvershireQuib", text: "Quib" },
                    { id: "silvershireRodger", text: "Rodger"},
                    { id: "silvershireTomaGreenthumb", text: "Toma Greenthumb" }, 
                    { id: "silvershireJerrekSilverTongier", text: "Jerrek the Silver-Tongue" },
                ]
            },
            mayorsOffice: {
                header: "You are in the Mayor’s Office / Silvershire Council House. Who are you talking to?",
                options: [
                    { id: "silvershireTownGuard", text: "Town Guard" },
                    { id: "silvershireMayorElricGraff", text: "Mayor Elric Graff" },
                    { id: "silvershireClaraDreel", text: "Clara Dreel" }
                    
                ]
            },
            moonroseGuildhall: {
                header: "You are in The Moonrose Guildhall. Who are you talking to?",
                options: [
                  { id: "silvershireTownGuard", text: "Town Guard" },
                  { id: "moonroseMavellaCopperstone", text: "Mavella Copperstone (Artificer)" },
                  { id: "moonroseOgrulFrostmantle", text: "Ogrul Frostmantle (Barbarian)" },
                  { id: "moonroseSeraphinaGoldsong", text: "Seraphina Goldsong (Bard)" },
                  { id: "moonroseVornakRedclaw", text: "Vornak Redclaw (Blood Hunter)" },
                  { id: "moonroseElindraDawnrose", text: "Elindra Dawnrose (Cleric)" },
                  { id: "moonroseKaelLeafwind", text: "Kael Leafwind (Druid)" },
                  { id: "moonroseThaliaSteelwind", text: "Thalia Steelwind (Fighter)" },
                  { id: "moonrosePakuSunblade", text: "Paku Sunblade (Monk)" },
                  { id: "moonroseIlaraStarborn", text: "Ilara Starborn (Paladin)" },
                  { id: "moonroseGalenShadowscout", text: "Galen Shadowscout (Ranger)" },
                  { id: "moonroseCassaraNightcloak", text: "Cassara Nightcloak (Rogue)" },
                  { id: "moonroseXyloFlameheart", text: "Xylo Flameheart (Sorcerer)" },
                  { id: "moonroseElythraDuskbinder", text: "Elythra Duskbinder (Warlock)" },
                  { id: "moonroseOrlanVoidseer", text: "Orlan Voidseer (Wizard)" }
                ]
              },
            farrowfootsTrinketry: {
                header: "You are in Farrowfoot’s Trinketry. Who are you talking to?",
                options: [
                    { id: "silvershireMillaPicklewick", text: "Milla Picklewick" },
                ]
            },
            briellasBloom: {
                header: "You are in Briella’s Bloom. Who are you talking to?",
                options: [
                    { id: "silvershireBriellaStormwhisper", text: "Briella Stormwhisper" }
                ]
            },
            barracks: {
                header: "You are in the Barracks. Who are you talking to?",
                options: [
                    { id: "silvershireTownGuard", text: "Town Guard" },
                    { id: "silvershireCaptainRennarVex", text: "Captain Rennar Vex" },
                ]
            },
            silvershireTownGuard: {
                title: "Town Guard",
                header: "How can I help you, adventurer?",
                options: [
                    { id: "silvershireTownguardDirections", text: "Can you give me directions?" },
                    { id: "silvershireTownguardTalk", text: "Just talking." },
                    { id: "goodbye", text: "Goodbye.", goBack: true }
                ]
            },
                
                silvershireTownguardDirections: {
                    title: "Town Guard",
                    header: "Of course. Where do you need to go?",
                    options: [
                        { id: "silvershireTownguardDirectionInn", text: "Where is the Gilded Acorn Inn?" },
                        { id: "silvershireTownguardDirectionBloom", text: "Where is Briella’s Bloom?" },
                        { id: "silvershireTownguardDirectionGuildhall", text: "Where is the Moonrose Guildhall?" },
                        { id: "silvershireTownguardDirectionCouncil", text: "Where is the Council Hall?" },
                        { id: "silvershireTownguardDirectionBarracks", text: "Where are the Barracks?" },
                        { id: "silvershireTownguardDirectionTrinketry", text: "Where is Farrowfort’s Trinketry?" },
                        { id: "silvershireTownGuard", text: "Back to main options" }
                    ]
                },
                    silvershireTownguardDirectionInn: {
                        header: "The Gilded Acorn Inn is just southeast of the town square. Big building, you can’t miss it.",
                        options: [{ id: "silvershireTownguardDirections", text: "More directions?", goBack: true }]
                    },
                    
                    silvershireTownguardDirectionBloom: {
                        header: "Briella’s Bloom is the round building just north of the town square—full of flowers and potion scents.",
                        options: [{ id: "silvershireTownguardDirections", text: "More directions?", goBack: true }]
                    },
                    
                    silvershireTownguardDirectionGuildhall: {
                        header: "Head southwest from the square and you’ll find the Moonrose Guildhall just before the outer road bends.",
                        options: [{ id: "silvershireTownguardDirections", text: "More directions?", goBack: true }]
                    },
                    
                    silvershireTownguardDirectionCouncil: {
                        header: "The Council Hall is the large building on the west side of the square. Lots of official types in there.",
                        options: [{ id: "silvershireTownguardDirections", text: "More directions?", goBack: true }]
                    },
                    
                    silvershireTownguardDirectionBarracks: {
                        header: "Barracks are northeast of the square. That’s where we muster—and where we sleep when lucky.",
                        options: [{ id: "silvershireTownguardDirections", text: "More directions?", goBack: true }]
                    },
                    
                    silvershireTownguardDirectionTrinketry: {
                        header: "Farrowfort’s Trinketry is tucked between the Council Hall and Briella’s Bloom. Odd smells. Odder man.",
                        options: [{ id: "silvershireTownguardDirections", text: "More directions?", goBack: true }]
                    },
                
            // townguardTalk: {
            //     title: "Town Guard",
            //     header: randomTownGuardLine(),
            //     options: [
            //         { id: "townguardTalk", text: "Say something else." },
            //         { id: "silvershireTownGuard", text: "Back to main options" }
            //     ]
            // },
            
            // // This function returns one random flavor line from the guard
            // function randomTownGuardLine() {
            //     const lines = [
            //         "Not every day you see heroes pass through. Just don’t cause trouble.",
            //         "Had to break up a bar brawl last night. Gnome versus halfling—tables lost.",
            //         "Watch out for pickpockets near the flower stand. They're sneaky.",
            //         "Quiet day today. Makes me nervous, honestly.",
            //         "If you're heading to the woods, watch your step. Wolves are restless lately.",
            //         "Council’s been tense lately. Something’s brewing, but they won’t say what."
            //     ];
            //     return lines[Math.floor(Math.random() * lines.length)];
            // },


                // silvershireTownGuard: {
                //     title: "Town Guard",
                //     header: "How can I help you, adventurer?",
                //     options: [
                //         { id: "silvershireTownguardDirectionInn", text: "Where is the inn?" },
                //         { id: "silvershireTownguardGoodbye", text: "Goodbye.", goBack: true }
                //     ]
                // },
                //     silvershireTownguardDirectionInn: {
                //         header: "The inn is to the left of the town square.",
                //         options: [
                //             { id: "silvershireTownguardDirectionInn_Annswer", text: "I have another question?", goBack: true },
                //         ]
                //     },
                silvershireGreg: {
                    title: "Greg",
                    header: `"Ah! Hello Adventurer! Welcome to the town of Silvershire. Now your next task for the King begins.",
                    ` + $newPara + `“The people of Silvershire are in need and if you help them with their quests they will give you an Arezoth Quest Completion Token. Bring me three of these tokens and your quest here will be completed.”`,
                    options: [
                        { id: "gregQuestStart", text: "Accept Quest" },
                        { id: "goodbye", text: "Goodbye.", goBack: true } 
                    ]
                },
                    gregQuestStart: {
                        title: "Greg",
                        header: `“Thank you! Now go out there and help the people of Silvershire. I will be waiting here for you.”`,
                        options: [
                            { id: "gregQuestCompleted", text: "Quest Completed?" }
                        ]
                    },
                    gregQuestCompleted: {
                        title: "Greg",
                        header: `“You did it! You have helped the people of Silvershire and brought me three Arezoth Quest Completion Tokens. Here's your reward for your efforts.”
                        ` + $newPara + `Greg hands you # gp and # xp.
                        ` + $newPara + `“Now, if you haven't already you'll need to head next to WhiteRock in Earthrim, but if you wish to continue staying in Arezoth you are welcome to. After all, you are adventurers and adventure remains in this land.”`,
                        options: [
                            { id: "goodbye", text: "Goodbye", goBack: true }
                        ]
                    },
                silvershireCabbageMan: {
                    title: "Cabbage Man",
                    header: `A wiry, middle-aged man with a receding hairline and a constantly panicked look, tends to his wobbly wooden cart overflowing with cabbages. He wears earth-toned clothes, a crooked straw hat, and looks like he hasn’t had a good day in years. His eyes are sharp, his movements twitchy—forever bracing for the next cabbage-related disaster. He sweeps his hands dramatically over the produce as you approach.
                            ` + $newPara + `“Hello! Would you like to buy some cabbages?”`,
                    options: [
                        { 
                            id: "cabbageManShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Cabbage Man's Shop",
                                items: [
                                    { name: "Cabbage (Single)", price: 2 },
                                    { name: "Cabbage Bundle (5)", price: 8 },
                                    { name: "Cabbage Crate (20)", price: 30 },
                                    { name: "Red Cabbage", price: 3 },
                                    { name: "Green Cabbage", price: 2 },
                                    { name: "Cabbage Seeds (Pack)", price: 5 },
                                    { name: "Fermented Cabbage Jar", price: 10 },
                                    { name: "Cabbage Soup (Bowl)", price: 3 },
                                    { name: "Cabbage Stew (Hearty)", price: 10 },
                                    { name: "Damaged Cabbage (Discount)", price: 1 }
                                ]
                            }
                        },
                        { id: "cabbageManQuest", text: `Quest?` },
                        { id: "goodbye", text: "Goodbye.", goBack: true } 
                    ]
                },
                    cabbageManQuest: {
                        title: "Cabbage Man",
                        header: `“Ah! Please adventurers! You must help me! My fine cabbages, my friends, are unlike any you've ever seen before. They're fresh, organic, and guaranteed to change your life!”
                                ` + $newPara + `He looks around nervously and leans in closer, as if afraid someone might overhear.
                                ` + $newPara + `“There’s just one problem. Lately, a group of ruffians keeps stealing or destroying my cabbages! I have no idea why, but my business can’t stand it anymore. Please, I beg of you—keep them away from my cart! I can’t afford to lose any more of my precious cabbages! You must protect it with your lives! Well, at least... until I finish selling them.”
                                ` + $newPara + `His eyes gleam with desperate hope. "I’m going to take my cart to the market and try to get as many sales as I can while my cart is intact. I will need you to hold off anyone who tries to destroy my cart or steal my cabbages. Will you help me?"`,
                        options: [
                            { id: "cabbageManAccepted", text: `Accept Quest?` },
                            { id: "cabbageManDeclined", text: `Decline Quest?` }
                        ]
                    },
                        cabbageManAccepted: {
                            title: "Cabbage Man",
                            header: `“Oh thank you, thank you! You won’t regret this! Keep your eyes peeled and your weapons ready—these cabbage bandits are sneaky and relentless. I’ll start shouting about my cabbages to lure in customers—and hopefully not trouble.”`,
                            options: [
                                { id: "cabbageManQuestCompleted", text: "Quest Completed?" },
                                { id: "cabbageManQuestFailed", text: "Quest Failed?" }
                            ]
                        },
                        cabbageManDeclined: {
                            title: "Cabbage Man",
                            header: `The man's hopeful expression collapses like a wilted leaf. “Oh... well. I understand. Cabbages are a dangerous business. I’ll find someone else... I have to.”`,
                            options: [
                                { id: "goodbye", text: "Goodbye", goBack: true }
                            ]
                        },
                            cabbageManQuestCompleted: {
                                header: `Cabbage Man grins with the glee of someone who has narrowly avoided disaster. His eyes sparkle as he looks over the cabbages, untouched and in perfect condition.
                                    ` + $newPara + `“You did it! My cabbages are safe! You’re my heroes, my saviors! I... I can't believe it! This is the best day of my life! You've protected my legacy! My cabbages will thrive in this town, thanks to you!”
                                    ` + $newPara + `He quickly rummages through his cart and pulls out a small, wrapped bundle. “Take this, my friends! A token of my eternal gratitude. You’ve earned it, and so much more!”
                                    ` + $newPara + `Cabbage Man hands you 20 gp, 400 xp, and one Arezoth Quest Completion Token.
                                    ` + $newPara + `“No one will ever steal my cabbages again, I promise you that! Now, if you'll excuse me, I must go... tend to my cabbages. They’re my true love.”`,
                            },
                            cabbageManQuestFailed: {
                                header: `Cabbage Man falls to his knees in despair. “MY CABBAGES!!!” He slumps down beside the cart, looking utterly defeated as his tears flow endlessly down his cheers and saturating the soil beneath his feet.`,
                            },
                silvershireErritMarwin: {
                    title: "Errit Marwin",
                    header: `An illusionary flickering mirror image of a gnome Halfling man dressed in a dirted white robe with yellow front capes over his scale armor with a mace and shield sheathed.
                        ` + $newPara + `“Adventurer! Quick! I haven’t much time. I’m Errit Marwin. I’m a cleric in need of aid. There is a spellbook that was taken from me by the orcs to the northwest. I would retrieve it myself so I sent my mirror image in my place, but as you can see. My magic is fading right now and I can’t go any further. If you could retrieve my spellbook from the orcs and bring it to my residence, I will reward you.”`,
                    options: [
                        { id: "TheClericsSpellbookAccept", text: "Accept Quest?" },
                        { id: "TheClericsSpellbookDecline", text: "Decline Quest?" },
                        { id: "goodbye", text: "Goodbye.", goBack: true } 
                    ]
                },
                    TheClericsSpellbookAccept: {
                        title: "Errit Marwin",
                        header: `“Thank you! Now quickly go and-” The image of Errit fades away...`,
                        options: [
                            { id: "TheClericsSpellbookQuestCompleted", text: "Quest Completed?" }
                        ]
                    },
                    TheClericsSpellbookDecline: {
                        title: "Errit Marwin",
                        header: `“Please! I need your help! I can’t do this alone!”`,
                        options: [
                            { id: "TheClericsSpellbookAccept", text: "Reconsider Quest?" },
                            { id: "goodbye", text: "Goodbye", goBack: true }
                        ]
                    },
                        TheClericsSpellbookQuestCompleted: {
                            title: "Errit Marwin",
                            header: `Inside his tower, another spectral image of the gnome cleric stands before you, looking relieved and grateful.
                                ` + $newPara + `“Thank you adventurers for retrieving my spellbook! I unfortunately am caught between duties again, but if you could travel south to Glintmere and deliver it to me in person at my residence in the Moonfen Spire, I will add onto your reward from today.”
                                ` + $newPara + `The specter of Errit Marwin hands you 10 gp and 200 xp.`,
                                options: [
                                    { id: "theHolyDeliveryAccept", text: "Quest Accept?" },
                                    { id: "theHolyDeliveryDecline", text: "Quest Decline?" }
                                ]
                        },
                // silvershireQuib: {
                //     title: "Quib",
                //     header: `A short, wiry man with tousled red hair and sharp, alert eyes that miss nothing. His skin is sun-touched and freckled, and he wears a patchy leather coat that hangs a bit too big on his frame. His hands are quick and stained with ink and oil, always fidgeting with something small and strange.
                //         ` + $newPara + `“Adventurers! I need your aid! Orcs are encamped to the northwest and they’ve been terrorizing Silvershire and all travelers on the road. If you can thin their ranks and take out their chieftain, I will reward you greatly!”`,
                //     options: [
                //         { id: "thinTheOrcsDownAccepted", text: "Accept Quest" },
                //         { id: "goodbye", text: "Goodbye.", goBack: true } 
                //     ]
                // },
                //     thinTheOrcsDownAccepted: {
                //         title: "Quib",
                //         header: `“Thank you, adventurer! I knew you would be the right person for the job. Come see me when it's done!"`,
                //         options: [
                //             { id: "thinTheOrcsDownQuestCompleted", text: "Quest Completed?" }
                //         ]
                //     },
                silvershireRodger:{
                    title: "Rodger",
                    header: `A stocky, broad-shouldered man with muscular arms and a tan, weathered face from years of working at the forge. His hair is a messy mop of black and gray, and a short, scruffy beard covers his chin. Rodger's attire consists of a heavy leather apron over a simple tunic, blackened from soot and oil. His hands are calloused, with smudges of coal still visible under his nails.
                        ` + $newPara + `“Hello, adventurer! What can I do for ya?”`,
                    options: [
                        { 
                            id: "rodgerShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Rodger's Shop",
                                items: [
                                    { name: "Club", price: 10 },
                                    { name: "Dagger", price: 200 },
                                    { name: "Greatclub", price: 20 },
                                    { name: "Handaxe", price: 500 },
                                    { name: "Javelin", price: 50 },
                                    { name: "Light Hammer", price: 200 },
                                    { name: "Mace", price: 500 },
                                    { name: "Quarterstaff", price: 20 },
                                    { name: "Sickle", price: 100 },
                                    { name: "Spear", price: 100 },
                                    { name: "Light Crossbow", price: 2500 },
                                    { name: "Dart", price: 6 },
                                    { name: "Shortbow", price: 2500 },
                                    { name: "Sling", price: 10 },
                                    { name: "Battleaxe", price: 1000 },
                                    { name: "Flail", price: 1000 },
                                    { name: "Glaive", price: 2000 },
                                    { name: "Greataxe", price: 3000 },
                                    { name: "Greatsword", price: 5000 },
                                    { name: "Halberd", price: 2000 },
                                    { name: "Lance", price: 1000 },
                                    { name: "Longsword", price: 1500 },
                                    { name: "Maul", price: 1000 },
                                    { name: "Morningstar", price: 1500 },
                                    { name: "Pike", price: 500 },
                                    { name: "Rapier", price: 2500 },
                                    { name: "Scimitar", price: 2500 },
                                    { name: "Shortsword", price: 1000 },
                                    { name: "Trident", price: 500 },
                                    { name: "War Pick", price: 500 },
                                    { name: "Warhammer", price: 1500 },
                                    { name: "Whip", price: 200 },
                                    { name: "Padded Armor", price: 500 },
                                    { name: "Leather Armor", price: 1000 },
                                    { name: "Studded Leather Armor", price: 4500 },
                                    { name: "Hide Armor", price: 1000 },
                                    { name: "Chain Shirt", price: 5000 },
                                    { name: "Scale Mail", price: 5000 },
                                    { name: "Breastplate", price: 40000 },
                                    { name: "Half Plate", price: 75000 },
                                    { name: "Ring Mail", price: 3000 },
                                    { name: "Chain Mail", price: 7500 },
                                    { name: "Splint Armor", price: 20000 },
                                    { name: "Plate Armor", price: 150000 },
                                    { name: "Shield", price: 1000 },
                                    { name: "Arrows (20)", price: 100 },
                                    { name: "Bolts (20)", price: 100 },
                                    { name: "Sling Bullets (20)", price: 4 },
                                    { name: "Blowgun Needles (50)", price: 100 }
                                ]
                            }
                        },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                silvershireTomaGreenthumb: {
                    title: "Toma Greenthumb",
                    header: `A cheerful halfling with dirt-stained hands and a wide-brimmed hat greets you warmly.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"Hello there, adventurer! Looking for some fresh produce or maybe some gardening tips?"`,
                    options: [
                        { 
                            id: "tomaShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Toma Greenthumb's Shop",
                                items: [
                                    { name: "Club", price: 5 },
                                    { name: "Greatclub", price: 10 },
                                    { name: "Light Crossbow", price: 1400 },
                                    { name: "Dart", price: 2 },
                                    { name: "Shortbow", price: 1200 },
                                    { name: "Sling", price: 5 },
                                    { name: "Blowgun", price: 500 },
                                    { name: "Hand Crossbow", price: 3700 },
                                    { name: "Heavy Crossbow", price: 2500 },
                                    { name: "Longbow", price: 2500 },
                                    { name: "Abacus", price: 100 },
                                    { name: "Arrows (20)", price: 100 },
                                    { name: "Blowgun Needles (50)", price: 100 },
                                    { name: "Crossbow Bolts (20)", price: 100 },
                                    { name: "Bow String", price: 5 },
                                    { name: "Bucket", price: 2 },
                                    { name: "Case (Crossbow Bolt)", price: 250 },
                                    { name: "Case (Map or Scroll)", price: 1 },
                                    { name: "Druidic Focus (Totem)", price: 50 },
                                    { name: "Druidic Focus (Wooden Staff)", price: 250 },
                                    { name: "Druidic Focus (Yew Wand)", price: 500 },
                                    { name: "Flask or Tankard", price: 1 },
                                    { name: "Ladder (10 ft)", price: 5 },
                                    { name: "Pole (10 ft)", price: 2 },
                                    { name: "Torch", price: 1 },
                                    { name: "Woodcarver's Tools", price: 100 },
                                    { name: "Dulcimer", price: 1200 },
                                    { name: "Flute", price: 100 },
                                    { name: "Lute", price: 1700 },
                                    { name: "Lyre", price: 1500 },
                                    { name: "Pan Flute", price: 600 },
                                    { name: "Shawm", price: 10 },
                                    { name: "Viol", price: 150 },
                                ]
                            }
                        },
                        // { id: "tomaQuest", text: "Do you have any tasks for me?" },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                silvershireJerrekSilverTongier: {
                    title: "Jerrek the Silver-Tongue",
                    header: `A slick-looking man with a charming smile and a silver-tipped cane approaches you.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"Ah, a fellow connoisseur of fine goods! What can I do for you today?"`,
                    options: [
                        { 
                            id: "jerrekShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Jerrek's Shop",
                                items: [
                                    { name: "Backpack", price: 200 },
                                    { name: "Bedroll", price: 100 },
                                    { name: "Blanket", price: 50 },
                                    { name: "Bottle (Glass)", price: 200 },
                                    { name: "Bucket", price: 5 },
                                    { name: "Candle", price: 1 },
                                    { name: "Chain (10 ft)", price: 500 },
                                    { name: "Chest", price: 500 },
                                    { name: "Crowbar", price: 200 },
                                    { name: "Fishing Tackle", price: 100 },
                                    { name: "Flask", price: 2 },
                                    { name: "Grappling Hook", price: 200 },
                                    { name: "Hammer", price: 100 },
                                    { name: "Healer's Kit", price: 500 },
                                    { name: "Lantern (Hooded)", price: 500 },
                                    { name: "Mess Kit", price: 20 },
                                    { name: "Oil (Flask)", price: 10 },
                                    { name: "Rope (Hempen, 50 ft)", price: 100 },
                                    { name: "Sack", price: 1 },
                                    { name: "Shovel", price: 200 },
                                    { name: "Torch", price: 1 },
                                    { name: "Waterskin", price: 20 }
                                ]
                            }
                        },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                silvershireMayorElricGraff: {
                    title: "Mayor Elric Graff",
                    header: `"If one more chicken-related dispute crosses my desk, I swear to Lathander…"`,
                    options: [
                        { id: "goodbye", text: "Goodbye", goBack: true },
                    ]
                },
                silvershireClaraDreel: {
                    title: "Clara Dreel",
                    header: `A half-orc woman stands next to Mayor Elric Graff, towering, broad-shouldered, and with sleek black hair in a tight bun. She wears practical leathers and carries an intimidating clipboard.
                        ` + $newPara + `“Appointments only. Unless you're bleeding. Or on fire.”`,
                    options: [
                        { id: "silvershireClaraDreelTalk", text: "I wish to speak to the Mayor." }
                    ]
                },
                    silvershireClaraDreelTalk: {
                        title: "Clara Dreel",
                        header: `“No, Mayor Graff can’t talk right now. He’s currently under a pile of his own incompetence.”`,
                        options: [
                            { id: "goodbye", text: "Goodbye", goBack: true }
                        ]
                    },
                // #region Class Trainers
                moonroseMavellaCopperstone: {
                    title: "Mavella Copperstone",
                    header: "Dwarf, Female — Short with tan skin and a braided red beard. She wears sturdy leather work gloves, a tool belt, and heavy goggles perched atop her head." + $newPara + "Class Trainer: Artificer",
                    options: [
                        { id: "mavellaLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true }                        
                    ]
                    },
                    mavellaLearn: {
                    title: "Mavella Copperstone - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseOgrulFrostmantle: {
                    title: "Ogrul Frostmantle",
                    header: "Goliath, Male — Muscular with pale blue skin and frosty white hair. He wears fur-lined armor made from mammoth pelts, and his weapon of choice is a massive battleaxe." + $newPara + "Class Trainer: Barbarian",
                    options: [
                        
                        { id: "ogrulLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    ogrulLearn: {
                    title: "Ogrul Frostmantle - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseSeraphinaGoldsong: {
                    title: "Seraphina Goldsong",
                    header: "Tiefling, Female — Fiery orange skin with gold-tipped horns, her violet eyes always sparkling with mischief. She wears a rich red dress with golden accents and carries a golden lyre." + $newPara + "Class Trainer: Bard",
                    options: [
                        
                        { id: "seraphinaLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    seraphinaLearn: {
                    title: "Seraphina Goldsong - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseVornakRedclaw: {
                    title: "Vornak Redclaw",
                    header: "Half-Orc, Male — Broad and intimidating with greenish-grey skin, a jagged scar across his face. He wears dark armor with crimson stripes and carries a blood-stained longsword." + $newPara + "Class Trainer: Blood Hunter",
                    options: [
                        
                        { id: "vornakLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    vornakLearn: {
                    title: "Vornak Redclaw - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseElindraDawnrose: {
                    title: "Elindra Dawnrose",
                    header: "Elf (High), Female — Stocky with dark brown hair in a braid, and a heavy, rune-inscribed hammer at her side. She wears chainmail armor with holy symbols engraved on her chest." + $newPara + "Class Trainer: Cleric",
                    options: [
                        
                        { id: "elindraLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    elindraLearn: {
                    title: "Elindra Dawnrose - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseKaelLeafwind: {
                    title: "Kael Leafwind",
                    header: "Firbolg, Male — Large, with green skin and a beard made of moss. He wears simple robes and carries a wooden staff shaped like a twisting vine." + $newPara + "Class Trainer: Druid",
                    options: [
                        
                        { id: "kaelLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    kaelLearn: {
                    title: "Kael Leafwind - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseThaliaSteelwind: {
                    title: "Thalia Steelwind",
                    header: "Human, Female — Strong with short-cropped brown hair and piercing green eyes. She wears dark plate armor with a red emblem across her chest, and carries a long spear." + $newPara + "Class Trainer: Fighter",
                    options: [
                        
                        { id: "thaliaLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    thaliaLearn: {
                    title: "Thalia Steelwind - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonrosePakuSunblade: {
                    title: "Paku Sunblade",
                    header: "Aarakocra, Male — Feathered with bright orange plumage, sharp black eyes, and a stoic expression. He wears simple robes and is often barefoot, with a small satchel of herbs." + $newPara + "Class Trainer: Monk",
                    options: [
                        
                        { id: "pakuLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    pakuLearn: {
                    title: "Paku Sunblade - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseIlaraStarborn: {
                    title: "Ilara Starborn",
                    header: "Aasimar (Protector), Female — Radiant with gold-tinted skin and silver hair. She wears shining plate armor and carries a sword that glows with celestial light." + $newPara + "Class Trainer: Paladin",
                    options: [
                        
                        { id: "ilaraLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    ilaraLearn: {
                    title: "Ilara Starborn - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseGalenShadowscout: {
                    title: "Galen Shadowscout",
                    header: "Tiefling, Male — Lean, with deep red skin and short white hair. He wears studded leather armor and a black cloak, always carrying a longbow and a set of throwing knives." + $newPara + "Class Trainer: Ranger",
                    options: [
                        
                        { id: "galenLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    galenLearn: {
                    title: "Galen Shadowscout - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseCassaraNightcloak: {
                    title: "Cassara Nightcloak",
                    header: "Elf (Dark), Female — Pale with dark silver hair, black eyes always calculating. She wears black leather armor and a hooded cloak, with throwing daggers hidden on her person." + $newPara + "Class Trainer: Rogue",
                    options: [
                        
                        { id: "cassaraLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    cassaraLearn: {
                    title: "Cassara Nightcloak - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseXyloFlameheart: {
                    title: "Xylo Flameheart",
                    header: "Dragonborn (Gold), Male — Golden scales and a fierce gaze, with amber eyes that glow when casting magic. He wears rich red and gold robes and a jeweled staff that crackles with energy." + $newPara + "Class Trainer: Sorcerer",
                    options: [
                        
                        { id: "xyloLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    xyloLearn: {
                    title: "Xylo Flameheart - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseElythraDuskbinder: {
                    title: "Elythra Duskbinder",
                    header: "Tiefling, Female — Dark purple skin with sharp red eyes, her horns curving forward. She wears a dark hooded cloak and her hands are adorned with arcane rings." + $newPara + "Class Trainer: Warlock",
                    options: [
                        
                        { id: "elythraLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    elythraLearn: {
                    title: "Elythra Duskbinder - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                    
                    moonroseOrlanVoidseer: {
                    title: "Orlan Voidseer",
                    header: "Half-Elf, Male — Lean with silvery-white hair and deep purple robes. His eyes seem to peer into the unknown, and he carries a staff topped with a large black crystal." + $newPara + "Class Trainer: Wizard",
                    options: [
                        
                        { id: "orlanLearn", text: "I wish to learn." },
                        { id: "goodbye", text: "Goodbye.", goBack: true },
                    ]
                    },
                    orlanLearn: {
                    title: "Orlan Voidseer - Training",
                    header: "Here's what I have to offer to you right now.",
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                    },
                //#endregion
                silvershireHenricThistledown: {
                    title: "Henric Thistledown",
                    header: `Henric is a tall and lanky human man, balding with a long mustache and a cane he doesn’t need.
                        ` + $newPara + `Welcome adventurer! What can I get you?`,
                    options: [
                        { 
                            id: "henricFoodShop", 
                            text: "I would like food.", 
                            openStore: true,
                            storeData: {
                                title: "Henric's Food Menu",
                                items: [
                                    { name: "Crisped Worm and Potatoes", price: 3 },
                                    { name: "Frogs on Skewers", price: 3 },
                                    { name: "Green Chili Stew", price: 3 },
                                    { name: "Grilled Snake and Macadamia", price: 3 },
                                    { name: "Humble Pie", price: 3 },
                                    { name: "Lizard Gruel with Nutbread", price: 3 },
                                    { name: "Barbecued Gopher Legs", price: 6 },
                                    { name: "Bog-beetle Dumplings", price: 6 },
                                    { name: "Bread-bowl Stew", price: 6 },
                                    { name: "Leg of Mutton and Goose Eggs", price: 6 },
                                    { name: "Mushroom Stew with Bread", price: 6 },
                                    { name: "Rabbit and Baked Pumpkin", price: 6 },
                                    { name: "Squash and Fish Soup", price: 6 },
                                    { name: "Broiled Salmon and Potatoes", price: 30 },
                                    { name: "Cheese Pie and Onion Soup", price: 30 },
                                    { name: "Grilled Wild Boar Chops", price: 30 },
                                    { name: "Rabbit Stew and Crackers", price: 30 },
                                    { name: "Roast Chicken and Potatoes", price: 30 },
                                    { name: "Baked Loin of Pork with Gravy", price: 80 },
                                    { name: "Beef Steak and Kidney Pie", price: 80 }
                                ]
                            }
                        },
                        { 
                            id: "henricDrink", 
                            text: "I would like a drink.", 
                            openStore: true,
                            storeData: {
                                title: "Henric's Drink Menu",
                                items: [
                                    { name: "Goblin Spit Ale", price: 2 },
                                    { name: "Grog", price: 2 },
                                    { name: "Turnip Wine", price: 2 },
                                    { name: "Dwarven Ale", price: 40 },
                                    { name: "King's Ale", price: 40 },
                                    { name: "Spiced Ale", price: 40 },
                                    { name: "Trollbane Ale", price: 40 },
                                    { name: "Desert Star Wine", price: 20 },
                                    { name: "Wight Wine", price: 20 },
                                    { name: "Fey Wine", price: 1000 },
                                    { name: "Bacon Beer", price: 20 },
                                    { name: "Berry Brandy", price: 200 },
                                    { name: "Cactus Spirits", price: 40 },
                                    { name: "Honeysuckle Mead", price: 200 }
                                ]
                            }
                        },
                        { 
                            id: "henricRoomShop", 
                            text: "I'd like to purchase a room for the day.", 
                            openStore: true,
                            storeData: {
                                title: "Henric's Lodging Options",
                                items: [
                                    { name: "Inn Stay - Squalid", price: 7 },
                                    { name: "Inn Stay - Poor", price: 10 },
                                    { name: "Inn Stay - Modest", price: 50 },
                                    { name: "Inn Stay - Comfortable", price: 80 }
                                ]
                            }
                        },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                silvershireOlmaThistledown: {
                    title: "Olma Thistledown",
                    header: `Olma is a short and round human woman with silvery hair tied in a neat bun and warm brown eyes. She wears a simple dress with an apron, and her hands are often stained with flour or herbs. She has a kind smile and a gentle demeanor.
                        ` + $newPara + `"Welcome to the Gilded Acorn, darlings. Pine pillows, enchanted linens, and absolutely no assassins. Anymore."`,
                    options: [
                        { 
                            id: "olmaFoodShop", 
                            text: "I would like food.", 
                            openStore: true,
                            storeData: {
                                title: "Olma's Food Menu",
                                items: [
                                    { name: "Crisped Worm and Potatoes", price: 3 },
                                    { name: "Frogs on Skewers", price: 3 },
                                    { name: "Green Chili Stew", price: 3 },
                                    { name: "Grilled Snake and Macadamia", price: 3 },
                                    { name: "Humble Pie", price: 3 },
                                    { name: "Lizard Gruel with Nutbread", price: 3 },
                                    { name: "Barbecued Gopher Legs", price: 6 },
                                    { name: "Bog-beetle Dumplings", price: 6 },
                                    { name: "Bread-bowl Stew", price: 6 },
                                    { name: "Leg of Mutton and Goose Eggs", price: 6 },
                                    { name: "Mushroom Stew with Bread", price: 6 },
                                    { name: "Rabbit and Baked Pumpkin", price: 6 },
                                    { name: "Squash and Fish Soup", price: 6 },
                                    { name: "Broiled Salmon and Potatoes", price: 30 },
                                    { name: "Cheese Pie and Onion Soup", price: 30 },
                                    { name: "Grilled Wild Boar Chops", price: 30 },
                                    { name: "Rabbit Stew and Crackers", price: 30 },
                                    { name: "Roast Chicken and Potatoes", price: 30 },
                                    { name: "Baked Loin of Pork with Gravy", price: 80 },
                                    { name: "Beef Steak and Kidney Pie", price: 80 }
                                ]
                            }
                        },
                        { 
                            id: "olmaDrink", 
                            text: "I would like a drink.", 
                            openStore: true,
                            storeData: {
                                title: "Olma's Drink Menu",
                                items: [
                                    { name: "Goblin Spit Ale", price: 2 },
                                    { name: "Grog", price: 2 },
                                    { name: "Turnip Wine", price: 2 },
                                    { name: "Dwarven Ale", price: 40 },
                                    { name: "King's Ale", price: 40 },
                                    { name: "Spiced Ale", price: 40 },
                                    { name: "Trollbane Ale", price: 40 },
                                    { name: "Desert Star Wine", price: 20 },
                                    { name: "Wight Wine", price: 20 },
                                    { name: "Fey Wine", price: 1000 },
                                    { name: "Bacon Beer", price: 20 },
                                    { name: "Berry Brandy", price: 200 },
                                    { name: "Cactus Spirits", price: 40 },
                                    { name: "Honeysuckle Mead", price: 200 }
                                ]
                            }
                        },
                        { 
                            id: "olmaRoomShop", 
                            text: "I'd like to purchase a room for the day.", 
                            openStore: true,
                            storeData: {
                                title: "Olma's Lodging Options",
                                items: [
                                    { name: "Inn Stay - Squalid", price: 7 },
                                    { name: "Inn Stay - Poor", price: 10 },
                                    { name: "Inn Stay - Modest", price: 50 },
                                    { name: "Inn Stay - Comfortable", price: 80 }
                                ]
                            }
                        },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },                
                silvershireWendellPerlow: {
                    title: `Wendel "Winks" Perlow`,
                    header: `A weathered human man with a ragged gray beard, mismatched eyes, and a long coat with hidden flask pockets.
                    ` + $newPara + `“You ever kill a hydra with a bar stool? I have. Didn’t work, but it was dramatic.”`,
                    options: [
                        { id: "winksTalk", text: "Converse" },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                    winksTalk: {
                        title: `Wendel "Winks" Perlow`,
                        header: `“Don’t trust cats. They know things. Too many things.”`,
                        options: [
                            { id: "goodbye", text: "Goodbye", goBack: true }
                        ]
                    },

                silvershireBriellaStormwhisper: {
                    title: "Briella Stormwhisper",
                    header: `Briella appears calm and composed as she picks through her herbs, humming a soft melody. When you approach, she looks up with a warm but concerned smile.
                        ` + $newPara + `“Ah, I’ve been waiting for someone like you. There is something wrong in the air here. The plants in Silvershire, once so vibrant and full of life, are beginning to wither for no apparent reason. I fear that something unnatural is at work.”
                        ` + $newPara + `She holds up a small vial filled with clear liquid. 
                        ` + $newPara + `“I’ve created a remedy to attempt to heal the plants, but last time the plants lashed out and hurt me. I need you to apply the remedy to the plants and report back what happens. Can you help me?”`,
                    options: [
                        { 
                            id: "briellaShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Briella Stormwhisper's Shop",
                                items: [
                                    { name: "Acid (Vial)", price: 1200 },
                                    { name: "Alchemist's Fire (Flask)", price: 2500 },
                                    { name: "Antitoxin", price: 1200 },
                                    { name: "Bottle (Glass)", price: 100 },
                                    { name: "Candle", price: 50 },
                                    { name: "Component Pouch", price: 1200 },
                                    { name: "Flask", price: 1 },
                                    { name: "Healer's Kit", price: 250 },
                                    { name: "Ink (1 oz)", price: 500 },
                                    { name: "Ink Pen", price: 1 },
                                    { name: "Jug", price: 1 },
                                    { name: "Oil (Flask)", price: 5 },
                                    { name: "Perfume (Vial)", price: 250 },
                                    { name: "Poison (Basic Vial)", price: 500 },
                                    { name: "Oil Flask", price: 5 },
                                    { name: "Perfume Vial", price: 250 },
                                    { name: "Basic Poison", price: 5000 },
                                    { name: "Vial", price: 50 },
                                    { name: "Alchemist's Supplies", price: 2500 },
                                    { name: "Brewer's Supplies", price: 1000 },
                                    { name: "Glassblower's Tools", price: 1500 },
                                    { name: "Poisoner's Kit", price: 2500 },
                                    { name: "Herbalism Kit", price: 250 },
                                    { name: "Spell Components", price: 250 },
                                    { name: "Potion of Healing", price: 2500 },
                                    { name: "Philter of Love", price: 4500 },
                                    { name: "Potion of Poison", price: 5000 },
                                    { name: "Elixir of Health", price: 6000 },
                                    { name: "Potion of Fire Breath", price: 7500 },
                                    { name: "Potion of Greater Healing", price: 7500 },
                                    { name: "Potion of Climbing", price: 9000 },
                                    { name: "Potion of Heroism", price: 9000 },
                                    { name: "Potion of Invisibility", price: 9000 },
                                    { name: "Potion of Mind Reading", price: 9000 },
                                    { name: "Potion of Water Breathing", price: 9000 },
                                    { name: "Potion of Animal Friendship", price: 10000 },
                                    { name: "Potion of Diminution", price: 13500 },
                                    { name: "Potion of Growth", price: 13500 },
                                    { name: "Potion of Gaseous Form", price: 15000 },
                                    { name: "Potion of Resistance", price: 15000 },
                                    { name: "Potion of Speed", price: 20000 },
                                    { name: "Potion of Superior Healing", price: 22500 },
                                    { name: "Potion of Flying", price: 25000 },
                                    { name: "Potion of Clairvoyance", price: 48000 },
                                    { name: "Potion of Vitality", price: 48000 },
                                    { name: "Potion of Supreme Healing", price: 67500 },
                                    { name: "Potion of Invulnerability", price: 192000 }
                                ]
                            }
                        },
                        { id: "fadedPetalsAccepted", text: `Accept Quest?` },
                        { id: "fadedPetalsDeclined", text: `Decline Quest?` }
                    ]
                },
                    fadedPetalsAccepted: {
                        title: "Briella Stormwhisper",
                        header: `“Thank you! I knew you would be the right person for the job. Please, take this remedy and apply it to the plants in the area. I’ll be waiting here for your return.”`,
                        options: [
                            { id: "fadedPetalsQuestCompleted", text: `Quest Completed?` }
                        ]
                    },
                    fadedPetalsDeclined: {
                        title: "Briella Stormwhisper",
                        header: `“Oh, I see. Well, if you change your mind, I’ll be here.”`,
                        options: [
                            { id: "goodbye", text: `Goodbye`, goBack: true }
                        ]
                    },
                        fadedPetalsQuestCompleted: {
                            title: "Briella Stormwhisper",
                            header: `Briella reviews the results of your efforts and ponders a moment. 
                                ` + $newPara + `“How strange. The purple glow would indicate that the plants are being magically tempered with. I’ll need to cast a ritual to figure out the source of this magic.” Briella goes to her alchemist table and performs some magic upon it. After a few moments, Briella comes back to you and a quest marker appears over her head.`,
                            options: [
                                { id: "thePlantKillerStart", text: `Next Quest.` }
                            ]
                        },
                            thePlantKillerStart: {
                                title: "Briella Stormwhisper",
                                header: `“There is a bad omen coming from somewhere nearby. I remember the old ruins south of Silvershire that was once a watch tower for a terrible wizard. It must have some cursed object still active. If you can go to those ruins and search them for dark artifacts. If you find them, please destroy them.`,
                                options: [
                                    { id: "thePlantKillerAccepted", text: `Accept Quest?` },
                                    { id: "thePlantKillerDeclined", text: `Decline Quest?` }
                                ]
                            },
                                thePlantKillerAccepted: {
                                    title: "Briella Stormwhisper",
                                    header: `“Thank you. Please be careful. I fear that the dark magic may have a mind of its own. If you find anything, please bring it back to me.”`,
                                    options: [
                                        { id: "thePlantKillerQuestCompleted", text: `Quest Completed?` }    
                                    ]
                                },
                                    thePlantKillerQuestCompleted: {
                                        title: "Briella Stormwhisper",
                                        header: `Briella smiles softly as you return, a look of relief in her eyes.
                                            ` + $newPara + `“You’ve done it! The plants started to grow and sprout before you returned. You were successful in cleansing the plants of Silvershire of that foul dark omen. 
                                            ` + $newPara + `Briella hands over 15 gp, 300 xp, and one Arezoth Quest Completion Token.`,
                                    },
                
                silvershireMillaPicklewick: {
                    title: "Milla Picklewick",
                    header: `A gnome with a mischievous grin and a collection of odd trinkets waves at you.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"Ah, a fellow lover of curiosities! What can I interest you in today?"`,
                    options: [
                        { 
                            id: "millaShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Milla Picklewick's Shop",
                                items: [
                                    { name: "Tinker's Tools", price: 5000 },
                                    { name: "Scrap Parts (Bundle)", price: 50 },
                                    { name: "Bent Gear", price: 20 },
                                    { name: "Loose Springs (Set)", price: 30 },
                                    { name: "Tin Whistle", price: 50 },
                                    { name: "Wind-Up Mouse", price: 100 },
                                    { name: "Clicking Noisemaker", price: 30 },
                                    { name: "Simple Music Box", price: 300 },
                                    { name: "Small Hammer", price: 100 },
                                    { name: "Nails (Bag of 50)", price: 100 },
                                    { name: "Wire Spool (10 ft)", price: 50 },
                                    { name: "Wooden Gear", price: 30 },
                                    { name: "Crank Mechanism", price: 100 },
                                    { name: "Odd Trinket (Random)", price: 50 }
                                ]
                            }
                        },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                silvershireCaptainRennarVex: {
                    title: "Captain Rennar Vex",
                    header: `"The tall, grizzled captain looks up from a table littered with damp reports and blood-smeared maps. He studies you in silence for a breath, then speaks in a voice like gravel soaked in seawater."
                    ` + $newPara + `“Don’t just take the quest—finish it. I don’t hand out medals for intent.”`,
                    options: [
                        { id: "questDepthsOfSilenceIntro", text: "Depths of Silence." },
                        { id: "questThornrootIntro", text: "Shadows Over Thornroot" },
                        { id: "barracks", text: "Leave." }
                    ]
                },
                    questDepthsOfSilenceIntro: {
                        title: "Captain Rennar Vex",
                        header: `"I don’t usually send people off to drown,” he mutters, tapping a soaked map of the coast. "But the sea’s become a warfront." He gestures to a water-stained scroll showing a reef off the coast. 
                        ` + $newPara + `“Something’s stirring in the deeps. One of our patrol boats washed up yesterday—what was left of it. The survivors babbled about a creature older than time, tearing through both sea folk and sailors alike.”
                        ` + $newPara + `He crosses his arms, jaw set. “Normally I wouldn’t trust the merfolk, but they reached out too. That says everything.”,
                        ` + $newPara + `“If you’re willing to dive in, find the beast, and kill it, you’ll be doing more than protecting Silvershire. You’ll be keeping the sea from swallowing half the coast.”`,
                        options: [
                            { id: "questDepthsOfSilenceAccept", text: "I'll handle it." },
                            { id: "questDepthsOfSilenceDecline", text: "That sounds... dangerous. Maybe later.", goBack: true }
                        ]
                    },
                        questDepthsOfSilenceAccept: {
                            title: "Captain Rennar Vex",
                            header: `"Good. Find it. Kill it. Or the sea may swallow half the coast. And if you return alive... you’ll have the respect of more than just me."`,
                            options: [
                                { id: "questDepthsOfSilenceComplete", text: "Quest Completed?" },
                            ]
                        },
                            questDepthsOfSilenceComplete: {
                                title: "Captain Rennar Vex",
                                header: `Rennar is waiting by the edge of the barracks courtyard when you return, seawater still dripping from your gear. He meets your gaze with an unreadable expression—until he sees the evidence. Then, for a moment, the stoic captain lets out a quiet breath.  
                            ` + $newPara + `“You really did it…” he says, voice low. “The deep’s gone still again. That thing… it’s finally dead.”  
                            ` + $newPara + `He produces 25 gp, 500 xp, and a gem of pearl. “One of the merfolk dropped this off not long ago. Said it was for the one who ended the nightmare. Looks like that’s you.”  
                            ` + $newPara + `He nods once—deep, respectful. “You’ve got my respect. Thank you adventurer. You’ve done more than you know.”`,
                                options: [
                                    { id: "barracks", text: "Nod respectfully and leave.",goBack: true }
                                ]
                            },
                    questThornrootIntro: {
                        title: "Captain Rennar Vex",
                        header: `“Thornroot Peak used to be a scouting post for our militia. Now it’s a nest of bugbears.”  
                    ` + $newPara + `He taps a point on the map, then looks up at you. “We’ve got civilians in there. Taken during the last raid. And Groggthak the Maw’s leading them—big, brutal, smart enough to stay just out of reach.”  
                    ` + $newPara + `He straightens, and his tone sharpens. “Kill Groggthak. Free the hostages. Break the bugbear war effort before it breaks Silvershire.”  
                    ` + $newPara + `“Free them and you will be rewarded with coin and the gratitude of the guard.”`,
                        options: [
                            { id: "questThornrootAccept", text: "I’ll take care of it." },
                            { id: "silvershireCaptainRennarVex", text: "Sounds rough. Maybe another time." }
                        ]
                    },
                        questThornrootAccept: {
                            title: "Captain Rennar Vex",
                            header: `"Good. I don’t have coin to spare, but complete this and the entire Silvershire Guard will stand behind you when you need us."`,
                            options: [
                                { id: "questThornrootCompleted", text: "Quest Completed?" }
                            ]
                        },
                            questThornrootComplete: {
                                title: "Captain Rennar Vex",
                                header: `“You did it… they’re alive. And Groggthak—dead. You’ve done more than just complete a mission—you’ve saved lives. We’ll rebuild, thanks to you.”
                                ` + $newPara + `He hands you 40 gp, 800 xp, and a gem of ruby. “Take this. It’s a token of our gratitude.”`,
                                options: [
                                    { id: "barracks", text: "Thank him and leave." }
                                ]
                            },


                // silvershire: {
                //     title: "Name",
                //     header: "Hello!",
                //     options: [
                //         { id: "gregQuest", text: "-Quest details here-" },
                //         { id: "gregExtra", text: "-Prompt here-" }
                //     ]
                // },
                // silvershire: {
                //     title: "Name",
                //     header: "Hello!",
                //     options: [
                //         { id: "gregQuest", text: "-Quest details here-" },
                //         { id: "gregExtra", text: "-Prompt here-" }
                //     ]
                // },
                // silvershire: {
                //     title: "Name",
                //     header: "Hello!",
                //     options: [
                //         { id: "gregQuest", text: "-Quest details here-" },
                //         { id: "gregExtra", text: "-Prompt here-" }
                //     ]
                // },
    //#endregion

    //#region Glintmere
        locationGlintmere: {
            header: "You are in Glintmere. Which location are you in?",
            options: [
                { id: "runestoneCrossing", text: "Runestone Crossing (Streets)" },
                { id: "moonfenSpire", text: "Moonfen Spire" },
                { id: "starbrookSanctum", text: "Starbrook Sanctum" },
                { id: "gildedEcho", text: "Gilded Echo" },
                { id: "bramble_Broth", text: "Bramble & Broth" },
                { id: "wyrdwoodRoost", text: "Wyrdwood Roost" },
                { id: "shatterglassAtelier", text: "Shatterglass Atelier" },
            ]
        },
            runestoneCrossing: {
                header: "You are in the Runestone Crossing (streets). Who are you talking to?",
                options: [
                    {id: "", text: ""}
                ]
            },
            moonfenSpire: {
                header: "You are in the Moonfen Spire. Where are you inside?",
                options: [
                    {id: "moonfenSpireLobby", text: "Lobby"},
                    {id: "moonfenSpireOffice", text: "Office"},
                    {id: "moonfenSpireLibrary", text: "Library"},
                    {id: "moonfenSpireClassroom", text: "Classroom"},
                    {id: "moonfenSpireMagusHollow", text: "Magus Hollow"}
                ]
            },
                moonfenSpireOffice: {
                    header: "You are in the Office of Moonfen Spire. Who are you talking to?",
                    options: [
                        {id: "glintmereHeadmistressEnvaraMyrr", text: "Headmistress Envara Myrr"}
                    ]
                },
                    glintmereHeadmistressEnvaraMyrr: {
                        title: "Headmistress Envara Myrr",
                        header: `A stern-looking elf with sharp features and piercing green eyes. She wears a long, flowing robe adorned with intricate silver embroidery, and her hair is pulled back into a tight bun. As you approach, she looks up from a stack of papers with a raised eyebrow and a hint of curiosity.
                        ` + $newPara + `“Ah, a visitor. What brings you to Moonfen Spire?”`,
                        options: [
                            { id: "envaraQuest", text: "quest name here" },
                            { id: "goodbye", text: "Goodbye.", goBack: true }
                        ]
                    },
                moonfenSpireMagusHollow: {
                    header: "You are in the Magus Hollow. Who are you talking to?",
                    options: [
                        {id: "glintmereErritMarwin", text: "Errit Marwin"}
                    ]
                },
                    glintmereErritMarwin: {
                        title: "Errit Marwin",
                        header: `Hello, friend. Good to see you!`,
                        options: [
                            { id: "theHolyDeliveryQuestComplete", text: "A Holy Delivery Quest Complete?" },
                            { id: "theUnstableCoreQuestOffer", text: "The Unstable Core" },
                            { id: "questNameQuestOffer", text: "Quest Name" },
                            { id: "dungeonOfTheBadGuyQuestOffer", text: "[DUNGEON] Dungeon of the Bad Guy" },
                        ]
                    },
                        theHolyDeliveryQuestComplete: {
                            title: "Errit Marwin",
                            header: `Inside the room of Magus Hollow, erratic sparks continue to burst from nearby devices. The scent of singed parchment and magical ozone clings to the air. Arcane gadgets buzz, float, and occasionally pop with harmless sparks of light. At the back of the room, Errit Marwin now stands in the flesh—no longer a mere image. He turns to greet you as you approach, his eyes lighting up with gratitude. 
                            ` + $newPara + `“Ah, splendid! You’ve returned my spellbook. With this back in hand, my work for Glintmere—and its people—can continue uninterrupted. There’s still much to do, but with help like yours, this town is in good hands.”
                            ` + $newPara + `He bows his head with quiet respect, adjusting his soot-stained sleeves. “Thank you again for your help, adventurers. May the Weave guide your path.”
                            ` + $newPara + `Errit hands you 10 gp, 200 xp, and an Arezoth Quest Completion Token.
                            ` + $newPara + `[DEV NOTE: This is currently the final quest available in Glintmere, as additional content for this town is still in development. In the next patch, our team will be completing additional NPCs, quests, and encounters. Thank you for your patience—and as always, enjoy your adventure in Arezoth!]`,
                            options: [
                                { id: "goodbye", text: "Goodbye", goBack: true }
                            ]
                        },
                        theUnstableCoreQuestOffer: {
                            title: "Errit Marwin",
                            header: `dialogue text 
                            ` + $newPara + `“dialogue text continued”`,
                            options: [
                                { id: "theUnstableCoreQuestAccept", text: "Quest Accept?" },
                                { id: "theUnstableCoreQuestDecline", text: "Quest Decline?" },
                            ]
                        },
                            theUnstableCoreQuestAccept: {
                                title: "Errit Marwin",
                                header: `"Thank you!"`,
                                options: [
                                    { id: "theUnstableCoreQuestComplete", text: "Quest Completed?" },
                                    { id: "theUnstableCoreQuestFailed", text: "Quest Failed?" }
                                ]
                            },
                                theUnstableCoreQuestComplete: {
                                    title: "Errit Marwin",  
                                    header: `dialogue text
                                    ` + $newPara + `dialogue text continued`,
                                    options: [
                                        { id: "goodbye", text: "Goodbye", goBack: true }
                                    ]
                                },
                                theUnstableCoreQuestDecline: {
                                    title: "Errit Marwin",
                                    header: `"Oh...Ok..."`,
                                    options: [
                                        { id: "goodbye", text: "Goodbye", goBack: true }
                                    ]
                                },
                        questNameQuestOffer: {
                            title: "Errit Marwin",
                            header: `dialogue text 
                            ` + $newPara + `“dialogue text continued”`,
                            options: [
                                { id: "questNameQuestAccept", text: "Quest Accept?" },
                                { id: "questNameQuestDecline", text: "Quest Decline?" },
                            ]
                        },
                            questNameQuestAccept: {
                                title: "Errit Marwin",
                                header: `"Thank you!"`,
                                options: [
                                    { id: "questNameQuestComplete", text: "Quest Completed?" },
                                    { id: "questNameQuestFailed", text: "Quest Failed?" }
                                ]
                            },
                                questNameQuestComplete: {
                                    title: "Errit Marwin",  
                                    header: `dialogue text
                                    ` + $newPara + `dialogue text continued`,
                                    options: [
                                        { id: "goodbye", text: "Goodbye", goBack: true }
                                    ]
                                },
                                questNameQuestDecline: {
                                    title: "Errit Marwin",
                                    header: `"Oh...Ok..."`,
                                    options: [
                                        { id: "goodbye", text: "Goodbye", goBack: true }
                                    ]
                                },
                        dungeonOfTheBadGuyQuestOffer: {
                            title: "Errit Marwin",
                            header: `dialogue text 
                            ` + $newPara + `“dialogue text continued”`,
                            options: [
                                { id: "dungeonOfTheBadGuyQuestAccept", text: "Quest Accept?" },
                                { id: "dungeonOfTheBadGuyQuestDecline", text: "Quest Decline?" },
                            ]
                        },
                            dungeonOfTheBadGuyQuestAccept: {
                                title: "Errit Marwin",
                                header: `"Thank you!"`,
                                options: [
                                    { id: "dungeonOfTheBadGuyQuestComplete", text: "Quest Completed?" },
                                    { id: "dungeonOfTheBadGuyQuestFailed", text: "Quest Failed?" }
                                ]
                            },
                                dungeonOfTheBadGuyQuestComplete: {
                                    title: "Errit Marwin",  
                                    header: `dialogue text
                                    ` + $newPara + `dialogue text continued`,
                                    options: [
                                        { id: "goodbye", text: "Goodbye", goBack: true }
                                    ]
                                },
                            dungeonOfTheBadGuyQuestDecline: {
                                title: "Errit Marwin",
                                header: `"Oh...Ok..."`,
                                options: [
                                    { id: "goodbye", text: "Goodbye", goBack: true }
                                ]
                            },
            starbrookSanctum: {
                header: "You are in the Starbrook Sanctum. Who are you talking to?",
                options: [
                    {id: "glintmereMiraWexley", text: "Mira Wexley"}
                ]
            },
                glintmereMiraWexley: {
                    title: "Mira Wexley",
                    header: `A tall, elegant woman with silver-streaked hair and a serene expression. She wears flowing robes adorned with star motifs, and her eyes seem to hold the wisdom of the cosmos. As you approach, she offers a gentle smile and a nod of acknowledgment. 
                    ` + $newPara + `“Welcome to the Starbrook Sanctum. It’s a place of reflection and knowledge. If you have any questions about the stars or seek guidance, feel free to ask.”`,   
                    options: [
                        { 
                            id: "miraShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Mira Wexley's Shop",
                                items: [
                                    { name: "Acid (Vial)", price: 1200 },
                                    { name: "Alchemist's Fire (Flask)", price: 2500 },
                                    { name: "Antitoxin", price: 1200 },
                                    { name: "Bottle (Glass)", price: 100 },
                                    { name: "Candle", price: 50 },
                                    { name: "Component Pouch", price: 1200 },
                                    { name: "Flask", price: 1 },
                                    { name: "Healer's Kit", price: 250 },
                                    { name: "Ink (1 oz)", price: 500 },
                                    { name: "Ink Pen", price: 1 },
                                    { name: "Jug", price: 1 },
                                    { name: "Oil (Flask)", price: 5 },
                                    { name: "Perfume (Vial)", price: 250 },
                                    { name: "Poison (Basic Vial)", price: 500 },
                                    { name: "Oil Flask", price: 5 },
                                    { name: "Perfume Vial", price: 250 },
                                    { name: "Basic Poison", price: 5000 },
                                    { name: "Vial", price: 50 },
                                    { name: "Alchemist's Supplies", price: 2500 },
                                    { name: "Brewer's Supplies", price: 1000 },
                                    { name: "Glassblower's Tools", price: 1500 },
                                    { name: "Poisoner's Kit", price: 2500 },
                                    { name: "Herbalism Kit", price: 250 },
                                    { name: "Spell Components", price: 250 },
                                    { name: "Potion of Healing", price: 2500 },
                                    { name: "Philter of Love", price: 4500 },
                                    { name: "Potion of Poison", price: 5000 },
                                    { name: "Elixir of Health", price: 6000 },
                                    { name: "Potion of Fire Breath", price: 7500 },
                                    { name: "Potion of Greater Healing", price: 7500 },
                                    { name: "Potion of Climbing", price: 9000 },
                                    { name: "Potion of Heroism", price: 9000 },
                                    { name: "Potion of Mind Reading", price: 9000 },
                                    { name: "Potion of Water Breathing", price: 9000 },
                                    { name: "Potion of Animal Friendship", price: 10000 },
                                    { name: "Potion of Diminution", price: 13500 },
                                    { name: "Potion of Growth", price: 13500 },
                                    { name: "Potion of Gaseous Form", price: 15000 },
                                    { name: "Potion of Resistance", price: 15000 },
                                    { name: "Potion of Clairvoyance", price: 48000 },
                                    { name: "Potion of Invulnerability", price: 192000 }
                                ]
                            }
                        },
                        { id: "miraQuest", text: "Quest name here" },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
            gildedEcho: {
                header: "You are in the Gilded Echo. Who are you talking to?",
                options: [
                    {id: "glintmereJasperFen", text: "Jasper “Featherlock” Fen"}
                ]
            },
                glintmereJasperFen: {
                    title: "Jasper “Featherlock” Fen",
                    header: `A male druidic caretaker with feathers braided into his beard greets you warmly.
                    ` + $newPara + `“Welcome newcomers! What may you require for your next adventure?”`,
                    options: [
                        { 
                            id: "glintmereJasperFenShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Jasper “Featherlock” Fen's Shop",
                                items: [
                                    { name: "Abacus", price: 200 },
                                    { name: "Barrel", price: 200 },
                                    { name: "Basket", price: 40 },
                                    { name: "Blanket", price: 50 },
                                    { name: "Bottle (Glass)", price: 200 },
                                    { name: "Bucket", price: 5 },
                                    { name: "Candle", price: 1 },
                                    { name: "Chain (10 ft)", price: 500 },
                                    { name: "Chalk (1)", price: 1 },
                                    { name: "Chest", price: 500 },
                                    { name: "Clothes (Common)", price: 50 },
                                    { name: "Clothes (Traveler's)", price: 200 },
                                    { name: "Crowbar", price: 200 },
                                    { name: "Fishing Tackle", price: 100 },
                                    { name: "Flask or Tankard", price: 2 },
                                    { name: "Hammer", price: 100 },
                                    { name: "Ink (1 oz)", price: 1000 },
                                    { name: "Ink Pen", price: 2 },
                                    { name: "Jug or Pitcher", price: 2 },
                                    { name: "Ladder (10 ft)", price: 10 },
                                    { name: "Lantern (Hooded)", price: 500 },
                                    { name: "Lock", price: 1000 },
                                    { name: "Mess Kit", price: 20 },
                                    { name: "Mirror (Steel)", price: 500 },
                                    { name: "Oil (Flask)", price: 10 },
                                    { name: "Paper (Sheet)", price: 20 },
                                    { name: "Parchment (Sheet)", price: 10 },
                                    { name: "Miner's Pick", price: 200 },
                                    { name: "Piton", price: 5 },
                                    { name: "Pole (10 ft)", price: 5 },
                                    { name: "Pot (Iron)", price: 200 },
                                    { name: "Pouch", price: 50 },
                                    { name: "Rope (Hempen, 50 ft)", price: 100 },
                                    { name: "Rope (Silk, 50 ft)", price: 1000 },
                                    { name: "Sack", price: 1 },
                                    { name: "Sealing Wax", price: 50 },
                                    { name: "Shovel", price: 200 },
                                    { name: "Soap", price: 2 },
                                    { name: "Spikes, Iron (10)", price: 100 },
                                    { name: "Tent (Two-Person)", price: 200 },
                                    { name: "Tinderbox", price: 50 },
                                    { name: "Torch", price: 1 },
                                    { name: "Vial", price: 100 },
                                    { name: "Waterskin", price: 20 },
                                    { name: "Mason's Tools", price: 1000 },
                                    { name: "Painter's Supplies", price: 1000 },
                                    { name: "Potter's Tools", price: 1000 },
                                    { name: "Dice Set", price: 10 },
                                    { name: "Playing Card Set", price: 50 },
                                    { name: "Wheat (1 lb)", price: 1 },
                                    { name: "Flour (1 lb)", price: 2 },
                                    { name: "Salt (1 lb)", price: 5 },
                                    { name: "Ginger (1 lb)", price: 100 },
                                    { name: "Cinnamon (1 lb)", price: 200 },
                                    { name: "Pepper (1 lb)", price: 200 },
                                    { name: "Saffron (1 lb)", price: 1500 }
                                ]
                            }
                        },
                        { id: "ownerQuest", text: "Quest name here" },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
            bramble_Broth: {
                header: "You are in the Bramble & Broth. Who are you talking to?",
                options: [
                    {id: "glintmereZelbinCoppercloak", text: "Zelbin Coppercloak"}
                ]
            },
                glintmereZelbinCoppercloak: {
                    title: "Zelbin Coppercloak",
                    header: `A halfling with a wide-brimmed hat and a cloak that seems to shimmer with hidden pockets. He greets you with a sly smile and a twinkle in his eye.
                    ` + $newPara + `“Looking for something special? I might have just the thing. Or maybe you’re here for a story? I’ve got plenty of those too, if you’re interested.”`,
                    options: [
                        { 
                            id: "zelbinShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Zelbin Coppercloak's Shop",
                                items: [
                                    { name: "Crisped Worm and Potatoes", price: 3 },
                                    { name: "Frogs on Skewers", price: 3 },
                                    { name: "Green Chili Stew", price: 3 },
                                    { name: "Grilled Snake and Macadamia", price: 3 },
                                    { name: "Humble Pie", price: 3 },
                                    { name: "Lizard Gruel with Nutbread", price: 3 },
                                    { name: "Barbecued Gopher Legs", price: 6 },
                                    { name: "Bog-beetle Dumplings", price: 6 },
                                    { name: "Bread-bowl Stew", price: 6 },
                                    { name: "Leg of Mutton and Goose Eggs", price: 6 },
                                    { name: "Mushroom Stew with Bread", price: 6 },
                                    { name: "Rabbit and Baked Pumpkin", price: 6 },
                                    { name: "Squash and Fish Soup", price: 6 },
                                    { name: "Broiled Salmon and Potatoes", price: 30 },
                                    { name: "Cheese Pie and Onion Soup", price: 30 },
                                    { name: "Grilled Wild Boar Chops", price: 30 },
                                    { name: "Rabbit Stew and Crackers", price: 30 },
                                    { name: "Roast Chicken and Potatoes", price: 30 },
                                    { name: "Elven Bread", price: 80 },
                                    { name: "Honey Braised Boar Ribs", price: 80 },
                                    { name: "Pork Chop and Curds", price: 80 },
                                    { name: "Rack of Lamb Platter", price: 80 },
                                    { name: "Smoked Salmon and Wild Berries", price: 200 },
                                    { name: "Stuffed Trout with Plum Pudding", price: 200 },
                                    { name: "Goblin Spit Ale", price: 2 },
                                    { name: "Grog", price: 2 },
                                    { name: "Turnip Wine", price: 2 },
                                    { name: "Dwarven Ale", price: 40 },
                                    { name: "King's Ale", price: 40 },
                                    { name: "Spiced Ale", price: 40 },
                                    { name: "Trollbane Ale", price: 40 },
                                    { name: "Desert Star Wine", price: 20 },
                                    { name: "Wight Wine", price: 20 },
                                    { name: "Stonesulder Wine", price: 1000 },
                                    { name: "Wild Orchid Wine", price: 1000 },
                                    { name: "Bacon Beer", price: 20 },
                                    { name: "Berry Brandy", price: 200 },
                                    { name: "Cactus Spirits", price: 40 },
                                    { name: "Honeysuckle Mead", price: 200 },
                                    { name: "Scorpionweed Reserve", price: 1000 },
                                    { name: "Wheat (1 lb)", price: 1 },
                                    { name: "Flour (1 lb)", price: 1 },
                                    { name: "Salt (1 lb)", price: 2 },
                                    { name: "Ginger (1 lb)", price: 50 },
                                    { name: "Cinnamon (1 lb)", price: 100 },
                                    { name: "Pepper (1 lb)", price: 100 },
                                    { name: "Saffron (1 lb)", price: 700 }
                                ]
                            }
                        },
                        { id: "zelbinQuest", text: "Déjà Brew" }
                    ]
                },
            wyrdwoodRoost: {
                header: "You are in the Wyrdwood Roost. Who are you talking to?",
                options: [
                    {id: "", text: ""}
                ]
            },
            shatterglassAtelier: {
                header: "You are in the Shatterglass Atelier. Who are you talking to?",
                options: [
                    {id: "glintmereTovik", text: "Specter-Cleric Tovik"},
                    {id: "glintmereLirael", text: "Lirael"}
                ]
            },
                glintmereTovik: {
                    title: "Specter-Cleric Tovik",
                    header: `A ghostly figure clad in tattered clerical robes, his form flickering like a candle in the wind. He greets you with a solemn nod, his eyes hollow yet filled with an ancient wisdom.
                    ` + $newPara + `“Welcome to the Shatterglass Atelier. I am Tovik, a cleric who has long since passed from this world. If you seek knowledge of the afterlife or guidance on matters of the spirit, I may be able to assist you.”`,
                    options: [
                        { 
                            id: "tovikShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Specter-Cleric Tovik's Shop",
                                items: [
                                    { name: "Exquisite Necklace/Amulet", price: 250 },
                                    { name: "Mundane Necklace/Amulet", price: 25 },
                                    { name: "Arcane Focus (Crystal)", price: 500 },
                                    { name: "Arcane Focus (Orb)", price: 1000 },
                                    { name: "Exquisite Earrings", price: 250 },
                                    { name: "Mundane Earrings", price: 20 },
                                    { name: "Jewelry (set with gem)", price: 10 },
                                    { name: "Exquisite Ring", price: 150 },
                                    { name: "Mundane Ring", price: 15 },
                                    { name: "Signet Ring", price: 250 },
                                    { name: "Jeweler's Tools", price: 1200 },
                                    { name: "Gemstone Appraisal (3 gems)", price: 500 },
                                    { name: "Resizing Jewelry", price: 1000 },
                                    { name: "Stonecutting", price: 250 },
                                    { name: "Copper (1 lb)", price: 25 },
                                    { name: "Silver (1 lb)", price: 250 },
                                    { name: "Gold (1 lb)", price: 2500 },
                                    { name: "Platinum (1 lb)", price: 25000 },
                                    { name: "Azurite", price: 1000 },
                                    { name: "Banded Agate", price: 1000 },
                                    { name: "Blue Quartz", price: 1000 },
                                    { name: "Eye Agate", price: 1000 },
                                    { name: "Hematite", price: 1000 },
                                    { name: "Lapis Lazuli", price: 1000 },
                                    { name: "Malachite", price: 1000 },
                                    { name: "Moss Agate", price: 1000 },
                                    { name: "Obsidian", price: 1000 },
                                    { name: "Rhodochrosite", price: 1000 },
                                    { name: "Tiger Eye", price: 1000 },
                                    { name: "Turquoise", price: 1000 },
                                    { name: "Bloodstone", price: 5000 },
                                    { name: "Carnelian", price: 5000 },
                                    { name: "Chalcedony", price: 5000 },
                                    { name: "Chrysoprase", price: 5000 },
                                    { name: "Citrine", price: 5000 },
                                    { name: "Jasper", price: 5000 },
                                    { name: "Moonstone", price: 5000 },
                                    { name: "Onyx", price: 5000 },
                                    { name: "Quartz", price: 5000 },
                                    { name: "Sardonyx", price: 5000 },
                                    { name: "Star Rose Quartz", price: 5000 },
                                    { name: "Zircon", price: 5000 },
                                    { name: "Amber", price: 10000 },
                                    { name: "Amethyst", price: 10000 },
                                    { name: "Chrysoberyl", price: 10000 },
                                    { name: "Coral", price: 10000 },
                                    { name: "Garnet", price: 10000 },
                                    { name: "Jade", price: 10000 },
                                    { name: "Jet", price: 10000 },
                                    { name: "Pearl", price: 10000 },
                                    { name: "Spinel", price: 10000 },
                                    { name: "Tourmaline", price: 10000 }
                                ]
                            }
                        },
                        { id: "tovikQuest", text: "Quest name here" },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                glintmereLirael: {
                    title: "Lirael",
                    header: `A mysterious woman with long, flowing hair that seems to shimmer with an otherworldly light. Her eyes are a deep, mesmerizing shade of violet, and her voice carries a melodic quality that captivates those who listen. As you approach, she offers a warm smile and a gentle nod of acknowledgment.
                    ` + $newPara + `“Welcome to the Shatterglass Atelier. I am Lirael, a practitioner of the arcane arts. If you have any questions about magic or seek guidance on your magical journey, I may be able to assist you.”`,
                    options: [
                        { 
                            id: "liraelShop", 
                            text: "Shop", 
                            openStore: true,
                            storeData: {
                                title: "Lirael's Shop",
                                items: [
                                    { name: "Quarterstaff", price: 10 },
                                    { name: "Abacus", price: 100 },
                                    { name: "Alchemist's Fire (Flask)", price: 2500 },
                                    { name: "Arcane Focus (Crystal)", price: 500 },
                                    { name: "Arcane Focus (Orb)", price: 1000 },
                                    { name: "Arcane Focus (Rod)", price: 500 },
                                    { name: "Arcane Focus (Staff)", price: 250 },
                                    { name: "Arcane Focus (Wand)", price: 500 },
                                    { name: "Book", price: 1200 },
                                    { name: "Bottle (Glass)", price: 100 },
                                    { name: "Candle", price: 1 },
                                    { name: "Case (Map or Scroll)", price: 50 },
                                    { name: "Component Pouch", price: 1200 },
                                    { name: "Druidic Focus (Sprig of Mistletoe)", price: 50 },
                                    { name: "Druidic Focus (Totem)", price: 50 },
                                    { name: "Druidic Focus (Wooden Staff)", price: 250 },
                                    { name: "Druidic Focus (Yew Wand)", price: 500 },
                                    { name: "Flask", price: 1 },
                                    { name: "Hourglass", price: 1200 },
                                    { name: "Oil (Flask)", price: 5 },
                                    { name: "Ink (1 oz)", price: 500 },
                                    { name: "Ink Pen", price: 1 },
                                    { name: "Paper (Sheet)", price: 10 },
                                    { name: "Parchment (Sheet)", price: 5 },
                                    { name: "Pouch", price: 25 },
                                    { name: "Robes", price: 50 },
                                    { name: "Sealing Wax", price: 25 },
                                    { name: "Spellbook", price: 2500 },
                                    { name: "Vial", price: 50 },
                                    { name: "Calligrapher's Tools", price: 1400 },
                                    { name: "Lute", price: 700 },
                                    { name: "Lyre", price: 1400 },
                                    { name: "Spell Scroll (Common - Cantrip)", price: 500 },
                                    { name: "Spell Scroll (Common - Level 1)", price: 3000 },
                                    { name: "Spell Scroll (Uncommon - Level 2)", price: 6000 },
                                    { name: "Spell Scroll (Uncommon - Level 3)", price: 10000 },
                                    { name: "Magic Appraisal (Identify)", price: 10000 },
                                    { name: "Spell Components", price: 250 }
                                ]
                            }
                        },
                        { id: "liraelQuest", text: "Quest name here" },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },  
    //#endregion

    //#region Barleyshade Fields
    locationBarleyshadeFields: {
        header: "You are in Barleyshade Fields. Who are you talking to?",
        options: [
            { id: "selinaDapplefield", text: "Selina Dapplefield" }
        ]
    },
        selinaDapplefield: {
            title: "Selina Dapplefield",
            header: `Selina stands in front of a broken-down scarecrow, wiping sweat from her brow as the wind rustles through the fields.
            ` + $newPara + `"Hello traveler. What bring you to my farm?"`,
            options: [
                { id: "theHauntedHarvestQuestOffer", text: "Quest: The Haunted Harvest"},
                { id: "", text: ""},
                { id: "", text: ""},
            ]
        },
        theHauntedHarvestQuestOffer: {
            title: "Selina Dapplefield",
            header: `“Ah, travelers! You’ve come just in time. I could use your help with something strange. The scarecrows, you see... well, they’ve started moving on their own. Some of them are enchanted, and others are just the usual protective ones. Problem is, I can’t afford to make more, and I don’t want you breaking the wrong ones. There’s no telling which are the real ones and which are the monsters! Please, be careful. If you destroy one of my good scarecrows, I won’t be able to protect my crops.”
            ` + $newPara + `Selina looks at you with pleading eyes. “Will you help me sort them out?”`,
            options: [
                { id: "theHauntedHarvestQuestAccept", text: "Quest Accept?" },
                { id: "theHauntedHarvestQuestDecline", text: "Quest Decline?" },
            ]
        },
            theHauntedHarvestQuestAccept: {
                title: "Selina Dapplefield",
                header: `"Thank you!"`,
                options: [
                    { id: "theHauntedHarvestQuestComplete", text: "Quest Completed?" }
                ]
            },
            theHauntedHarvestQuestDecline: {
                title: "Selina Dapplefield",
                header: `"Oh...Ok..."`,
                options: [
                    { id: "goodbye", text: "Goodbye", goBack: true }
                ]
            },
                theHauntedHarvestQuestComplete: {
                    title: "Selina Dapplefield",
                    header: `Selina waves her hand gratefully as you return.
                    ` + $newPara + `“You’ve done it! You’ve saved my farm from those cursed creatures. I don't know how to thank you enough. My scarecrows are safe, and my crops should be protected again. I’ll make sure to offer you something in return for your trouble.”
                    ` + $newPara + `She hands over 10 gp, 200 xp, and an Arezoth Quest Completion Token, her face bright with relief. “Thank you. I’ll do my best to make sure nothing like this happens again.”`,
                    options: [
                        { id: "goodbye", text: "Goodbye", goBack: true }
                    ]
                },
    //#endregion

    //#region Unnamed Town
    locationUnnamedTown: {
        header: "You are in Unnamed Town. Who are you talking to?",
        options: [
            { id: "daniel", text: "Daniel" }
        ]
    },
        daniel: {
            title: "Daniel",
            header: `Daniel stands in the center of the town square`,
            options: [
                { id: "theShatteredBannerQuestOffer", text: "Quest: The Shattered Banner"},
            ]
        },
        theShatteredBannerQuestOffer: {
            title: "Daniel",
            header: `“Hello adventurers! I have a task that must be completed for the sake of ‘Town Name Here’. To the north, there’s a watchtower that was burned down a short while ago. Our town guard were once stationed there, but there hasn’t been any news on the culprits. If you can go to the watchtower and scout for any evidence as to who might have done this it would be a great service to our town.”`,
            options: [
                { id: "theShatteredBannerQuestAccept", text: "Quest Accept?" },
                { id: "theShatteredBannerQuestDecline", text: "Quest Decline?" },
            ]
        },
            theShatteredBannerQuestAccept: {
                title: "Daniel",
                header: `"Thank you! Good luck, Adventurers!"`,
                options: [
                    { id: "theShatteredBannerQuestComplete", text: "Quest Completed?" }
                ]
            },
            theShatteredBannerQuestDecline: {
                title: "Daniel",
                header: `"Oh...Ok...If you change your mind I'll be here"`,
                options: [
                    { id: "goodbye", text: "Goodbye", goBack: true }
                ]
            },
                theShatteredBannerQuestComplete: {
                    title: "Daniel",
                    header: `"Adventurers! You did it! Thank you! Here’s your reward"
                    ` + $newPara + `He hands over 10 gp, 200 xp`,
                    options: [
                        { id: "goodbye", text: "Goodbye", goBack: true }
                    ]
                },
    //#endregion

    //#region Thornroot Peak
    locationThornrootPeak: {
        header: "You are in Thornroot Peak. Who are you talking to?",
        options: [
            { id: "thornrootPeakGreg", text: "Greg" }
        ]
    },
        thornrootPeakGreg: {
            header: `Greg stands nervously in the center of a crude wooden cage, his green shirt dirtied and his brown vest torn. He clutches the bars as you approach, eyes wide with hope.
            ` + $newPara + `“Hello, adventurers. I ran into some bad luck after leaving Silvershire to run a few errands. These bugbears grabbed me and tossed me in here—I can’t get out on my own.”
            ` + $newPara + `“If you can escort me safely back to Silvershire, I promise you’ll be rewarded wonderfully.”`,
            options: [
                { id: "rescueGregFromBugbearsQuestAccept", text: "Quest Accept?"},
                { id: "rescueGregFromBugbearsQuestDecline", text: "Quest Decline?"},
            ]
        },
            rescueGregFromBugbearsQuestAccept: {
                header: `"Oh, thank you! Bless the gods for they surely sent you all my way. Thank you, let's get going"
                ` + $newPara + `The cage door swings open and Greg steps out, his nameplate updates to [insert player name here]'s Companion.`,
                options: [
                    { id: "rescueGregFromBugbearsQuestComplete", text: "Quest Completed?" }
                ]
            },
            rescueGregFromBugbearsQuestDecline: {
                header: `"What the fuck, adventurer!?"`,
                options: [
                    { id: "goodbye", text: "Goodbye", goBack: true }
                ]
            },
    //#endregion

//#endregion

//#region Earthrim
    earthrimZone: {
        header: "You are in Earthrim. Where are you?",
        options: [
            { id: "locationTheSnowGate", text: "The Snow Gate" },
            { id: "locationWhiteRock", text: "White Rock" },
        ]
    },
    earthrimTownGuard: {
        title: "Town Guard",
        header: "How can I help you?",
        options: [
            { id: "townGuardDirections", text: "Can you give me directions?" },
            { id: "rumors", text: "Rumors" },
            { id: "goodbye", text: "Goodbye.", goBack: true }
        ]
    },
    //#region The Snow Gate
        locationTheSnowGate: {
            header: "You are in The Snow Gate. Who are you talking to?",
            options: [
                { id: "snowGateGuard", text: "Snow Gate Guard" }
            ]   
        },
            snowGateGuard: {
                title: "Ralof",
                header: "Hey, you. You're finally awake. You were trying to cross the border, right? Walked right into that Stonemoure ambush.",
                options: [
                    { id: "snowGate01", text: "It's midday! Of course I'd be awake." },
                    { id: "snowGate02", text: "I sure did!" },
                    { id: "snowGate03", text: "You must have mistaken me for someone else." },
                    { id: "snowGate04", text: "Who the hell are you?" },
                    { id: "snowGate05", text: "Stonemoure ambush? What are you talking about?" },
                    { id: "snowGate06", text: "Get out of my way!" },
                    
                ]
            },
                //#region snowGate01 branch
                snowGate01: {
                    title: "Ralof",
                    header: "Fair enough. Wasn't my best line, was it?",
                    earthrimSequence: [
                        "Ok! Ok! No need to get all grouchy with me. Just making sure you’re better off today.",
                        "Anyways, there hasn’t been any sighting of the Stonemoure today so you should be good to go. Let me open the gate for you.",
                        "(Ralof proceeds to open the gate. The gate opens.)",
                        "Go on in. The winds of Earthrim welcome you home."
                    ],
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                //#endregion
                //#region snowGate02 branch
                snowGate02: {
                    title: "Ralof",
                    header: "Fair enough. Wasn't my best line, was it?",
                    earthrimSequence: [
                        "Glad you made it out of there alive. Earthrim has enough trouble without the Frostmoure and Stonemoure at each other’s throats if you ask me.",
                        "Anyways, there hasn’t been any sighting of the Stonemoure today so you should be good to go. Let me open the gate for you.",
                        "(Ralof proceeds to open the gate. The gate opens.)",
                        "Go on in. The winds of Earthrim welcome you home."
                    ],
                    options: [
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                //#endregion
                //#region snowGate03 branch
                snowGate03: {
                    title: "Ralof",
                    header: "Oh, you're not the man from yesterday. My apologies. Guess I'm not good at my job or had too much mead to do my job proper.",
                    options: [
                        { id: "snowGate031", text: "We've all had those days where mead got the best of us." },
                        { id: "snowGate032", text: "Get your act together, man!" },
                        { id: "snowGate033", text: "You're terrible at your job if you can't tell a stranger from the man you knew yesterday." }
                    ]
                },
                    snowGate031: {
                        title: "Ralof",
                        header: "I appreciate your understanding. Now then (clears throat) let’s be proper about this. I need you to state your business in Earthrim.",
                        options: [
                            { id: "snowGate0311", text: "To serve the realm and the people" },
                            { id: "snowGate0312", text: "For glory and riches!" },
                            { id: "snowGate0313", text: "To bring destruction and death!" },
                            { id: "snowGate0314", text: "We are simply travelers making our way through the realm." },
                            { id: "snowGate0315", text: "To drink mead and party" }
                        ]
                    },
                        snowGate0311: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That’s good enough of a reason for me. And a noble one at that too. Earthrim could certainly use people like you. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "Goodbye.", goBack: true }
                            ]
                        },
                        snowGate0312: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That’s good enough of a reason for me. Earthrim has many adventures with glory and riches awaiting you. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "Goodbye.", goBack: true }
                            ]
                        },
                        snowGate0313: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "You dare to bring harm to my people. Then I shall put you down!",
                                "(Ralof draws his sword. Roll initiative)"
                            ],
                            options: [
                                { id: "goodbye", text: "Roll initiative", goBack: true }
                            ]
                        },
                        snowGate0314: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That’s good enough of a reason for me. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "Goodbye.", goBack: true }
                            ]
                        },
                        snowGate0315: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That’s good enough of a reason for me. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "Goodbye.", goBack: true }
                            ]
                        },
                    snowGate032: {
                        title: "Ralof",
                        header: "Who are you to talk to me like that?",
                        options: [
                            {
                                id: "snowGate0321",
                                text: "Calm down man. Just let us through the gate. (Persuasion)",
                                check: {
                                    prompt: "Roll for persuasion...",
                                    successId: "snowGate0321Success",
                                    failureId: "snowGate0321Failed"
                                }
                            },
                            {
                                id: "snowGate0322",
                                text: "I’m the guy who’s gonna show you who you’re messing with if you don’t let us in. (Intimidation)",
                                check: {
                                    prompt: "Roll for intimidation...",
                                    successId: "snowGate0322Success",
                                    failureId: "snowGate0322Failed"
                                }
                            },
                            {
                                id: "snowGate0323",
                                text: "You don’t recognize a commanding officer when you see one! (Deception)",
                                check: {
                                    prompt: "Roll for deception...",
                                    successId: "snowGate0323Success",
                                    failureId: "snowGate0323Failed"
                                }
                            },
                            {
                                id: "snowGate0324",
                                text: "Your life is falling apart. You need to take a look in the mirror and fix the man you see looking back at you. (Persuasion)",
                                check: {
                                    prompt: "Roll for persuasion...",
                                    successId: "snowGate0324Success",
                                    failureId: "snowGate0324Failed"
                                }
                            },
                        ]
                    },
                        snowGate0321Success: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "SUCCESS: You’re right. I should be better if I am going to be in charge of the gate into the country. Thank you.",
                                "Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "Goodbye.", goBack: true }
                            ]
                        },
                        snowGate0321Failed: {
                            title: "Ralof",
                            header: "FAIL: No I won’t calm down. In fact, I just remembered that it costs 10 gold pieces to enter the country. For each of you!",
                            options: [
                                { id: "snowGate0321F1", text: "Fine! Here’s your gold…(asshole) \n (Pay 10 gp)" },
                                { id: "snowGate0321F2", text: "I’m not paying you anything!" },
                            ]
                        },
                            snowGate0321F1: {
                                title: "Ralof",
                                header: "",
                                earthrimSequence: [
                                    "That’s more like it. Go on in before I change my mind.",
                                    "(Ralof proceeds to open the gate. The gate opens)"
                                ],
                                options: [
                                    { id: "goodbye", text: "Goodbye.", goBack: true }
                                ]
                            },
                            snowGate0321F2: {
                                title: "Ralof",
                                header: "Then you better turn around and go back to where you came from.",
                                options: [
                                    { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                    { id: "goodbye", text: "Goodbye.", goBack: true }
                                ]
                            },
                        snowGate0322Success: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "SUCCESS: Ok! Ok! No need to get hostile, sir!",
                                "(Ralof proceeds to open the gate. The gate opens)",
                                "Go on in. Just let me be."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0322Failed: { 
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "FAIL: Ha! You think I’m scared of you! Go ahead and try your luck. If you dare!",
                                "Ralof draws his sword (Threatened)"
                            ],
                            options: [
                                { id: "snowGate0322F1", text: "Calm down sir! I was just kidding." },
                                { id: "goodbye", text: "I dare (roll initiative)", goBack: true }
                            ]
                        },
                            snowGate0322F1: {
                                title: "Ralof",
                                header: "I have no time or patience for your humor. Tell you what, you want in? It’ll cost you 10 gold, for each of you!",
                                options: [
                                    { id: "snowGate0322F11", text: "Fine! Here’s your gold…(asshole) (Pay 10 gp)" },
                                    { id: "snowGate0322F12", text: "I’m not paying you anything!" }
                                ]
                            },
                                snowGate0322F11: {
                                    title: "Ralof",
                                    header: "That’s more like it. Go on in before I change my mind.",
                                    options: [
                                        { id: "goodbye", text: "End", goBack: true }
                                    ]
                                },
                                snowGate0322F12: {
                                    title: "Ralof",
                                    header: "Then you better turn around and go back to where you came from.",
                                    options: [
                                        { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                        { id: "goodbye", text: "Goodbye.", goBack: true }
                                    ]
                                },
                        snowGate0323Success: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "SUCCESS: Oh! By the gods! Sir! I am so sorry. I didn’t recognize…uh…I’ll get the gate open right away.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in, sir! Uh Welcome home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0323Failed: {
                            title: "Ralof",
                            header: "FAIL: Nice try! I could report you and have you arrested for trying to deceive a guard of the realm, but instead I’ll let you pay 10 gold to allow you all through. And that’s 10 gold each person.",
                            options: [
                                { id: "snowGate0323F1", text: "Fine! Here’s your gold…(asshole) (Pay 10 gp)" },
                                { id: "snowGate0323F2", text: "I’m not paying you anything!" },
                            ]
                        },
                            snowGate0323F1: {
                                title: "Ralof",
                                header: "That’s more like it. Go on in before I change my mind.",
                                options: [
                                    { id: "goodbye", text: "End", goBack: true }
                                ]
                            },
                            snowGate0323F2: {
                                title: "Ralof",
                                header: "Then you better turn around and go back to where you came from.",
                                options: [
                                    { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                    { id: "goodbye", text: "Goodbye.", goBack: true }
                                ]
                            },
                        snowGate0324Success: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "SUCCESS: Oh! By the gods! You’re right! What am I good for if I can’t even do this simple job right.",
                                "You have done me a great service. Once my shift is done, I shall go home and rethink my life. Here, let me get the gate for you. It’s the least I can do.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0324Failed: {
                            title: "Ralof",
                            header: "FAIL: Or maybe you and your friends need to smarten up and pay your way into Earthrim. That will be 10 gold for each of you by the way.",
                            options: [
                                { id: "snowGate0324F1", text: "Fine! Here’s your gold…(asshole) (Pay 10 gp)" },
                                { id: "snowGate0324F2", text: "I’m not paying you anything!" },
                            ]
                        },
                            snowGate0324F1: {
                                title: "Ralof",
                                header: "That’s more like it. Go on in before I change my mind.",
                                options: [
                                    { id: "goodbye", text: "End", goBack: true }
                                ]
                            },
                            snowGate0324F2: {
                                title: "Ralof",
                                header: "Then you better turn around and go back to where you came from.",
                                options: [
                                    { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                    { id: "goodbye", text: "Goodbye.", goBack: true }
                                ]
                            },
                    snowGate033: {
                        title: "Ralof",
                        header: "Well, you don’t have to be so insulting about it. Then if you’re not who I am expecting, who are you?",
                        options: [
                            { id: "snowGate0331", text: "We are adventurers wishing to gain entry into Earthrim for more adventures." },
                            { id: "snowGate0332", text: "None of your business." }
                        ]
                    },
                        snowGate0331: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "Ah! Adventurers are always welcome here. Plenty of adventuring in this realm.",
                                "Here, let me get the gate for you.",
                                "Ralof proceeds to open the gate. The gate opens",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0332: {
                            title: "Ralof",
                            header: "I’m the gatekeeper to the whole country of Earthrim. So it is my business. Now, who are you!",
                            options: [
                                { id: "snowGate03321", text: "We are adventurers wishing to gain entry into Earthrim for more adventures." },
                                { id: "snowGate03321", text: "We are simple travelers. Earthrim is our next destination." },
                                { id: "snowGate03321", text: "We are seeking the finest mead and getting shit-faced." },
                                { id: "snowGate03322", text: "We are criminals seeking riches and bitches!" },
                            ]
                        },
                            snowGate03321: {
                                title: "Ralof",
                                header: "Opening line for fallback (optional when using earthrimSequence).",
                                earthrimSequence: [
                                    "Was that so hard. Geez people like you all mess with me and it gets on my nerves.",
                                    "(Ralof proceeds to open the gate. The gate opens)",
                                    "Get out of my sights and annoy someone else in Earthrim."
                                ],
                                options: [
                                    { id: "goodbye", text: "End", goBack: true }
                                ]
                            },
                            snowGate03322: {
                                title: "Ralof",
                                header: "Then I’ll make sure you don’t set one foot in our country!(roll initiative)",
                                options: [
                                    { id: "goodbye", text: "End", goBack: true }
                                ]
                            },
                //#endregion
                //#region snowGate04 branch
                snowGate04: {
                    title: "Ralof",
                    header: "I’m Ralof. Gatekeeper of Earthrim. And judging by your answer, you’re not the one I thought you were. Not very nice it seems either.",
                    options: [
                        { id: "snowGate041", text: "My apologies." },
                        { id: "snowGate042", text: "I don’t get paid to be nice." },
                        { id: "snowGate043", text: "Nice to meet you, Ralof." },
                    ]
                },
                    snowGate041: {
                        title: "Ralof",
                        header: "I accept your apology. Now tell me, who are you?",
                        options: [
                            { id: "snowGate0411", text: "We are adventurers wishing to gain entry into Earthrim for more adventures." },
                            { id: "snowGate0412", text: "We are simple travelers making our way through the realm. Earthrim is our next destination." },
                            { id: "snowGate0413", text: "We are seeking the finest mead and getting shit-faced." },
                            { id: "snowGate0414", text: "We are criminals seeking riches and bitches!" }
                        ]
                    },
                        snowGate0411: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Earthrim has many adventures with glory and riches awaiting you. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0412: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0413: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "As long as you don't cause trouble, travelers are welcome to the mead of the Earthrim people. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0414: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "Then I'll make sure you don't set one foot in our country!",
                                "(roll initiative)"
                            ],
                            options: [
                                { id: "goodbye", text: "Roll initiative", goBack: true }
                            ]
                        },

                    snowGate042: {
                        title: "Ralof",
                        header: "But it is a common courtesy. Especially from one who controls whether you can come into Earthrim or not.",
                        options: [
                            { id: "snowGate041", text: "My apologies." },
                            { id: "snowGate0421", text: "That costs extra." },
                            { id: "snowGate0422", text: "If you want nice, bring me a mug of ale and suck- (you really should stop talking)" }
                        ]
                    },
                        snowGate0421: {
                            title: "Ralof",
                            header: "Very well then! It's 10 gold if you want entry into Earthrim. Oh! And that's 10 gold for each of you!",
                            options: [
                                { id: "snowGate04211", text: "Fine! Here's your gold…(asshole) \n (Pay 10 gp)" },
                                { id: "snowGate04221", text: "I'm not paying you anything!" }
                            ]
                        },
                            snowGate04211: {
                                title: "Ralof",
                                header: "That's more like it. Go on in before I change my mind.",
                                options: [
                                    { id: "goodbye", text: "End", goBack: true }
                                ]
                            },
                            snowGate04221: {
                                title: "Ralof",
                                header: "Then you better turn around and go back to where you came from.",
                                options: [
                                    { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                    { id: "goodbye", text: "Goodbye.", goBack: true }
                                ]
                            },
                        snowGate0422: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "How dare you! You wretched, disgusting, foul mouthed, bastard. Try that speech with the gods when I deliver you to them!",
                                "(roll initiative)"
                            ],
                            options: [
                                { id: "goodbye", text: "Roll initiative", goBack: true }
                            ]
                        },

                    snowGate043: {
                        title: "Ralof",
                        header: "Uh. What? Is this some kind of joke?",
                        options: [
                            { id: "snowGate0431", text: "Not at all" },
                            { id: "snowGate0432", text: "You bet it is!" }
                        ]
                    },
                        snowGate0431: {
                            title: "Ralof",
                            header: "Whatever it is you're playing at, it's not funny. State your purpose for entry into Earthrim.",
                            options: [
                                { id: "snowGate04311", text: "To serve the realm and the people" },
                                { id: "snowGate04312", text: "For glory and riches!" },
                                { id: "snowGate04313", text: "To enjoy your mead to the point we can't stand the next day." },
                                { id: "snowGate04314", text: "To bring destruction and death!" },
                                { id: "snowGate04315", text: "We are simply travelers making our way through the realm." }
                            ]
                        },
                            snowGate04311: {
                                title: "Ralof",
                                header: "Opening line for fallback (optional when using earthrimSequence).",
                                earthrimSequence: [
                                    "You have a strange way of showing it. Alright you can enter though if your words get you all into trouble, that's your problem to deal with.",
                                    "(Ralof proceeds to open the gate. The gate opens.)",
                                    "Go on now."
                                ],
                                options: [
                                    { id: "goodbye", text: "End", goBack: true }
                                ]
                            },
                            snowGate04312: {
                                title: "Ralof",
                                header: "Yeah, you look the type. Couple of greedy assholes looking to fill their pockets. Well then, if you want entry, it's going to cost you. 10 gold each of you.",
                                options: [
                                    { id: "snowGate043121", text: "Fine! Here's your gold…(asshole) \n (Pay 10 gp)" },
                                    { id: "snowGate043122", text: "I'm not paying you anything!" }
                                ]
                            },
                            snowGate04313: {
                                title: "Ralof",
                                header: "Of course. Couple of assholes who want to take Earthrim for granted and be a nuisance to the good people. Fine you want in, it'll be 10 gold. For each of you.",
                                options: [
                                    { id: "snowGate043121", text: "Fine! Here's your gold…(asshole) \n (Pay 10 gp)" },
                                    { id: "snowGate043122", text: "I'm not paying you anything!" }
                                ]
                            },
                                snowGate043121: {
                                    title: "Ralof",
                                    header: "That's more like it. Go on in before I change my mind.",
                                    options: [
                                        { id: "goodbye", text: "End", goBack: true }
                                    ]
                                },
                                snowGate043122: {
                                    title: "Ralof",
                                    header: "Then you better turn around and go back to where you came from.",
                                    options: [
                                        { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                        { id: "goodbye", text: "Goodbye.", goBack: true }
                                    ]
                                },
                            snowGate04314: {
                                title: "Ralof",
                                header: "Dialogue here (optional when using earthrimSequence).",
                                earthrimSequence: [
                                    "You dare to bring harm to my people. Then I shall put you down!",
                                    "(Ralof draws his sword. Roll initiative)"
                                ],
                                options: [
                                    { id: "goodbye", text: "Roll initiative", goBack: true }
                                ]
                            },
                            snowGate04315: {
                                title: "Ralof",
                                header: "Opening line for fallback (optional when using earthrimSequence).",
                                earthrimSequence: [
                                    "Fine. Travel the lands and try not to get yourselves killed.",
                                    "(Ralof proceeds to open the gate. The gate opens.)",
                                    "Go on now."
                                ],
                                options: [
                                    { id: "goodbye", text: "End", goBack: true }
                                ]
                            },

                        snowGate0432: {
                            title: "Ralof",
                            header: "I don't find it funny. You better state your purpose for entry into Earthrim before I decide to lock the gate permanently.",
                            options: [
                                { id: "snowGate04321", text: "Shagging your mother (really? That's the choice you went with)" },
                                { id: "snowGate04322", text: "Riches and bitches!" },
                                { id: "snowGate04322", text: "Get shitfaced with your wondrous mead!" },
                                { id: "snowGate04323", text: "We are servants of the great lord, Asmodeus. We will spread his word and his will throughout this land!" }
                            ]
                        },
                            snowGate04321: {
                                title: "Ralof",
                                header: "Dialogue here (optional when using earthrimSequence).",
                                earthrimSequence: [
                                    "You dare say such things to me. The Gods will understand when I send you to them!",
                                    "(Ralof draws his sword. Roll initiative)"
                                ],
                                options: [
                                    { id: "goodbye", text: "Roll initiative", goBack: true }
                                ]
                            },
                            snowGate04322: {
                                title: "Ralof",
                                header: "Yeah, you look the type. Couple of greedy assholes looking to fill their pockets. Well then, if you want entry, it's going to cost you. 10 gold each of you.",
                                options: [
                                    { id: "snowGate043221", text: "Fine! Here's your gold…(asshole) \n (Pay 10 gp)" },
                                    { id: "snowGate043222", text: "I'm not paying you anything!" }
                                ]
                            },
                                snowGate043221: {
                                    title: "Ralof",
                                    header: "That's more like it. Go on in before I change my mind.",
                                    options: [
                                        { id: "goodbye", text: "End", goBack: true }
                                    ]
                                },
                                snowGate043222: {
                                    title: "Ralof",
                                    header: "Then you better turn around and go back to where you came from.",
                                    options: [
                                        { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                        { id: "goodbye", text: "Goodbye.", goBack: true }
                                    ]
                                },
                            snowGate04323: {
                                title: "Ralof",
                                header: "Dialogue here (optional when using earthrimSequence).",
                                earthrimSequence: [
                                    "You dare to bring harm to my people. Then I shall put you down!",
                                    "(Ralof draws his sword. Roll initiative)"
                                ],
                                options: [
                                    { id: "goodbye", text: "Roll initiative", goBack: true }
                                ]
                            },
                //#endregion
                //#region snowGate05 branch
                snowGate05: {
                    title: "Ralof",
                    header: "The Stonemoure. The people to the northwest. If you have no idea what I'm talking about I must have you mistaken.",
                    options: [
                        { id: "snowGate051", text: "It's alright." },
                        { id: "snowGate052", text: "Man you're stupid." },
                        { id: "snowGate053", text: "Who are the Stonemoure?" }
                    ]
                },
                    snowGate051: {
                        title: "Ralof",
                        header: "Sorry about that. Anyways, who are you all? What's your business coming to Earthrim?",
                        options: [
                            { id: "snowGate0511", text: "To serve the realm and the people" },
                            { id: "snowGate0512", text: "For glory and riches!" },
                            { id: "snowGate0513", text: "To bring destruction and death!" },
                            { id: "snowGate0514", text: "We are simply travelers making our way through the realm." },
                            { id: "snowGate0515", text: "To drink mead and party" }
                        ]
                    },
                        snowGate0511: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. And a noble one at that too. Earthrim could certainly use people like you. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0512: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Earthrim has many adventures with glory and riches awaiting you. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0513: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "You dare to bring harm to my people. Then I shall put you down!",
                                "(Ralof draws his sword. Roll initiative)"
                            ],
                            options: [
                                { id: "goodbye", text: "Roll initiative", goBack: true }
                            ]
                        },
                        snowGate0514: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0515: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },

                    snowGate052: {
                        title: "Ralof",
                        header: "Oh I'm stupid, am I? Well then, if you want entry into Earthrim, it'll be 10 gold for each of you.",
                        options: [
                            { id: "snowGate0521", text: "Fine! Here's your gold…(asshole) \n (Pay 10 gp)" },
                            { id: "snowGate0522", text: "I'm not paying you anything!" }
                        ]
                    },
                        snowGate0521: {
                            title: "Ralof",
                            header: "That's more like it. Go on in before I change my mind.",
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0522: {
                            title: "Ralof",
                            header: "Then you better turn around and go back to where you came from.",
                            options: [
                                { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                { id: "goodbye", text: "Goodbye.", goBack: true }
                            ]
                        },

                    snowGate053: {
                        title: "Ralof",
                        header: "",
                        earthrimSequence: [
                            "The Stonemoure are the tribe who rule the northwest of Earthrim. Their rivals are the Frostmoure to the southeast.",
                            "They're the tribe that rules the southwest. Both sides have been at each other's throats since I can remember.",
                        ],
                        options: [
                            { id: "snowGate0531", text: "We're just simply traveling through the land." },
                            { id: "snowGate0532", text: "What's the conflict about?" },
                            { id: "snowGate0533", text: "I'm done hearing about Stonemoure and Frostmoure." }
                        ]
                    },
                        snowGate0531: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "Ah, well you ought to be careful traveling through Earthrim regardless.",
                                "Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0532: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "From what I heard it was something with their previous leaders having a feud that resulted in their deaths.",
                                "Or one of them was framed and the other was imprisoned. I don't really remember and honestly I don't think they do anymore."
                            ],
                            options: [
                                { id: "snowGate05321", text: "How would I get to Stonemoure?" },
                                { id: "snowGate05322", text: "How would I get to Frostmoure?" },
                                { id: "snowGate0533", text: "I would like to go forth into Earthrim." }
                            ]
                        },
                            snowGate05321: {
                                title: "Ralof",
                                header: "Make your way to White Rock then take the path to the west. It will eventually take you to Stonemoure.",
                                options: [
                                    { id: "snowGate0533", text: "Thank you. I would like to go forth into Earthrim." }
                                ]
                            },
                            snowGate05322: {
                                title: "Ralof",
                                header: "Make your way to White Rock then take the path to the east. It will eventually take you to Frostmoure.",
                                options: [
                                    { id: "snowGate0533", text: "Thank you. I would like to go forth into Earthrim." }
                                ]
                            },
                        snowGate0533: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "Of course. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                //#endregion
                //#region snowGate06 branch
                snowGate06: {
                    title: "Ralof",
                    header: "Dialogue here (optional when using earthrimSequence).",
                    earthrimSequence: [
                        "(Ralof draws his sword.)",
                        "You better choose your next words very carefully."
                    ],
                    options: [
                        { id: "snowGate061", text: "Woah! It was a joke!" },
                        { id: "snowGate062", text: "Did I stutter…" },
                        {
                            id: "snowGate0623",
                            text: "Vicious Mockery roll (spell required)",
                            check: {
                                prompt: "Roll for Vicious Mockery...",
                                successId: "snowGate0623SUCCESS",
                                failureId: "snowGate0623FAIL"
                            }
                        },
                        { id: "snowGate065", text: "(Roll for initiative)" }
                    ]
                },
                    snowGate061: {
                        title: "Ralof",
                        header: "You certainly like to play with fire. Tell me your reason for wanting entry into Earthrim?",
                        options: [
                            { id: "snowGate0611", text: "To serve the realm and the people" },
                            { id: "snowGate0612", text: "For glory and riches!" },
                            { id: "snowGate0613", text: "To bring destruction and death!" },
                            { id: "snowGate0614", text: "We are simply travelers making our way through the realm." },
                            { id: "snowGate0615", text: "To drink mead and party" }
                        ]
                    },
                        snowGate0611: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Though you certainly like to poke the bear. A word of warning, that kind of humor will get you killed. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0612: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Earthrim has many adventures with glory and riches awaiting you. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0613: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "You dare to bring harm to my people. Then I shall put you down!",
                                "(Ralof draws his sword. Roll initiative)"
                            ],
                            options: [
                                { id: "goodbye", text: "Roll initiative", goBack: true }
                            ]
                        },
                        snowGate0614: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0615: {
                            title: "Ralof",
                            header: "Opening line for fallback (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's good enough of a reason for me. Let me get the gate open for you.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on in. The winds of Earthrim welcome you home."
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },

                    snowGate062: {
                        title: "Ralof",
                        header: "Oh you son of a…give me one reason why I shouldn't crush you right now!?",
                        options: [
                            { id: "snowGate0621", text: "Again, did I stutter…" },
                            {
                                id: "snowGate0622",
                                text: "The King sent me to Earthrim. (Deception)",
                                check: {
                                    prompt: "Roll for deception...",
                                    successId: "snowGate0622SUCCESS",
                                    failureId: "snowGate0622FAIL"
                                }
                            },
                            {
                                id: "snowGate0623b",
                                text: "I could either kill you or let you live and give you a chance to grow some balls. (Intimidate)",
                                check: {
                                    prompt: "Roll for intimidation...",
                                    successId: "snowGate0623SUCCESS",
                                    failureId: "snowGate0623FAIL"
                                }
                            }
                        ]
                    },
                        snowGate0621: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "That's it! Get ready to meet the Gods!",
                                "(roll initiative)"
                            ],
                            options: [
                                { id: "goodbye", text: "Roll initiative", goBack: true }
                            ]
                        },
                        snowGate0622SUCCESS: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "Alright. Be lucky that the king likes you enough that I can't just outright kill you today. You're lucky this time.",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on now!"
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0622FAIL: {
                            title: "Ralof",
                            header: "Ha! You think you're the first person to try and say they have the King's blessing? Tell you what, you want in? It'll cost you 10 gold, for each of you!",
                            options: [
                                { id: "snowGate0622F1", text: "Fine! Here's your gold…(asshole) \n (Pay 10 gp)" },
                                { id: "snowGate0622F2", text: "I'm not paying you anything!" }
                            ]
                        },
                            snowGate0622F1: {
                                title: "Ralof",
                                header: "That's more like it. Go on in before I change my mind.",
                                options: [
                                    { id: "goodbye", text: "End", goBack: true }
                                ]
                            },
                            snowGate0622F2: {
                                title: "Ralof",
                                header: "Then you better turn around and go back to where you came from.",
                                options: [
                                    { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                                    { id: "goodbye", text: "Goodbye.", goBack: true }
                                ]
                            },
                        snowGate0623SUCCESS: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "Ok! Ok! Save that for monsters you find in these lands. I'll open the gate, just leave me alone!",
                                "(Ralof proceeds to open the gate. The gate opens.)",
                                "Go on now!"
                            ],
                            options: [
                                { id: "goodbye", text: "End", goBack: true }
                            ]
                        },
                        snowGate0623FAIL: {
                            title: "Ralof",
                            header: "Dialogue here (optional when using earthrimSequence).",
                            earthrimSequence: [
                                "You think that scares me! Let my blade send you to the Gods!",
                                "(roll initiative)"
                            ],
                            options: [
                                { id: "goodbye", text: "Roll initiative", goBack: true }
                            ]
                        },
                    snowGate065: {
                        title: "Ralof",
                        header: "Dialogue here (optional when using earthrimSequence).",
                        earthrimSequence: [
                            "(Ralof draws his sword. Roll initiative)"
                        ],
                        options: [
                            { id: "goodbye", text: "Roll initiative", goBack: true }
                        ]
                    },
                
    //#endregion

    //#region Pay Gold Conversation after refusing beforehand
        snowGatePayGoldChangeMind: {
            title: "Ralof",
            header: "Back again eh! Are you gonna pay this time?",
            options: [
                { id: "snowGatePayGoldAccept", text: "Fine! Here's your gold... (asshole) (Pay 10 gold)" },
                { id: "snowGatePayGoldRefuse", text: "I’m not paying you anything!" },
                { id: "goodbye", text: "Goodbye", goBack: true }
            ]
        },
            snowGatePayGoldAccept: {
                title: "Ralof",
                header: `Dialogue`,
                earthrimSequence: [
                    "That's more like it. Go on in before I change my mind.",
                    "(Ralof proceeds to open the gate. The gate opens.)"
                ],
                options: [
                    { id: "goodbye", text: "Goodbye", goBack: true }
                ]
            },
            snowGatePayGoldRefuse: {
                title: "Ralof",
                header: "Then you better turn around and go back to where you came from.",
                options: [
                    { id: "snowGatePayGoldChangeMind", text: "(Talk to Ralof again)" },
                    { id: "goodbye", text: "Goodbye.", goBack: true }
                ]
            },
    //#endregion

//#endregion

    //#region White Rock
    locationWhiteRock: {
        header: "You are in White Rock. Which location are you in?",
        options: [
            { id: "whiteRockStreets", text: "Streets" },
            // Major Locations
            { id: "whiteRockWhiteKeep", text: "White Keep" },
            { id: "whiteRockStables", text: "Stables" },
            { id: "whiteRockCarriageLodge", text: "Carriage Lodge" },
            { id: "whiteRockSilverStagInn", text: "The Silver Stag Inn" },
            { id: "whiteRockTempleOfDawnfire", text: "Temple of Dawnfire" },
            { id: "whiteRockRangersLodge", text: "Ranger's Lodge" },
            { id: "whiteRockScholarsArchive", text: "Scholar's Archive" },
            { id: "whiteRockBarracks", text: "Barracks" },
            { id: "whiteRockTownSquare", text: "Town Square" },
            { id: "whiteRockGildedKnuckle", text: "The Gilded Knuckle" },
            { id: "whiteRockCrackedAnvil", text: "The Cracked Anvil" },
            { id: "whiteRockBloodHuntersHut", text: "BloodHunter's Hut" },
            { id: "whiteRockMonksGazebo", text: "Monk's Gazebo" },
            { id: "whiteRockGardens", text: "Gardens" },
            // Shops
            { id: "whiteRockAdventurersTrinkets", text: "Adventurer's Trinkets" },
            { id: "whiteRockDizzyNeedle", text: "Dizzy Needle" },
            { id: "whiteRockGeneralGoodsStore", text: "General Goods Store" },
            { id: "whiteRockSpellsAndBottles", text: "Spells & Bottles" },
            { id: "whiteRockCarvedRoot", text: "The Carved Root" },
            { id: "whiteRockThornsideApothecary", text: "Thornside Apothecary" },
            { id: "whiteRockBrassGear", text: "The Brass Gear" },
            { id: "whiteRockPlateauPawnAndTrade", text: "Plateau Pawn & Trade" },
            { id: "whiteRockStonecloakLeatherworks", text: "Stonecloak Leatherworks" },
            { id: "whiteRockCandleAndCask", text: "The Candle & Cask" },
            // Houses
            { id: "whiteRockHouse01", text: "House 1" },
            { id: "whiteRockHouse02", text: "House 2" },
            { id: "whiteRockHouse03", text: "House 3" },
            { id: "whiteRockHouse04", text: "House 4" },
            { id: "whiteRockHouse05", text: "House 5" },
            { id: "whiteRockHouse06", text: "House 6" },
            { id: "whiteRockHouse07", text: "House 7" },
            { id: "whiteRockHouse08", text: "House 8" },
            { id: "whiteRockHouse09", text: "House 9" },
            { id: "whiteRockHouse10", text: "House 10" },
            { id: "whiteRockHouse11", text: "House 11" },
            { id: "whiteRockHouse12", text: "House 12" },
            { id: "whiteRockHouse13", text: "House 13" },
            { id: "whiteRockHouse14", text: "House 14" },
            { id: "whiteRockHouse15", text: "House 15" },
            { id: "whiteRockHouse16", text: "House 16" }
        ]   
    },
    //#region White Rock Streets
        whiteRockStreets: {
            header: "You are in the Streets of White Rock. Who are you talking to?",
            options: [
                { id: "earthrimTownGuard", text: "Town Guard" },
                { id: "whiteRock_Greg_0", text: "Greg" },
            ]
        },
            whiteRock_Greg_0: {
                title: "Greg",
                header: "Test opening line.",
                earthrimSequence: [
                    "Ah! Hello, adventurers! You made it! Welcome to White Rock!",
                    "Earthrim has no shortage of adventure and White Rock serves wonderfully as a home away from home.",
                    "What can I do for you?"
                ],
                options: [
                    { id: "whiteRock_Greg_01", text: "We've arrived in White Rock like you requested." },
                    { id: "rumors", text: "Rumors" },
                    { id: "goodbye", text: "Goodbye.", goBack: true }
                ]
            },
                whiteRock_Greg_01: {
                    title: "Greg",
                    header: "Dialogue Line (optional when using earthrimSequence).",
                    earthrimSequence: [
                        "And you made it! It warms my heart that you arrived.",
                        "And now that you're here, it's time to get down to business. I have a new quest for you from the King himself.",
                        "Bring me back three Earthrim Quest Completion Tokens and I will reward you handsomely.", 
                        "You can find these tokens by completing quests in Earthrim.",
                        "I wish you luck adventurers. It was great to see you again. I hope to see you again soon."
                    ],
                    options: [
                        { id: "rumors", text: "Rumors" },
                        { id: "goodbye", text: "Goodbye.", goBack: true }
                    ]
                },
            
    //#endregion
    //#region White Keep
    whiteRockWhiteKeep: {
        header: "You are in the White Keep. Who are you talking to?",
        options: [
            { id: "earthrimTownGuard", text: "Town Guard" },
            { id: "whiteRock_Jarl_0", text: "Jarl Alrik Stonebrow" },
            { id: "whiteRock_CalanthaSunleaf_N0", text: "Calantha Sunleaf (Cleric Trainer) 🌙" },
            { id: "whiteRock_NyxDarkveil_N0", text: "Nyx Darkveil (Warlock Trainer) 🌙" },
            { id: "whiteRock_DariusFireblood_N0", text: "Darius Fireblood (Sorcerer Trainer) 🌙" },
            { id: "whiteRock_EldrinNightshade_N0", text: "Eldrin Nightshade (Wizard Trainer) 🌙" },
            { id: "whiteRock_Pava_N0", text: "Archivist Pava 🌙" },
            { id: "whiteRock_OrinBarkheart_N0", text: "Orin Barkheart (Druid Trainer) 🌙" },
            { id: "whiteRock_SunMei_N0", text: "Sun Mei (Monk Trainer) 🌙" },
            { id: "whiteRock_VesperaNightingale_N0", text: "Vespera Nightingale (Bard Trainer) 🌙" },
            { id: "whiteRock_ThaliorDawnbringer_D0", text: "Thalior Dawnbringer (Paladin Trainer) ☀️" },
        ]
    },
        //#region Jarl Alrik Stonebrow
        whiteRock_Jarl_0: {
            title: "Jarl Alrik Stonebrow",
            header: "White Rock has stood through worse than a quiet season. Speak your business, traveler. I don't often have the luxury of idle conversation.",
            options: [
                { id: "whiteRock_Jarl_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
        //#region Calantha Sunleaf
        whiteRock_CalanthaSunleaf_N0: {
            title: "Calantha Sunleaf",
            header: "Faith and discipline both take practice. If you've come seeking one, I hope you've the patience for both.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Nyx Darkveil
        whiteRock_NyxDarkveil_N0: {
            title: "Nyx Darkveil",
            header: "Every bargain has a price. Mine included. What is it you're after?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Darius Fireblood
        whiteRock_DariusFireblood_N0: {
            title: "Darius Fireblood",
            header: "Power finds those who reach for it and burns the rest. Which are you, I wonder?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Eldrin Nightshade
        whiteRock_EldrinNightshade_N0: {
            title: "Eldrin Nightshade",
            header: "Mm. A visitor. Give me a moment - or don't, and I'll simply notice you eventually.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Archivist Pava
        whiteRock_Pava_N0: {
            title: "Archivist Pava",
            header: "Everything has a place. If Renn sent you back here confused, I promise it's not contagious.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Orin Barkheart
        whiteRock_OrinBarkheart_N0: {
            title: "Orin Barkheart",
            header: "The land remembers longer than any of us. Sit a while, if you've the patience to listen to it.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Sun Mei
        whiteRock_SunMei_N0: {
            title: "Sun Mei",
            header: "Stillness first. Then conversation. You've caught me between the two - lucky for you.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
            whiteRock_VesperaNightingale_N0: {
            title: "Vespera Nightingale",
            header: "Every song is a story someone was afraid to just say plainly. Care to hear one, or would you rather make one of your own?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#region Thalior Dawnbringer
        whiteRock_ThaliorDawnbringer_D0: {
            title: "Thalior Dawnbringer",
            header: "A paladin's oath is not sworn once — it's kept every day. Have you come to understand the difference?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

    //#endregion

    //#region Stables
    whiteRockStables: {
        header: "You are at the Stables. Who are you talking to?",
        options: [
            { id: "earthrimTownGuard", text: "Town Guard" },
            { id: "whiteRock_Wrek_0", text: "Wrek the Stablemaster" },
        ]
    },
        //#region Wrek
        whiteRock_Wrek_0: {
            title: "Wrek",
            header: "Stables are stables. Don't mind the animals - they've got their quirks, same as anybody. Need a mount, or just passing through?",
            options: [
                { id: "whiteRock_Wrek_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region The Silver Stag Inn
    silverStagInn: {
        header: "You are in the Silver Stag Inn. Who are you talking to?",
        options: [
            { id: "earthrimTownGuard", text: "Town Guard" },
            { id: "whiteRock_MiraCallowen_0", text: "Mira Callowen" },
            { id: "whiteRock_AldricBrome_D0", text: "Aldric Brome ☀️" },
            { id: "whiteRock_FenwickLarks_0", text: "Fenwick Larks" },
            { id: "whiteRock_DollaVine_D0", text: "Dolla Vine ☀️" },
            { id: "whiteRock_Rowan_0", text: "Rowan" },
            { id: "whiteRock_VesperaNightingale_D0", text: "Vespera Nightingale (Bard Trainer) ☀️" },
        ]
    },
        //#region Mira Callowen
        whiteRock_MiraCallowen_0: {
            title: "Mira Callowen",
            header: "Welcome to the Silver Stag. Drink, room, or information - I deal in all three, though the last one costs the most.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Aldric Brome
        whiteRock_AldricBrome_D0: {
            title: "Aldric Brome",
            header: "Evening. Or morning, depending how your night's gone. What'll it be?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Fenwick Larks
        whiteRock_FenwickLarks_0: {
            title: "Fenwick Larks",
            header: "Ah, an audience! Don't suppose you'd care to cover my tab in exchange for a request?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Dolla Vine
        whiteRock_DollaVine_D0: {
            title: "Dolla Vine",
            header: "Busy night. Grab a seat if you can find one - I'll be around.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Rowan
        whiteRock_Rowan_0: {
            title: "Rowan",
            header: "Need something carried, fetched, or delivered? I do odd jobs. Cheap, too - well, cheap-ish.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Vespera Nightingale
        whiteRock_VesperaNightingale_D0: {
            title: "Vespera Nightingale",
            header: "Every song is a story someone was afraid to just say plainly. Care to hear one, or would you rather make one of your own?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Temple of Dawnfire
     whiteRockTempleOfDawnfire: {
        header: "You are in the Temple of Dawnfire. Who are you talking to?",
        options: [
            { id: "whiteRock_BrotherTalan_0", text: "Brother Talan" },
            { id: "whiteRock_SisterAuna_0", text: "Sister Auna" },
            { id: "whiteRock_NoviceBrek_0", text: "Novice Brek" },
            { id: "whiteRock_CalanthaSunleaf_D0", text: "Calantha Sunleaf (Cleric Trainer) ☀️" },
            { id: "whiteRock_NyxDarkveil_D0", text: "Nyx Darkveil (Warlock Trainer) ☀️" },
        ]
    },
        //#region Brother Talan
        whiteRock_BrotherTalan_0: {
            title: "Brother Talan",
            header: "Dawnfire's light finds you, traveler. Forgive me, I find it easier to restart than to lose my place. What brings you to the temple?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Sister Auna
        whiteRock_SisterAuna_0: {
            title: "Sister Auna",
            header: "If you're hurt, sit. If you're not, you're welcome regardless.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Novice Brek
        whiteRock_NoviceBrek_0: {
            title: "Novice Brek",
            header: "Oh! Sorry - didn't hear you come in. Is there, um, something I can help with? I'm still new, but I'll try.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Calantha Sunleaf
        whiteRock_CalanthaSunleaf_D0: {
            title: "Calantha Sunleaf",
            header: "Faith and discipline both take practice. If you've come seeking one, I hope you've the patience for both.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Nyx Darkveil
        whiteRock_NyxDarkveil_D0: {
            title: "Nyx Darkveil",
            header: "Every bargain has a price. Mine included. What is it you're after?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Ranger's Lodge
   whiteRockRangersLodge: {
        header: "You are in the Ranger's Lodge. Who are you talking to?",
        options: [
            { id: "whiteRock_EliraWindshot_0", text: "Elira Windshot" },
            { id: "whiteRock_GrettaTheGrim_0", text: "Gretta the Grim" },
            { id: "whiteRock_SornIreback_0", text: "Sorn Ireback" },
            { id: "whiteRock_PellThornwick_0", text: "Pell Thornwick" },
            { id: "whiteRock_DavenQuarrel_0", text: "Daven Quarrel" },
            { id: "whiteRock_KendraWildfoot_0", text: "Kendra Wildfoot (Ranger Trainer)" },
            { id: "whiteRock_BranAshfoot_D0", text: "Bran Ashfoot ☀️" },
            { id: "whiteRock_YulaOfTheNorthernPeaks_D0", text: "Yula of the Northern Peaks ☀️" },
        ]
    },
        //#region Elira Windshot
        whiteRock_EliraWindshot_0: {
            title: "Elira Windshot",
            header: "You've the look of someone who wants something. Speak plain - we don't stand on ceremony here.",
            options: [
                { id: "whiteRock_EliraWindshot_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Gretta the Grim
        whiteRock_GrettaTheGrim_0: {
            title: "Gretta the Grim",
            header: "Come to trade stories, or just to gawk at the trophies? Either's fine. Mind the bear head. It's watching.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Sorn Ireback
        whiteRock_SornIreback_0: {
            title: "Sorn Ireback",
            header: "Hah! New face. Sit, eat, don't take the seat at the head of the table - that one's earned.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Pell Thornwick
        whiteRock_PellThornwick_0: {
            title: "Pell Thornwick",
            header: "Oh - hi! I'm still an apprentice here, so I probably can't help with much, but I can point you toward someone who can!",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Daven Quarrel
        whiteRock_DavenQuarrel_0: {
            title: "Daven Quarrel",
            header: "Caught me between trips. Don't get comfortable expecting that twice.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Kendra Wildfoot
        whiteRock_KendraWildfoot_0: {
            title: "Kendra Wildfoot",
            header: "Looking to learn the bow, or just admiring the trophies like everyone else?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Bran Ashfoot
        whiteRock_BranAshfoot_D0: {
            title: "Bran Ashfoot",
            header: "Lodge business, or are you here to marvel at my collection? Either's a fine reason to stop by.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Yula of the Northern Peaks
        whiteRock_YulaOfTheNorthernPeaks_D0: {
            title: "Yula of the Northern Peaks",
            header: "The peaks taught me not to trust quiet moments. What do you need?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Scholar's Archive
    whiteRockScholarsArchive: {
        header: "You are in the Scholar's Archive. Who are you talking to?",
        options: [
            { id: "whiteRock_Renn_0", text: "Old Scribe Renn" },
            { id: "whiteRock_Pava_D0", text: "Archivist Pava ☀️" },
            { id: "whiteRock_DariusFireblood_D0", text: "Darius Fireblood (Sorcerer Trainer) ☀️" },
            { id: "whiteRock_EldrinNightshade_D0", text: "Eldrin Nightshade (Wizard Trainer) ☀️" },
        ]
    },
        //#region Old Scribe Renn
        whiteRock_Renn_0: {
            title: "Old Scribe Renn",
            header: "Ah. Another one arrives right on schedule. Isn't that curious. What can this old archive do for you?",
            options: [
                { id: "whiteRock_Renn_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Archivist Pava
        whiteRock_Pava_D0: {
            title: "Archivist Pava",
            header: "Everything has a place. If Renn sent you back here confused, I promise it's not contagious.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Darius Fireblood
        whiteRock_DariusFireblood_D0: {
            title: "Darius Fireblood",
            header: "Power finds those who reach for it and burns the rest. Which are you, I wonder?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Eldrin Nightshade
        whiteRock_EldrinNightshade_D0: {
            title: "Eldrin Nightshade",
            header: "Mm. A visitor. Give me a moment - or don't, and I'll simply notice you eventually.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Barracks
    whiteRockBarracks: {
        header: "You are in the Barracks. Who are you talking to?",
        options: [
            { id: "earthrimTownGuard", text: "Town Guard" },
            { id: "whiteRock_SergeantDorva_0", text: "Sergeant Dorva" },
            { id: "whiteRock_CaptainTharic_0", text: "Captain Tharic" },
        ]
    },
        //#region Sergeant Dorva
        whiteRock_SergeantDorva_0: {
            title: "Sergeant Dorva",
            header: "If you're here to enlist, talk to the Captain. If you're here to cause trouble, don't.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Captain Tharic
        whiteRock_CaptainTharic_0: {
            title: "Captain Tharic",
            header: "State your business. We run tight here, and I don't have patience for wasted time.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Town Square
    whiteRockTownSquare: {
        header: "You are in the Town Square. Who are you talking to?",
        options: [
            { id: "earthrimTownGuard", text: "Town Guard" },
            { id: "whiteRock_Boros_0", text: "Brave Sir Boros" },
            { id: "whiteRock_TomasGreel_D0", text: "Tomas Greel ☀️" },
            { id: "whiteRock_OswinCopperkettle_D0", text: "Oswin Copperkettle ☀️" },
            { id: "whiteRock_NessaFelt_D0", text: "Nessa Felt ☀️" },
            { id: "whiteRock_Garka_D0", text: "Garka ☀️" },
            { id: "whiteRock_AldousPell_D0", text: "Aldous Pell ☀️" },
            { id: "whiteRock_Syra_D0", text: "Syra ☀️" },
            { id: "whiteRock_PipOfTheFountain_D0", text: "Pip of the Fountain ☀️" },
        ]
    },
        //#region Brave Sir Boros
        whiteRock_Boros_0: {
            title: "Brave Sir Boros",
            header: "Ho there! Sir Boros, at your service - defender of White Rock, scourge of villainy, and occasionally available for hire!",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Tomas Greel
        whiteRock_TomasGreel_D0: {
            title: "Tomas Greel",
            header: "Freshest in the plaza, straight off the farm this morning! Buying, or just looking?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Oswin Copperkettle
        whiteRock_OswinCopperkettle_D0: {
            title: "Oswin Copperkettle",
            header: "Care to test your luck? The Tumbling Die never disappoints - well, not the house, anyway.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Nessa Felt
        whiteRock_NessaFelt_D0: {
            title: "Nessa Felt",
            header: "Something catch your eye? Bright Baubles has a little bit of everything, if you look close enough.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Garka
        whiteRock_Garka_D0: {
            title: "Garka",
            header: "Hot food, fair price, no complaints - well, none I'll listen to. What'll it be?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Aldous Pell
        whiteRock_AldousPell_D0: {
            title: "Aldous Pell",
            header: "Maps, ink, whatever you need to find your way. I've never traveled far myself, but the travelers tell me plenty.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Syra
        whiteRock_Syra_D0: {
            title: "Syra",
            header: "The Wanderer's Satchel. Take a look - I promise there's more here than it seems.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Pip of the Fountain
        whiteRock_PipOfTheFountain_D0: {
            title: "Pip of the Fountain",
            header: "Hear ye, hear ye! And also, hello! You look like someone who could use some news. Everyone does, really.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region The Gilded Knuckle
    whiteRockGildedKnuckle: {
        header: "You are in the Gilded Knuckle. Who are you talking to?",
        options: [
            { id: "whiteRock_Zevran_0", text: "Zevran 'Silvermask' (Rogue Trainer)" },
            { id: "whiteRock_Donn_0", text: "Donn" },
        ]
    },
        //#region Zevran 'Silvermask'
        whiteRock_Zevran_0: {
            title: "Zevran 'Silvermask'",
            header: "Looking for a drink, a fight, or the sort of business that doesn't get written down? I can arrange any of the three.",
            options: [
                { id: "whiteRock_Zevran_01", text: "Quest" },
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Donn
        whiteRock_Donn_0: {
            title: "Donn",
            header: "Drink's the only thing I sell up here. Anything else, you'd best already know who to ask.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region The Cracked Anvil
    whiteRockCrackedAnvil: {
        header: "You are in the Cracked Anvil. Who are you talking to?",
        options: [
            { id: "whiteRock_Garrik_0", text: "Garrik 'the Stubborn'" },
            { id: "whiteRock_LennaAshforge_D0", text: "Lenna Ashforge ☀️" },
        ]
    },
        //#region Garrik 'the Stubborn'
        whiteRock_Garrik_0: {
            title: "Garrik 'the Stubborn'",
            header: "Best steel in White Rock, and I'll not hear otherwise. Need a blade, or just here to watch sparks fly?",
            options: [
                { id: "whiteRock_Garrik_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Lenna Ashforge
        whiteRock_LennaAshforge_D0: {
            title: "Lenna Ashforge",
            header: "He won't stop for customers, so that's my job. What are you after?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region BloodHunter's Hut
    whiteRockBloodHuntersHut: {
        header: "You are at the BloodHunter's Hut. Who are you talking to?",
        options: [
            { id: "whiteRock_IskanderVorn_0", text: "Iskander Vorn (Blood Hunter Trainer)" },
        ]
    },
        //#region Iskander Vorn
        whiteRock_IskanderVorn_0: {
            title: "Iskander Vorn",
            header: "Blood Hunters don't get many visitors who aren't already bleeding. You're either brave or lost. Which is it?",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Monk's Gazebo
    whiteRockMonksGazebo: {
        header: "You are at the Monk's Gazebo. Who are you talking to?",
        options: [
            { id: "whiteRock_SunMei_D0", text: "Sun Mei (Monk Trainer) ☀️" },
        ]
    },
        //#region Sun Mei
        whiteRock_SunMei_D0: {
            title: "Sun Mei",
            header: "Stillness first. Then conversation. You've caught me between the two - lucky for you.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Gardens
    whiteRockGardens: {
        header: "You are in the Gardens. Who are you talking to?",
        options: [
            { id: "whiteRock_OrinBarkheart_D0", text: "Orin Barkheart (Druid Trainer) ☀️" },
        ]
    },
        //#region Orin Barkheart
        whiteRock_OrinBarkheart_D0: {
            title: "Orin Barkheart",
            header: "The land remembers longer than any of us. Sit a while, if you've the patience to listen to it.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Adventurer's Trinkets
    whiteRockAdventurersTrinkets: {
        header: "You are in Adventurer's Trinkets. Who are you talking to?",
        options: [
            { id: "whiteRock_Prynn_D0", text: "Prynn ☀️" },
        ]
    },
        //#region Prynn
        whiteRock_Prynn_D0: {
            title: "Prynn",
            header: "Adventurer's Trinkets - if it fits in a pack and might save your life, I probably stock it. What do you need?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Dizzy Needle
    whiteRockDizzyNeedle: {
        header: "You are in the Dizzy Needle. Who are you talking to?",
        options: [
            { id: "whiteRock_MirraSilkhand_D0", text: "Mirra Silkhand ☀️" },
            { id: "whiteRock_Sable_D0", text: "Sable ☀️" },
        ]
    },
        //#region Mirra Silkhand
        whiteRock_MirraSilkhand_D0: {
            title: "Mirra Silkhand",
            header: "Mm. We can do better than that. Commission, alteration, or ready-to-wear?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Sable
        whiteRock_Sable_D0: {
            title: "Sable",
            header: "Simple job, I can help. Anything complicated, you'll want Mirra. She's particular about those.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region General Goods Store
    whiteRockGeneralGoodsStore: {
        header: "You are in the General Goods Store. Who are you talking to?",
        options: [
            { id: "whiteRock_BeldOrvyn_D0", text: "Beld Orvyn ☀️" },
        ]
    },
        //#region Beld Orvyn
        whiteRock_BeldOrvyn_D0: {
            title: "Beld Orvyn",
            header: "Everything's labeled, everything's priced fair. Let me know if something's out of place - I'll know before you tell me, probably.",
            options: [
                { id: "whiteRock_BeldOrvyn_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Spells & Bottles
    whiteRockSpellsAndBottles: {
        header: "You are in Spells & Bottles. Who are you talking to?",
        options: [
            { id: "whiteRock_VaelaInkwhisper_D0", text: "Vaela Inkwhisper ☀️" },
        ]
    },
        //#region Vaela Inkwhisper
        whiteRock_VaelaInkwhisper_D0: {
            title: "Vaela Inkwhisper",
            header: "Mm - hold that thought. Or don't, I'm listening. Sort of. What do you need?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region The Carved Root
    whiteRockCarvedRoot: {
        header: "You are in the Carved Root. Who are you talking to?",
        options: [
            { id: "whiteRock_DwenAshbark_D0", text: "Dwen Ashbark ☀️" },
        ]
    },
        //#region Dwen Ashbark
        whiteRock_DwenAshbark_D0: {
            title: "Dwen Ashbark",
            header: "...Looking for a bow, or just admiring the work?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Thornside Apothecary
    whiteRockThornsideApothecary: {
        header: "You are in Thornside Apothecary. Who are you talking to?",
        options: [
            { id: "whiteRock_MabisOrvell_D0", text: "Mabis Orvell ☀️" },
        ]
    },
        //#region Mabis Orvell
        whiteRock_MabisOrvell_D0: {
            title: "Mabis Orvell",
            header: "Ingredients only here, dear - no finished potions. What are you working on? I like to know what my herbs are for.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region The Brass Gear
    whiteRockBrassGear: {
        header: "You are in the Brass Gear. Who are you talking to?",
        options: [
            { id: "whiteRock_AelaQuickfuse_0", text: "Aela Quickfuse (Artificer Trainer)" },
        ]
    },
        //#region Aela Quickfuse
        whiteRock_AelaQuickfuse_0: {
            title: "Aela Quickfuse",
            header: "Don't mind that - it's fine. Probably. Shop's up here, workshop's in back if you're serious about the craft.",
            options: [
                { id: "requestTraining", text: "Request Training" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Plateau Pawn & Trade
    whiteRockPlateauPawnAndTrade: {
        header: "You are in Plateau Pawn & Trade. Who are you talking to?",
        options: [
            { id: "whiteRock_SevDaltris_D0", text: "Sev Daltris ☀️" },
        ]
    },
        //#region Sev Daltris
        whiteRock_SevDaltris_D0: {
            title: "Sev Daltris",
            header: "Buying, selling, or just looking? I ask very few questions either way.",
            options: [
                { id: "whiteRock_SevDaltris_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region Stonecloak Leatherworks
    whiteRockStonecloakLeatherworks: {
        header: "You are in Stonecloak Leatherworks. Who are you talking to?",
        options: [
            { id: "whiteRock_Jossa_D0", text: "Jossa ☀️" },
        ]
    },
        //#region Jossa
        whiteRock_Jossa_D0: {
            title: "Jossa",
            header: "Light armor, custom fit, repairs - if it's leather, I can probably help. You've the look of a hunter. Am I wrong?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region The Candle & Cask
    whiteRockCandleAndCask: {
        header: "You are in the Candle & Cask. Who are you talking to?",
        options: [
            { id: "whiteRock_PettaMorley_0", text: "Petta Morley" },
        ]
    },
        //#region Petta Morley
        whiteRock_PettaMorley_0: {
            title: "Petta Morley",
            header: "Try the jam. Everyone tries the jam. It's sort of the rule here.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 1
    whiteRockHouse01: {
        header: "You are at House 1. Who are you talking to?",
        options: [
            { id: "whiteRock_BranAshfoot_N0", text: "Bran Ashfoot 🌙" },
        ]
    },

        //#region Bran Ashfoot
        whiteRock_BranAshfoot_N0: {
            title: "Bran Ashfoot",
            header: "Lodge business, or are you here to marvel at my collection? Either's a fine reason to stop by.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 2
    whiteRockHouse02: {
        header: "You are at House 2. Who are you talking to?",
        options: [
            { id: "whiteRock_VaelaInkwhisper_N0", text: "Vaela Inkwhisper 🌙" },
        ]
    },

        //#region Vaela Inkwhisper
        whiteRock_VaelaInkwhisper_N0: {
            title: "Vaela Inkwhisper",
            header: "Mm - hold that thought. Or don't, I'm listening. Sort of. What do you need?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 3
    whiteRockHouse03: {
        header: "You are at House 3. Who are you talking to?",
        options: [
            { id: "whiteRock_DollaVine_N0", text: "Dolla Vine 🌙" },
        ]
    },

        //#region Dolla Vine
        whiteRock_DollaVine_N0: {
            title: "Dolla Vine",
            header: "Busy night. Grab a seat if you can find one - I'll be around.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 4
    whiteRockHouse04: {
        header: "You are at House 4. Who are you talking to?",
        options: [
            { id: "whiteRock_AldousPell_N0", text: "Aldous Pell 🌙" },
        ]
    },

        //#region Aldous Pell
        whiteRock_AldousPell_N0: {
            title: "Aldous Pell",
            header: "Maps, ink, whatever you need to find your way. I've never traveled far myself, but the travelers tell me plenty.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 5
    whiteRockHouse05: {
        header: "You are at House 5. Who are you talking to?",
        options: [
            { id: "whiteRock_Prynn_N0", text: "Prynn 🌙" },
        ]
    },

        //#region Prynn
        whiteRock_Prynn_N0: {
            title: "Prynn",
            header: "Adventurer's Trinkets - if it fits in a pack and might save your life, I probably stock it. What do you need?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 6
    whiteRockHouse06: {
        header: "You are at House 6. Who are you talking to?",
        options: [
            { id: "whiteRock_Syra_N0", text: "Syra 🌙" },
        ]
    },

        //#region Syra
        whiteRock_Syra_N0: {
            title: "Syra",
            header: "The Wanderer's Satchel. Take a look - I promise there's more here than it seems.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 7
    whiteRockHouse07: {
        header: "You are at House 7. Who are you talking to?",
        options: [
            { id: "whiteRock_OswinCopperkettle_N0", text: "Oswin Copperkettle 🌙" },
            { id: "whiteRock_WillaCopperkettle_0", text: "Willa Copperkettle" },
            { id: "whiteRock_PipCopperkettleJr_0", text: "Pip Copperkettle Jr." },
        ]
    },

        //#region Oswin Copperkettle
        whiteRock_OswinCopperkettle_N0: {
            title: "Oswin Copperkettle",
            header: "Care to test your luck? The Tumbling Die never disappoints - well, not the house, anyway.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Willa Copperkettle
        whiteRock_WillaCopperkettle_0: {
            title: "Willa Copperkettle",
            header: "Oh, hello! If you're after Oswin, he's usually at the stall. If you're after good tailoring, well, I'm right here.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Pip Copperkettle Jr.
        whiteRock_PipCopperkettleJr_0: {
            title: "Pip Copperkettle Jr.",
            header: "Wanna play Three-Dragon Ante? Dad taught me. I'm really good.",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 8
    whiteRockHouse08: {
        header: "You are at House 8. Who are you talking to?",
        options: [
            { id: "whiteRock_BeldOrvyn_N0", text: "Beld Orvyn 🌙" },
            { id: "whiteRock_TanaOrvyn_0", text: "Tana Orvyn" },
            { id: "whiteRock_MaretOrvyn_0", text: "Maret Orvyn" },
            { id: "whiteRock_CassOrvyn_0", text: "Cass Orvyn" },
        ]
    },

        //#region Beld Orvyn
        whiteRock_BeldOrvyn_N0: {
            title: "Beld Orvyn",
            header: "Everything's labeled, everything's priced fair. Let me know if something's out of place - I'll know before you tell me, probably.",
            options: [
                { id: "whiteRock_BeldOrvyn_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Tana Orvyn
        whiteRock_TanaOrvyn_0: {
            title: "Tana Orvyn",
            header: "If it's about the shop, Beld's the one to ask. If it's about the numbers behind the shop, that's me.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Maret Orvyn
        whiteRock_MaretOrvyn_0: {
            title: "Maret Orvyn",
            header: "I'm helping with inventory. Dad says I'm good at it. I am good at it.",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Cass Orvyn
        whiteRock_CassOrvyn_0: {
            title: "Cass Orvyn",
            header: "...You can't see me.",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 9
    whiteRockHouse09: {
        header: "You are at House 9. Who are you talking to?",
        options: [
            { id: "whiteRock_TomasGreel_N0", text: "Tomas Greel 🌙" },
            { id: "whiteRock_EddaGreel_0", text: "Edda Greel" },
            { id: "whiteRock_FerrisGreel_0", text: "Ferris Greel" },
            { id: "whiteRock_LilyGreel_0", text: "Lily Greel" },
        ]
    },

        //#region Tomas Greel
        whiteRock_TomasGreel_N0: {
            title: "Tomas Greel",
            header: "Freshest in the plaza, straight off the farm this morning! Buying, or just looking?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Edda Greel
        whiteRock_EddaGreel_0: {
            title: "Edda Greel",
            header: "If you're after produce, Tomas has the stall. I just make sure there's something to sell in the first place.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Ferris Greel
        whiteRock_FerrisGreel_0: {
            title: "Ferris Greel",
            header: "Don't tell my dad I'm not at the stall right now. What do you want?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Lily Greel
        whiteRock_LilyGreel_0: {
            title: "Lily Greel",
            header: "I'm going to be a knight. Not a produce seller. A knight.",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 10
    whiteRockHouse10: {
        header: "You are at House 10. Who are you talking to?",
        options: [
            { id: "whiteRock_AldricBrome_N0", text: "Aldric Brome 🌙" },
            { id: "whiteRock_SeraBrome_0", text: "Sera Brome" },
            { id: "whiteRock_FenBrome_0", text: "Fen Brome" },
            { id: "whiteRock_TalBrome_0", text: "Tal Brome" },
        ]
    },

        //#region Aldric Brome
        whiteRock_AldricBrome_N0: {
            title: "Aldric Brome",
            header: "Evening. Or morning, depending how your night's gone. What'll it be?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Sera Brome
        whiteRock_SeraBrome_0: {
            title: "Sera Brome",
            header: "Don't mind the noise, it's practically the house's natural state. Come in, come in!",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Fen Brome
        whiteRock_FenBrome_0: {
            title: "Fen Brome",
            header: "Are you a real adventurer? Tal doesn't believe you're a real adventurer.",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Tal Brome
        whiteRock_TalBrome_0: {
            title: "Tal Brome",
            header: "Fen says you're an adventurer. I don't believe it.",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 11
    whiteRockHouse11: {
        header: "You are at House 11. Who are you talking to?",
        options: [
            { id: "whiteRock_Jossa_N0", text: "Jossa 🌙" },
            { id: "whiteRock_DwenAshbark_N0", text: "Dwen Ashbark 🌙" },
        ]
    },

        //#region Jossa
        whiteRock_Jossa_N0: {
            title: "Jossa",
            header: "Light armor, custom fit, repairs - if it's leather, I can probably help. You've the look of a hunter. Am I wrong?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Dwen Ashbark
        whiteRock_DwenAshbark_N0: {
            title: "Dwen Ashbark",
            header: "...Looking for a bow, or just admiring the work?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 12
    whiteRockHouse12: {
        header: "You are at House 12. Who are you talking to?",
        options: [
            { id: "whiteRock_MabisOrvell_N0", text: "Mabis Orvell 🌙" },
            { id: "whiteRock_LennaAshforge_N0", text: "Lenna Ashforge 🌙" },
        ]
    },

        //#region Mabis Orvell
        whiteRock_MabisOrvell_N0: {
            title: "Mabis Orvell",
            header: "Ingredients only here, dear - no finished potions. What are you working on? I like to know what my herbs are for.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Lenna Ashforge
        whiteRock_LennaAshforge_N0: {
            title: "Lenna Ashforge",
            header: "He won't stop for customers, so that's my job. What are you after?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 13
    whiteRockHouse13: {
        header: "You are at House 13. Who are you talking to?",
        options: [
            { id: "whiteRock_Garka_N0", text: "Garka 🌙" },
            { id: "whiteRock_Rok_0", text: "Rok" },
            { id: "whiteRock_Keva_0", text: "Keva" },
            { id: "whiteRock_Bram_0", text: "Bram" },
        ]
    },

        //#region Garka
        whiteRock_Garka_N0: {
            title: "Garka",
            header: "Hot food, fair price, no complaints - well, none I'll listen to. What'll it be?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Rok
        whiteRock_Rok_0: {
            title: "Rok",
            header: "Don't get many visitors here. Something I can help with?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Keva
        whiteRock_Keva_0: {
            title: "Keva",
            header: "...Hi.",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Bram
        whiteRock_Bram_0: {
            title: "Bram",
            header: "Do you know my Aunt Garka? She's the best. Are you as strong as her?",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 14
    whiteRockHouse14: {
        header: "You are at House 14. Who are you talking to?",
        options: [
            { id: "whiteRock_MirraSilkhand_N0", text: "Mirra Silkhand 🌙" },
            { id: "whiteRock_Sable_N0", text: "Sable 🌙" },
        ]
    },

        //#region Mirra Silkhand
        whiteRock_MirraSilkhand_N0: {
            title: "Mirra Silkhand",
            header: "Mm. We can do better than that. Commission, alteration, or ready-to-wear?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Sable
        whiteRock_Sable_N0: {
            title: "Sable",
            header: "Simple job, I can help. Anything complicated, you'll want Mirra. She's particular about those.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 15
    whiteRockHouse15: {
        header: "You are at House 15. Who are you talking to?",
        options: [
            { id: "whiteRock_NessaFelt_N0", text: "Nessa Felt 🌙" },
            { id: "whiteRock_UncleCroft_0", text: "Uncle Croft" },
            { id: "whiteRock_BrinFelt_0", text: "Brin Felt" },
        ]
    },

        //#region Nessa Felt
        whiteRock_NessaFelt_N0: {
            title: "Nessa Felt",
            header: "Something catch your eye? Bright Baubles has a little bit of everything, if you look close enough.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Uncle Croft
        whiteRock_UncleCroft_0: {
            title: "Uncle Croft",
            header: "Well now! Don't believe we've met. Sit a spell, I've got stories older than the Keep itself.",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Brin Felt
        whiteRock_BrinFelt_0: {
            title: "Brin Felt",
            header: "Someday I'm opening a bakery. Dolla says she'll help. You're not gonna tell me it's a silly plan, are you?",
            options: [
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion

    //#region House 16
    whiteRockHouse16: {
        header: "You are at House 16. Who are you talking to?",
        options: [
            { id: "whiteRock_SevDaltris_N0", text: "Sev Daltris 🌙" },
            { id: "whiteRock_YulaOfTheNorthernPeaks_N0", text: "Yula of the Northern Peaks 🌙" },
        ]
    },

        //#region Sev Daltris
        whiteRock_SevDaltris_N0: {
            title: "Sev Daltris",
            header: "Buying, selling, or just looking? I ask very few questions either way.",
            options: [
                { id: "whiteRock_SevDaltris_01", text: "Quest" },
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion

        //#region Yula of the Northern Peaks
        whiteRock_YulaOfTheNorthernPeaks_N0: {
            title: "Yula of the Northern Peaks",
            header: "The peaks taught me not to trust quiet moments. What do you need?",
            options: [
                { id: "rumors", text: "Rumors" },
                { id: "goodbye", text: "Goodbye.", goBack: true }
            ]
        },
        //#endregion
    //#endregion


//#endregion
}

const rumorDialogueOptions = {
    1: "I heard a rumor that you're an idiot. Any truth to that?",
    2: "I heard that the road in the Epic Lands leads to the highest mountain where a grand hall lies in wait for the bravest of adventurers. Who knows if it's true.",
    3: "A patrol captain says the northern roads have been freezing over overnight, even when the rest of the valley stays dry. Travelers claim they hear hoofbeats with no rider in the dark.",
    4: "A merchant caravan vanished in the east a few nights ago. The wagons were found later, untouched and empty, as if the people had simply stepped out into the snow and never returned.",
    5: "In the Big City, the War Room holds arenas for adventurers like yourself to test their mettle.",
    6: "You ever need some more coin, you can try your luck at the Casino in the Big City. You never know when it'll be your lucky day.",
    7: "They say that if you can't find what you need, the streets of the Big City are full of merchants and traders. You can find just about anything you need there.",
    8: "You ever tried bounty hunting? The bounty board in the Big City is always looking for adventurers to take on some of the more dangerous jobs.",
    9: "They charged me 5 gold for littering! Littering!! I barely make that in a year! These fines are ridiculous!",
    10: "I don't like to think about zombies. Missing arms, legs, heads. They smell awful, and they're hard to kill.",
    11: "I don't even know what a will-o-the-wisp is, much less how to kill one. I think they're just swamp gas, myself.",
    12: "All that stuff about having to set trolls on fire is a bunch of hooey. They don't like fire, but a good sword will cut them up fine.",
    13: "Best way to take out a skeleton is with a big weapon. Forget spells. Just smack them and watch the bones fly!",
    14: "I saw a mudcrab a couple of days ago. Nasty creatures, but I hear their meat is rather tasty.",
    15: "Only thing worse than an ogre is an Oni. Tough bastards and they can cast spells too.",
    16: "You can't be too careful out in the wilderness. Almost any creature you find is liable to give you a disease.",
    17: "Imps. I hate 'em. Little buggers flitting around, tossing fireballs at you!",
    18: "If you're on a road, you can usually outrun anything. If you're in good shape, and not wearing a tin suit.",
    19: "If you're all alone in the woods and you see a troll coming, you run. Problem solved. Next question?",
    20: "Have you been to the local tavern? I hear the mead is rather tasty.",
    21: "I used to be an adventurer like you, then I took an arrow to the knee.",
    22: "A caravan guard swears an owlbear tore through their supply tent overnight and took nothing but the salted meat, leaving everything else untouched.",
    23: "Someone spotted a shape moving low and fast through the reeds by the river of Mudvein. Too big for an otter, too quiet for anything that should move that fast.",
    24: "A hunter of the Ranger's Guild claimed he tracked a set of prints that vanished mid-stride, like whatever made them stepped sideways out of the world.",
    25: "Word is a manticore's been spotted circling nearby cliffs. Nobody's lost anyone yet, but the shepherds have started grazing closer to town.",
    26: "A friend of mine found a giant spider's web spanning an entire ravine once. Big enough to catch more than insects from the size of it.",
    27: "There's talk of strange lights bobbing over the nearby marsh to the southeast at night, drawing in anyone foolish enough to follow. The old folk call it a will-o'-the-wisp and tell you to look away.",
    28: "Keep your eyes out for gargoyles. They like to perch on rooftops and swoop down on travelers.",
    29: "A group of travelers reported a stretch of road where the trees seemed to lean the wrong way, like something enormous had pushed through recently. No tracks, no broken branches.",
    30: "A merchant lost half his cargo to what he swears was a gelatinous ooze that squeezed under his cellar door and dissolved everything it touched by morning.",
    31: "",
    32: "",
    33: "",
    34: "",
    35: "",
    36: "",
    37: "",
    38: "",
    39: "",
    40: "",
    41: "",
    42: "",
    43: "",
    44: "",
    45: "",
    46: "",
    47: "",
    48: "",
    49: "",
    50: ""
}