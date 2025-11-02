const Questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Malta", "Vatican City", "San Marino"],
    answer: "Vatican City",
  },
];

//select elements
let question = document.getElementById("question");
let reponse = document.getElementById("options");
let btnNext = document.getElementById("next-button");
let btnPrivious = document.getElementById("privious-button");
let btnStart = document.getElementById("startGame");
let listOption = document.querySelector("list-group");
let input = document.getElementsByName("option");
/* let scoreInput = document.getElementById("score");
 */ let h2 = document.getElementById("h2");
console.log(h2);
//event listener
let currentQuestion = 0;
btnStart.addEventListener("click", (e) => {
  e.preventDefault();
  currentQuestion = 0;
  startQuiz(currentQuestion);
});
function startQuiz(index) {
  let reponsesHtml = "";
  currentQuestion = index;
  Result(index);
  const element = Questions[index];
  question.innerHTML = element.question;

  element.options.forEach((opt, i) => {
    reponsesHtml += `
        <div>
          <input type="radio" name="option" id="option${i}" value="${opt}" />
          <label for="option${i}" class="option">${i + 1}- ${opt}</label>
        </div>`;
  });

  reponsesHtml += `
      <div>
        <button id="previous-button" class="btn btn-primary mt-3" ${
          index === 0 ? "disabled" : ""
        } onclick="PrevQ(${index})">Previous</button>
        <button id="next-button" class="btn btn-primary mt-3" ${
          index === Questions.length ? "disabled" : ""
        } onclick="Checked(${index})" >Next Question</button>
      </div>
    `;

  reponse.innerHTML = reponsesHtml;
}

function NextQ(index) {
  if (index < Questions.length) {
    index++;
    startQuiz(index);
  }
}
function PrevQ(index) {
  if (index > 0) {
    index--;
    startQuiz(index);
  }
}
//function checked

function Checked(index) {
  for (let i = 1; i < input.length; i++) {
    if (input[i].checked) {
      Score(index);
      NextQ(index);

      /* Score(index); */
      //console.log(Questions[index].answer);
    }
  }
}

//create elemnt for pirnt the score
let div = document.createElement("strong");
//afiche le score
let score = 0;
function Score(index) {
  for (let i = 0; i < input.length; i++) {
    if (input[i].checked) {
      if (input[i].value === Questions[index].answer) {
        score += 1;
        /* scoreInput.textContent = `${score}`; */
      }
      break;
    }
  }
}
//result
function Result(index) {
  if (index === Questions.length) {
    reponse.remove();
    question.remove();
    h2.textContent = `You're score is ${score}/4`;
  }
}
/* for (let i = 1; i < 5; i++) {
    if (input[i].checked.value === Questions[index].answer) {
      score += 10;
      console.log(score);
    }
  } */
