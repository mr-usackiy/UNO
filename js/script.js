let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.arrow_img').addEventListener('click', function() {
  offset = offset + 290;
  sliderLine.style.left= -offset + 'px';
  if (offset > 1450)
  offset = -290;
});

document.querySelector('.arrow_img1').addEventListener('click', function() {
    offset = offset -290;
    sliderLine.style.left= -offset +'px';
    if (offset < -1450)
    offset = 0;
  });