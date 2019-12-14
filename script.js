/* const elmt  = document.querySelector('.section-about');
console.log(elmt.offsetTop);

window.addEventListener('scroll',function(){

    let scroll = window.scrollY;

    if(scroll == 212){
        console.log('jose mieses');
    }

}) */
const menu = document.querySelector('.nav__container');
const btn = document.querySelector('.nav__menu');
const close = document.querySelector('#close');
btn.addEventListener('click',e =>{
    if(e.target.className == 'nav__menu' || e.target.className == 'nav__menu--burger'){
        menu.style.right = 0;
    } 
})
close.addEventListener('click', ()=>{
    menu.style.right = '-25rem';
    console.log('jose')
})
