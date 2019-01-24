function nicebut() {
		this.style.background = "red";
		this.style.color = "blue";
}
function norbut() {
	this.style.background = "blue";
	this.style.color = "red";
}

var stybut = document.getElementsByTagName('button');
stybut.getEventListener("mouseover", nicebut);
stybut.getEventListener("mouseout", norbut);
