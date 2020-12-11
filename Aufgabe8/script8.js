//Samples, (anderer Name und mit let) //
var fuer8;
(function (fuer8) {
    var sample = [
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
    function playSample(sound) {
        sound.play();
    }
    /* Events */
    document.querySelector(".pad1").addEventListener("click", function () {
        playSample(sample[0]);
        recordBeat(0);
    });
    document.querySelector(".pad2").addEventListener("click", function () {
        playSample(sample[1]);
        recordBeat(1);
    });
    document.querySelector(".pad3").addEventListener("click", function () {
        playSample(sample[2]);
        recordBeat(2);
    });
    document.querySelector(".pad4").addEventListener("click", function () {
        playSample(sample[3]);
        recordBeat(3);
    });
    document.querySelector(".pad5").addEventListener("click", function () {
        playSample(sample[4]);
        recordBeat(4);
    });
    document.querySelector(".pad6").addEventListener("click", function () {
        playSample(sample[5]);
        recordBeat(5);
    });
    document.querySelector(".pad7").addEventListener("click", function () {
        playSample(sample[6]);
        recordBeat(6);
    });
    document.querySelector(".pad8").addEventListener("click", function () {
        playSample(sample[7]);
        recordBeat(7);
    });
    document.querySelector(".pad9").addEventListener("click", function () {
        playSample(sample[8]);
        recordBeat(8);
    });
    /* Variablen  */
    var interval;
    var sequence = [0, 1, 2];
    var indexOfSequence = 0;
    function Beat() {
        interval = setInterval(function () {
            if (indexOfSequence < sequence.length) {
                playSample(sample[sequence[indexOfSequence]]);
                indexOfSequence++;
            }
            else {
                indexOfSequence = 0;
            }
        }, 300);
    }
    //Play zu Stop zu Play//
    var play = document.getElementById("Play");
    var stop = document.getElementById("Stop");
    function switchButton(playButton, stopButton) {
        playButton.classList.add("hidden");
        stopButton.classList.remove("hidden");
    }
    //Aufruf Play Stop//
    play.addEventListener("click", function () {
        switchButton(play, stop);
    });
    stop.addEventListener("click", function () {
        switchButton(stop, play);
        clearInterval(interval);
    });
    document.querySelector("#Play").addEventListener("click", Beat);
    //Delete Beat//
    var deleteButton = document.getElementById("Delete");
    deleteButton.addEventListener("click", function () {
        sequence.length = 0;
        sequence = [];
    });
    // Record Beat + Sample //
    // Record Boolean //
    var recording = false;
    // Record function //
    function recordBeat(recordNumber) {
        if (recording == true) {
            sequence.push(recordNumber);
        }
    }
    // Aufruf Record Beat //
    document.getElementById("Record").addEventListener("click", function () {
        recording = true;
    });
})(fuer8 || (fuer8 = {})); // namespace end//
//# sourceMappingURL=script8.js.map