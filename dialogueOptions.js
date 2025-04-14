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
                { id: "silvershireGreg", text: "Greg" }
            ]
        },
            silvershireTownGuard: {
                title: "Town Guard",
                header: "How can I help you, adventurer?",
                options: [
                    { id: "townguardDirectionInn", text: "Where is the inn?" },
                    { id: "townguardGoodbye", text: "Goodbye.", returnToParent: true }
                ]
            },
                townguardDirectionInn: {
                    header: "The inn is to the left of the town square.",
                    options: [
                        { id: "townguardDirectionInn_Annswer", text: "I have another question?", returnToParent: "silvershireTownGuard" },
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
                header: "You are talking to Greg. What do you want to ask?",
                options: [
                    { id: "gregQuest", text: "-Quest details here-" },
                    { id: "askAboutFamily", text: "Ask about his family" }
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