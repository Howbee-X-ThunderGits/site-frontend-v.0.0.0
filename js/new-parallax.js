document.addEventListener("scroll", () => {
    const circles = document.querySelectorAll(".circle");
    const heading = document.querySelector(".parallax-head");
    const paragraph = document.querySelector(".parallax-para");
    const scrollTop = window.scrollY;


    const triggerHeight = window.innerHeight * 0.5; // Trigger point for circle animations

    // Animate circles based on scroll position
    circles.forEach((circle, index) => {
        const offset = (index + 1) * 200; // Adjust timing for each circle based on index

        // Add "active" class to circles when the scroll position reaches their trigger point
        if (scrollTop > offset - triggerHeight) {
            circle.classList.add(`active-circle-${index + 1}`);
        } else {
            circle.classList.remove(`active-circle-${index + 1}`);
        }
    });

    // Animate heading and paragraph
    const textTriggerHeight = 800; // Adjust based on position
    if (scrollTop > textTriggerHeight - triggerHeight) {
        heading.classList.add("active-text");
        paragraph.classList.add("active-text");
    } else {
        heading.classList.remove("active-text");
        paragraph.classList.remove("active-text");
    }

    const viewportHeight = window.innerHeight; // Height of the viewport in pixels
    const scrollCaptureSection = document.querySelector(".parallax-box");

    // Check if the user has scrolled past 100vh
    // if (scrollTop > viewportHeight) {
    //     // Change circles to absolute position
        
    //     // Apply smooth transition to #scroll-capture-section height
    //     scrollCaptureSection.style.transition = "height 1s ease-out, padding 1s ease-out";
    //     scrollCaptureSection.style.position = "relative";
    //     scrollCaptureSection.style.paddingBottom = "0"; // Remove extra padding

    // } else {
       
       

    //     // Apply smooth transition to #scroll-capture-section height
    //     scrollCaptureSection.style.transition = "height 1s ease-out, padding 1s ease-out";
    //     scrollCaptureSection.style.position = "fixed";
        
    // }
});
