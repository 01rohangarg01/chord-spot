// document.getElementById("submit").onclick = function submit(){
// let notes = []
//     notes.push(document.getElementById("enternotes").value);
//     notes = JSON.stringify(notes);
//     console.log(notes);
// }


// document.getElementById("enternotes").onkeydown = function entur(e){
//     if(e.key == "Enter"){
//         console.log("helu I'm clicked")
//         // submit();
//     }
// }

const notes = {
    "C or B sharp": "C",
    "C sharp or D flat": "C#",
    "E or F flat":"E",
    "F or E sharp":"F",
    "B or C flat":"B",
    "D":"D",
    "G":"G",
    "A":"A",
    "D sharp or E flat":"D#",
    "F sharp or G flat":"F#",
    "G sharp or A flat":"G#",
    "A sharp or B flat":"A#"
};



let oparr = [];
function toggleNote(a) {
    if (oparr.includes(a)) {
        let index = oparr.indexOf(a);
        oparr.splice(index, 1);
    } else {
        oparr.push(a);
        console.log(oparr);
    }
    printnotes()
    printchord()
} 

function printnotes(){
     document.getElementById("printnotes").innerHTML = oparr.join(", ");
}
function printchord(){
    document.getElementById("printchord").innerHTML = Tonal.Chord.detect(oparr).join(", ");
}

