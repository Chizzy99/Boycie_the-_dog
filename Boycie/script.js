const button = document.querySelector('button');
const video = document.querySelector('.play-wrapper');
const close = document.querySelector('.vid-close');
const play = document.querySelector('.play');

button.addEventListener('click', () => {
    video.style.display = 'block';
});

close.addEventListener('click', () => {
    video.style.display = 'none';   
});

play.addEventListener('click', playPauseMedia);
function playPauseMedia() {
    if (media.paused) {
        media.play();    
    } else {
        media.pause();
    }
}