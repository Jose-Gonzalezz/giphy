// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

$("#search-button").click(function(){
var input = $("#search-term").val();
var giphy = "https://api.giphy.com/v1/gifs/search?q=" + input + "&rating=pg&api_key=dc6zaTOxFJmzC";
var random = Math.floor(Math.random()*25);
  $.ajax({
        url: giphy,
        method: "GET",
        success: function(response) {
        var giph = response.data[random].images.original.url;
        $(".text-center").html('<img src="' + giph + '">');
        }
        
  });
});

