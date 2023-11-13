var openEyes = document.getElementById("Open")
var closeEyes = document.getElementById("Dicht")


openEyes.onclick = function() {
openEyes.style.display = "none";
closeEyes.style.display = "block";

}

closeEyes.onclick = function() {
    openEyes.style.display = "block";
    closeEyes.style.display = "none";
    
    }
    