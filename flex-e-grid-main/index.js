const btnMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

btnMenu.addEventListener('click', () =>{
    menu.classList.toggle('menu-lateral--ativo')
})


const btnHambugerMenu = document.querySelector('.menu-lateral')
const hamburgerMenu = document.querySelector('.menu-lateral__link')

btnMenu.addEventListener('click', () =>{
    hamburgerMenu.classList.toggle('menu-lateral__link--ativo')
})