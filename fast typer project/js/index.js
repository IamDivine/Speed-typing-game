/*********************************************************************************/
const body = document.querySelector('body')
              /*Instruction modal*/
const instructionModalContainer = document.querySelector(".instruction-modal-container");
const instructionModal =  document.querySelector(".instruction-modal");
const instructionBtn = document.querySelector('#ins');

instructionBtn.addEventListener('click',function(){  //Display instruction modal
  instructionModalContainer.style.display = "block";
})

instructionModalContainer.addEventListener('click',function(e){  //Close instruction modal
  if((e.target.className == "close-instruction-button" ) )
    instructionModalContainer.style.display = "none";
  if((e.target.className !== "instruction-modal-body") && (e.target.className !== "instruction-modal-head"))
    instructionModalContainer.style.display = "none";
})

/* Levels/Difficulty modal */
const levelModalContainer = document.querySelector(".level-modal-container")
const levelModal =  document.querySelector(".level-modal");
const levelBtn = document.querySelector("#levels")

levelBtn.addEventListener('click',function(){  //Display difficulty modal
  levelModalContainer.style.display = "block";
})

levelModalContainer.addEventListener('click',function(e){//Close difficulty modal
  if((e.target.id == "close-level-button" ) )
    levelModalContainer.style.display = "none";
})



updateHighScores();

let easyHighScore = Number( document.getElementById("easyHighScore").innerHTML)                  //Getting the  high score of easy mode
let intermediateHighScore =Number( document.getElementById("intermediateHighScore").innerHTML) //Getting the  high score of intermediate mode
let hardHighScore =Number( document.getElementById("hardHighScore").innerHTML)                 //Getting the  high score of hard mode


localStorage.setItem("easyScore", easyHighScore);
localStorage.setItem("intermediateScore",intermediateHighScore);
localStorage.setItem("hardScore",hardHighScore);
  

  
  let settingsValue = document.getElementById("close-level-button");  /*Setting the difficulty of the game */
  settingsValue.addEventListener('click', function(){
   let difficulty = document.getElementById("difficulty").value
    localStorage.setItem("mode",difficulty);     //Local storage of current game mode
    
    //return false
  })

  /*functions to display/close the high scores*/
  const highScoreContainer = document.querySelector(".high-score-container")
  const highScoreModal = document.querySelector(".high-score-modal");
 const highScoreBtn  = document.querySelector("#highScore");

 highScoreBtn.addEventListener('click', function(){
    highScoreContainer.style.display = "block";
 })

 highScoreContainer.addEventListener('click', function(e){
   if((e.target.id == "close-highScore-button"))
      highScoreContainer.style.display = "none"
 })


var tabButtons = document.querySelectorAll(".tabContainer .buttonContainer button")
var tabPanels = document.querySelectorAll(".tabContainer .tabPanel");

function showPanel(panelIndex, colorCode){ //function to switch between high score tabs
  tabButtons.forEach(function(node){
    node.style.backgroundColor = ""
    node.style.color = ""
  });
  tabButtons[panelIndex].style.backgroundColor = colorCode;
  tabButtons[panelIndex].style.color = "white";
  tabPanels.forEach(function(node){
    node.style.display = "none"
  });
  tabPanels[panelIndex].style.display = "block";
  tabPanels[panelIndex].style.backgroundColor = colorCode;
}
showPanel(0, '#2196f3'); //calling or displaying the easy tab by default 

function updateHighScores(){ //Funtion to update highscores
  if("EASY" == localStorage.mode){
  document.getElementById("easyHighScore").innerHTML = localStorage.getItem("newEasyScore");
  
}
  else if("INTERMEDIATE" == localStorage.mode ){
    document.getElementById("intermediateHighScore").innerHTML= localStorage.getItem("newIntermediateScore");
  }
  else if("HARD" == localStorage.mode){
    document.getElementById("hardHighScore").innerHTML = localStorage.getItem("newHardScore")
    }

    document.getElementById("easyHighScore").innerHTML = localStorage.getItem("newEasyScore");
    document.getElementById("intermediateHighScore").innerHTML= localStorage.getItem("newIntermediateScore");
    document.getElementById("hardHighScore").innerHTML = localStorage.getItem("newHardScore")


}



  document.getElementById('resetBtn').addEventListener('click',function(){ //Resetting the high scores to zero
    document.getElementById("easyHighScore").innerHTML = 0
    document.getElementById("intermediateHighScore").innerHTML = 0
    document.getElementById("hardHighScore").innerHTML = 0

    localStorage.easyScore = 0; //Resetting the scores in localstorage to zero
    localStorage.hardScore = 0;
    localStorage.intermediateScore = 0;

    localStorage.newEasyScore = 0; //Resetting the scores in localstorage to zero
    localStorage.newHardScore = 0;
    localStorage.newIntermediateScore = 0;


  })

