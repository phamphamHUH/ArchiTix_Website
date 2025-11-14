//chamge hero content
const heroTitle = document.querySelector("#hero h1");

heroTitle.addEventListener("mouseenter", () => {
    heroTitle.textContent = "Discover Amazing Events!";
});

heroTitle.addEventListener("mouseleave", () => {
    heroTitle.textContent = "The Easiest Way to Fill Every Seat.";
});

//mouse glow
document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("mouseGlow");
  glow.style.transform = `translate(${e.clientX - 125}px, ${e.clientY - 125}px)`;
});

//event add
const events = [
  { name: "IVOS", place: "Manila", price: "₱500", img: "/assets/placeholder.png" },
  { name: "Design Expo", place: "Cebu", price: "₱350", img: "/assets/placeholder.png" },
  { name: "Taylor Swift", place: "Araneta", price: "₱200", img: "/assets/placeholder.png" },
  { name: "New Jeans", place: "Araneta", price: "₱211200", img: "/assets/placeholder.png" },
];

const container = document.getElementById("events");

events.forEach(e => {
  const card = document.createElement("div");
  card.classList.add("event");
  card.innerHTML = `
    <img src="${e.img}" alt="Event Image" />
    <div class="eventDetails">
      <h3>${e.name}</h3>
      <h5>Event Place: ${e.place}</h5>
      <h5>Ticket Price: ${e.price}</h5>
    </div>
  `;
  container.appendChild(card);
});
