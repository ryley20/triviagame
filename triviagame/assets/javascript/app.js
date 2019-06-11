
        // javascript main quiz middle page
 
var timer = 60;
  function buildQuiz() {
    setInterval(function(){ timerFunction(); console.log("Hello"); }, 1000);

    var output = [];

    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answers = [];
      
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });
    quizContainer.innerHTML = output.join("");
  }

  function timerFunction(){
        if(timer>0){   
            timer-= 1;
            document.getElementById("timeRemaining").textContent = "Time Remaining: "+timer.toString();
        }else{
            document.getElementById("submit").click();
        }
  }
  
  
  
  
  function finishQuiz() {
      document.getElementById("quizWrapper").style = "display: none;";
      document.getElementById('results').style.display = 'block';
      $("#correctAnswers").text("correct answers: " + numCorrect);
      $("#incorrectAnswers").text("incorrect answers: " + numIncorrect);
      $("#unanswered").text("unanswered: " + numUnanswered);
  }
  
  
  
  
  
  function showResults() {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        

      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  };

  var numCorrect = 0;
  var numIncorrect = 0;
  var numUnanswered = 0;
  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");
  var myQuestions = [
    {
      question: "What actor plays in The Other Guys?",
      answers: {
        a: "Will Ferrell",
        b: "Will Smith",
        c: "Seth Rogan"
      },
      correctAnswer: "a"
    },
    {
      question: " Whose portrait name gets taken down in This Is the End?",
      answers: {
        a: "Seth Rogan",
        b: "Jonah Hill",
        c: "James Franco"
      },
      correctAnswer: "c"
    },
    {
      question: "What comedian is famously known for acting in movies with Dwayne (the rock) Johnson?",
      answers: {
        a: "Bo Burnham",
        b: "Chris Rock",
        c: "Adam Sandler",
        d: "Kevin Hart"
      },
      correctAnswer: "d"
    },
    { question: "What movie did Seth Rogan and James Franco star in involving weed?",
      answers: {
        a: "banana express ",
        b: "pineapple express",
        c: "apple express",
        d: "panda express"
      },
      correctAnswer: "b"
    }
  ];

  buildQuiz();

        