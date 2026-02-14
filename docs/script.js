console.log("JS LOADED");

const envelope = document.getElementById("envelope");
const btn = document.getElementById("openBtn");

let opened = false;

btn.addEventListener("click", (e) => {
  e.stopPropagation();
  envelope.classList.add("open");
  opened = true;
});

envelope.addEventListener("click", () => {
  if (opened) {
    window.location.href = "letter.html";
  }
});
