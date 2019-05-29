
function newArr () {
	var newName = document.getElementById("newName").value;
	Arr.push(newName);
	document.getElementById("newName").value = "";
}
var Arr = new Array();

function nextSeated(){
	document.body.innerHTML = "";
	document.write(Arr.shift() + " is the Next person to be seated.");
	document.write('<button id="next" onclick="nextSeated()">Next</button>');
}



