const quizData = [
  {
    question: "What is the main benefit of battery swapping?",
    options: {
      a: "Lower vehicle cost",
      b: "Instant recharge",
      c: "Better paint job"
    },
    correct: "b"
  },
  {
    question: "How long does battery swapping usually take?",
    options: {
      a: "Several hours",
      b: "A few minutes",
      c: "Half a day"
    },
    correct: "b"
  },
  {
    question: "What does battery swapping improve?",
    options: {
      a: "Fuel economy",
      b: "Charging speed and efficiency",
      c: "Exhaust systems"
    },
    correct: "b"
  },
  {
    question: "Where are battery swapping stations usually located?",
    options: {
      a: "Fuel stations and EV hubs",
      b: "Movie theaters",
      c: "Banks"
    },
    correct: "a"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const quiz = quizData[currentQuestion];
  document.getElementById("question").textContent = quiz.question;
  
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  for (let key in quiz.options) {
    const btn = document.createElement("button");
    btn.className = "btn btn-outline-primary my-1";
    btn.textContent = `${key.toUpperCase()}. ${quiz.options[key]}`;
    btn.onclick = () => checkAnswer(key);
    optionsDiv.appendChild(btn);
    optionsDiv.appendChild(document.createElement("br"));
  }

  document.getElementById("result").textContent = "";
}

function checkAnswer(answer) {
  const quiz = quizData[currentQuestion];
  const result = document.getElementById("result");
  if (answer === quiz.correct) {
    result.textContent = "Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "Wrong! Try again."; 
    result.style.color = "red";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = "<h4>You've completed the quiz! 🎉</h4>";
  }
}

 
window.onload = loadQuestion;
