const questions = [
{
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correct: "<a>",
    explanation: "The <a> tag creates hyperlinks."
},
{
    question: "Which HTML tag is used to display an image?",
    options: ["<img>", "<image>", "<pic>", "<src>"],
    correct: "<img>",
    explanation: "The <img> tag displays images."
},
{
    question: "Which tag is used to create a paragraph?",
    options: ["<p>", "<para>", "<text>", "<paragraph>"],
    correct: "<p>",
    explanation: "The <p> tag creates paragraphs."
},
{
    question: "Largest heading tag?",
    options: ["<h6>", "<h1>", "<head>", "<heading>"],
    correct: "<h1>",
    explanation: "The <h1> tag is the largest heading."
},
{
    question: "Attribute used in links?",
    options: ["src", "alt", "href", "link"],
    correct: "href",
    explanation: "href specifies the destination URL."
}
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let timerInterval;
let totalSeconds = 0;
let questionStartTime = 0;

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");

const timerEl = document.getElementById("timer");

const finalScore = document.getElementById("final-score");
const percentage = document.getElementById("percentage");
const gradeEl = document.getElementById("grade");
const totalTime = document.getElementById("total-time");
const feedback = document.getElementById("feedback");

const reviewContainer = document.getElementById("review-container");

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz(){
    startScreen.style.display = "none";
    quizScreen.style.display = "block";

    startTimer();
    loadQuestion();
}

function startTimer(){
    totalSeconds = 0;

    timerInterval = setInterval(() => {
        totalSeconds++;
        timerEl.textContent = totalSeconds + "s";
    },1000);
}

function loadQuestion(){

    const question = questions[currentQuestion];

    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    questionText.textContent = question.question;

    optionsContainer.innerHTML = "";

    question.options.forEach(option => {

        const btn = document.createElement("button");

        btn.className = "option-btn";
        btn.textContent = option;

        btn.addEventListener("click", () => {
            selectAnswer(option);
        });

        optionsContainer.appendChild(btn);
    });

    questionStartTime = Date.now();
}

function selectAnswer(selectedOption){

    const timeTaken =
        ((Date.now() - questionStartTime)/1000).toFixed(1);

    const isCorrect =
        selectedOption === questions[currentQuestion].correct;

    if(isCorrect) score++;

    userAnswers.push({
        question: questions[currentQuestion].question,
        selected: selectedOption,
        correct: questions[currentQuestion].correct,
        isCorrect,
        explanation: questions[currentQuestion].explanation,
        timeTaken
    });

    if(currentQuestion < questions.length - 1){
        currentQuestion++;
        loadQuestion();
    }else{
        showResults();
    }
}

function showResults(){

    clearInterval(timerInterval);

    quizScreen.style.display = "none";
    resultScreen.style.display = "block";

    const percent =
        Math.round((score/questions.length)*100);

    let grade = "F";

    if(percent >= 90) grade = "A+";
    else if(percent >= 75) grade = "A";
    else if(percent >= 60) grade = "B";
    else if(percent >= 40) grade = "C";

    finalScore.textContent =
        `Score: ${score}/${questions.length}`;

    percentage.textContent =
        `Percentage: ${percent}%`;

    gradeEl.textContent =
        `Grade: ${grade}`;

    totalTime.textContent =
        `Time Taken: ${totalSeconds}s`;

    feedback.textContent =
        percent >= 60
        ? "Great Job!"
        : "Keep Practicing!";

    showReview();
}

function showReview(){

    reviewContainer.innerHTML = "";

    userAnswers.forEach((answer,index)=>{

        const card = document.createElement("div");

        card.className =
            `review-card ${answer.isCorrect ? "correct" : "wrong"}`;

        card.innerHTML = `
            <h3>Q${index+1}</h3>
            <p>Your Answer: ${answer.selected}</p>
            <p>Correct Answer: ${answer.correct}</p>
            <p>${answer.isCorrect ? "✅ Correct" : "❌ Wrong"}</p>
            <p>Explanation: ${answer.explanation}</p>
        `;

        reviewContainer.appendChild(card);
    });
}

function restartQuiz(){

    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    totalSeconds = 0;

    clearInterval(timerInterval);

    timerEl.textContent = "0s";

    resultScreen.style.display = "none";
    startScreen.style.display = "block";
}