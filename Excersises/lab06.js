let following = false;  // memory switch: is the creature following the cursor?

// --- EVENT 1: CLICK ---
$("#creature").click(function () {
  $(this).toggleClass("transformed");       // add/remove the lavender circle style
  $("#status").text("The creature changed shape.");
});

// --- EVENT 2: HOVER ---
$("#creature").hover(
  function () {  // mouse ENTERS the creature
    $("#thought").stop(true, true).slideDown(300);
    $("#status").text("The creature revealed a thought.");
  },
  function () {  // mouse LEAVES the creature
    $("#thought").stop(true, true).slideUp(300);
    $("#status").text("The thought disappeared.");
  }
);

// --- EVENT 3: KEYBOARD ---
$(document).keydown(function (event) {
  if (event.key === " " || event.code === "Space") {
    event.preventDefault();   // stop Space from scrolling the page

    following = !following;   // flip the switch (false→true or true→false)
    $("#creature").toggleClass("following");  // add/remove the glowing shadow

    if (following === true) {
      $("#status").text("The creature is following your cursor.");
    } else {
      $("#status").text("The creature stopped following you.");
    }
  }
});

// --- EVENT 4: MOUSE MOVEMENT ---
$(document).mousemove(function (event) {
  if (following === true) {  // only move if the switch is ON
    $("#creature").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top:  event.pageY - $("#scene").offset().top  + 30
    });
  }
});