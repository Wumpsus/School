// Opdracht 11
const opdracht11Container = document.getElementById("opdracht11");
opdracht11Container.innerHTML = "<p>Producten in uw winkelmand  :</p>";

for (let i = 0; i < winkelmandje.length; i++) {
    opdracht11Container.innerHTML += `<p>${i + 1}. ${winkelmandje[i]}</p>`;
}