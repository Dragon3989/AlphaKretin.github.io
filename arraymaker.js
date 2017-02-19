var charWidths = {
    a: 6,
    b: 5,
    c: 5,
    d: 5,
    e: 5,
    f: 5,
    g: 7,
    h: 5,
    i: 2,
    j: 3,
    k: 5,
    l: 2,
    m: 6,
    n: 5,
    o: 5,
    p: 5,
    q: 5,
    r: 4,
    s: 5,
    t: 4,
    u: 5,
    v: 6,
    w: 6,
    x: 6,
    y: 5,
    z: 5,
    cA: 6,
    cB: 6,
    cC: 6,
    cD: 6,
    cE: 6,
    cF: 6,
    cG: 6,
    cH: 6,
    cI: 4,
    cJ: 6,
    cK: 6,
    cL: 6,
    cM: 8,
    cN: 6,
    cO: 6,
    cP: 6,
    cQ: 7,
    cR: 6,
    cS: 7,
    cT: 6,
    cU: 6,
    cV: 6,
    cW: 8,
    cX: 8,
    cY: 6,
    cZ: 6,
    space: 4,
    tilde: 7,
    zero: 5,
    one: 4,
    two: 5,
    three: 5,
    four: 7,
    five: 5,
    six: 5,
    seven: 5,
    eight: 5,
    nine: 5,
    dot: 2,
    comma: 2,
    bang: 2,
    openBrack: 4,
    closeBrack: 4,
    dash: 4,
    slash: 7,
    backSlash: 7,
    question: 7,
    semicolon: 2,
    colon: 2,
    hash: 6,
    amp: 7,
    quote: 4,
    apos: 2,
    plus: 8,
    percent: 8
};
console.log("chars5");
var legalChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "~", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", ",", "!", "(", ")", "-", "/", "\\", "?", ";", ":", "#", "&", "\"", "'", "+", "%", "\n"];

function clicked(){
	var index = 0;
	var out = "var charWidths = {<br />";
	var ind = 0;
	for (var cha in charWidths){
		out += charToName(legalChars[ind]) + ": { wid: " + cha + ", index: " + index + " },<br />";
		index += cha;
		i++;
	}
	document.getElementById("myDiv").innerHTML = out;
}

function charToName(letter) {
    switch (letter) {
    case "A":
        return "cA";
    case "B":
        return "cB";
    case "C":
        return "cC";
    case "D":
        return "cD";
    case "E":
        return "cE";
    case "F":
        return "cF";
    case "G":
        return "cG";
    case "H":
        return "cH";
    case "I":
        return "cI";
    case "J":
        return "cJ";
    case "K":
        return "cK";
    case "L":
        return "cL";
    case "M":
        return "cM";
    case "N":
        return "cN";
    case "O":
        return "cO";
    case "P":
        return "cP";
    case "Q":
        return "cQ";
    case "R":
        return "cR";
    case "S":
        return "cS";
    case "T":
        return "cT";
    case "U":
        return "cU";
    case "V":
        return "cV";
    case "W":
        return "cW";
    case "X":
        return "cX";
    case "Y":
        return "cY";
    case "Z":
        return "cZ";
    case " ":
        return "space";
    case "~":
        return "tilde";
    case "0":
        return "zero";
    case "1":
        return "one";
    case "2":
        return "two";
    case "3":
        return "three";
    case "4":
        return "four";
    case "5":
        return "five";
    case "6":
        return "six";
    case "7":
        return "seven";
    case "8":
        return "eight";
    case "9":
        return "nine";
    case ".":
        return "dot";
    case ",":
        return "comma";
    case "!":
        return "bang";
    case "(":
        return "openBrack";
    case ")":
        return "closeBrack";
    case "-":
        return "dash";
    case "/":
        return "slash";
    case "\\":
        return "backSlash";
    case "?":
        return "question";
    case ";":
        return "semicolon";
    case ":":
        return "colon";
    case "#":
        return "hash";
    case "&":
        return "amp";
    case "\"":
        return "quote";
    case "'":
        return "apos";
    case "+":
        return "plus";
    case "%":
        return "percent";
    default:
        return letter;
    }
}
