// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/* global $ */

var giphy = "https://media3.giphy.com/media/Y4pAQv58ETJgRwoLxj/200_s.gif?cid=e1bb72ff5c817f5d33796c6e6bdfdfc6";

$("#search-button").click(function(){
  $.ajax({
        url: giphy,
        method: "GET",
        success: function(response) {
        alert(response);
        }
  });
});

