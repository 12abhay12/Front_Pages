let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let title = document.querySelector("h1");
let artist = document.querySelector("p");
let image = document.querySelector(".song-img");

/* 🎵 Song List */
let songs = [
    {
        name: "Haara",
        artist: "Darshan Raval",
        src: "I Loved You/Haara (PenduJatt.Com.Se).mp3",
        img: "ILY.jpg"
    },
    {
        name: "Nafrat",
        artist: "Darshan Raval",
        src: "I Loved You/Nafrat (PenduJatt.Com.Se).mp3",
        img: "ILY.jpg"
    },
    {
        name: "Deewana",
        artist: "Darshan Raval",
        src: "I Loved You/Deewana (PenduJatt.Com.Se).mp3",
        img: "ILY.jpg"
    },
    {
        name: "Jiyaa",
        artist: "Darshan Raval",
        src: "I Loved You/Jiyaa (PenduJatt.Com.Se).mp3",
        img: "ILY.jpg"
    }
];

let songIndex = 0;

/* Load Song */
function loadSong(index){
    title.innerText = songs[index].name;
    artist.innerText = songs[index].artist;
    song.src = songs[index].src;
    image.src = songs[index].img;
    song.load();
}

/* Play / Pause */
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.replace("fa-pause", "fa-play");
    } else {
        song.play();
        ctrlIcon.classList.replace("fa-play", "fa-pause");
    }
}

/* Next Song */
function nextSong(){
    songIndex++;
    if(songIndex >= songs.length){
        songIndex = 0;
    }
    loadSong(songIndex);
    song.play();
    ctrlIcon.classList.replace("fa-play", "fa-pause");
}

/* Previous Song */
function prevSong(){
    songIndex--;
    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songIndex);
    song.play();
    ctrlIcon.classList.replace("fa-play", "fa-pause");
}

/* Progress Bar */
song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
};

setInterval(() => {
    progress.value = song.currentTime;
}, 500);

progress.onchange = function(){
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.replace("fa-play", "fa-pause");
};

/* Auto Next when song ends */
song.addEventListener("ended", nextSong);

/* Load first song */
loadSong(songIndex);
