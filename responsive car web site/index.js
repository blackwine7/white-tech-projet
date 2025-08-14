function showMenu(){
    const menu = document.querySelector('.topnav .container ul');
    menu.style.display = 'flex'
    menu.classList.toggle('active');
}



function showFont(){
    const font = document.querySelector('.topnav .container i');
    font.style.display = 'flex'
    font.classList.toggle('active');
}

function hideMenu(){
    const menu = document.querySelector('.topnav .container ul');
    menu.style.display = 'none'
    menu.classList.toggle('active');
}