let count = 0;

let worldName = "Wizard World";

let enviromentElements = ["mystical pub", "", "school of wizardry", "drunken wizards"];

let mainCreature = {
    name: "Alerick Brewthorn", 
    type: "drunken wizard",
    mood: "magically thirsty",
    power: "can sniff out a pub 20 miles away",
    favoriteElement: enviromentElements[1]
};

let pubs = ["The Drunken Clam", "The Regal Seagull", "Big Floppas Brewery"];

function setTime(timeOfDay) {
    if (timeOfDay == "night") {
        $("body").css("background-color", "midnightblue");
        $("#bubble1").html("I can barely see my wand...");
        $("#bubble2").html("Perfect. Pub time.");
        $("#environment-output").html("<p>It is now night time</p>");
    }
    else {
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
    let message = "<p> That place is " + count + " miles away.</p>";
    $("#environment-output").html(message);
});