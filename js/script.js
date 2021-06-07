let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.search-form_submit').addEventListener('click', function() {
  offset = offset + 290;
  sliderLine.style.left= -offset + 'px';
  if (offset > 1450)
  offset = -290;
});

document.querySelector('.search-form_down').addEventListener('click', function() {
    offset = offset -290;
    sliderLine.style.left= -offset +'px';
    if (offset < -1450)
    offset = 0;
  });