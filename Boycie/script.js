const button = document.querySelector('button');
const video = document.querySelector('.play-wrapper');
const close = document.querySelector('.vid-close');

button.addEventListener('click', () => {
    video.style.display = 'block';
    video.scrollIntoView({behaviour: "smooth"});
});

close.addEventListener('click', () => {
    video.style.display = 'none';   
});





