var guessesLeft = 20;
var lettersLeft;
var lettersArray=[];
var lettersusedArray=[];
var lettersCorrectlyGuessed=0;
var correctAnswer;
var wins=0;
var losses=0;


//pick a word form an array, place it on the screen and return that word
function setWord() {

    var wordbank= ["momo", "nation", "spirits", "bending", "tribe", "nomads", "adventure", "boomerang","avatar","healer"];
    var randomword= wordbank[(Math.floor(Math.random() * wordbank.length))] ;
    $("#userWord").text(randomword);
    
    
    return randomword;

};


$(document).ready(function() {

//enter guesses on the screen
 $("#guessesLeft").text(guessesLeft);


//get the number of letters in the word selected
function setLetterCount() {
    var numofletters= correctAnswer.length;
    $("#lettersLeft").text(numofletters);
    return numofletters

};

//take the word and put every letter in an array, return that array
function setwordArray() {
    var wordArray=[];
    for (i=0;i<=correctAnswer.length;i++) {
    var templetter=correctAnswer.charAt(i);
    wordArray.push(templetter);
    }
   
    return wordArray
  
};

//set
correctAnswer= setWord(); 
lettersLeft= setLetterCount();
lettersArray= setwordArray();
$("#winCount").text(wins);
$("#lossCount").text(losses);




});


function wordReset() {
    setWord();
    guessesLeft=20;
    $("#guessesLeft").text(guessesLeft);
    numofletters= correctAnswer.length;
    $("#lettersLeft").text(numofletters);

  
};


$(document).keyup(function(e) {

    guessesLeft= guessesLeft-1;
    $("#guessesLeft").text(guessesLeft);
    var keyclicked= (String.fromCharCode(e.which)).toLowerCase();
    var letterinword;
    var alreadyUsed=[];
 

    for (var i=0; i<=lettersArray.length ;i++) {
    
        letterinword=lettersArray[i];
         

        if(keyclicked==letterinword && ($.inArray(keyclicked,alreadyUsed))==-1 ) {
         
                       
            lettersusedArray.push(letterinword);
            alreadyUsed.push(letterinword);
            lettersCorrectlyGuessed=lettersCorrectlyGuessed+1;
            $("#correctlettersUsed").append(letterinword + " ");
           
            if (lettersCorrectlyGuessed==lettersLeft) {

                wins=wins+1;
                $("#winCount").text(wins);
                alert("You got it! The word was " + correctAnswer + "!");
                wordReset();
            }
            
        }

        else {


         if (guessesLeft===0) 
         {
             losses=losses+1;
             $("#lossCount").text(losses);
             alert("You lose!");
             prompt("Play again?");
             wordReset();
         };

        
        }

  


    }

    

 
  });

