


document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("intro-video");
    const content = document.querySelector("body");

    video.addEventListener("ended", function() {
        video.parentElement.style.display = "none";
        
        content.style.display = "block";


        document.body.style.overflow = "auto";

        window.scrollTo(0, 0);
    });

    // Prevent scrolling while the video is playing
    document.body.style.overflow = "hidden";
});
