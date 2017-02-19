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
console.log("chars7");

function clicked(){
	var index = 0;
	var out = "var charWidths = {<br />";
	var ind = 0;
	for (var cha in charWidths){
		out += cha + ": { wid: " + charWidths[cha] + ", index: " + index + " },<br />";
		index += charWidths[cha];
		ind++;
	}
	document.getElementById("myDiv").innerHTML = out;
}