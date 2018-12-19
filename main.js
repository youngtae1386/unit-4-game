
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

// var startCrystalgame = function() {
//   $(".crystals").empty();
// }
  var images = [
    "images/yellow.png",
    "images/red.png",
    "images/blue.png",
    "images/green.png"
  ];
var startCrystalgame = function() {
    $(".crystals").empty();
  random_result = Math.floor(Math.random() * 120 + 19);
$("#result").html("Random Result: " + random_result);
 for (var i = 0; i < 4; i++) {
    
    var random = Math.floor(Math.random() * 11 + 1);
    
    var crystal = $("<div>");
    crystal.attr({
      "class": 'crystal',
      "data-random": random
    });
    $(".crystals").append(crystal);
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      // "background-image": "url('images/yellow.png')",
      "background-size": "cover"
    });
  }
}
startCrystalgame();

  $(".crystal").on("click", function() {
    var crystalValue = parseInt ($(this).attr("data-random"));
    previous += crystalValue;
    console.log(crystalValue);

    console.log("New score: " + previous);

    $("#previous").html("Total Score " + previous);
    if (previous > random_result) {
      lost--;
      $("#lost").html("you lost: " + lost);

      startCrystalgame();

    } 
    else if (previous === random_result) {
      win++;
      $("#win").html("You win " + win);
     
      startCrystalgame();
    }
  });

