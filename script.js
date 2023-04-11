// Establish Elements

var questionsContainerEl = document.getElementById("question-container")
var questionsEl = document.getElementById("question")
var answerBtnEl = document.getElementById("answer-btn")
var optionsEl = document.getElementById("options");
// var answer = document.getElementById("answer");
var startBtn = document.getElementById("Start")
var submit = document.getElementById("submit-form");
var nextBtn = document.getElementById("nxt-btn");
var nameEl = document.getElementById("initials");
var timerEl = document.getElementById("timer");
var timerCount = 60;
var timer;

let currentQuestionIndex



//  Start Quiz Function

function startQuiz () {
    console.log("Started");
    startBtn.classList.add("hide")
    questionsContainerEl.classList.remove("hide")
    console.log("next button")
    console.log("questions show")
    quizQuestions = questions.sort()
    currentQuestionIndex = 0
    timerCount = 60;
    startTimer()
    setNextQuestion()
    // timerCount = 60;
    // startBtn.disabled = true;
    // showQuestions ();
    // startTimer ();

}

function setNextQuestion() {
   var currentQuestion = questions[currentQuestionIndex]
    questionsEl.textContent = currentQuestion.question;
    answerBtnEl.innerHTML = "";
    for (var i = 0; i < currentQuestion.answers.length; i++){
        var choice = currentQuestion.answers[i];
        var choicebtn = document.createElement('button')
        choicebtn.setAttribute('class', 'choice')
        choicebtn.setAttribute('value', choice);
        choicebtn.textContent = choice
        answerBtnEl.append(choicebtn);
    }
}

function showQuestion (question) {

}

function selectAnswer (event) {
    var buttonEl = event.target;
    console.log(questions[currentQuestionIndex].correctAnswer)
    if (buttonEl.value !== questions[currentQuestionIndex].correctAnswer){
        timerCount -= 15;
        timerEl.textContent = timerCount;
        // Display message as wrong
    }
    else {
        // Display message as correct
    }

    currentQuestionIndex++;
    if (timer <= 0 || currentQuestionIndex === questions.length) {
        // call the function to display final score screen
    }
    else {
        setNextQuestion()
    }
}

// Set up Timer
function startTimer() {
    timerEl= setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
        if (timerCount === 0) {
            clearInterval(timer);
        }
    },1000);
}

//  End Quiz

function endQuiz () {
    console.log("End");
    submit.classList.add("hide");
    questionsContainerEl.classList.add("hide");
    console.log("End quiz");
}
//  Questions using the Array

var questions = [
    {  
        question: "What year were the New York Mets founded?",
        answers: ["1922", "1942", "1962","1902"],
        correctAnswer: "1962"
    },

    {   question: "What does Mets stand for?",
        answers: ["MetalWorks","Methaphors", "Metropolitans","Meteors"],
        correctAnswer: "Metropolitans"

    },

    {
        question: "Which ballpark did the Mets call home from 1964 to 2008?",
        answers: ["Hilltop Park", "Polo Grounds", "Shea Stadium", "Ebbets Field"],
        correctAnswer: "Shea Stadium"

    },

    {

        question: "Which Mets player broke the MLB rookie home run record?",
        answers: ["Jeff McNeil", "Carlos Beltrain", "Pete Alonso", "John Shea"],
        correctAnswer: "Pete Alonso"

    },

    {
        question: "Who was the first New York Mets pitcher to throw a no-hitter?",
        answers: ["Doc", "Tom Seaver", "Johan Santana", "John Shea"],
        correctAnswer: "Johan Santana"
    }]
       
  
 
     // Event Listners for Starting the Quiz

startBtn.addEventListener("click", startQuiz);
answerBtnEl.addEventListener("click", selectAnswer);


