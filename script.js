let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";
function displayNumberAnswer() {
  var number = Math.floor(Math.random() * 8);
  document.getElementById("ball-number").innerHTML = number;
  switch (number) {
    case 1:
      document.getElementById("ball-answer").innerHTML = "<p>It is certain</p>";
      break;
    case 2:
      document.getElementById("ball-answer").innerHTML =
        "<p>It is decidedly so</p>";
      break;
    case 3:
      document.getElementById("ball-answer").innerHTML =
        "<p>Reply hazy try again</p>";
      break;
    case 4:
      document.getElementById("ball-answer").innerHTML =
        "<p>Cannot predict now</p>";
      break;
    case 5:
      document.getElementById("ball-answer").innerHTML =
        "<p>Do not count on it</p>";
      break;
    case 6:
      document.getElementById("ball-answer").innerHTML =
        "<p>My sources say no</p>";
      break;
    case 7:
      document.getElementById("ball-answer").innerHTML =
        "<p>Outlook not so good</p>";
      break;
    case 8:
      document.getElementById("ball-answer").innerHTML =
        "<p>Signs point to yes</p>";
      break;
    default:
      document.getElementById("ball-answer").innerHTML = "<p>Let's try again";
      break;
  }
}
