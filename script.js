function pop() {
	document.getElementById('pop1').style.display='block';
}
function hide() {
	document.getElementById('pop1').style.display='none';
}

document.getElementById('hd').addEventListener("click", pop);

document.getElementById('pp').addEventListener("click", hide);


function disbut() {
	document.getElementById('subm').setAttribute("disabled", true);
	document.getElementById('subm').style.background = "grey";
	document.getElementById('subm').style.color = "black"
	document.getElementById('subm').removeEventListener("mouseover", nicebut);
	document.getElementById('subm').removeEventListener("mouseout", norbut);
}
function enbut() {
	document.getElementById('subm').setAttribute("disabled", false);
	document.getElementById('subm').addEventListener("mouseover", nicebut);
	document.getElementById('subm').addEventListener("mouseout", norbut);
}

disbut()


var mailval = document.getElementById('mailin');

function ismail() {
	var entm = mailval.value;
	var result = false;
	for (var chr in entm) {
		if (chr == "@") {
			result = true;
		}
	}
	return result;
}

mailval.addEventListener("input", substate);

function substate() {
	if (ismail() == true) {
		enbut()
	} else {
		disbut()
	}
}
