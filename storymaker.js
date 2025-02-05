// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */

// Array for Noun 1 (Subjects)
const nouns1 = [
    "The turkey", "Dad", "The dog", "My teacher", "The elephant", "The cat"
];

// Array for Verb (Actions)
const verbs = [
    "sat on", "danced with", "saw", "doesn't like", "kissed"
];

// Array for Adjective (Descriptive words)
const adjectives = [
    "a funny", "a scary", "a goofy", "a slimy", "a barking"
];

// Array for Noun 2 (Objects or animals)
const nouns2 = [
    "goat", "monkey", "fish", "worm"
];

// Array for Setting (Where the action takes place)
const settings = [
    "on the moon", "in my spaghetti", "in my soup", "on the floor", "in my shoe"
];

// References to buttons and display elements
const noun1Btn = document.getElementById("noun1");
const verbBtn = document.getElementById("verb");
const adjectiveBtn = document.getElementById("adjective");
const noun2Btn = document.getElementById("noun2");
const settingBtn = document.getElementById("setting");
const playbackBtn = document.getElementById("playback");
const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");

// References to paragraphs that display selected words
const chosenNoun1 = document.getElementById("chosenNoun1");
const chosenVerb = document.getElementById("chosenVerb");
const chosenAdjective = document.getElementById("chosenAdjective");
const chosenNoun2 = document.getElementById("chosenNoun2");
const chosenSetting = document.getElementById("chosenSetting");
const storyDisplay = document.getElementById("story");

// Variables to store chosen words
let selectedNoun1 = "";
let selectedVerb = "";
let selectedAdjective = "";
let selectedNoun2 = "";
let selectedSetting = "";

/* Functions
-------------------------------------------------- */

// Function to pick a random element from an array
function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Functions to set chosen words
function noun1_on_click() {
    selectedNoun1 = getRandomWord(nouns1);
    chosenNoun1.textContent = selectedNoun1;
}

function verb_on_click() {
    selectedVerb = getRandomWord(verbs);
    chosenVerb.textContent = selectedVerb;
}

function adjective_on_click() {
    selectedAdjective = getRandomWord(adjectives);
    chosenAdjective.textContent = selectedAdjective;
}

function noun2_on_click() {
    selectedNoun2 = getRandomWord(nouns2);
    chosenNoun2.textContent = selectedNoun2;
}

function setting_on_click() {
    selectedSetting = getRandomWord(settings);
    chosenSetting.textContent = selectedSetting;
}

// Concatenates the selected words into a sentence and displays it
function playback_on_click() {
    if (selectedNoun1 && selectedVerb && selectedAdjective && selectedNoun2 && selectedSetting) {
        storyDisplay.textContent = `${selectedNoun1} ${selectedVerb} ${selectedAdjective} ${selectedNoun2} ${selectedSetting}.`;
    } else {
        storyDisplay.textContent = "Please select all words before showing the story.";
    }
}

// Generates a completely random story
function random_on_click() {
    selectedNoun1 = getRandomWord(nouns1);
    selectedVerb = getRandomWord(verbs);
    selectedAdjective = getRandomWord(adjectives);
    selectedNoun2 = getRandomWord(nouns2);
    selectedSetting = getRandomWord(settings);

    chosenNoun1.textContent = selectedNoun1;
    chosenVerb.textContent = selectedVerb;
    chosenAdjective.textContent = selectedAdjective;
    chosenNoun2.textContent = selectedNoun2;
    chosenSetting.textContent = selectedSetting;

    playback_on_click();
}

// Resets all selected words and story display
function reset_on_click() {
    selectedNoun1 = "";
    selectedVerb = "";
    selectedAdjective = "";
    selectedNoun2 = "";
    selectedSetting = "";

    chosenNoun1.textContent = "";
    chosenVerb.textContent = "";
    chosenAdjective.textContent = "";
    chosenNoun2.textContent = "";
    chosenSetting.textContent = "";
    storyDisplay.textContent = "";
}

// Dynamically display student ID
function displayStudentID() {
    document.getElementById("studentId").textContent = "Student ID: 200587199";
}

/* Event Listeners
-------------------------------------------------- */
noun1Btn.addEventListener("click", noun1_on_click);
verbBtn.addEventListener("click", verb_on_click);
adjectiveBtn.addEventListener("click", adjective_on_click);
noun2Btn.addEventListener("click", noun2_on_click);
settingBtn.addEventListener("click", setting_on_click);
playbackBtn.addEventListener("click", playback_on_click);
randomBtn.addEventListener("click", random_on_click);
resetBtn.addEventListener("click", reset_on_click);

// Run student ID display on page load
window.onload = displayStudentID;
