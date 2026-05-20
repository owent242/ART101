let count = 0;

let buttonCreature = {
    name: "Hugh G. Rection",
    species: "internet wizard",
    favoriteFood: "sausage and beer",
    moods: ["sleepy", "nervous", "glowing", "dramatic", "hopeful", "hungry"]
};

$("#needy-button").click(function () {

    count = count + 1;

    let currentMood = buttonCreature.moods[(count - 1) % buttonCreature.moods.length];

    let message = `
        <p>You clicked me ${count} times.</p>
        <p>My current mood is ${currentMood}.</p>
        <p>My name is ${buttonCreature.name}.</p>
        <p>I am ${buttonCreature.species}.</p>
        <p>My favorite food is ${buttonCreature.favoriteFood}.</p>
    `;

    $("#output").html(message);

});

