// PlanetMenu.js

const worlds = [
  { name: "Lumina", color: "#FFD700", link: "lumina.html" },
  { name: "Umbra", color: "#4B0082", link: "umbra.html" },
  { name: "Aether", color: "#00CED1", link: "aether.html" },
  { name: "Terranox", color: "#8B4513", link: "terranox.html" }
];

// 🎵 Add background music
const music = new Audio("space-music.mp3");
music.loop = true;
music.volume = 0.3;
music.play().catch(() => {
  console.log("User interaction needed to start music.");
});

// 🌌 Make the container
const container = document.createElement("div");
container.style.display = "flex";
container.style.justifyContent = "center";
container.style.alignItems = "center";
container.style.height = "100vh";
container.style.background = "radial-gradient(circle at center, #111 0%, #000 100%)";
container.style.flexWrap = "wrap";
container.style.gap = "2rem";

// 🌟 Title
const title = document.createElement("h1");
title.textContent = "Choose Your World";
title.style.color = "white";
title.style.width = "100%";
title.style.textAlign = "center";
title.style.fontSize = "3rem";
title.style.marginBottom = "2rem";
container.appendChild(title);

// 🪐 Create planets
worlds.forEach(world => {
  const planet = document.createElement("div");
  planet.textContent = world.name;
  planet.style.width = "120px";
  planet.style.height = "120px";
  planet.style.borderRadius = "50%";
  planet.style.background = world.color;
  planet.style.display = "flex";
  planet.style.alignItems = "center";
  planet.style.justifyContent = "center";
  planet.style.color = "#000";
  planet.style.fontWeight = "bold";
  planet.style.cursor = "pointer";
  planet.style.boxShadow = "0 0 15px white";
  planet.style.transition = "transform 0.3s ease";
  planet.style.animation = "spin 10s linear infinite";

  // 🌀 Hover scale effect
  planet.addEventListener("mouseenter", () => {
    planet.style.transform = "scale(1.2)";
  });

  planet.addEventListener("mouseleave", () => {
    planet.style.transform = "scale(1)";
  });

  // 🛸 Click takes you to a new page (placeholder)
  planet.addEventListener("click", () => {
    window.location.href = world.link; // change to whatever you want!
  });

  container.appendChild(planet);
});

// 🪄 Add everything to page
document.getElementById("root").appendChild(container);

// 🌠 Add spinning animation
const style = document.createElement("style");
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);