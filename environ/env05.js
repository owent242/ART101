$(document).ready(function () {
let count = 0;

let worldName = "Wizard World";

let environmentElements = ["mystical pub", "", "school of wizardry", "drunken wizards"];

let mainCreature = {
    name: "Alerick Brewthorn",
    type: "drunken wizard",
    mood: "magically thirsty",
    power: "can sniff out a pub 20 miles away",
    favoriteElement: environmentElements[1]
};

let pubs = ["The Drunken Clam", "The Regal Seagull", "Big Floppas Brewery"];

// Random lines for hover
let hoverLines1 = [
  "Who goes there?!",
  "Don't interrupt my drinking..... I mean thinking!.",
  "I sense dark magic... or maybe gas."
];

let hoverLines2 = [
  "Is that the pub I smell?",
  "Leave me alone, I'm thirsty.",
  "One more spell and then a pint."
];

// Random lines for click
let clickLines1 = [
  "Oof! Watch the robes!",
  "Expecto... expecto... I forget.",
  "*hiccup* ...Accio beer!"
];

let clickLines2 = [
  "I am NOT drunk. You're drunk.",
  "*stumbles* That was on purpose.",
  "The pub is THAT way, I think."
];

// Pick a random item from an array
function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// --- EXISTING BUTTONS ---

function setTime(timeOfDay) {
    if (timeOfDay == "night") {
        $("body").css("background-color", "midnightblue");
        $("#bubble1").html("I can barely see my wand...");
        $("#bubble2").html("Perfect. Pub time.");
        $("#environment-output").html("<p>It is now night time</p>");
    } else {
        $("body").css("background-color", "blueviolet");
        $("#bubble1").html("It's a great day for some magic!");
        $("#bubble2").html("I'd rather be at the pub");
        $("#environment-output").html("<p>It is now day time</p>");
    }
}

$("#btn-time").click(function () {
    let answer = prompt("Type day or night:");
    setTime(answer);
});

$("#btn-beer").click(function () {
    let message = "<p>You have entered: <strong>" + worldName + "</strong></p>";
    $("#environment-output").html(message);
});

$("#btn-lost").click(function () {
    let message = "<p>Name: " + mainCreature.name + "</p>";
    message = message + "<p>Type: " + mainCreature.type + "</p>";
    message = message + "<p>Mood: " + mainCreature.mood + "</p>";
    message = message + "<p>Power: " + mainCreature.power + "</p>";
    $("#environment-output").html(message);
});

$("#btn-pub").click(function () {
    let message = "<p>Known pubs:</p>";
    message = message + "<p>" + pubs[0] + "</p>";
    message = message + "<p>" + pubs[1] + "</p>";
    message = message + "<p>" + pubs[2] + "</p>";
    $("#environment-output").html(message);
});

$("#btn-far").click(function () {
    count = count + 1;
    let message = "<p>That place is " + count + " miles away.</p>";
    $("#environment-output").html(message);
});

// --- WIZARD 1 HOVER ---
$("#character1").mouseenter(function () {
  $("#bubble1").html(randomFrom(hoverLines1));
  $(this).addClass("wobbling");
});

$("#character1").mouseleave(function () {
  $(this).removeClass("wobbling");
});

// --- WIZARD 2 HOVER ---
$("#character2").mouseenter(function () {
  $("#bubble2").html(randomFrom(hoverLines2));
  $(this).addClass("wobbling");
});

$("#character2").mouseleave(function () {
  $(this).removeClass("wobbling");
});

// --- WIZARD 1 CLICK ---
$("#character1").click(function () {
  $("#bubble1").html(randomFrom(clickLines1));
  $(this).removeClass("stumbling");
  void this.offsetWidth;
  $(this).addClass("stumbling");
});

// --- WIZARD 2 CLICK ---
$("#character2").click(function () {
  $("#bubble2").html(randomFrom(clickLines2));
  $(this).removeClass("stumbling");
  void this.offsetWidth;
  $(this).addClass("stumbling");
});
});