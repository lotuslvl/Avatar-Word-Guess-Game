
//SET GLOBAL VARIABLES//

    // set variables for wins, losses, guessesLeft, array of possible words, array of guesses (empty)
    // set lettersFound, totalLetters
    // set resetVariablesandUIFunction


//DISPLAY WORD ON UI//

    // pick word from an array of words
    //set empty array for selected word
    // get the number of letters in the word
    // set wordspaceDisplay to make _ for the number of letters in the word

//INTERPRET USER ACTION//

//set up event listener to see what user entered

//check letter against all letters in selected word, in loop
    //if a letter is found
        // populate space with letter
        // add to guessed array
        // display guessedArray
        // display new guess
        // add one to lettersFound
        // display lettersFound
        // subtract 1 from guessesLeft
        // display guessesLeft

    //if a letter is not found
        // if check if letter is in guessed array
            //alert you already guesssed that
        // else add letter to array of guesses
        // subtract 1 from guessesLeft
        // display guessesLeft
         

    //if lettersFound equals totalLetters
        //add to wins
        //display wins
        //play sound for winning, stop sound
        //call resetVariablesFunction
  
    //if guessesLeft equals 9
     // add to losses
     //display lossses
     //call resetVariablesandUIFunction

 $(document).ready(function() {

function setWord() {

    //array of words
    var wordbank= ["momo", "nation", "spirits", "bending", "tribe", "nomads", "adventure", "boomerang","avatar","healer"];
    //pick one word from the array
    var randomword= wordbank[(Math.floor(Math.random() * wordbank.length))] ;
    //display that word in the html
    $("#userWord").text(randomword);
    //return the word selected
    return randomword

};
//pick a word and display it
setWord(); 
//set global var equal to that word


//this function sets the letter count in the html
function setLetterCount() {

    var correctAnswer= setWord();
    var numofletters= correctAnswer.length;
    alert(correctAnswer);
    $("#lettersLeft").text(numofletters);

};

setLetterCount(); 

});