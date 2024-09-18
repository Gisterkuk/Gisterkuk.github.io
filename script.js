const getFutureDate = (monthsAhead) => {
    const today = new Date();
    const futureDate = new Date(today.setMonth(today.getMonth() + monthsAhead));
    futureDate.setHours(0, 0, 0, 0); 
    return futureDate.getTime();
};

const countdownDate = getFutureDate(12);

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days < 10 ? '0' + days : days;
    document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;

    if (distance < 0) {
        clearInterval(interval);
        document.querySelector('.countdown').innerHTML = "<p class='fade-in'>¡El sitio está en vivo ahora!</p>";
    }
};

const interval = setInterval(updateCountdown, 1000);
