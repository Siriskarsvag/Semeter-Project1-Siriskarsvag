const events = [
    {
        title: "Exclusive Energica Exhibition",
        image: "images/scientific-2040795_1280.jpg",
    },
    {
        title: "Visiting Professor in Aeronautics",
        image: "images/andrew-ruiz-348421.jpg",
    },
    {
        title: "Holidays Club - Explore the North Star",
        image: "images/marek-piwnicki-iwabZE-qN_U-unsplash.jpg"
    }
];

let currentIndex = 0;

const title = document.getElementById("event-title");
const hero = document.querySelector(".event-cards");

function updateEvent() {
    title.textContent = events[currentIndex].title;

    hero.style.backgroundImage = `url(${events[currentIndex].image})`;
}

function nextEvent() {
    currentIndex++;

    if (currentIndex >= events.length) {
        currentIndex = 0;
    }

    updateEvent();
}

function prevEvent() {
    currentIndex--;

    if (currentIndex >= events.length) {
        currentIndex = 0;
    }

    updateEvent();
}

document.getElementById("nextBtn").addEventListener("click", nextEvent);

document.getElementById("prevBtn").addEventListener("click", prevEvent);

setInterval(nextEvent, 5000);

updateEvent();

viewActivityBtn = document.getElementById("viewAllBtn");
viewActivityBtn.addEventListener("click", () => {
    window.location.href = "activities-page.html";
});