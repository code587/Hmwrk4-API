let startButton = document.querySelector(".startbtn");
let quizInstructions = document.querySelector("#instructions")
let timerCountdown = document.querySelector("#timer");
let quizQuestions = document.querySelector(".questions");
let quizAnswers = document.querySelector(".answers");
let questionAnswer1 = ["Diamond", " Garnet", " Sapphire", " Emerald"];
let timeLeft = 60;

startButton.addEventListener("click", function(){
    instructions.textContent = quizInstructions
    console.log("instructions")
    let timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerCountdown.textContent = timeLeft + " seconds";
            timeLeft--;
        } else if (timeLeft === 0) {
            timerCountdown.textContent = "Game Over";
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
quizQuestions.textContent = "What is the January birthstone?";})
    


    

   

   