const envelope = document.getElementById("envelope");
const btn = document.getElementById("openBtn");

btn.addEventListener("click", () => {
  envelope.classList.add("open");
});

// after opened, clicking goes to the letter page
envelope.addEventListener("click", () => {
  if (envelope.classList.contains("open")) {
    window.location.href = "letter.html";
  }
});
