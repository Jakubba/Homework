const stars = document.querySelector('#stars');
const moon = document.querySelector('#moon');
const mountains_behind = document.querySelector('#mountains_behind');
const mountains_front = document.querySelector('#mountains_front');
const tittle = document.querySelector('.tittle-text');
const btn = document.querySelector('.btn');
const desc = document.querySelector('.desc');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  stars.style.left = value * 5.5 + 'px';
  moon.style.top = value * 5.5 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  tittle.style.marginRight = value * 4 + 'px';
});
