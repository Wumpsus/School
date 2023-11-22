const movingDiv = document.getElementById('movingDiv');
movingDiv.style.width = '300px';
movingDiv.style.height = '500px';
movingDiv.style.backgroundColor = 'red';
movingDiv.style.position = 'absolute';
movingDiv.style.top = '0';
movingDiv.style.left = '0';

let position = 0;

setInterval(() => {
  position += 1;
  movingDiv.style.left = position + 'px';

  if (position >= window.innerWidth - 50) {
    position = 0;
  }
}, 100);