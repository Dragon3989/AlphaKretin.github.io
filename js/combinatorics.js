var input1 = ["butts", "butz", "bartz"];
var input2 = ["text", "wrangler"];
var delim = "/";

function combine() {
	input1 = document.getElementById("comb1").value.split(" ");
	input2 = document.getElementById("comb2").value.split(" ");
	var outputString = "";
	document.getElementById("combinatoricsResultDiv").innerHTML = "";
	for (var i = 0; i < input1.length; i++) {
		for (var j = 0; j < input2.length; j++) {
			outputString += input1[i] + delim + input2[j] + "<br />";
		}
	}
	document.getElementById("combinatoricsResultDiv").innerHTML = outputString;
}
