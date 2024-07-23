
let lastScrollTop = 0;

const mountainContainer = document.querySelector(".mountain-Container1");
const bottomStone = document.querySelector(".bottom-stone1");
const sun = document.querySelector(".sun");
const birds = document.querySelectorAll(".bird");
let body = document.querySelector("body");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const halfWindowHeight = window.innerHeight / 2;

    if (scrollTop > halfWindowHeight) {
        body.style.background =
            "linear-gradient(180deg, #69A8DB -10.3%, #FFC986 34.57%)";
    } else {
        body.style.background =
            " linear-gradient(to bottom, #94ccff, #d5f5ff)";
    }
    if (scrollTop < halfWindowHeight) {
        mountainContainer.classList.remove("mountain-Container2");
        mountainContainer.classList.add("mountain-Container1");
        bottomStone.classList.remove("bottom-stone2");
        bottomStone.classList.add("bottom-stone1");
    } else {
        mountainContainer.classList.remove("mountain-Container1");
        mountainContainer.classList.add("mountain-Container2");
        bottomStone.classList.remove("bottom-stone1");
        bottomStone.classList.add("bottom-stone2");
    }

    if (scrollTop > halfWindowHeight) {
        sun.style.width = "0";
        sun.style.height = "0";
        //   sun.style.top = "50%";
        //   sun.style.left = "50%";
        //   sun.style.transform = "translate(50%, 50%)";
    } else {
        sun.style.width = "100px";
        sun.style.height = "100px";
        sun.style.top = "70px";
        sun.style.left = "80px";
        //   sun.style.transform = "";
        sun.style.transition = "width 0.5s ease, height 0.5s ease";
    }

    if (scrollTop > halfWindowHeight) {
        birds.forEach((bird) => (bird.style.opacity = "0"));
    } else {
        birds.forEach((bird) => (bird.style.opacity = "1"));
    }

    lastScrollTop = scrollTop;
});
