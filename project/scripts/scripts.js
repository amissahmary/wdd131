const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", function(){
    navMenu.classList.toggle("active");
});

const newsItems = document.querySelectorAll('.news-item');
let currentNews = 0;

function rotateNews(){
    newsItems[currentNews].classList.remove('active');
    currentNews = (currentNews + 1) % newsItems.length;
    newsItems[currentNews].classList.add('active');
}

setInterval(rotateNews, 3000);
