const phrases = [
  "Cybersecurity Researcher",
  "CTF Competitor",
  "AI Explorer",
  "Emerging Tech Analyst",
  "Interdisciplinary Researcher"
];

document.addEventListener("DOMContentLoaded", () => {

  const text = document.getElementById("typewriter_text");

  if (!text) return;

  let phrase = 0;
  let letter = 0;
  let deleting = false;

  function animate() {

    const current = phrases[phrase];

    if (deleting) {
      letter--;
    } else {
      letter++;
    }

    text.textContent = current.substring(0, letter);

    let speed = deleting ? 45 : 85;

    if (!deleting && letter === current.length) {
      speed = 1400;
      deleting = true;
    }

    if (deleting && letter === 0) {
      deleting = false;
      phrase = (phrase + 1) % phrases.length;
      speed = 350;
    }

    setTimeout(animate, speed);
  }

  animate();

});
