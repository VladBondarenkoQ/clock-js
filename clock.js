var clock = document.getElementById("clock");
var color = document.getElementById("color");

function timer () {
	var time = new Date();
	var h = time.getHours().toString();
	var m = time.getMinutes().toString();
	var s = time.getSeconds().toString();


if (h.length < 2) {
	h = "0" + h;
}
if (m.length < 2) {
	m = "0" + m;
}
if (s.length < 2) {
	s = "0" + s;
} 

var clockString = h + ":" + m + ":" + s;
var colorString = "#" + h + m + s;

clock.textContent = clockString; //взаимодействие с контентом на странице
color.textContent = colorString;

document.body.style.background = colorString; //обращение к свойству ЗАПОМНИТЬ
}
timer();
setInterval(timer, 1000)


