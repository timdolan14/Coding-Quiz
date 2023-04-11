// Establish Elements

var questionsContainerEl = document.getElementById("question-container")
var questionsEl = document.getElementById("question")
var answerBtnEl = document.getElementById("answer-btn")
var optionsEl = document.getElementById("options");
// var answer = document.getElementById("answer");
var startBtn = document.getElementById("Start")
var submitBtn = document.getElementById("x");
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
    nextBtn.classList.remove("hide")
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

    }]

    // {
    //     question: "Which ballpark did the Mets call home from 1964 to 2008?",
    //     answers: ["Hilltop Park", "Polo Grounds", "Shea Stadium", "Ebbets Field"],

    // ]
    // },

    // {
    // question: "Which Mets player broke the MLB rookie home run record?",
    // answers: [
    //     {text: "Jeff McNeil", correct: false},
    //     {text: "Carlos Beltrain", correct: false},
    //     {text: "Pete Alonso", correct: true},
    //     {text: "John Shea", correct: false}
    // ]
        
    // },

    // {
    // question: "Who was the first New York Mets pitcher to throw a no-hitter?",
    // answers: [
    //     {text: "Doc", correct: false},
    //     {text: "Tom Seaver", correct: false},
    //     {text: "Johan Santana", correct: true},
    //     {text: "John Shea", correct: false}
    // }]
       
  
 
     // Event Listners for Starting the Quiz

startBtn.addEventListener("click", startQuiz);
answerBtnEl.addEventListener("click", selectAnswer);

