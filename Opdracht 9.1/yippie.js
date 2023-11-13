function openModal() {

    document.body.classList.remove('NoobTeJong')

    document.getElementById('myModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';

    document.getElementById('redPage').style.display = 'none';
}

function checkLeeftijd() {
    var leeftijd = document.getElementById('leeftijdInput').value;

    if (leeftijd >= 18) {
        window.location.href = 'https://i.imgur.com/seglMrD.png';
    } else {
        document.body.classList.add('NoobTeJong');

        document.getElementById('myModal').style.display = 'none';
        document.getElementById('overlay').style.display = 'none';
        document.getElementById('redPage').style.display = 'block';
    }
}
