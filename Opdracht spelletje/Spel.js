function myFunction() {
    document.getElementById("myDIV").style.backgroundColor = "lightblue";
  }
  var showknop = document.getElementById("show")
  function myFunction() {
    document.getElementById("body").style.backgroundColor = "red";
    showknop.style.display = "none";
  
  setTimeout(function() {
      document.getElementById("body").style.backgroundColor = "green";
    }, 3000);
  }
  function change() {
      document.getElementById("body").style.backgroundColor = "lightblue";
      showknop.style.display = "block";
  }