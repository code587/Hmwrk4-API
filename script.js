let startButton = document.querySelector(".startbtn");
let quizInstructions = document.querySelector("#instructions")
let timerCountdown = document.querySelector("#timer");
let quizQuestions = document.querySelector(".questions");
let quizAnswers = document.querySelector(".answers");
let timeLeft = 5;
let questions = [
    {
        question: "What type of car do the brothers drive in the show?",
        answers: ["Impala", " Chevette", " Mustang", " Sabre"],
        correctAnswer: [0]
    },
    {
        question: "What character is named after an executive producer?",
        answers: ["Dean", " Cass", " Mary", " Bobby"],
        correctAnswer: [3],
    },
    {
        question: "What is the theme song for the show Supernatural?",
        answers: ["Round and Round", " Wayward Son", " Back in Black", " Ratt"],
        correctAnswer: [1],
    },
    {
        question: "Which actor/actress met their spouse on the set?",
        answers: ["Jenson Ackles", " Kim Rhodes", " Jared Padalecki", " Felicia Day"],
        correctAnswer: [2],
    }
]
console.log(questions);
console.log("quizInstructions")

startButton.addEventListener("click", function(){
    quizInstructions.textContent = ""
    let quizQuestion = 0
    let quizAnswers = 0
    const element = questions[quizQuestion]
    document.querySelector(".questions").textContent = questions[quizQuestion].question;
    document.querySelector("#answer1").textContent = questions[quizQuestion].answers[0]
    document.querySelector("#answer2").textContent = questions[quizQuestion].answers[1]
    document.querySelector("#answer3").textContent = questions[quizQuestion].answers[2]
    document.querySelector("#answer4").textContent = questions[quizQuestion].answers[3]
    
   
    for(let i=0; i< questions.length; i++) {
        const element = questions[i];
    }
 
    let timerInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerCountdown.textContent = timeLeft + " seconds";
            timeLeft--;
                    
        } else if (timeLeft === 0) {
            timerCountdown.textContent = "Game Over";
            clearInterval(timerInterval);
        }
    }, 1000);

    
});

    



    


    

   

   