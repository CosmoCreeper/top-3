const slides = document.querySelectorAll(".slide");
const IDs = ["none", "larry", "funky", "creature", "thanks"];
const colors = ["black", "rgba(255, 255, 255, 0.7)", "black", "black", "black"];

let begin = false;

location.hash = "top-3";

slides.forEach((el, idx) => {
    el.style.left = `${100 * idx}vw`;
    el.style.backgroundImage = `url("./assets/${IDs[idx]}.png")`;
    el.style.color = `${colors[idx]}`;
});

document.getElementById("begin").addEventListener("click", () => {
    if (!begin) {
        begin = true;
        for (let i = 1; i < 5; i++) {
            setTimeout(() => document.getElementById(IDs[i]).scrollIntoView({behavior: "smooth"}), 2000 + (i-1) * 2000);
        }
    }
});