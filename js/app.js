const menu =document.querySelector('.Menu');

const links = document.querySelector('.Links');


function revealMenu(){
    links.classList.toggle('Links-display');
    console.log(links.className)
}

menu.addEventListener('click',revealMenu)