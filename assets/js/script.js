function main() {
  const taglines = [
    "Puzzle Enthusiast",
    "Rhythm Gamer",
    "FPS Veteran",
    "Part-time Streamer",
    "Softcore Furry",
    "Average Tea Enjoyer",
    "Software Engineer",
    "Lua Abuser",
  ];
  const index = Math.floor(Math.random() * taglines.length);
  const elem = document.getElementById("tagline");
  elem.innerHTML = "Game Developer - " + taglines[index];
}

main();
