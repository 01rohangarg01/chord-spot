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


w1 = 70.28571428571429;
w2 = 38.657142857142865;
boxw = 28.28571428571429;
boxx = [(w1-w2/2)/2-(boxw/2), w1-(boxw/2), (w1+w1/2-boxw/2), w1-(boxw/2)+w1, 2*w1+w2/2+ (3*w1-(2*w1+w2/2))/2-boxw/2, 3*w1+(w1-w2/2)/2-(boxw/2), 3*w1+w1-(boxw/2), 3*w1+ (w1+w1/2-boxw/2), 3*w1+w1-(boxw/2)+w1, 4*w1+ (w1+w1/2-boxw/2), 4*w1+ w1-(boxw/2)+w1, 4*w1+ 2*w1+w2/2+ (3*w1-(2*w1+w2/2))/2-boxw/2]

function width_set(a){
    return boxx[a];
}

let noteline_svg = document.getElementById("noteline").children[0];
for (var i = 0; i < noteline_svg.children.length; i++) {
    let g = noteline_svg.children[i];
    let rect = g.children[0];
    rect.setAttribute("x", boxx[i]);
}