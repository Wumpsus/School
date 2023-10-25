var getalElement = document.getElementById("getal");
var knop = document.getElementById("knop");
var getal = 0;

knop.addEventListener("click", function() {
  getal++;

  if (getal === 11) {
    getal = 0;
  }

  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

  getalElement.style.color = randomColor;

  getalElement.textContent = getal;
});