const layers = document.querySelectorAll('.layer');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  layers.forEach(layer => {
    const depth = parseFloat(layer.getAttribute('data-depth'));
    const translateY = -scrollY * depth;
    layer.style.transform = `translateY(${translateY}px)`;
  });
});
// Add audio control
const audio = document.getElementById('background-audio');
audio.volume = 0.3; // Adjust the volume as needed
