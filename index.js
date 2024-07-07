const audio = document.getElementById('audio');
const playPauseBtn = document.getElementById('play-pause-btn');
const stopBtn = document.getElementById('stop-btn');
const volumeSlider = document.getElementById('volume-slider');
const currentTime = document.getElementById('current-time');
const duration = document.getElementById('duration');
const songTitle = document.getElementById('song-title');
const artist = document.getElementById('artist');

let isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = 'Play';
    } else {
        audio.play();
        playPauseBtn.textContent = 'Pause';
    }
    isPlaying = !isPlaying;
}

playPauseBtn.addEventListener('click', togglePlay);

stopBtn.addEventListener('click', () => {
    audio.pause();
    audio.currentTime = 0;
    playPauseBtn.textContent = 'Play';
    isPlaying = false;
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value;
});

audio.addEventListener('timeupdate', () => {
    currentTime.textContent = formatTime(audio.currentTime);
    duration.textContent = formatTime(audio.duration);
});

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
