
const menu = document.querySelector('.nav__container');
const btn = document.querySelector('.nav__menu');
const close = document.querySelector('#close');

// show nav 
btn.addEventListener('click',e =>{
    if(e.target.className == 'nav__menu' || e.target.className == 'nav__menu--burger'){
        menu.style.right = 0;
    } 
});

//  scrool to the element when click
document.querySelector('.nav__container').addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.getAttribute("href")){
        let element = document.querySelector(e.target.getAttribute("href")).offsetTop;
    getPosition(element);
    }
    menu.style.right = '-25rem';

})

// close nav bar
close.addEventListener('click', ()=>{
    menu.style.right = '-25rem';
});

document.querySelector('.header__btn').addEventListener('click',() =>{
    getPosition(766);
})

function getPosition(element){

    window.scroll({
        top: element, 
        left: 0, 
        behavior: 'smooth'
      });  
      


}
