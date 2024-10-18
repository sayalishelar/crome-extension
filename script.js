const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        a: "Harper Lee",
        b: "J.K. Rowling",
        c: "F. Scott Fitzgerald",
        d: "Ernest Hemingway",
        correct: "a"
    },
    {
        question: "What is the largest planet in our solar system?",
        a: "Earth",
        b: "Jupiter",
        c: "Mars",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        a: "Gold",
        b: "Oxygen",
        c: "Osmium",
        d: "Hydrogen",
        correct: "b"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const scoreContainer = document.getElementById('score');

let score = 0;

function loadQuiz() {
    quizData.forEach((data, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h2>${data.question}</h2>
            <label>
                <input type="radio" name="question${index}" value="a">
                ${data.a}
            </label>
            <label>
                <input type="radio" name="question${index}" value="b">
                ${data.b}
            </label>
            <label>
                <input type="radio" name="question${index}" value="c">
                ${data.c}
            </label>
            <label>
                <input type="radio" name="question${index}" value="d">
                ${data.d}
            </label>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function calculateScore() {
    quizData.forEach((data, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer && answer.value === data.correct) {
            score++;
        }
    });

    scoreContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
    scoreContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    submitButton.classList.add('hidden');
}

loadQuiz();

submitButton.addEventListener('click', calculateScore);
