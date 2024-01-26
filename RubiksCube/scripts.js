let container = document.getElementById('container');

window.addEventListener('mousemove', function(e) {
 let x = e.clientX / window.innerWidth; // Normalize the x coordinate to range 0-1
 let y = e.clientY / window.innerHeight; // Normalize the y coordinate to range 0-1

 let dx = Math.abs(x - 0.5); // Distance from the center in x direction
 let dy = Math.abs(y - 0.5); // Distance from the center in y direction

 // Apply a scale based on the distance from the center
 container.style.transform = `scale(${1 + 0.1 * Math.min(dx, dy)})`;
});
