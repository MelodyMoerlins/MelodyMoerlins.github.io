const button = document.getElementById('playPauseButton');
const audio = document.getElementById('tacoAudio');

button.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().catch((error) => {
            console.error('Audio playback failed:', error);
            alert('Audio cannot be played. Please check your browser settings.');
        });
        button.textContent = "⏸️ It's...It's raining Tacos...";
        
    } else {
        audio.pause();
        button.textContent = '🎵 Rain Tacos...again?';
    }
});
