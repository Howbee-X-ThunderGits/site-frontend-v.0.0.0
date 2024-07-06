window.addEventListener("scroll", setScrollVar)
window.addEventListener("resize", setScrollVar)

function setScrollVar(){
    const htmlElement = document.documentElement
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight
    console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
    htmlElement.style.setProperty(
        "--scroll",
        Math.min(percentOfScreenHeightScrolled * 100, 100)
    )
}
setScrollVar()

// Get all images with the class "bg-img" (you can adjust the selector as needed)
const images = document.querySelectorAll('.m2,.m3,.m4,.m5,.tree,.stone,.blue-stone');

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through each image and add/remove the "darken" class with a smooth transition
  images.forEach((image) => {
    if (scrollPosition > 500) {
      image.classList.add('darken');
      image.style.transition = 'filter 0.5s'; // add a 0.5s transition effect
      image.style.filter = 'brightness(0.8)'; // adjust the brightness to create a darkening effect
    } else {
      image.classList.remove('darken');
      image.style.transition = 'filter 0.5s'; // add a 0.5s transition effect
      image.style.filter = 'brightness(1)'; // reset the brightness to normal
    }
  });
});


