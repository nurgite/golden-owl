
import { useState } from "react";
import { motion } from "framer-motion";

export default function PlanetMenu() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const planets = [
    { name: "Lumina", color: "#fcd34d", focus: "Phonics", sound: "/sounds/lumina.mp3" },
    { name: "Nyx Deep", color: "#4b5563", focus: "Word Families", sound: "/sounds/nyx.mp3" },
    { name: "Mirror Pools", color: "#93c5fd", focus: "Sight Words", sound: "/sounds/mirror.mp3" },
    { name: "Solari Citadel", color: "#fca5a5", focus: "Grammar", sound: "/sounds/solari.mp3" },
    { name: "Umbra Hollow", color: "#6b7280", focus: "Comprehension", sound: "/sounds/umbra.mp3" },
  ];

  const playSound = (src) => {
    const audio = new Audio(src);
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 to-black text-white">
      <h1 className="text-4xl font-bold mb-8">Choose Your World</h1>
      <div className="grid grid-cols-2 gap-6">
        {planets.map((planet, index) => (
          <motion.button
            key={planet.name}
            className="w-40 h-40 rounded-full shadow-lg flex items-center justify-center text-xl font-semibold"
            style={{ backgroundColor: planet.color }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setSelectedPlanet(planet);
              playSound(planet.sound);
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {planet.name}
          </motion.button>
        ))}
      </div>

      {selectedPlanet && (
        <motion.div
          className="mt-10 p-6 bg-white text-black rounded-xl shadow-xl max-w-sm text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <h2 className="text-2xl font-bold mb-2">{selectedPlanet.name}</h2>
          <p className="text-md">Focus: {selectedPlanet.focus}</p>
        </motion.div>
      )}
    </div>
  );
}