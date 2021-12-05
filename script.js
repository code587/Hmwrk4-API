let startBtn = document.querySelector("#startbutton");
let questions = document.querySelector(".quizquestions");
let quizQ1 = document.querySelector("#question1");
let quizQ2 = document.querySelector("#question2");
let quizQ3 = document.querySelector("#question3");
let quizQ4 = document.querySelector("#question4");
// let quizAnswers = document.querySelector(".answers");
// let userAnswer = document.createElementbyclass("userResponse");
let timerCountdown = document.querySelector("#timer");
let questionsList = [
    quizQ1.textContent = "What type of car do the brothers drive in the show?",
    quizQ2.textContent = "What character is named after an executive producer?",
    quizQ3.textContent = "What is the theme song for the show Supernatural?",
    quizQ4.textContent = "Which actor/actress met their spouse on the set?"
]


console.log(questionsList);

startBtn.addEventListener("click", function() {
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
    function questionsList() {
        i[0];
        for (let i = 0; i < questionsList.length; i++) {
        console.log(questions.length);
            
        }
    }
})
    






    



    
    
    



    


    

   

   