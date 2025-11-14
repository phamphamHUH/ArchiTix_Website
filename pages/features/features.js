document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("mouseGlow");
  glow.style.transform = `translate(${e.clientX - 125}px, ${
    e.clientY - 125
  }px)`;
});
