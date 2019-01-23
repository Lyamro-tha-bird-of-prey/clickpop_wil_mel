function pop(div) {
	document.getElementById(div).style.display='block';
	return false;
}
function hide(div) {
	document.getElementById(div).style.display='none';
	return false;
}
function nicebut(elem) {
		elem.style.background = "red";
		elem.style.color = "blue";
}
function norbut(elem) {
	elem.style.background = "blue";
	elem.style.color = "red";
}
