// let startBtn = document.querySelector("#startbutton");
// let timerCountdown = document.querySelector("#timer");
// let quizQuestions = document.querySelector(".questions");
// let quizAnswers = document.querySelector(".answers");
// let userAnswer = document.createElementbyclass("userResponse");
let timerEl = document.querySelector(".time");
let timeLeft = 5;



function setTime() {
    
    let timerInterval = setInterval(function() {
        timeLeft--;
        timerEl.textContent = timeLeft + " seconds";
                    
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            sendMessage()
;        }
    }, 1000);
    console.log(setTime);
    console.log(timerInterval);
}

function sendMessage() {
    timerEl.textContent = "Game Over. Do you want to see your score? ";
}
  
  setTime();



    
    
    



    


    

   

   