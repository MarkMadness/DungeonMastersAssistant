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
            { id: "townSilvershire", text: "Silvershire" },
            { id: "townGlintmere", text: "Glintmere" },
        ]
    },
    //#region Silvershire
        townSilvershire: {
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
                    { id: "silvershireQuib", text: "Quib" },
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
                    { id: "silvershireTownguardGoodbye", text: "Goodbye.", goBack: true }
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
                        { id: "gregQuestStart", text: "Accept Quest" }
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
                            { id: "gregQuestCompleted_Answer", text: "Goodbye", goBack: true }
                        ]
                    },
                silvershireCabbageMan: {
                    title: "Cabbage Man",
                    header: `A wiry, middle-aged man with a receding hairline and a constantly panicked look, tends to his wobbly wooden cart overflowing with cabbages. He wears earth-toned clothes, a crooked straw hat, and looks like he hasn’t had a good day in years. His eyes are sharp, his movements twitchy—forever bracing for the next cabbage-related disaster. He sweeps his hands dramatically over the produce as you approach.
                            ` + $newPara + `“Ah! Please adventurers! You must help me! My fine cabbages, my friends, are unlike any you've ever seen before. They're fresh, organic, and guaranteed to change your life!”
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
                            { id: "cabbageManDeclined_Answer", text: "Goodbye", goBack: true }
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
                        { id: "TheClericsSpellbookDecline", text: "Decline Quest?" }
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
                            { id: "TheClericsSpellbookDecline_Answer", text: "Goodbye", goBack: true }
                        ]
                    },
                        TheClericsSpellbookQuestCompleted: {
                            title: "Errit Marwin",
                            header: `Inside his tower, another spectral image of the gnome cleric stands before you, looking relieved and grateful.
                                ` + $newPara + `“Thank you adventurers for retrieving my spellbook! I unfortunately am caught between duties again, but if you could travel south to Glintmere and deliver it to me in person at my residence in the Moonfen Spire, I will add onto your reward from today.”
                                ` + $newPara + `The specter of Errit Marwin hands you 10 gp and 200 xp.`,
                                options: [
                                    { id: "TheHolyDeliveryAccept", text: "Quest Accept?" },
                                    { id: "TheHolyDeliveryDecline", text: "Quest Decline?" }
                                ]
                        },
                silvershireQuib: {
                    title: "Quib",
                    header: `A short, wiry man with tousled red hair and sharp, alert eyes that miss nothing. His skin is sun-touched and freckled, and he wears a patchy leather coat that hangs a bit too big on his frame. His hands are quick and stained with ink and oil, always fidgeting with something small and strange.
                        ` + $newPara + `“Adventurers! I need your aid! Orcs are encamped to the northwest and they’ve been terrorizing Silvershire and all travelers on the road. If you can thin their ranks and take out their chieftain, I will reward you greatly!”`,
                    options: [
                        { id: "thinTheOrcsDownAccepted", text: "Accept Quest" },
                    ]
                },
                    thinTheOrcsDownAccepted: {
                        title: "Quib",
                        header: `“Thank you, adventurer! I knew you would be the right person for the job. Come see me when it's done!"`,
                        options: [
                            { id: "thinTheOrcsDownQuestCompleted", text: "Quest Completed?" }
                        ]
                    },
                silvershireTomaGreenthumb: {
                    title: "Toma Greenthumb",
                    header: `A cheerful halfling with dirt-stained hands and a wide-brimmed hat greets you warmly.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"Hello there, adventurer! Looking for some fresh produce or maybe some gardening tips?"`,
                    options: [
                        { id: "tomaQuest", text: "Do you have any tasks for me?" },
                        { id: "tomaGoodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                silvershireJerrekSilverTongier: {
                    title: "Jerrek the Silver-Tongue",
                    header: `A slick-looking man with a charming smile and a silver-tipped cane approaches you.<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;"Ah, a fellow connoisseur of fine goods! What can I do for you today?"`,
                    options: [
                        { id: "jerrekQuest", text: "Do you have any work for me?" },
                        { id: "jerrekGoodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                silvershireMayorElricGraff: {
                    title: "Mayor Elric Graff",
                    header: `"If one more chicken-related dispute crosses my desk, I swear to Lathander…"`,
                    options: [
                        { id: "silvershireMayorElricGraffTalk", text: "Goodbye", goBack: true },
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
                            { id: "silvershireClaraDreelTalk_Answer", text: "Goodbye", goBack: true }
                        ]
                    },

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

                silvershireHenricThistledown: {
                    title: "Henric Thistledown",
                    header: `Henric is a tall and lanky human man, balding with a long mustache and a cane he doesn’t need.
                        ` + $newPara + `Welcome adventurer! What can I get you?`,
                    options: [
                        { id: "henricFood", text: "I would like food." },
                        { id: "henricDrink", text: "I would like a drink." },
                        { id: "henricRoom", text: "I'd like to purchase a room for the day." },
                        { id: "henricGoodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                silvershireOlmaThistledown: {
                    title: "Olma Thistledown",
                    header: `Olma is a short and round human woman with silvery hair tied in a neat bun and warm brown eyes. She wears a simple dress with an apron, and her hands are often stained with flour or herbs. She has a kind smile and a gentle demeanor.
                        ` + $newPara + `"Welcome to the Gilded Acorn, darlings. Pine pillows, enchanted linens, and absolutely no assassins. Anymore."`,
                    options: [
                        { id: "olmaFood", text: "I would like food." },
                        { id: "olmaDrink", text: "I would like a drink." },
                        { id: "olmaRoom", text: "I'd like to purchase a room for the day." },
                        { id: "olmaGoodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                    henricFood: {
                        title: "Henric Thistledown - Food",
                        header: "Here's our menu, fresh off the hearth:" + $newPara + 
                                "Squalid: Stale Bread and Onion Broth - 2 cp" + $newPara + 
                                "Poor: Turnip Stew with a Crust of Bread - 6 cp" + $newPara + 
                                "Modest: Herb-Roasted Chicken with Barley - 3 sp" + $newPara + 
                                "Comfortable: Baked Trout with Lemon Cream and Vegetables - 8 sp",
                        options: [
                        { id: "henricGoodbye", text: "Goodbye.", goBack: true },
                        { id: "henricMain", text: "I have another question.", goBack: true }
                        ]
                    },
                    henricDrink: {
                        title: "Henric Thistledown - Drink",
                        header: "Fancy a drink? Here’s what’s on tap:" + $newPara + 
                                "Cheap: Weak Cider - 2 cp" + $newPara + 
                                "Ale: Local Brown Ale - 4 cp" + $newPara + 
                                "Wine: Spiced Mulled Wine - 2 sp",
                        options: [
                        { id: "henricGoodbye", text: "Goodbye.", goBack: true },
                        { id: "henricMain", text: "I have another question.", goBack: true }
                        ]
                    },
                    henricRoom: {
                        title: "Henric Thistledown - Room",
                        header: "Need a place to rest your head?" + $newPara + 
                                "Modest Lodging: Shared Room with Feather Mattress - 5 sp per night" + $newPara + 
                                "Comfortable Lodging: Private Room with Magical Linens - 8 sp per night",
                        options: [
                        { id: "henricGoodbye", text: "Goodbye.", goBack: true },
                        { id: "henricMain", text: "I have another question.", goBack: true }
                        ]
                    },
                    olmaFood: {
                        title: "Olma Thistledown - Food",
                        header: "Oh, you’ll want to speak to Henric if you’re buying anything, dear." + $newPara +
                                "But here’s what’s on the board today:" + $newPara + 
                                "Squalid: Stale Bread and Onion Broth - 2 cp" + $newPara + 
                                "Poor: Turnip Stew with a Crust of Bread - 6 cp" + $newPara + 
                                "Modest: Herb-Roasted Chicken with Barley - 3 sp" + $newPara + 
                                "Comfortable: Baked Trout with Lemon Cream and Vegetables - 8 sp",
                        options: [
                        { id: "olmaGoodbye", text: "Goodbye.", goBack: true },
                        { id: "olmaMain", text: "I have another question.", goBack: true }
                        ]
                    },
                    olmaDrink: {
                        title: "Olma Thistledown - Drink",
                        header: "We do love our beverages here. Henric handles the pouring, but here’s what we’ve got:" + $newPara + 
                                "Cheap: Weak Cider - 2 cp" + $newPara + 
                                "Ale: Local Brown Ale - 4 cp" + $newPara + 
                                "Wine: Spiced Mulled Wine - 2 sp",
                        options: [
                        { id: "olmaGoodbye", text: "Goodbye.", goBack: true },
                        { id: "olmaMain", text: "I have another question.", goBack: true }
                        ]
                    },
                    olmaRoom: {
                        title: "Olma Thistledown - Room",
                        header: "Looking for a room? Henric handles the keys, but I’ll tell you what we offer:" + $newPara + 
                                "Modest Lodging: Shared Room with Feather Mattress - 5 sp per night" + $newPara + 
                                "Comfortable Lodging: Private Room with Magical Linens - 8 sp per night",
                        options: [
                        { id: "olmaGoodbye", text: "Goodbye.", goBack: true },
                        { id: "olmaMain", text: "I have another question.", goBack: true }
                        ]
                    },
                
                silvershireWendellPerlow: {
                    title: `Wendel "Winks" Perlow`,
                    header: `A weathered human man with a ragged gray beard, mismatched eyes, and a long coat with hidden flask pockets.
                    ` + $newPara + `“You ever kill a hydra with a bar stool? I have. Didn’t work, but it was dramatic.”`,
                    options: [
                        { id: "winksTalk", text: "Converse" },
                        { id: "winksGoodbye", text: "Goodbye.", goBack: true }
                    ]
                },
                    winksTalk: {
                        title: `Wendel "Winks" Perlow`,
                        header: `“Don’t trust cats. They know things. Too many things.”`,
                        options: [
                            { id: "winksTalk_Answer", text: "Goodbye", goBack: true }
                        ]
                    },

                silvershireBriellaStormwhisper: {
                    title: "Briella Stormwhisper",
                    header: `Briella appears calm and composed as she picks through her herbs, humming a soft melody. When you approach, she looks up with a warm but concerned smile.
                        ` + $newPara + `“Ah, I’ve been waiting for someone like you. There is something wrong in the air here. The plants in Silvershire, once so vibrant and full of life, are beginning to wither for no apparent reason. I fear that something unnatural is at work.”
                        ` + $newPara + `She holds up a small vial filled with clear liquid. 
                        ` + $newPara + `“I’ve created a remedy to attempt to heal the plants, but last time the plants lashed out and hurt me. I need you to apply the remedy to the plants and report back what happens. Can you help me?”`,
                    options: [
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
                            { id: "fadedPetalsDeclined_Answer", text: `Goodbye`, goBack: true }
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
                        { id: "millaQuest", text: "Do you have any tasks for me?" },
                        { id: "millaGoodbye", text: "Goodbye.", goBack: true }
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
    townGlintmere: {
        header: "You are in Glintmere. Which location are you in?",
        options: [
            { id: "codeLabel", text: "Text" },
        ]
    },
    //#endregion
//#endregion

//#region Earthrim
    earthrimZone: {
        header: "You are in Earthrim. What do you want to do?",
        options: [
            { id: "exploreEarthrim", text: "Explore Earthrim" },
            { id: "leaveEarthrim", text: "Leave Earthrim" }
        ]
    },

//#endregion
}