window.addEventListener('scroll', () => {
    
    const box = document.querySelector('.info-section__img ');
    const boxPosition = box.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    // Check if the box is in the viewport
    if (boxPosition < screenPosition) {
        box.classList.add('animate'); // Trigger the animation
    }
});
