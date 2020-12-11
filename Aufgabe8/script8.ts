//Samples, (anderer Name und mit let) //
namespace fuer8 {


let sample: HTMLAudioElement [] = 
[
    new Audio("hihat.mp3"),
    new Audio("kick.mp3"),
    new Audio("snare.mp3"),
    new Audio("A.mp3"),
    new Audio("C.mp3"),
    new Audio("F.mp3"),
    new Audio("G.mp3"),
    new Audio("laugh-1.mp3"),
    new Audio("laugh-2.mp3")
];

/* Funktion Drum Pad*/


function playSample(sound: HTMLAudioElement): void {
    sound.play();
}

/* Events */

document.querySelector(".pad1").addEventListener("click", function(): void {
    playSample(sample[0]);
    recordBeat(0);
});

document.querySelector(".pad2").addEventListener("click", function(): void {
    playSample(sample[1]);
    recordBeat(1);
});

document.querySelector(".pad3").addEventListener("click", function(): void {
    playSample(sample[2]);
    recordBeat(2);
});

document.querySelector(".pad4").addEventListener("click", function(): void {
    playSample(sample[3]);
    recordBeat(3);
});

document.querySelector(".pad5").addEventListener("click", function(): void {
    playSample(sample[4]);
    recordBeat(4);
});

document.querySelector(".pad6").addEventListener("click", function(): void {
    playSample(sample[5]);
    recordBeat(5);
});

document.querySelector(".pad7").addEventListener("click", function(): void {
    playSample(sample[6]);
    recordBeat(6);
});

document.querySelector(".pad8").addEventListener("click", function(): void {
    playSample(sample[7]);
    recordBeat(7);
});

document.querySelector(".pad9").addEventListener("click", function(): void {
    playSample(sample[8]);
    recordBeat(8);
});

/* Variablen  */

let interval: number;

let sequence: number [] = [0, 1, 2];
let indexOfSequence: number = 0;



function Beat(): void {

    
    interval = setInterval(function (): void  {
    if (indexOfSequence < sequence.length) {
    playSample (sample[sequence[indexOfSequence]]);
    indexOfSequence++;
    } else {
        indexOfSequence = 0;
    }

},                         300 );

}


//Play zu Stop zu Play//

const play: HTMLElement = document.getElementById("Play");
const stop: HTMLElement = document.getElementById("Stop");


function switchButton(playButton: HTMLElement, stopButton: HTMLElement): void {
    playButton.classList.add("hidden");
    stopButton.classList.remove("hidden");
}

//Aufruf Play Stop//

play.addEventListener("click", function(): void {
    switchButton(play, stop);
});

stop.addEventListener("click", function(): void {
    switchButton(stop, play);
    clearInterval(interval);
});

document.querySelector("#Play").addEventListener("click", Beat);



//Delete Beat//

const deleteButton: HTMLElement = document.getElementById("Delete");

deleteButton.addEventListener("click", function(): void {
    sequence.length = 0;
    sequence = [];
});



// Record Beat + Sample //

// Record Boolean //

let recording: boolean = false;

// Record function //

function recordBeat(recordNumber: number): void {
    if (recording == true) {
    sequence.push(recordNumber);
    }
}


// Aufruf Record Beat //

document.getElementById("Record").addEventListener("click", function(): void {
    recording = true;
});




} // namespace end//