function checkDate(newDate, oldDate) {
    let n = newDate.split(".");
    let o = oldDate.split(".");
    let newYear = parseInt(n[0]);
    let newMonth = parseInt(n[1]);
    let oldYear = parseInt(o[0]);
    let oldMonth = parseInt(o[1]);
    if (newYear === oldYear) {
        return newMonth > oldMonth;
    }
    return newYear > oldYear;
}

function generateWorlds(file) {
	let outBox = document.getElementById("outputArea");
	let lflist = {};
	let ot = "";
	let cat = "";
	let date = "2016.1";
	for (let line of file.split("\n")) {
        if (line.startsWith("#")) {
            continue;
        }
        if (line.startsWith("!")) {
            let words = line.split(" ");
            ot = words[1];
            if (ot === "OCG" || ot === "TCG") {
                let tempDate = words[0].slice(1);
                if (checkDate(tempDate, date)) {
                    date = tempDate;
                }
                console.log("Reading " + ot + " banlist..");
            }
            continue;
        }
        if (ot === "OCG" || ot === "TCG") {
            let words = line.split(" ");
            let id = words[0];
            if (id) {
                let catArr = line.split("\t");
                if (catArr.length > 1 && catArr[catArr.length - 1].length > 0) {
                    cat = catArr[catArr.length - 1][0];
                }
                let count = parseInt(words[1]);
                let comment = catArr[0].slice(id.length + words[1].length + 2).replace(/[^-]*[^\u0000-\u007F]+ */g, ""); //strips non-ASCII characters, i.e. JP names from OCG list.
                if ((lflist[id] && lflist[id].count > count) || !lflist[id]) {
                    lflist[id] = {
                        count: count,
                        comment: comment,
                        cat: cat
                    };
                }
            }

        }
    }
    console.log("Worlds list assembled, converting to conf format...");
    let out = "!" + date + " Worlds\r\n";
    let outs = {
        0: {
            "M": "",
            "E": "",
            "S": "",
            "T": ""
        },
        1: {
            "M": "",
            "E": "",
            "S": "",
            "T": ""
        },
        2: {
            "M": "",
            "E": "",
            "S": "",
            "T": ""
        }
    };
    let catNames = { //it's inconsistent exactly what these messages are, but they always start with the first letter, so we grab that and convert later
        "M": "MAIN DECK MONSTERS START HERE",
        "E": "EXTRA DECK MONSTERS START HERE",
        "S": "SPELL CARDS START HERE",
        "T": "TRAP CARDS START HERE"
    };
    Object.keys(lflist).forEach(function (key, index) {
        if (outs[lflist[key].count][lflist[key].cat] && outs[lflist[key].count][lflist[key].cat].length === 0 && lflist[key].count < 2) { //Semi-limits don't have proper subheadings, so despite them coming sorted I can't re-sort them after assimilating the lists. TOUGH TITTIES
            outs[lflist[key].count][lflist[key].cat] = key.padStart(8, "0") + " " + lflist[key].count + " " + lflist[key].comment + "\t\t\t\t\t\t" + catNames[lflist[key].cat] + "\r\n";
        } else {
            outs[lflist[key].count][lflist[key].cat] += key.padStart(8, "0") + " " + lflist[key].count + " " + lflist[key].comment + "\r\n";
        }
    });
    let banOut = "#forbidden worlds\r\n" + outs[0].M + outs[0].E + outs[0].S + outs[0].T;
    let limOut = "#limited worlds\r\n" + outs[1].M + outs[1].E + outs[1].S + outs[1].T;
    let semOut = "#semi limited worlds\r\n" + outs[2].M + outs[2].E + outs[2].S + outs[2].T;
    out += "#generated at https://alphakretin.github.io/html/worlds\r\n" + banOut + limOut + semOut;
    console.log("Output prepared, printing to text box...");
    outBox.value = out;
    console.log("All done!");
}

function convert() {
	let inBox = document.getElementById("inputArea");
	let file = inBox.value;
    generateWorlds(file);
}

document.getElementById('files').addEventListener('change', function(event) {
	let file = event.target.files[0];
	if (file) {
		let reader = new FileReader();
		reader.onload = function(evt) {
			let txt = evt.target.result.replace(/\r\n/g, "\n");
			document.getElementById("inputArea").value = txt;
			generateWorlds(txt);
		};
		reader.readAsText(file)
	}
}, false);
