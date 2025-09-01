// button javascript code
let hideContent = document.querySelector('.hideContent');
let hidecontent = document.querySelector('.hidecontent');
let button = document.querySelector('.fa-bars');
let butt = document.querySelector('.fa-times');
let isShow = true;

// a function to hide and show the section target  on click
function toggleButton() {
        hideContent.classList.toggle('hide');
        hidecontent.classList.toggle('hide');
        butt.classList.toggle('hide');
        button.classList.remove('hide');
   
}
function toggleButton2() {
        hideContent.classList.toggle('hide');
        hidecontent.classList.toggle('hide');
        button.classList.toggle('hide');
        butt.classList.remove('hide');
}

