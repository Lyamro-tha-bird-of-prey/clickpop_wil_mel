function pop() {
	document.getElementById('pop1').style.display='block';
}
function hide() {
	document.getElementById('pop1').style.display='none';
}

document.getElementById('hd').addEventListener("click", pop);

document.getElementById('pp').addEventListener("click", hide);


function disbut() {
	document.getElementById('subm').disabled = true;
	document.getElementById('subm').style.background = "grey";
	document.getElementById('subm').style.color = "black";
	document.getElementById('subm').removeEventListener("mouseover", nicebut);
	document.getElementById('subm').removeEventListener("mouseout", norbut);
}
function enbut() {
	document.getElementById('subm').disabled = false;
	document.getElementById('subm').style.background = "blue";
	document.getElementById('subm').style.color = "red";
	document.getElementById('subm').addEventListener("mouseover", nicebut);
	document.getElementById('subm').addEventListener("mouseout", norbut);
}

function substate() {
	if (ismail() && ispass()) {
		return enbut()
	} else {
		return disbut()
	}
}

function ismail() {
	var entm = mailval.value;
	var resm = false;
	for (var i = 0; i < entm.length; i++) {
		if (entm[i] == "@") {
			resm = true;
		}
	}
	return resm;
}

function ispass() {
	var entp = passval.value;
	var resp = false;
	if (entp.length > 0) {
		resp = true;
	}
	return resp;
}

var mailval = document.getElementById('mailin');
var passval = document.getElementById('passin');
mailval.addEventListener("input", substate);
passval.addEventListener("input", substate);
substate()
