let count = 0;

let enviromentTitle = "Wizard World";

let enviromentElements = ["mystical pub", "", "school of wizardry", "magic bats"];

let mainCreature = {
    name: "Alerick Brewthorn", 
    type: "drunken wizard",
    mood: "magically thirsty",
    power: "can sniff out a pub 20 miles away",
    favoriteElement: enviromentElements[1]
};
// Button 1: show the world name
$("#btn-beer").click(function () {
    let message = "<p>You have entered: <strong>" + worldName + "</strong></p>";
    $("#environment-output").html(message);
});

// Button 2: show the main creature
$("#btn-lost").click(function () {
    let message = "<p>Name: " + mainCreature.name + "</p>";
    message = message + "<p>Type: " + mainCreature.type + "</p>";
    message = message + "<p>Mood: " + mainCreature.mood + "</p>";
    message = message + "<p>Power: " + mainCreature.power + "</p>";
    $("#environment-output").html(message);
});

// Button 3: show dangers
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