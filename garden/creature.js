// add creature to the garden
$("#crAdd").click( function(){

    // grab the value from the text input and assign it to a variable crName
    let crName=$("#crName").val();
    // test in console
    console.log(crName);
    // add this name to a div with a bit of html code attached
    $("#creature-list").append("<div>"+crName+"</div>");

     $("#crName").val(""); // write the value
    // $("#crName").val(); // retrieve the value

}); 