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

const joinForm = document.getElementById('join-form');
if (joinForm) {
    joinForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = this.name.value;
        const email = this.email.value;
        const interest = this.interest.value;

        // store in localStorage
        localStorage.setItem('joinName', name);
        localStorage.setItem('joinEmail', email);
        localStorage.setItem('joinInterest', interest);

        alert("Thank you for joining Teenspire!");
        this.reset();
    });
}

const newsData = [
    { img: "images/coding.webp", text: "Applications open for Coding Cohort 2026 🚀" },
    { img: "images/photography.webp", text: "Photography mentorship begins this Saturday 📸" },
    { img: "images/project.webp", text: "5 teens completed their first web project 🎉" },
    { img: "images/fashion.webp", text: "Fashion design students started their first sketches 👗" }
];

const container = document.querySelector('.news-container');
let currentIndex = 0;

function renderNews(index) {
    const item = newsData[index];
    container.innerHTML = `
        <div class="news-item active">
            <img src="${item.img}" alt="${item.text}" class="news-img" loading="lazy">
            <p>${item.text}</p>
        </div>
    `;
}

function rotateNews() {
    renderNews(currentIndex);

    if (currentIndex < newsData.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
}

renderNews(currentIndex);

setInterval(rotateNews, 4000);
