var phrases = [
  "Cybersecurity Researcher",
  "CTF Competitor",
  "AI Explorer",
  "Emerging Tech Analyst",
  "Interdisciplinary Researcher"
];

var textElement = document.getElementById("typewriter_text");
var phraseIndex = 0;
var letterIndex = 0;
var deleting = false;

function animateTypewriter() {
  if (!textElement) {
    return;
  }

  var currentPhrase = phrases[phraseIndex];

  if (deleting) {
    letterIndex = letterIndex - 1;
  } else {
    letterIndex = letterIndex + 1;
  }

  textElement.textContent = currentPhrase.substring(0, letterIndex);

  var speed = deleting ? 45 : 85;

  if (!deleting && letterIndex === currentPhrase.length) {
    speed = 1400;
    deleting = true;
  } else if (deleting && letterIndex === 0) {
    deleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    speed = 350;
  }

  window.setTimeout(animateTypewriter, speed);
}

animateTypewriter();
