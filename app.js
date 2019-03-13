// API Key qWI1rzSTLDkPQuPVMzXTNu5bUFQqtzsT
// URL: https://api.giphy.com/v1/gifs/search?api_key=qWI1rzSTLDkPQuPVMzXTNu5bUFQqtzsT&q=dog&limit=10&offset=0&rating=PG&lang=en

$(document).ready(function(){
// Create an array of strings, each one related to a topic that interests you. Save it to a variable called topics
var topics = ['dog', 'cat', 'shark', 'turtle'];


// Your app should take the topics in this array and create buttons in your HTML.
    // Try using a loop that appends a button for each string in the array.
function renderButtons() {
    $("#buttons").empty();
    for(var i = 0; i < topics.length; i++) {
        var gifBtn = $('<button>');
        gifBtn.addClass("animalBtn btn");
        gifBtn.attr('data-name', topics[i]);
        gifBtn.text(topics[i]);
        $('#buttons').append(gifBtn);
    }
}

// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
$(document).on("click", ".animalBtn", function() {
    var a = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=qWI1rzSTLDkPQuPVMzXTNu5bUFQqtzsT&q=" + a + "&limit=10&offset=0&rating=PG&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
          console.log(response);
        for (var i = 0; i < response.data.length; i++){
            // Storing the rating data
            var rating = response.data[i].rating;
            // Creating an element to have the rating displayed
            var displayRating = $('<p class="gifs">').text("Rating: " + rating);
            // gif img
            var gifImg = response.data[i].images.original.url;
            // Displaying gif
            $('#gifBody').prepend('<img class="gifsImg gifs" src='+gifImg+' width="300" height="300">');
            // Displaying the rating
            $('#gifBody').prepend(displayRating);
    
        }
    });
    
});
// add new buttons
$('.submit').on('click', function(){
    event.preventDefault();
    // This line grabs the input from the textbox
    var search = $("#newSearch").val().trim();
    // pushes it to array
    topics.push(search);
    // calls button maker
    renderButtons();
});

//create still and make active once clicked   (does not work)
// $(document).on("click", ".gifs", function() {
//         var state = $(this).attr('data-state');
//         if(state === "still") {
//             $(this).attr('src', $(this).attr("data-animate"));
//             $(this).attr("data-state", 'animate');
//         } else {
//             $(this).attr('src', $(this).attr("data-still"));
//             $(this).attr("data-state", 'still');
//         } 
// });

renderButtons();
});
