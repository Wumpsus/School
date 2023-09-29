        var headerElement = document.getElementById("yippie");
        var kleurVeranderKnop = document.getElementById("kleur");
        var resetKleurKnop = document.getElementById("resetKleurKnop");
        var oorspronkelijkeKleur = headerElement.style.color;
        function willekeurigeKleur() {
            var kleuren = ["red", "green", "blue", "yellow", "orange", "purple", "pink", "brown", "cyan", "magenta"];
            var willekeurigeIndex = Math.floor(Math.random() * kleuren.length);
            return kleuren[willekeurigeIndex];
        }
        function kleur() {
            var willekeurige = willekeurigeKleur();
            headerElement.style.color = willekeurige;
        }
        function resetKleur() {
            headerElement.style.color = oorspronkelijkeKleur;
        }
        kleurVeranderKnop.addEventListener("click", kleur);
        resetKleurKnop.addEventListener("click", resetKleur);