let lastScrollTop = 0;

const mountainContainer = document.querySelector(".mountain-Container1");
const bottomStone = document.querySelector(".bottom-stone1");
const sun = document.querySelector(".sun");
const birds = document.querySelectorAll(".bird");
const parallax=document.querySelector(".Parallex")
const body = document.querySelector('.theme');
// console.log("hii");
if (mountainContainer && bottomStone && sun && parallax) {
    // console.log("found")

document.querySelector('.Parallex').addEventListener("scroll", function(){
//   console.log("Scroll event triggered");
  const scrollTop = parallax.scrollTop;
    const parallaxHeight = parallax.offsetHeight;
// console.log(scrollTop,parallaxHeight/2)

  if (scrollTop < parallaxHeight / 2) {
    body.style.background = "linear-gradient(to bottom, #94ccff, #d5f5ff)";
   
      mountainContainer.classList.remove("mountain-Container2");
    mountainContainer.classList.add("mountain-Container1");
    bottomStone.classList.remove("bottom-stone2");
    bottomStone.classList.add("bottom-stone1");
    sun.style.width = "100px";
    sun.style.height = "100px";
    sun.style.top = "70px";
    sun.style.left = "80px";
    sun.style.transition = "width 0.5s ease, height 0.5s ease";
    birds.forEach((bird) => (bird.style.opacity = "1"));

  } else {
    body.style.background =
    "linear-gradient(180deg, #69A8DB -10.3%, #FFC986 34.57%)";
    sun.style.width = "0";
    sun.style.height = "0";
    mountainContainer.classList.remove("mountain-Container1");
    mountainContainer.classList.add("mountain-Container2");
    bottomStone.classList.remove("bottom-stone1");
    bottomStone.classList.add("bottom-stone2");
    birds.forEach((bird) => (bird.style.opacity = "0"));

  }
 lastScrollTop = scrollTop;


});
}
else{
    console.log("not working");
}

