const pianoKeys = document.querySelectorAll('.key');
const volume_slider = document.querySelector('.volume-slider');
const speaker_status = document.querySelector('.album-play');
// we have taken the adress of all elements associated with class '.key' then store it as array in pianoKeys

// audio = new Audio('assests/sounds-piano/1.mp3');
// music = new Audio('assests/sounds-piano/1.mp3');
let volume_value = 0.9;
function playSound(newUrl) {
    console.log(newUrl);
    // new Audio(newUrl).play();
    music = new Audio(newUrl);
    music.volume = volume_value;
    music.play();
    //    music.volume = 0;
}

pianoKeys.forEach((pianoKey, i) => {
    const number = i < 9 ? '0' + (i + 1) : (i + 1);
    // const newUrl = 'assests/24-piano-keys/key' + (number) + '.mp3';
    const newUrl = 'assests/sounds-piano/' + (i + 1) + '.mp3';
    pianoKey.addEventListener('click', () => playSound(newUrl));
})
// function handle_volume(){
//     console.log(num);
//     volume_value = num / 100 ;
//     console.log(volume_value);
// }
const handleVolume = (e) => {
    let num2 = e.target.value; // passing the range slider value as an audio volume
    console.log(num2);
    volume_value = num2 / 100;
    album_music.volume = volume_value;

    console.log(volume_value);
    var slider_color = 'linear-gradient(90deg ,rgba(119, 76, 185,1)' + num2 + '% ,rgba(54, 54, 54,1)' + num2 + '% )';
    volume_slider.style.background = slider_color;

}

volume_slider.addEventListener("input", handleVolume);
// const handvolume = (e) => {
//     Audio.volume = e.
// }
// volume_slider.addEventListener("input",handvolume);









// assests/sounds-piano/1.mp3
// assests/Piano_HTML_CSS-main/sounds/white-keys/20.mp3
// here a for loop is set which initiates form starting index of array continue till last index number data.
// temporarylily its address is stored in '.pianoKey'
// by default the i statrts from 0
// function playing() {
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/15.mp3'); }, 1000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/15.mp3'); }, 1500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/15.mp3'); }, 2000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/17.mp3'); }, 2500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/20.mp3'); }, 3000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/20.mp3'); }, 3500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/20.mp3'); }, 4000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/19.mp3'); }, 4500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/17.mp3'); }, 5000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/17.mp3'); }, 5500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/17.mp3'); }, 6000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/14.mp3'); }, 6500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/14.mp3'); }, 7000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/14.mp3'); }, 7500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/20.mp3'); }, 8000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/15.mp3'); }, 8500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/15.mp3'); }, 9000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/20.mp3'); }, 9500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/15.mp3'); }, 10000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/17.mp3'); }, 10500);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/15.mp3'); }, 11000);
//     setTimeout(() => { playSound('assests/Piano_HTML_CSS-main/sounds/white-keys/19.mp3'); }, 11500);




// }

function playingdf() {
    let url_1 = 'assests/sounds-piano/';
    let url_2 = '.mp3'
    let url_num = 1;
    let time = 1000;
    let key = 1;
    let time_mul = 1;

    // note break 
    key = 4;
    time_mul = 1;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 4;
    time_mul = 1.4;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 4;
    time_mul = 1.9;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 1;
    time_mul = 2.4;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 3;
    time_mul = 2.7;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 4;
    time_mul = 2.9;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 5;
    time_mul = 3.4;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 6;
    time_mul = 3.9;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 6;
    time_mul = 4.4;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 6;
    time_mul = 4.9;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 5;
    time_mul = 5.6;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 4;
    time_mul = 5.9;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 5;
    time_mul = 6.7;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));
    // note break 
    key = 1;
    time_mul = 7.4;
    setTimeout(() => { playSound(url_1 + key + url_2); }, (time * time_mul));





}

const play = document.querySelector('.play');
play.addEventListener('click', () => playingdf());
album_music = new Audio("assests/album/dynamite-bts.mp3");
// let currentTime = album_music.currentTime();
let speaker_logic = 0;
function speaker() {
    speaker_logic = speaker_logic + 1;
    let speakerReminder = speaker_logic % 2;

    console.log(speakerReminder);
    if (speakerReminder == 1) {
        speaker_status.src = "icons/speaker-pause.svg";
        album_music.play();
        console.log("music is palying!");
    }
    else {
        speaker_status.src = "icons/speaker-play.svg";
        album_music.pause();
        console.log("music is paused!");
    }

}
speaker_status.addEventListener('click', () => speaker());

