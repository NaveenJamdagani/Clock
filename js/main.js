function setDate()
{
	var a = new Date();
	var seconds = a.getSeconds();
	var secondDegrees = seconds * 6;
	document.querySelector("#second").style.transform = `rotate(${secondDegrees}deg)`;
	var minute = a.getMinutes();
	var minuteDegrees = minute * 6;
	document.querySelector("#minute").style.transform = `rotate(${minuteDegrees}deg`;
	var hour = a.getHours();
	var hourDegrees = hour * 30;
	document.querySelector("#hour").style.transform = `rotate(${hourDegrees}deg`;
	document.querySelector("#wrapper").style.backgroundColor = `rgb(${seconds*4},${(seconds*seconds)/2},${seconds*5})`;
}

setInterval(setDate,1000);