const slides = document.querySelectorAll(".slide");
const IDs = ["none", "larry", "funky", "creature", "thanks"];
const colors = ["black", "rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.7)", "rgba(255, 255, 255, 0.7)", "black"];

let begin = false;
let restart = false;

location.hash = "top-3";

slides.forEach((el, idx) => {
    el.style.left = `${100 * idx}vw`;
    el.style.backgroundImage = `url("./assets/${IDs[idx]}.png")`;
    el.style.color = `${colors[idx]}`;
});

document.getElementById("begin").addEventListener("click", () => {
    if (!begin) {
        begin = true;
        restart = false;
        for (let i = 1; i < 5; i++) {
            setTimeout(() => {
                document.getElementById(IDs[i]).scrollIntoView({behavior: "smooth"});
                document.getElementById("audio").src = `./assets/${IDs[i]}.mp3`;
                if (document.getElementById("audio")) document.getElementById("audio").play();
            }, 2000 + (i-1) * 2000);
        }
    }
});

document.getElementById("restart").addEventListener("click", () => {
    if (!restart) {
        restart = true;
        begin = false;
        document.getElementById("top-3").scrollIntoView({behavior: "smooth"});
    }
});