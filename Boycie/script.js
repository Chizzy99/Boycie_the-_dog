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

video.addEventListener('click',);
function playPauseMedia() {
    if (media.stopped) {
        media.play();    
    } else {
        media.pause();
    }
}