function acceptCookies() {
    document.getElementById("cookie-wall").style.display = "none";
    document.getElementById("content").style.display = "block";
}


setInterval(function() {
    document.getElementById("cookie-wall").style.display = "flex";
}, 5000); // 