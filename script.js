let deg = 6;

const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let now = new Date();

    let hh = now.getHours() * 30;
    let mm = now.getMinutes() * deg;
    let ss = now.getSeconds() * deg;

    hr.style.transform = `rotate(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotate(${(mm)}deg)`;
    sc.style.transform = `rotate(${(ss)}deg)`;

    new Audio('./clicksound.mp3').play();
}, 1000);

// Light & Dark Modes Switch
document.querySelector("#dark-mode").style.display = "inline";
document.querySelector("#dark-mode").onclick = () => {
    document.querySelector("body").classList.add("body-dark");
    document.querySelector(".clock").classList.add("clock-dark");
    document.querySelector("#light-mode").style.display = "inline";

    document.querySelector("#light-mode").onclick = () => {
        document.querySelector("body").classList.remove("body-dark");
        document.querySelector(".clock").classList.remove("clock-dark");
        document.querySelector("#light-mode").style.display = "none";
    }
}