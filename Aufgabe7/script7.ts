/*Samples (Variablen) */

var sound = [];
sound[0] = new Audio("hihat.mp3");
sound[1] = new Audio("kick.mp3");
sound[2] = new Audio("snare.mp3");
sound[3] = new Audio("A.mp3");
sound[4] = new Audio("C.mp3");
sound[5] = new Audio("F.mp3");
sound[6] = new Audio("G.mp3");
sound[7] = new Audio("laugh-1.mp3");
sound[8] = new Audio("laugh-2.mp3");

/* Funktion Drum Pad*/

function playSample(sample: number) {
    sound[sample].play();
}

/* Events */

document.querySelector(".pad1").addEventListener("click", function() {
    playSample(0);
});

document.querySelector(".pad2").addEventListener("click", function() {
    playSample(1);
});

document.querySelector(".pad3").addEventListener("click", function() {
    playSample(2);
});

document.querySelector(".pad4").addEventListener("click", function() {
    playSample(3);
});

document.querySelector(".pad5").addEventListener("click", function() {
    playSample(4);
});

document.querySelector(".pad6").addEventListener("click", function() {
    playSample(5);
});

document.querySelector(".pad7").addEventListener("click", function() {
    playSample(6);
});

document.querySelector(".pad8").addEventListener("click", function() {
    playSample(7);
});

document.querySelector(".pad9").addEventListener("click", function() {
    playSample(8);
});

/* Variablen Drum Machine */

var sequence: string [] = ["hihat.mp3", "kick.mp3", "snare.mp3", "hihat.mp3", "kick.mp3", "snare.mp3", "hihat.mp3", "kick.mp3", "snare.mp3", ];

var indexOfSequence: number = 0;

function Beat() {


    setInterval(function () {
    var sound: HTMLAudioElement = new Audio(sequence[indexOfSequence]);
    sound.play();

    indexOfSequence = indexOfSequence + 1;

},              500);

}
document.querySelector(".playbutton").addEventListener("click", Beat);