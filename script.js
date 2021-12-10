let startBtn = document.querySelector("#startbutton");
let questionsDiv = document.querySelector("#quizquestions");
let answers = document.querySelector(".quizanswers");
let timerCountdown = document.querySelector("#timer");
let timeLeft = 20
let saveInitials = document.querySelector("#container");
let saveBtn = document.querySelector(".btn");
let inputInitials = document.querySelector("#initials");



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
//remove the hide attribute to show questions and timer begins

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
            timerCountdown.textContent = "Game Over. Your score is " + score + " !";
            saveInitials.removeAttribute("class")
            clearInterval(timerInterval);
            questionsDiv.setAttribute("class", "hide");
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

    // display choices as buttons

    choicesEl.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i){
        let choiceBtn = document.createElement("button")
        choiceBtn.setAttribute("value", choice)

        choiceBtn.textContent = choice;

        choicesEl.append(choiceBtn)

        choiceBtn.onclick = handleQuestionClick;
    })
};
// indicates if user chose the correct answer and to move on to the next question
let correctScore = 0
allQuestions = questions.length
let score = correctScore / allQuestions * 100;
let parsed = parseInt(correctScore, allQuestions)
//let score = correctScore/ questions.length * 100

function handleQuestionClick(){
if(this.value === questions[currentQuestionList].answer){
        correctScore ++;
          console.log("correctAnswer")
    } 
    else {
        timeLeft -= 5;
        console.log("wrongAnswer")
    }
currentQuestionList++;

    if(currentQuestionList === allQuestions){
        questionsDiv.setAttribute("class", "hide");
        timeLeft = 0
    } else {
        displayQuestions();
    }
}

function quizScore (){
    //let score = correctScore / allQuestions * 100;
    let parsed = parseInt(correctScore, allQuestions)
    if (isNaN(parsed)) { return 0; } 
    return parsed * 100
    //return score;  
    console.log(quizScore);
    console.log(score);
}

saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    //let textAreaValue = inputInitials;
    localStorage.setItem("saveInitials", "inputInitials");
    console.log(localStorage)

function renderLastRegistered() {
let saveInitials = localStorage.getItem("inputInitials");
console.log(localStorage)
}
})
// function renderLastRegistered() {
//let textAreaValue = localStorage.getItem("inputInitials");
// console.log(localStorage)
// }

             // fire off an end quiz function handling your score and whatnot
     



   

   