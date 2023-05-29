
const music = document.querySelector("audio");
const img = document.querySelector("img");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const songs = [
    {name: "Music_1",
title:"Char bottle vodka",
artist:"Yo Yo Honey singh",
},
    {
   name: "Music_2",
    title:"Le Le Rom Rom",
    artist:"Mc Square",
},
{
    name: "Music_3",
    title:"obsessed",
    artist:"Riar sahab",
},

{name: "Music_4",
title:"paradox",
artist:"unknown artist",
},

];


let isPlaying = false;
const playMusic = () => {
isPlaying = true;
music.play();
play.classList.replace("fa-play", "fa-pause");
img.classList.add("anime");

};
//for pause function
const pauseMusic = () => {
isPlaying = false;
music.pause();
play.classList.replace("fa-pause", "fa-play");
img.classList.remove("anime");
};

play.addEventListener("click" , () => {
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
});


//changing the data
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
     music.src = "music/" + songs.name + ".mp3";
    img.src = "image/" + songs.name + ".jpg";
    
};

songsIndex = 0;
const nextSong = () =>{
    songsIndex =(songsIndex +1)% songs.length;
    loadSong(songs[songsIndex]);
    playMusic();
};
const prevSong = () => {
    songsIndex =(songsIndex -1 + songs.length)%songs.length;
    loadSong(songs[songsIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);