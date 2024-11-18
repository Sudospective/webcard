let showAbout = false;
let started = false;
let startTime = 0;
let startValue = 0;
let endValue = 0;
let currentValue = 0;
let animID = null;

function easeInOutCirc(x) {
  return x < 0.5
    ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2
    : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
}

function moveAbout() {
  if (!started) {
    startTime = Date.now();
    currentValue = startValue;
    started = true;
  }
  let time = (Date.now() - startTime) * 2;
  const mainDoc = document.getElementsByTagName("main")[0];
  if (time < 1000) {
    currentValue = startValue + (endValue - startValue) * easeInOutCirc(time * 0.001);
    console.log(currentValue);
    mainDoc.style.top = `${currentValue * 100}vh`;
    mainDoc.style.bottom = `${-currentValue * 100}vh`;
  }
  else {
    currentValue = endValue;
    mainDoc.style.top = `${endValue * 100}vh`;
    mainDoc.style.bottom = `${-endValue * 100}vh`;
    started = false;
    return;
  }
  animID = requestAnimationFrame(moveAbout);
}

function onAboutClick() {
  showAbout = true;
  startValue = 1.1;
  endValue = 0;
  moveAbout();
}

function onAboutDoneClick() {
  showAbout = false;
  startValue = 0;
  endValue = 1.1;
  moveAbout();
}

function main() {
  const taglines = [
    "Puzzle Enthusiast",
    "Rhythm Gamer",
    "FPS Veteran",
    "Part-time Streamer",
    "Softcore Furry",
    "Average Tea Enjoyer",
    "Game Developer",
    "Lua Abuser",
  ];
  const tagtips = [
    "My favorite is the Rubik's Cube.",
    "My most played rhythm game is Project OutFox.",
    "My father and brother would play DOOM with me when I was very young.",
    "I sometimes stream over at https://twitch.tv/sudospective.",
    "I'm very fond of anthropomorphic cartoons. Bluey is pretty cool.",
    "My favorite is green tea.",
    "I've helped develop a few games like Cowboys vs. Hipsters and Seekers of the Aether.",
    "You can see the crimes in my modfiles at https://sudospective.net/modfiles.",
  ];
  const index = Math.floor(Math.random() * taglines.length);
  const tagline = document.getElementById("tagline");
  const tagtip = document.getElementById("tagtip");
  tagline.innerHTML = "Software Engineer - " + taglines[index];
  tagtip.innerHTML = tagtips[index];

  console.log(tagline.innerHTML);
  console.log(tagtip.innerHTML);

  tagline.addEventListener("mouseover", () => {
    tagtip.style.display = "block";
  }, false);
  tagline.addEventListener("mouseleave", () => {
    tagtip.style.display = "none";
  }, false);
}

window.onload = main;
