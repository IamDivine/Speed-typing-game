let gameOverContainer = document.getElementById("gameOverContainer"); //Game over element
let score = document.getElementById("score"); //score counter
let gameOverScore = document.getElementById("gameOverScore"); //score counter

let inputWord = document.getElementById("inputWord"); //input text field

let timer = document.getElementById("timer");//Timer element
//Display words
let wordDisplay = document.getElementById("wordDisplay");




let difficultyLevel = document.getElementById("commentTime");
difficultyLevel.innerHTML=localStorage.getItem("mode");
function resetCountdown(){ 
  if(difficultyLevel.innerHTML == "EASY"){
    timer.innerHTML = 7;
  }else if(difficultyLevel.innerHTML == "INTERMEDIATE"){
    timer.innerHTML = 5;
  }else{
    timer.innerHTML = 3;
  }
  document.getElementById('gameOverDifficulty').innerHTML = difficultyLevel.innerHTML; //Displaying difficulty in game over modal
};
 resetCountdown();



// let timer = document.getElementById("timer");//Timer element
let initialTime;
function startTimer() {
  //Code for timer

  gameOverContainer.style.display = "none"; //Hide game over modal when user starts game

  resetCountdown(); //Restating the timer/countdown based on game difficulty 

  //timer.innerText = 6;
  let myTimer = Number(timer.innerHTML);
  initialTime = new Date();
  let timerCountdown = setInterval(() => {
    timer.innerText = myTimer - Math.floor((new Date() - initialTime) / 1000);
    if (timer.innerText == 0) {
      clearInterval(timerCountdown);
      gameOverContainer.style.display = "block"; //Show game over modal      

      
     
      //score.innerText = 0; //resetting the scores
      inputWord.setAttribute("readonly", true);
    }
  }, 1000);
}  

var wordsArray =["javascript", 'glass','test','maid','nifty','glove','waste','yawn','line','science','sedate','surround','value','shirt','concern','ship','zip','curve',
'empty','sigh','funny','rough','afraid','sneeze','productive','twist','chemical','tank','bustling','quack','smash','love','chew','house','elegant','pump','imminent',
'toothsome','memory','notebook','field','appliance','tart','milk','report','long','humor','fanatical','adjoining','puzzling','robust','push','fly','apathetic','force','popcorn','top',
'cure',
'apparel',
'good',
'comb',
'labored',
'tasteful',
'careful',
'protective',
'left',
'synonymous',
'easy',
'domineering',
'undress',
'church',
'jail',
'ban',
'slippery',
'elastic',
'punch',
'tightfisted',
'gratis',
'creature',
'grip',
'attack',
'unlock',
'obtain',
'year',
'shelter',
'helpless',
'side',
'glue',
'sulky',
'dream',
'puncture',
'smelly',
'filthy',
'abiding',
'fit',
'pushy',
'seat',
'wall',
'cars',
'drag',
'dress',
'alleged','secretary','angle','tour','dirty',
'closed',
'condition',
'curtain','deliver',
'answer','quizzical','weigh','gather','zany','pale','straw','bird',
'pie',
'milk',
'incompetent',
'playground','stupendous','behave','health',
'watery','cent','medical','ad hoc','instinctive','frame','picayune','kind',
'peace','deranged','expand',
'knee','motionless','hurry','table','reminiscent','admire','fat','remind',
'nerve','veil','electric','violent','salt','ruin','food','overabundance','turntable','sheepskin','supermarket','telltale'];//Array of words to be added from API



function displayWords() {
  wordDisplay.innerHTML = "";
  let word = wordsArray[Math.floor(Math.random() * wordsArray.length)]; //generate random word
  let wordArray = word.split(""); // splitting each letter of the word into an array
  wordArray.forEach(letter => {
    //Putting each letter into a span element
    let spanElement = document.createElement("span");
    spanElement.innerHTML = letter;
    wordDisplay.appendChild(spanElement);
  });
  inputWord.value = "";
  startTimer();
}
displayWords();

//Matching of words and increasing score
gameOverScore.innerText = 0;
score.innerText = 0;
inputWord.addEventListener("input", () => {
  let spanElementArray = wordDisplay.querySelectorAll("span");
  let inputValue = inputWord.value.split("");
  spanElementArray.forEach((element, index) => {
    if (inputValue[index] == null) {
      element.classList.remove("incorrect");
      element.classList.remove("correct");
    } else if (element.innerText == inputValue[index]) {
      element.classList.add("correct");
      element.classList.remove("incorrect");
    } else {
      element.classList.add("incorrect");
      element.classList.remove("correct");
    }
  });

  if (inputWord.value == wordDisplay.innerText) {
    score.innerText = Number(score.innerText) + 1; // increasing the score by 1
    gameOverScore.innerText = Number(gameOverScore.innerText) + 1; //game over score
    
    displayWords();
  }else{
    var finalScore = Number(score.innerHTML)+1;
    compareScores(finalScore); //function to copmare current score to high score
  }
    

});



function compareScores(currentScore){  //Comparing the score of the user to see if the beat the current high score;
  let highScoreAlert= document.getElementById('highScoreAlert');
  
  if(difficultyLevel.innerHTML == "EASY"){
    let easyScore =( localStorage.getItem("easyScore"))

      if((Number(currentScore))  > easyScore){
        highScoreAlert.style.display = "block";
        localStorage.setItem("newEasyScore", currentScore )
        
      }
  }

  else if(difficultyLevel.innerHTML == "INTERMEDIATE"){
    let intermediateScore =( localStorage.getItem("intermediateScore"))
      if((Number(currentScore)) > intermediateScore){
        highScoreAlert.style.display = "block";
        localStorage.setItem("newIntermediateScore",currentScore )
        
      }
  }

 else if(difficultyLevel.innerHTML == "HARD"){
    let hardScore =( localStorage.getItem("hardScore"))
      if((Number(currentScore)) > hardScore){
        highScoreAlert.style.display = "block";
        localStorage.setItem("newHardScore",currentScore )

      }
  }
}

let playAgain = document.getElementById("playAgain");//Play again button

playAgain.addEventListener("click", () => {
  localStorage.easyScore = localStorage.getItem('newEasyScore');
  localStorage.intermediateScore = localStorage.getItem('newIntermediateScore');
  localStorage.hardScore = localStorage.getItem('newHardScore');

  location.reload()
  
});











