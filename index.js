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

function printnotes() {
     document.getElementById("printnotes").innerHTML = oparr.join(", ");
}

function printchord() {
    document.getElementById("printchord").innerHTML = Tonal.Chord.detect(oparr).join(", ");
}