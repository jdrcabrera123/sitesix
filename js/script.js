const header = document.querySelector('header')

window.addEventListener('scroll', function () {
    header.classList.toggle("sticky", window.scrollY > 0)
})

const navlist = document.querySelector('.navlist')
const menu_icon = document.querySelector('#menu-icon')

menu_icon.onclick = () => {
    menu_icon.classList.toggle('bx-x')
    navlist.classList.toggle('open')
}

window.onscroll = () => {
    menu_icon.classList.remove('bx-x')
    navlist.classList.remove('open')
}

const sr = ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset:true
})

sr.reveal('.home-text',{delay:150, origin:'bottom'})
sr.reveal('.featured, .cta, .new, .brand, .contact',{delay:200, origin:'bottom'})