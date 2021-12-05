let startBtn = document.querySelector("#startbutton");
let questions = document.querySelector(".quizquestions");
let quizQ1 = document.querySelector("#question1");
let quizQ2 = document.querySelector("#question2");
let quizQ3 = document.querySelector("#question3");
let quizQ4 = document.querySelector("#question4");
let q1Opt1 = document.querySelector("quiz1option1");
let q1Opt2 = document.querySelector("quiz1option2");
let q1Opt3 = document.querySelector("quiz1option3");
let q1Opt4 = document.querySelector("quiz1option4");
let q2Answrs = document.querySelector("answersq2");
let q3Answrs = document.querySelector("answersq3");
let q4Answrs = document.querySelector("answersq4");

let timerCountdown = document.querySelector("#timer");

let questionsList = [
    quizQ1.textContent = "What type of car do the brothers drive in the show?",
    
    quizQ2.textContent = "What character is named after an executive producer?",
    
]



startBtn.addEventListener("click", function() {
    let questions = 0
    let timeLeft = 5
    let timerInterval = setInterval(function() {
        if (timeLeft > 1) { 
        timerCountdown.textContent = timeLeft + " seconds";
     startBtn.hidden = true

    timeLeft--;
    } else if (timeLeft === 1) {
        timerCountdown.textContent = timeLeft + " second left";
    timeLeft--;
    } else { 
            timerCountdown.textContent = " Game Over";
            clearInterval(timerInterval);
        }
    }, 1000);

    [0]
    for (let i = 0; i < questionsList.length; i++) {
        console.log(questionsList);
    }    

    
})

    






    



    
    
    



    


    

   

   