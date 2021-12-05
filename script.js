let startBtn = document.querySelector("#startbutton");
// let timerCountdown = document.querySelector("#timer");
// let quizQuestions = document.querySelector(".questions");
// let quizAnswers = document.querySelector(".answers");
// let userAnswer = document.createElementbyclass("userResponse");
let timerCountdown = document.querySelector("#timer");
let timeLeft = 5;



startBtn.addEventListener("click",function() {
    
    let timerInterval = setInterval(function() {
        timeLeft--; 
        timerCountdown.textContent = timeLeft + " seconds";
             
        if (timeLeft === 0) {
            clearInterval(timerInterval);  
            sendMessage();
        }
            
}, 1000);
   
})
    
    function sendMessage() {
        timerCountdown.textContent = timeLeft + " Game Over. Do you want to see your score";
    }

  



    
    
    



    


    

   

   