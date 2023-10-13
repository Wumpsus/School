function controleerBudget() {
    var invoerBedrag = prompt("Voer het bedrag in:");
    var budget = 100;
    var product = 60;
    var resultaatElement = document.getElementById("resultaat");

    if (invoerBedrag === null || invoerBedrag === "" || isNaN(invoerBedrag)) {
        resultaatElement.innerHTML = '<p style="color: black;"><strong>Ongeldige invoer. Voer een geldig bedrag in.</strong></p>';
    } else {
        var ingevoerdBedrag = parseFloat(invoerBedrag);

        if (ingevoerdBedrag >= product) {
            resultaatElement.innerHTML = '<p style="color: green;"><strong>U heeft genoeg geld!</strong></p>';
        } else {
            resultaatElement.innerHTML = '<p style="color: red;"><strong>Te weinig geld!.</strong></p>';
        }
    }
}