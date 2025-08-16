// PlanetMenu.js

const worlds = [
  { name: "Lumina", color: "#FFD700" },
  { name: "Umbra", color: "#4B0082" },
  { name: "Aether", color: "#00CED1" },
  { name: "Terranox", color: "#8B4513" }
];

// Create container
const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";
container.style.background = "radial-gradient(circle at center, #111 0%, #000 100%)";
container.style.flexWrap = "wrap";
container.style.gap = "2rem";

// Add title
const title = document.createElement("h1");
title.textContent = "Choose Your World";
title.style.color = "white";
title.style.width = "100%";
title.style.textAlign = "center";
title.style.fontSize = "3rem";
title.style.marginBottom = "2rem";
container.appendChild(title);

// Add planets
worlds.forEach(world => {
  const button = document.createElement("div");
  button.textContent = world.name;
  button.style.width = "120px";
  button.style.height = "120px";
  button.style.borderRadius = "50%";
  button.style.background = world.color;
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.color = "#000";
  button.style.fontWeight = "bold";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 0 15px white";
  button.style.transition = "transform 0.3s ease";

  button.addEventListener("mouseenter", () => {
    button.style.transform = "scale(1.1)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "scale(1)";
  });

  button.addEventListener("click", () => {
    alert(`Entering ${world.name}... 🌌`);
    // TODO: You can trigger a scene change or animation here
  });

  container.appendChild(button);
});

// Mount to root
document.getElementById("root").appendChild(container);