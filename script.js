var css = document.getElementById("act");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("gradient");
var randomButton = document.getElementById("Random");




function setGradient(){
	body.style.background = 
	"linear-gradient(to right,"
	 + color1.value
	 + ", "
	 + color2.value
	 ")";

	 css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
	  color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
  }

function randomColors(){
	color1.value = getRandomColor();
	color2.value = getRandomColor();

	setGradient();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", randomColors);
setGradient();