const short = document.querySelector("#lastmodified");
const today = new Date();

short.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "short"
	}
).format(today)}</span>`;

const hanButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hanButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hanButton.classList.toggle('open');
});