// my code  for sliding it is combine with cs 

const wrapper = [...document.querySelectorAll('.wrapper')];
const left = [...document.querySelectorAll('.fa-arrow-left')];
const right = [...document.querySelectorAll('.fa-arrow-right')];

wrapper.forEach((item, i) => {
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    right[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    left[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})

// my code  for sliding it is combine with cs 
