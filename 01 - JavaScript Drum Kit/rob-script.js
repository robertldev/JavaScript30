window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0; /* allows you to hammer a particular key repeatedly! */
    audio.play();
    key.classList.add('playing');
});

window.addEventListener('keyup', function(e) {
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.remove('playing');
})