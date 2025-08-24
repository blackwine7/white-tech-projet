// my code  for sliding it is combine with cs 
let currentIndex = 0;
const wrapper = document.querySelectorAll('.slider .wrapper .box');
function showSlide() {
    for (let i = 0; i < wrapper.length; i++) {
        if (i === currentIndex) {
            wrapper[i].style.display = 'block'
        } else {
            wrapper[i].style.display = 'none'
        }
    }
}

function prevSlide() {
    if (currentIndex === 0) {
        currentIndex = wrapper.length - 1;
    } else {
        currentIndex = currentIndex - 1;
    }
    showSlide();
}
function nextSlide() {
    // currentIndex = (currentIndex === wrapper.length - 1) ? 0 : currentIndex + 1; same as the below code
    if (currentIndex === wrapper.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex = currentIndex + 1;
    }
    showSlide();
}
