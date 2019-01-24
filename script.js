function pop() {
	this.style.display='block';
}
function hide() {
	this.style.display='none';
}

var hd = document.getElementById('hidden');
hd.addEventListener("click", pop);

var pp = document.getElementById('popped');
pp.addEventListener("click", hide);
