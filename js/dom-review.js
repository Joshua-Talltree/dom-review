"use strict";

//TODO: Write a function that changes the text color of the <h1> when the <h1> is clicked


$('h1').click(
    function() {
        $(this).css('color', 'purple');
    },

);

//TODO: Write a function that causes the runner div to move to the right side of the screen when the mouse moves over it


// $( ".runner" ).hover(function() {
//     $(this).cursor(on event);
//     $(this).cursor(off event);
// });
//

//TODO: Write a function to take the value from the input and append the value onto the ul with the id of add-to-me.



$(document).ready(function(){
    $("#add-btn").click(function(){
        $("#add-to-me").append('<li><a href="#input">James</a></li>');
    });
});

// '<li><a href="#input">James</a></li>'


//TODO: Write a function that changes the font of all text to comic sans 5 seconds after the page loads



$(document).change(function() {
    $('body').css("font-family", "comic sans 5");
});




//TODO: Write a function that bolds the words in the paragraph element with the id of thundercats when the get hype button is pressed











//TODO: Write a function that does the following- when a list item inside of the ul with the id of hl-toggle is first clicked, the background of the li that was clicked should change to yellow. When a list item that has a yellow background is clicked, the background should change back to the original background.

