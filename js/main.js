let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions =questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');

const generateQuestions = (index) => {
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
 
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');

    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
    console.log(answerScore)
    score.push(answerScore);

   // selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    currentQuestion++;

        selectedOption.checked = false;
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
    
        `<h1 class="final-score">${visitor}s score: ${totalScore}</h1>
         <div class="summary">
            <h1>Summary</h1>
            <p> Your knowledge of Chainsaw man is as follows:</p>
            <p>15 - 21- Well Done, you know your stuff</p>
            <p>10 - 15 - Doing pretty good</p>
            <p>5 - 10 - Not paying much attention</p>
            <p>5 - Did you even read the manga,bro?</p>
        </div>
        <button class="restart">Restart Quiz</button>
        `;
        return;
    }
   generateQuestions(currentQuestion);
}

function loadPreviousQuestion() {
    currentQuestion--;
    score.pop();
    generateQuestions(currentQuestion);
}
function restartQuiz(e) {
    if(e.target.matches('button')) {
    currentQuestion = 0;
    score = [];
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);

let visitor;
 visitor = prompt("Please enter Your Name","");
