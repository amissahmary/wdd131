const short = document.querySelector("#lastmodified");
const today = new Date();
short.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;

const temp = 10;
const windSpeed = 10;

document.getElementById("temp").textContent = temp;
document.getElementById("wind").textContent = windSpeed;

function calculateWindChill(temp, speed){
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

let windChill = "N/A";
if (temp <= 10 && windSpeed > 4.8) {
    windChill = calculateWindChill(temp, windSpeed) + "°C";
}

document.getElementById("windChill").textcontent = windChill;