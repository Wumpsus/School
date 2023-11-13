var openEyes = document.getElementById("opened")
var closeEyes = document.getElementById("closed")


openEyes.onclick = function() {
openEyes.style.display = "none";
closeEyes.style.display = "block";

}

closeEyes.onclick = function() {
    openEyes.style.display = "block";
    closeEyes.style.display = "none";
    
    }
    