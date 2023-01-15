var energy = 0;
var info = 0;
var decision = 0;
var organize = 0;

function addPoints(e, i, d, o) {
    energy = e + energy;
    info = i + info;
    decision = d + decision;
    organize = o + organize;
}

function finishQuiz() {
    var type = document.getElementById("myMtbi");
    var explanation = document.getElementById("explanation");
    var mtbitype = "";
    if (energy < 30) { mtbitype += "I"; } else { mtbitype += "E"; }
    if (info < 30) { mtbitype += "S"; } else { mtbitype += "N"; }
    if (decision < 30) { mtbitype += "T"; } else { mtbitype += "F"; }
    if (organize < 30) { mtbitype += "J"; } else { mtbitype += "P"; }
    document.getElementById("myMtbi").innerHTML = mtbitype;
}
var NumberOfWords = 16

var words = new BuildArray(NumberOfWords)


words[1] = "enfj"
words[2] = "enfp"
words[3] = "entj"
words[4] = "entp"
words[5] = "esfp"
words[6] = "esjf"
words[7] = "estj"
words[8] = "estp"
words[9] = "infj"
words[10] = "infp"
words[11] = "intj"
words[12] = "intp"
words[13] = "isfj"
words[14] = "isfp"
words[15] = "istj"
words[16] = "istp"


function BuildArray(size) {
    this.length = size
    for (var i = 1; i <= size; i++) {
        this[i] = null
    }
    return this
}

function PickRandomWord(frm) {
    var rnd = Math.ceil(Math.random() * NumberOfWords)

    frm.WordBox.value = words[rnd]
}