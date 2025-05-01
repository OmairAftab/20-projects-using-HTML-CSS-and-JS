

function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const min = now.getMinutes().toString().padStart(2, '0');
    const sec = now.getSeconds().toString().padStart(2, '0');
    const time = `${hours}:${min}:${sec}`;
    clock.textContent = time;
}

setInterval(updateClock, 1000);
updateClock();