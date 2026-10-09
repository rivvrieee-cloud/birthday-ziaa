const pages = document.querySelectorAll(".page");

function showPage(pageId) {
  pages.forEach(function(page) {
    page.classList.remove("active");
  });

  document.getElementById(pageId).classList.add("active");
}

const envelope = document.getElementById("envelope");
const cake = document.getElementById("cake");
const flames = document.getElementById("flames");
const cakeMessage = document.getElementById("cakeMessage");
const toGame = document.getElementById("toGame");

let candlesOut = false;
let score = 0;
let gameFinished = false;

// 1. Buka amplop
envelope.addEventListener("click", function() {
  showPage("cakePage");
});

// 2. Padamkan lilin
cake.addEventListener("click", function() {
  if (candlesOut) return;

  candlesOut = true;
  flames.textContent = "✨💨✨";
  cakeMessage.textContent =
    "Wish made! May all your dreams come true. 💗";

  toGame.classList.remove("hidden");
});

toGame.addEventListener("click", function() {
  showPage("gamePage");
});

// 3. Mini game menangkap hati
const hearts = document.querySelectorAll(".heart");
const scoreDisplay = document.getElementById("score");
const gameMessage = document.getElementById("gameMessage");
const toLetter = document.getElementById("toLetter");

hearts.forEach(function(heart) {
  heart.addEventListener("click", function() {
    if (gameFinished || heart.disabled) return;

    heart.disabled = true;
    heart.style.visibility = "hidden";
    score++;

    scoreDisplay.textContent = score;

    if (score === 5) {
      gameFinished = true;
      gameMessage.textContent =
        "You collected all the love! You deserve it all. 💖";

      toLetter.classList.remove("hidden");
      celebrateHearts();
    } else {
      gameMessage.textContent =
        "Yay! " + score + " hearts collected. Keep going! 💕";
    }
  });
});

toLetter.addEventListener("click", function() {
  showPage("letterPage");
});

// 4. Kejutan terakhir
const celebrate = document.getElementById("celebrate");
const finalMessage = document.getElementById("finalMessage");

celebrate.addEventListener("click", function() {
  finalMessage.classList.remove("hidden");
  celebrate.textContent = "Love you, bestie! ♡";
  celebrate.disabled = true;
  celebrateHearts();
});

// Membuat hujan hati dan kilau
function celebrateHearts() {
  const decorations = ["💗", "💕", "💖", "✨", "🎀", "🌸"];

  for (let i = 0; i < 35; i++) {
    const item = document.createElement("span");

    item.className = "confetti";
    item.textContent =
      decorations[Math.floor(Math.random() * decorations.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.animationDelay = Math.random() * 1.5 + "s";
    item.style.fontSize = 16 + Math.random() * 20 + "px";

    document.body.appendChild(item);

    setTimeout(function() {
      item.remove();
    }, 5000);
  }
}