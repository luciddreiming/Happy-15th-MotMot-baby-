onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};

setTimeout(() => {
  document.getElementById("letterBox").style.display = "flex";
}, 10000); // 10 seconds

function closeLetter() {
  document.getElementById("letterBox").style.display = "none";
}