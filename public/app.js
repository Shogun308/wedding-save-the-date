// Target Date: July 18th, 2027 (13:00:00 BST / UTC+1)
const targetDate = new Date('2027-07-18T13:00:00+01:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  // Elements
  const daysEl = document.getElementById('days');
  const hoursEl = document.getElementById('hours');
  const minutesEl = document.getElementById('minutes');
  const secondsEl = document.getElementById('seconds');

  if (timeRemaining < 0) {
    // If the date has passed
    if (daysEl) daysEl.innerText = '00';
    if (hoursEl) hoursEl.innerText = '00';
    if (minutesEl) minutesEl.innerText = '00';
    if (secondsEl) secondsEl.innerText = '00';
    
    const titleEl = document.querySelector('.countdown-title');
    if (titleEl) titleEl.innerText = "The Big Day Has Arrived!";
    return;
  }

  // Time calculations
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Formatting helper (pad with leading zero)
  const formatTime = (time) => String(time).padStart(2, '0');

  // Display results
  if (daysEl) daysEl.innerText = formatTime(days);
  if (hoursEl) hoursEl.innerText = formatTime(hours);
  if (minutesEl) minutesEl.innerText = formatTime(minutes);
  if (secondsEl) secondsEl.innerText = formatTime(seconds);
}

// Initial call
updateCountdown();

// Update every second
const timerInterval = setInterval(updateCountdown, 1000);

// Add dynamic interaction effects on page load
document.addEventListener('DOMContentLoaded', () => {
  const card = document.querySelector('.card-wrapper');
  if (card) {
    // Subtle float effect on mouse move for premium feeling (only on larger displays)
    if (window.innerWidth > 900) {
      document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 45;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 45;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      });
      
      // Reset position on mouse leave
      document.addEventListener('mouseleave', () => {
        card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        card.style.transition = 'all 0.5s ease';
      });
      
      document.addEventListener('mouseenter', () => {
        card.style.transition = 'none';
      });
    }
  }
});
