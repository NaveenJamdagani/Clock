function setDate()
{
	var a = new Date();
	var seconds = a.getSeconds();
	var secondDegrees = seconds * 6;
	document.querySelector("#second").style.transform = `rotate(${secondDegrees}deg)`;
	var minute = a.getMinutes();
}

setInterval(setDate,1000);