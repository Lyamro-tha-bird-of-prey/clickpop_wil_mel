function pop() {
	this.style.display='block';
}
function hide() {
	this.style.display='none';
}

var hd = document.getElementById("popped");
for (var i = 0; i < hd.length; i++) {
	hd[i].addEventListener("click", hide);
	console.log(hd[i]);
}

var pp = document.getElementById("hidden");
for (var i = 0; i < pp.length; i++) {
	pp[i].addEventListener("click", pop);
	console.log(pp[i]);
}
