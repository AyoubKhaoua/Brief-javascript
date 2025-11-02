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

//event listener
let currentQuestion = 0;
btnStart.addEventListener("click", (e) => {
  e.preventDefault();
  startQuiz(currentQuestion);
});
function startQuiz(index) {
  let reponsesHtml = "";

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
        }>Previous</button>
        <button id="next-button" class="btn btn-primary mt-3" ${
          index === Questions.length - 1 ? "disabled" : ""
        }>Next Question</button>
      </div>
    `;

  reponse.innerHTML = reponsesHtml;
}
