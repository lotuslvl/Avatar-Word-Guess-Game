
var wordbank= ["momo", "nation", "spirits", "bending", "tribe", "nomads", "adventure", "boomerang","avatar","healer"];
var selectedword="";
var selectedwordlength=0;
var numofblanks=0;
var guessesremaining=0;
var lettersused=0;
var wordArray=[];
var clickedkey="";


$(document).ready(function() {



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


$(document).keyup(function(e) {

    clickedkey = (String.fromCharCode(e.which)).toLowerCase();
    var indexinarray=-1; 
    
    

    for(var i=0; i <= wordArray.length;i++) {

        var letterinarray=wordArray[i];
        indexinarray=i;

        if(clickedkey===letterinarray) {
            
            
            $(".letter").text(clickedkey);

        }

    }




});

});

