const lights = document.querySelectorAll(".light");
const timerDisplay = document.getElementById("countdown");
const welcomeMessage = document.getElementById("welcome-message");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

let currentIndex = 0;
let timeLeft = 3;
let timerId = null;

// Welcome Message
setTimeout(function () {
  welcomeMessage.classList.add("show");

  setTimeout(function () {
    welcomeMessage.classList.remove("show");
  }, 3000);
}, 500);

function changeLight() {
  lights.forEach((light) => light.classList.remove("active"));

  lights[currentIndex].classList.add("active");
}

function updatecolor() {
  timeLeft--;
  timerDisplay.innerText = timeLeft;

  if (timeLeft === 0) {
    currentIndex++;

    if (currentIndex >= lights.length) {
      currentIndex = 0;
    }

    changeLight();

    timeLeft = 3;
    timerDisplay.innerText = timeLeft;
  }
}

function startT() {
  if (timerId === null) {
    changeLight();
    timerDisplay.innerText = timeLeft;

    timerId = setInterval(updatecolor, 1000);
  }
}

function stopT() {
  clearInterval(timerId);
  timerId = null;
}

startBtn.addEventListener("click", startT);
stopBtn.addEventListener("click", stopT);
