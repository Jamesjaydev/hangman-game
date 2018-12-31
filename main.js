window.onload = function () {



var categories = document.getElementsByTagName('button');

for(let i = 0; i < categories.length; i++) {
    var elem = categories[i];   
    elem.onclick = function() {
       var categoryName = this;
       var categoryAttribute = categoryName.getAttribute('data-category');
       // var alignP = p.getAttribute("data-category");
      switch(categoryAttribute){

        case 'rock':
          options = [
        ["rise-against", "a-day-to-remember", "linkin-park", "all-time-low", "lustra", "bowling-for-soup", "simple-plan"],
    ];
        remove();
        play(options);
        break;

        case 'rap':
        options = [
        ["hopsin", "eminem", "biggie", "machine-gun-kelly", "remmy-ma", "tupac", "dr-dre"],
    ];
        remove();
        play(options);
        break;

        case 'top40':
        options = [
        ["khalid", "marshmellow", "hardwell", "demi-lovato", "danic", "dyro", "nicki-minaj"],
    ];
        remove();
        play(options);
        break;

        case 'greatest':
        options = [
        ["beetles", "brian-adams", "scorpions", "michael-jackson", "prince", "freddie-mercury", "guns-and-roses"],
    ];
        remove();
        play(options);
        break;

    default:
      options=[];
        remove();
        play(options);
      }
    };
}


// This is the alphabet array for the buttons
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var buttons = function () {
    myButtons = document.getElementById('letters-container');
    letters = document.createElement('div');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('span');
      list.id = 'letter';
      list.setAttribute('class', 'alphabet-letters');
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }

  var space;
  var guess ;             
  var correctGuess ;
  var storedGuess = [ ];  
  var word ;

  // Create stored guesses ul
   result = function () {
    wordHolder = document.getElementById('underscores-container');
    correct = document.createElement('div');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('span');
      guess.setAttribute('class', 'guess underscores');
      if (word[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      storedGuess.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }

  var displayLives = document.getElementById("lives-counter");
  var lives ;
  
  // Shows the user how many remaining lives they have
   comments = function () {
    displayLives.innerHTML = "You have " + lives + " lives";
    if (lives < 1) {
      displayLives.innerHTML = "Game Over";
    }
    for (var i = 0; i < storedGuess.length; i++) {
      if (correctGuess + space === storedGuess.length) {
        alert("You Win!");
        remove();
        play();
      }
    }
  }

  // Check if user inputs match the correct letters in the word
   check = function () {
    list.onclick = function () {
      var choices = (this.innerHTML);
      this.setAttribute("class", "active alphabet-letters");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === choices) {
          storedGuess[i].innerHTML = choices;
          correctGuess += 1;
          this.setAttribute("class", "active alphabet-letters correct-letter");
        } 
      }
      var j = (word.indexOf(choices));
      if (j === -1) {
        lives -= 1;
        comments();
      } else {
        comments();
      }
    }
  }
  
    
  // User Interactions

  remove = function (){
    var emptyDivs = ['letters-container','underscores-container','lives-counter'];
        for (var i = 0; i < emptyDivs.length; i++) {
          var emptyDiv = document.getElementById(emptyDivs[i]);
          emptyDiv.innerHTML="";
        }
  }



var chosenOption;

  play = function (options) {

    chosenOption = options[Math.floor(Math.random() * options.length)];
    word = chosenOption[Math.floor(Math.random() * chosenOption.length)];
    word = word.replace(/\s/g, "-");
    buttons();

    storedGuess = [ ];
    lives = 12;
    correctGuess = 0;
    space = 0;
    result();
    comments();

  }
  
  // //Reset Button

  // document.getElementById('reset').onclick = function() {
  //   window.location.reload();
  // }
}