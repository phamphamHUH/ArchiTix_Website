document.addEventListener("mousemove", (e) => {
  const glow = document.getElementById("mouseGlow");
  if (glow) {
    glow.style.transform = `translate(${e.clientX - 125}px, ${e.clientY - 125}px)`;
  }
});

const heroTitle = document.querySelector("article h1");

if (heroTitle) {
  window.addEventListener("load", () => {
    heroTitle.style.opacity = "1";
    heroTitle.style.transform = "translateY(0)";
  });

  heroTitle.addEventListener("mouseenter", () => {
    heroTitle.textContent = "Find Events You'll Love!";
  });

  heroTitle.addEventListener("mouseleave", () => {
    heroTitle.textContent = "Buy Tickets";
  });
}

const events = [
  { name: "IVOS", place: "Manila", price: "₱500", img: "/assets/placeholder.png" },
  { name: "Design Expo", place: "Cebu", price: "₱350", img: "/assets/placeholder.png" },
  { name: "Taylor Swift", place: "Araneta", price: "₱200", img: "/assets/placeholder.png" },
  { name: "New Jeans", place: "Araneta", price: "₱211,200", img: "/assets/placeholder.png" }
];

const eventContainers = document.querySelectorAll("#events");

// list mga event
if (eventContainers.length > 0) {
  eventContainers.forEach((container) => {
    events.forEach(ev => {
      const card = document.createElement("div");
      card.classList.add("event");

      card.innerHTML = `
        <img src="${ev.img}" alt="${ev.name}" class="sample" />
        <div class="eventDetails">
          <h3>${ev.name}</h3>
          <h5>Event Place: ${ev.place}</h5>
          <h5>Ticket Price: ${ev.price}</h5>
          <button>
            <div><img src="/assets/seat.png" alt="" /></div>
            View Seats
          </button>
        </div>
      `;

      container.appendChild(card);
    });
  });
}