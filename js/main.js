function setDate()
{
	var a = new Date();
	var seconds = a.getSeconds();
	var secondDegrees = seconds * 6;
	document.querySelector("#second").style.transform = `rotate(${secondDegrees}deg)`;
	var minuteDegrees = seconds * 1/10;
	document.querySelector("#minute").style.transform = `rotate(${minuteDegrees}deg`;
	var hourDegrees = hour * 1/120 ;
	document.querySelector("#hour").style.transform = `rotate(${hourDegrees}deg`;
}

setInterval(setDate,1000);