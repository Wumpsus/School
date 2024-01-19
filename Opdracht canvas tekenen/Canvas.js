document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("tekenCanvas");
    const context = canvas.getContext("2d");
    let isMouseDown = false;

    // Event listeners om de muisklik vast te leggen
    canvas.addEventListener("mousedown", function(e) {
      isMouseDown = true;
      context.beginPath();
      context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    });

    canvas.addEventListener("mouseup", function() {
      isMouseDown = false;
      context.closePath();
    });

    canvas.addEventListener("mousemove", function(e) {
      if (!isMouseDown) return;

      context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
      context.stroke();
    });

    // Event listener om aanrakingen op mobiele apparaten vast te leggen
    canvas.addEventListener("touchstart", function(e) {
      isMouseDown = true;
      context.beginPath();
      context.moveTo(e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop);
    });

    canvas.addEventListener("touchend", function() {
      isMouseDown = false;
      context.closePath();
    });

    canvas.addEventListener("touchmove", function(e) {
      if (!isMouseDown) return;

      context.lineTo(e.touches[0].clientX - canvas.offsetLeft, e.touches[0].clientY - canvas.offsetTop);
      context.stroke();
    });
  });