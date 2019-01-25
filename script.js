function pop() {
	document.getElementById('pop1').style.display='block';
}
function hide() {
	document.getElementById('pop1').style.display='none';
}

document.getElementById("hd").addEventListener("click", pop);

document.getElementById("pp").addEventListener("click", hide);
