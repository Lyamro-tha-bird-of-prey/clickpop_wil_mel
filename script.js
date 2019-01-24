function pop() {
	this.style.display='block';
}
function hide() {
	this.style.display='none';
}

var hd = document.getElementById('hidden');
hd.addEventListener("click", pop);
console.log(hd);

var pp = document.getElementById('popped');
pp.addEventListener("click", hide);
console.log(pp);
