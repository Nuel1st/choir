const wrapper = document.querySelector(".wrapper"),
musicImg = document.querySelector(".Img"),
musicName = document.querySelector(".name"),
musicArtist = document.querySelector(".artist"),
playPauseBtn = document.querySelector(".play-pause"),
prevBtn = document.querySelector("#prev"),
nextBtn = document.querySelector("#next"),
mainAudio = document.querySelector("#main-audio"),
progressArea = document.querySelector(".progress-area"),
progressBar = document.querySelector(".progress-bar");


let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
isMusicPauxed =true;

window.addEventListener("load", () => {
    loadMusic(musicIndex);

});

function loadMusic(indexNumb) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = 'songs/image${allMusic[indexNumb - 1].src}.jpg';
    musicAudio.src = 'songs/songs${allMusic[indexNumb - 1].src}.mp3';
}

function playMusic () {
    wrapper.classList.add("paused");
    musicImg.classList.add('route');
    playPauseBtn.innerHTML = '<i class= "fi fi-sr-pause"></i>';
    mainAudio.play()
}

function pauseMusic () {
    wrapper.classList.remove("paused");
    musicImag.classList.remove('route');
    playPauseBtn.innerHTML = '<i class= "fi fi-sr-play"></i>';
    mainAudio.pause()
}

function prevMusic () {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

playPauseBtn.addEventListener("click", () => {
    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : play();
})