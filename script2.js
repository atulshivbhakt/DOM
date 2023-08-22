function updateTimer() {
    var now = new Date();
    var hours = now.getHours().toString().padStart(2, '0');
    var minutes = now.getMinutes().toString().padStart(2, '0');
    var seconds = now.getSeconds().toString().padStart(2, '0');

    var timeString = hours + ':' + minutes + ':' + seconds;
    document.getElementById('timer').textContent = timeString;
}

// Initial update
updateTimer();

// Update the timer every second
setInterval(updateTimer, 1000);
