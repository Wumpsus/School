function controleerBudget() {
    var budget = parseFloat(prompt("Wat is je budget?"));
    var productPrijs = parseFloat(prompt("Wat is de prijs van het product dat je wilt kopen?"));
    var resultaatElement = document.getElementById("resultaat");
    var GenoegGeldAfbeeldingElement = document.getElementById("GenoegGeldAfbeelding");
    var ongeldigeInvoerAfbeelding = document.getElementById("ongeldigeInvoerAfbeelding");
    var teWeinigGeldAfbeelding = document.getElementById("teWeinigGeldAfbeelding");

    if (isNaN(budget) || isNaN(productPrijs)) {
        resultaatElement.innerHTML = '<p style="color: black;"><strong>Ongeldige invoer. Voer geldige bedragen in.</strong></p>';
        GenoegGeldAfbeeldingElement.style.display = "none";
        ongeldigeInvoerAfbeelding.style.display = "block";
        teWeinigGeldAfbeelding.style.display = "none";
    } else {
        if (budget >= productPrijs) {
            resultaatElement.innerHTML = '<p style="color: green;"><strong>U heeft genoeg geld!</strong></p>';
            GenoegGeldAfbeeldingElement.style.display = "block";
            ongeldigeInvoerAfbeelding.style.display = "none";
            teWeinigGeldAfbeelding.style.display = "none";
        } else {
            resultaatElement.innerHTML = '<p style="color: red;"><strong>Te weinig geld!.</strong></p>';
            GenoegGeldAfbeeldingElement.style.display = "none";
            ongeldigeInvoerAfbeelding.style.display = "none";
            teWeinigGeldAfbeelding.style.display = "block";
        }
    }
}
