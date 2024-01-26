// Declareer variabelen
let saldo = 0;
const saldoWeergave = document.getElementById('saldo');
const transactieInvoer = document.getElementById('transactieInvoer');
const stortKnop = document.getElementById('stortKnop');
const opneemKnop = document.getElementById('opneemKnop');
const transactieGeschiedenis = document.getElementById('transactieGeschiedenis');

// Functies
function stortGeld() {
    let bedrag = parseFloat(transactieInvoer.value);
    if (!isNaN(bedrag) && bedrag > 0) {
        saldo += bedrag;
        updateSaldo();
        voegTransactieToe(`Storting: €${bedrag.toFixed(2)}`);
    } else {
        alert('Voer een geldig bedrag in om te storten.');
    }
}

function opneemGeld() {
    let bedrag = parseFloat(transactieInvoer.value);
    if (!isNaN(bedrag) && bedrag > 0) {
        if (bedrag <= saldo) {
            saldo -= bedrag;
            updateSaldo();
            voegTransactieToe(`Opname: €${bedrag.toFixed(2)}`);
        } else {
            alert('Onvoldoende saldo!');
        }
    } else {
        alert('Voer een geldig bedrag in om op te nemen.');
    }
}

function updateSaldo() {
    saldoWeergave.textContent = 'Huidig Saldo: €' + saldo.toFixed(2);
}

function voegTransactieToe(transactie) {
    let li = document.createElement('li');
    li.textContent = transactie;
    transactieGeschiedenis.appendChild(li);
}

// Eventlisteners
stortKnop.addEventListener('click', stortGeld);
opneemKnop.addEventListener('click', opneemGeld);

// Initieer saldo
updateSaldo();