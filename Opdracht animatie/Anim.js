const BewegendDing = document.getElementById('BewegendDing');
BewegendDing.style.width = '50px';
BewegendDing.style.height = '50px';
BewegendDing.style.backgroundColor = 'red';
BewegendDing.style.position = 'absolute';
BewegendDing.style.top = '0';
BewegendDing.style.left = '0';

let position = 0;
let direction = 1;

// Random kleur op de klik
function RandomKleur() {
  const letters = "0123456789ABCDEF"
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Game over functie als het rood word
function dood() {
  alert("Game over!");
}
// Listener voor de klik
BewegendDing.addEventListener("click", () => {
  // Kleur verandering
  const NieuweKleur = RandomKleur();
  BewegendDing.style.backgroundColor = NieuweKleur;

  // Controleert of het rood is
  if (NieuweKleur === "blue") {
    dood();
  }
});

setInterval(() => {
  position += direction;

  if (position >= window.innerWidth - 50) {
    direction = -1;
  } else if (position <= 0) {
    direction = 1;
  }

  BewegendDing.style.left = position + 'px';
}, 1);