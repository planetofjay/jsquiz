// const variables
const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const trueBtn = document.getElementById('True');
const falseBtn = document.getElementById('False');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

let questions = [
  {
    question: "What is better if you wish to achieve success?",
    answers: [
      { option: "Hard Work", answer: false },
      { option: "Smart Work", answer: true }
    ]
  },
  {
    question: "Do you listen to Radiohead?",
    answers: [
      { option: "No, I've seen the movie though the one where debby ryan comes out.", answer: false },
      { option: "I'm a creep. I'm a weirdo.", answer: true }
    ]
  },
  {
    question: "How was your work today?",
    answers: [
      { option: "There's something magical about a place you can't leave for 8 hours a day 5 days a week for fear of being homeless.", answer: true },
      { option: "It was pretty awesome, thanks for asking.", answer: false }
    ]
  }
]

// onclick events
restartBtn.addEventListener('click', restart);
prevBtn.addEventListener('click', prev);
nextBtn.addEventListener('click', next);
submitBtn.addEventListener('click', submit);

// beginQuiz()
function beginQuiz() {
  currentQuestion = 0;
  questionText.innerHTML = questions[currentQuestion].question;

  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let go = 0;
    if (questions[currentQuestion].answers[go].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let go = 1;
    if (questions[currentQuestion].answers[go].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  prevBtn.classList.add('hide');
}

beginQuiz();

// listener - restart
function restart() {
    prevBtn.classList.remove('hide');
    nextBtn.classList.remove('hide');
    submitBtn.classList.remove('hide');
    trueBtn.classList.remove('hide');
    falseBtn.classList.remove('hide');
    score = 0;
    userScore.innerHTML = score;

    beginQuiz();
}

// listener - next
function next() {
  currentQuestion++;

  if (currentQuestion >= 2) {
    nextBtn.classList.add('hide');
    prevBtn.classList.remove('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;

  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let go = 0;
    if (questions[currentQuestion].answers[go].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let go = 1;
    if (questions[currentQuestion].answers[go].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  prevBtn.classList.remove('hide');
}

// listener - prev
function prev() {
  currentQuestion--;

  if (currentQuestion <= 0) {
    prevBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
  }
  questionText.innerHTML = questions[currentQuestion].question;

  trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
  trueBtn.onclick = () => {
    let go = 0;
    if (questions[currentQuestion].answers[go].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
  falseBtn.onclick = () => {
    let go = 1;
    if (questions[currentQuestion].answers[go].answer) {
      if (score < 3) {
        score++;
      }
    }
    userScore.innerHTML = score;
    if (currentQuestion < 2) {
      next();
    }
  }
  nextBtn.classList.remove('hide');
}

// listener - submit
function submit() {
  prevBtn.classList.add('hide');
  nextBtn.classList.add('hide');
  submitBtn.classList.add('hide');
  trueBtn.classList.add('hide');
  falseBtn.classList.add('hide');

  if (score === 0) {
    questionText.innerHTML = "You've got " + score + " score, you should try again LOL.";
  } else if (score === 1) {
    questionText.innerHTML = "You've got " + score + " score, there is still a chance.";
  } else if (score === 2) {
    questionText.innerHTML = "You've got " + score + " scores, you are almost there!";
  } else {
    questionText.innerHTML = "You've got " + score + " scores! You passed vibe check :)";
  }
}

// add classList for styles
document.querySelector('div').classList.add('container');
document.querySelector('div #score-area').classList.add('score');

document.querySelector('div #question-area').classList.add('content');
document.querySelector('div #question-area #question-text').classList.add('questions');
document.querySelector('div #question-area #options').classList.add('options');
document.querySelector('div #question-area #options #True').classList.add('btn');
document.querySelector('div #question-area #options #False').classList.add('btn');

document.querySelector('div #btn-area #restart').classList.add('btn');
document.querySelector('div #btn-area #prev').classList.add('btn');
document.querySelector('div #btn-area #next').classList.add('btn');
document.querySelector('div #btn-area #submit').classList.add('btn');