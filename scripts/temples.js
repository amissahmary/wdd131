const short = document.querySelector("#lastmodified");
const today = new Date();

short.innerHTML = `Last modified: <span class="highlight">${new Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "long"
	}
).format(today)}</span>`;

const hanButton = document.querySelector('.hamBurger');
const navigation = document.getElementById('nav');

hanButton.addEventListener('click', function () {
    navigation.classList.toggle('open');
});