
var random_Numb;
var losses = 0;
var wins = 0;
var counter = 0;
var numberOfClickEveryEachGame = 0;

var images = [
  "images/yellow.png",
  "images/red.png",
  "images/blue.png",
  "images/green.png"
];
var startCrystalgame = function () {
  $(".crystals").empty();

  random_Numb = Math.floor(Math.random() * 120 + 19);
  $("#random_Numb").html("Random Generator: " + random_Numb); // random number for "result"
  for (var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11 + 1);

    var crystal = $("<img>");
    crystal.attr({
      "class": 'crystal',
      "data-crystalvalue": random
    });
    //need 4 crystals need to use append 
    $(".crystals").append(crystal);
    crystal.css({
      "background-image": "url('" + images[i] + "')",
      // "background-image": "url('images/yellow.png')", // testing if the images are showing up.
      "background-size": "cover" // single img. to clover the box
    });
  }

  //(crystal) on click function will start ... 
  $(".crystal").on("click", function () {
    var crystalValue = parseInt($(this).attr("data-crystalvalue"));
    counter += crystalValue; // counter + Crystal value
    console.log(crystalValue);

    numberOfClickEveryEachGame++;
    console.log("numb of clicks: " + numberOfClickEveryEachGame);
    console.log("New score: " + counter);

    $("#numberofclick").html("Total number of Click(s): " + numberOfClickEveryEachGame);  //numb of clicks to win or lost each game!

    $("#counter").html("Total Scores: " + counter); //Total - adding to total on every click.
    if (counter > random_Numb) {
      losses--;
      $("#losses").html("Losses: " + losses);
      counter = 0; // need to reset the count when losses.
      numberOfClickEveryEachGame = 0;
      $("#numberofclick").html("Total number of Click(s): 0 ");
      $("#counter").html("Total Scores: 0 ");
      alert("You Lost: You Went Over the random #: " + random_Numb);
      startCrystalgame();//call back - starts the game when lost.
    }
    else if (counter === random_Numb) {
      wins++;
      $("#wins").html("Wins: " + wins);
      counter = 0;// need to reset the count when wins.
      numberOfClickEveryEachGame = 0;
      $("#numberofclick").html("Total number of Click(s): 0 ");
      $("#counter").html("Total Scores: 0 ");
      alert("You Win: You Matched Random #: " + random_Numb);
      startCrystalgame(); //call back - starts the game when win.
    }
  });
}
startCrystalgame();
