const winkelmandje = ["Bananen", "Whiskey", "Chips", "Bonen", "Aardappelen"];

// Opdracht 1
document.getElementById("opdracht1").innerText = `Er zitten ${winkelmandje.length} producten in de winkelmand`;

// Opdracht 2
const productenTekst = `Uw producten zijn: ${winkelmandje.join(", ")}`;
document.getElementById("opdracht2").innerHTML = `<p>${productenTekst}</p>`;

// Opdracht 3
const vierdeProduct = winkelmandje[3];
document.getElementById("opdracht3").innerHTML = `<p>${vierdeProduct}, staat op de vierde plek in uw winkelmand</p>`;

// Opdracht 4
const gewijzigdWinkelmandje = [...winkelmandje];
gewijzigdWinkelmandje[1] = "Bier";
document.getElementById("opdracht4").innerHTML = `<p>Producten na wijziging: ${gewijzigdWinkelmandje.join(", ")}</p>`;

// Opdracht 5
function addProduct() {
    const nieuwProduct = prompt("Voer het nieuwe product in:");
    winkelmandje.push(nieuwProduct);
    document.getElementById("opdracht5").innerHTML = `<p>Nieuw product toegevoegd: ${winkelmandje.join(", ")}</p>`;
}

// Opdracht 6
if (winkelmandje.length > 1) {
    document.getElementById("opdracht6").innerHTML = `<p>U heeft genoeg producten om te tonen: ${winkelmandje.join(", ")}</p>`;
} else {
    document.getElementById("opdracht6").innerHTML = "<p>U heeft niet genoeg producten om te tonen.</p>";
}

// Opdracht 7
if (winkelmandje[4] === "Drop") {
    document.getElementById("opdracht7").innerHTML = `<p>U heeft alle producten, inclusief Drop: ${winkelmandje.join(", ")}</p>`;
} else {
    document.getElementById("opdracht7").innerHTML = "<p>U heeft geen Drop.</p>";
}

// Opdracht 8
document.getElementById("opdracht8").innerHTML = `<p>Producten met spaties: ${winkelmandje.join(" ")}</p>`;

// Opdracht 9
const oudeWinkelmand = [...winkelmandje];
winkelmandje.splice(0, 2);
document.getElementById("opdracht9").innerHTML = `<p>Oude winkelmand: ${oudeWinkelmand.join(", ")}<br>Nieuwe winkelmand na verwijdering: ${winkelmandje.join(", ")}</p>`;

// Opdracht 10
winkelmandje.sort();
document.getElementById("opdracht10").innerHTML = `<p>Gesorteerde winkelmand: ${winkelmandje.join(", ")}</p>`;
// Opdracht 11
const opdracht11Container = document.getElementById("opdracht11");
opdracht11Container.innerHTML = "<p>Producten in uw winkelmand  :</p>";

for (let i = 0; i < winkelmandje.length; i++) {
    opdracht11Container.innerHTML += `<p>${i + 1}. ${winkelmandje[i]}</p>`;
}