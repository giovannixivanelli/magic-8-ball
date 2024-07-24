const button = document.getElementById("ball-button");
const box = document.querySelector(".ball");
const answer = document.querySelector(".ball-answer");
const triange = document.querySelector(".triangle-bottom-1");
button.addEventListener("click", () => {
  box.classList.add("shaking");
  answer.classList.add("shaking");
  triange.classList.add("shaking");
  setTimeout(() => {
    box.classList.remove("shaking");
    answer.classList.remove("shaking");
    triange.classList.remove("shaking");
  }, 600);
});

function displayNumberAnswer() {
  let divContainer = document.getElementById("ball-answer");
  divContainer.setAttribute("style", "opacity: 1", "transition-duration: 2s");

  var number = Math.floor(Math.random() * 8);
  switch (number) {
    case 1:
      document.getElementById("ball-answer").innerHTML =
        "<p>It is<br>certain</p>";
      break;
    case 2:
      document.getElementById("ball-answer").innerHTML =
        "<p>It is<br>decidedly so</p>";
      break;
    case 3:
      document.getElementById("ball-answer").innerHTML =
        "<p>Reply hazy<br>try again</p>";
      break;
    case 4:
      document.getElementById("ball-answer").innerHTML =
        "<p>Cannot<br>predict now</p>";
      break;
    case 5:
      document.getElementById("ball-answer").innerHTML =
        "<p>Do not<br>count on it</p>";
      break;
    case 6:
      document.getElementById("ball-answer").innerHTML =
        "<p>My sources<br>say no</p>";
      break;
    case 7:
      document.getElementById("ball-answer").innerHTML =
        "<p>Outlook<br>not so good</p>";
      break;
    case 8:
      document.getElementById("ball-answer").innerHTML =
        "<p>Signs point<br>to yes</p>";
      break;
    default:
      document.getElementById("ball-answer").innerHTML =
        "<p>Let's<br>try again";
      break;
  }

  /* document.getElementById("ball-button").onclick = myFunction;
  function myFunction() {
    clearTimeout(divContainer);
  }*/
}
