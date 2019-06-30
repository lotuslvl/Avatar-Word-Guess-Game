
var wordbank= ["momo", "nation", "spirits", "bending", "tribe", "nomads", "adventure", "boomerang","avatar","healer"];
var selectedword="";
var selectedwordlength=0;
var numofblanks=0;
var guessesremaining=0;
var lettersused=0;
var wordArray=[];
var clickedkey="";
var lettersFound=0;
var wins= 0;
var losses=0;
var musicPlayed=0;


$(document).ready(function() {
   //first things first...let's get some tunes up in here.
   

//resetvariables and startoverfunctions
function resetGame() {

    wordbank= ["momo", "nation", "spirits", "bending", "tribe", "nomads", "adventure", "boomerang","avatar","healer"];
    selectedword="";
    selectedwordlength=0;
    numofblanks=0;
    guessesremaining=0;
    lettersused=0;
    wordArray=[];
    clickedkey="";
    lettersFound=0;;

    $("#blanks").text("");
    $("#lettersUsed").text(" ");

    setWord();
    setBlanks();
    setGuesses();
    setwordArray();
};


//pick a word form an array, get the length and return that word
function setWord() {

    selectedword= wordbank[(Math.floor(Math.random() * wordbank.length))] ;
    selectedwordlength=selectedword.length;
    return selectedword;
};

//takes the selected word and puts it into an array
function setwordArray() {
    
    var templetter=selectedword.split("");
    wordArray= templetter;
    
};

//enters blanks on the screen with class and dynamic id and stores number of blanks
function setBlanks() {
    for(var i=0;i<selectedwordlength;i++) {
    $("#blanks").append('<div class="letter" id="let'+ i +'">  __  </div>');

    numofblanks=numofblanks+1;
    }
   
};

//sets the number of guesses and displays on screen
function setGuesses () {
    guessesremaining= 10 + selectedwordlength;
    $("#guessesLeft").text(guessesremaining); 

}



setWord();
setBlanks();
setGuesses();
setwordArray();

//when document detects key press
$(document).keyup(function(e) {
    
   if (musicPlayed==0) {
    $("#my_audio").get(0).play();
    musicPlayed=musicPlayed+1;

   }

    //get the key that was clicked and make it a string
    clickedkey = (String.fromCharCode(e.which)).toLowerCase();
    
    //add key string value to the list of guesses on screen
    $("#lettersUsed").append(clickedkey+" ");
    
    //decrease number of guesses
    guessesremaining=guessesremaining-1; 
    $("#guessesLeft").text(guessesremaining);
    
    //go through each letter in the word array
    for(var i=0; i <= wordArray.length;i++) {

        var letterinarray=wordArray[i];
        indexinarray=i;
        //if the word in the array is quivelent to the clicked key
        if(clickedkey===letterinarray) {
            
            //enter the clicked key string into the space on the screen
            //here I am using the id I set above to target the correct div
            $("#let"+ i).text(clickedkey);
            //add one to letters in the word I have found
            lettersFound=lettersFound+1;
                      
            //check for win condition

            if(lettersFound==selectedwordlength){
                alert("You won! The answer was " +selectedword +".Play again!")
                wins=wins+1;
                $("#winCount").text(wins);
                //reset game
                resetGame();

            }

        }
        //check for lose condition
        else if (guessesremaining===0){
            alert("Sorry friend. You lose!")
            losses=losses+1;
            $("#lossCount").text(losses);
            //reset game
            resetGame();

        }

    }




});

});

