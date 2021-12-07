let startBtn = document.querySelector("#startbutton");
let questionsDiv = document.querySelector("#quizquestions");
let answers = document.querySelector(".quizanswers");
let timerCountdown = document.querySelector("#timer");
let timeLeft = 10


const questions = [
    {
        title: "What type of car do the brothers drive in the show?",
        choices: ["Impala", "Chevette", "Mustang", "Sabre"],
        answer: "Impala"
    },
    {
        title: "What character is named after an executive producer?",
        choices: ["Dean", "Cass", "Mary", "Bobby"],
        answer: "Bobby"
    },
    {
        title: "What is the theme song for the show Supernatural?",
        choices: ["Round and Round", "Wayward Son", "Back in Black", "Ratt"],
        answer: "Wayward Son"
    },
    {
        title: "Which actor/actress met their spouse on the set?",
        choices:  ["Jenson Ackles", "Kim Rhodes", "Jared Padalecki", "Felicia Day"],
        answer: "Jared Padalecki"
    }
]
//remove the hide attribute to show questions.  Timer begins and start button is hidden
startBtn.addEventListener("click", function() {
    questionsDiv.removeAttribute("class")
    let questions = 0
  
    let timerInterval = setInterval(function() {
        if (timeLeft > 1) { 
        timerCountdown.textContent = timeLeft + " seconds";
     startBtn.hidden = true
    timeLeft--;
    } else if (timeLeft === 1) {
        timerCountdown.textContent = timeLeft + " second left";
    timeLeft--;
    } 
    else { 
            timerCountdown.textContent = "";
            clearInterval(timerInterval);
        }
    }, 1000);

    displayQuestions()
})

let currentQuestionList = 0;
let choicesEl = document.getElementById("questionChoices")

function displayQuestions(){
    let currentQuestion = questions[currentQuestionList] // questions[0]

    // will display the questions[0] title
    let titleEl = document.getElementById("questionTitle")
    titleEl.textContent = currentQuestion.title

    // display the choices as buttons

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i){
        let choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("value", choice)

        choiceBtn.textContent = choice;

        choicesEl.append(choiceBtn)

        choiceBtn.onclick = handleQuestionClick;
    })
};
// this is where it indicates if user chose the correct answer and to move on to the next question

let correctScore = 0

function handleQuestionClick(){
if(this.value === questions[currentQuestionList].answer){
        correctScore ++;
          console.log("correctAnswer")
    } else {
        console.log("wrongAnswer")
    }
currentQuestionList++;

    if(currentQuestionList === questions.length){
        questionsDiv.setAttribute("class", "hide");
        timeLeft = 0
    console.log(correctScore);
        quizScore(currentScore, questions.length)
        

        // fire off an end quiz function handling your score and whatnot
     
    } else {
        displayQuestions();
    }
}

function quizScore(correctAnswer, questions) {
    let score = correctAnswer/ questions * 100
    quizScore.textContent = "Your score is " + quizScore + "Do you want to play again?";
    return score;
}







    






    



    
    
    



    


    

   

   