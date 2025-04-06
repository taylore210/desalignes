document.addEventListener("DOMContentLoaded", function () {
  const titleText = "LES DÉSALIGNÉS";
  const subtitleText = "Surveillance active.\nL'image est claire.\nMais voyez-vous ce qu'elle cache ?";

  const titleEl = document.getElementById("main-title");
  const subtitleEl = document.getElementById("subtitle");
  const btn = document.getElementById("launch-btn");

  let i = 0;
  function typeTitle() {
    if (i < titleText.length) {
      titleEl.textContent += titleText.charAt(i);
      i++;
      setTimeout(typeTitle, 100);
    } else {
      setTimeout(typeSubtitle, 500);
    }
  }

  let j = 0;
  function typeSubtitle() {
    if (j < subtitleText.length) {
      subtitleEl.textContent += subtitleText.charAt(j);
      j++;
      setTimeout(typeSubtitle, 40);
    } else {
      setTimeout(() => btn.style.display = 'inline-block', 600);
    }
  }

  typeTitle();
});