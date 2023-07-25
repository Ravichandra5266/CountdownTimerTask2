let Days = document.getElementById("days");

let Hours = document.getElementById("hours");

let Minutes = document.getElementById("minutes");

let Seconds = document.getElementById("seconds");

let x = setInterval(() => {
	let shurtDownTime = new Date("Aug 25 , 2023 23:59:00").getTime();
	let currentTime = new Date().getTime();
	let distance = shurtDownTime - currentTime;
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor(
		(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
	);
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / 1000);

	Days.textContent = days;
	Hours.textContent = hours;
	Minutes.textContent = minutes;
	Seconds.textContent = seconds;

	if (distance < 0) {
		clearInterval(x);
		Days.textContent = "00";
		Hours.textContent = "00";
		Minutes.textContent = "00";
		Seconds.textContent = "00";
	}
}, 1000);
