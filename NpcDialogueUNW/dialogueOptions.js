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
    arezothZone: {
        header: "You are in Arezoth. Where are you?",
        options: [
            { id: "townSilvershire", text: "Silvershire" },
        ]
    },
        townSilvershire: {
            header: "You are in Silvershire. Which NPC are you talking to?",
            options: [
                { id: "silvershireTownGuard", text: "Town Guard" },
                { id: "silvershireGreg", text: "Greg" },
                { id: "silvershireCabbageMan", text: "Cabbage Man" },
                { id: "silvershireBriellaStormwhisper", text: "Briella Stormwhisper" },
                { id: "silvershireErritMarwin", text: "Errit Marwin" },
                { id: "silvershireQuib", text: "Quib" },
            ]
        },
            silvershireTownGuard: {
                title: "Town Guard",
                header: "How can I help you, adventurer?",
                options: [
                    { id: "townguardDirectionInn", text: "Where is the inn?" },
                    { id: "townguardGoodbye", text: "Goodbye.", goBack: true }
                ]
            },
                townguardDirectionInn: {
                    header: "The inn is to the left of the town square.",
                    options: [
                        { id: "townguardDirectionInn_Annswer", text: "I have another question?", goBack: true },
                    ]
                },
                townguardExtra: {
                    header: "What else do you want to ask?",
                    options: [
                        { id: "townguardQuest", text: "-Quest details here-" },
                        { id: "townguardExtra2", text: "-Prompt here-" }
                    ]
                },
            silvershireGreg: {
                title: "Greg",
                header: "Ah! Hello Adventurer! Welcome to the town of Silvershire.",
                options: [
                    { id: "gregQuest", text: "-Quest details here-" },
                    { id: "gregExtra", text: "-Prompt here-" }
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
                    { id: "cabbageManQuestCompleted", text: "Quest Completed?" },
                    { id: "cabbageManQuestFailed", text: "Quest Failed?" }
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
                },
                TheClericsSpellbookDecline: {
                    title: "Errit Marwin",
                    header: `“Please! I need your help! I can’t do this alone!”`,
                    options: [
                        { id: "TheClericsSpellbookAccept", text: "Reconsider Quest?" },
                        { id: "TheClericsSpellbookDecline_Answer", text: "Goodbye", goBack: true }
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
            silvershire: {
                title: "Name",
                header: "Hello!",
                options: [
                    { id: "gregQuest", text: "-Quest details here-" },
                    { id: "gregExtra", text: "-Prompt here-" }
                ]
            },
            silvershire: {
                title: "Name",
                header: "Hello!",
                options: [
                    { id: "gregQuest", text: "-Quest details here-" },
                    { id: "gregExtra", text: "-Prompt here-" }
                ]
            },
            silvershire: {
                title: "Name",
                header: "Hello!",
                options: [
                    { id: "gregQuest", text: "-Quest details here-" },
                    { id: "gregExtra", text: "-Prompt here-" }
                ]
            },




    earthrimZone: {
        header: "You are in Earthrim. What do you want to do?",
        options: [
            { id: "exploreEarthrim", text: "Explore Earthrim" },
            { id: "leaveEarthrim", text: "Leave Earthrim" }
        ]
    },
}