function generateTafel() {
    // Haalt geselecteerde tafel uit de dropdown op
    var selectedTafel = document.getElementById("selectTafel").value;

    // Opzoeken van tabel
    var table = document.getElementById("tafelTable");

    // Reset
    table.innerHTML = "";

    // Vult tabel in met gegevens
    for (var i = 1; i <= 10; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = selectedTafel;
        cell2.innerHTML = i + " x " + selectedTafel + " = " + (i * selectedTafel);
    }
}