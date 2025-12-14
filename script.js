const track = document.querySelector('.carousel-track');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

function updateActive() {
  const cards = Array.from(track.children);
  cards.forEach(c => c.classList.remove('active'));
  cards[1].classList.add('active');
}

prev.onclick = () => {
  track.insertBefore(track.lastElementChild, track.firstElementChild);
  updateActive();
};

next.onclick = () => {
  track.appendChild(track.firstElementChild);
  updateActive();
};

updateActive();
