---
layout: default
title: "SILVRNEBYX Lab"
hero:
  heading: "SILVRNEBYX Lab"
  text: "Cybersecurity | Artificial Intelligence | Emerging Technology | Technical Research."
---

<div style="clear: both;"></div>

<img src="/silvrnebyxlab/assets/images/banner-silvrnebyx.png" alt="SILVRNEBYX Lab Banner" style="width:100%; border-radius:10px;" />

<!-- --------------- HOMEPAGE ID SECTION--------------- -->

<section class="identity_section">

  <h1 class="creator_name">GAUDYS L. SANCLEMENTE</h1>

<!-- --------------- ANIMATED TYPEWRITER --------------- -->

  <div class="typewriter_line">
    <span id="typewriter_text"></span>
    <span class="typewriter_cursor">|</span>
  </div>

<!-- --------------- HOMEPAGE BUTTONS --------------- -->

  <div class="homepage_buttons">
    <a href="{{ site.baseurl }}/writeups" class="challenge-box home-button">writeups</a>
    <a href="{{ site.baseurl }}/projects" class="challenge-box home-button">projects</a>
  </div>

</section>

<!-- --------------- TYPEWRITER SCRIPT --------------- -->

<script>
  const phrases = [
    "Cybersecurity Researcher",
    "CTF Competitor",
    "AI Explorer",
    "Emerging Tech Analyst",
    "Interdisciplinary Researcher"
  ];

  const typewriterText = document.getElementById("typewriter_text");

  let phraseIndex = 0;
  let characterIndex = 0;
  let isDeleting = false;

  function typePhrase() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      characterIndex--;
    } else {
      characterIndex++;
    }

    typewriterText.textContent = currentPhrase.substring(0, characterIndex);

    let delay = isDeleting ? 45 : 85;

    if (!isDeleting && characterIndex === currentPhrase.length) {
      delay = 1400;
      isDeleting = true;
    } else if (isDeleting && characterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = 350;
    }

    setTimeout(typePhrase, delay);
  }

  typePhrase();
</script>


