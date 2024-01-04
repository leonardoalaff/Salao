let iconeMenu = document.querySelector('.icone-menu')
let ul = document.querySelector('.ul')
let nav = document.querySelector('.nav')
let horario = document.querySelector('.horario')

let h2Horario = document.querySelector('.h2-horario')
let h2Manicure = document.querySelector('.h2-manicure')
let h2Pedicure = document.querySelector('.h2-pedicure')

let pHorario = document.querySelector('.p-horario')
let p2Horario = document.querySelector('.p2-horario')
let p2Manicure = document.querySelector('.p2-manicure')
let p2Pedicure = document.querySelector('.p2-pedicure')

let ih1 = document.querySelector('.ih1')
let ih2 = document.querySelector('.ih2')


iconeMenu.addEventListener('click', () => {
    iconeMenu.classList.toggle('active')
    ul.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrollY > 100)
})