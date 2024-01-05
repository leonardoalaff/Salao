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

let iconeWPP = document.querySelector('.icone-wpp')
let sessao2 = document.querySelector('#sessao2')
let aberto = document.querySelector('.aberto')
let fechado = document.querySelector('.fechado')


iconeMenu.addEventListener('click', () => {
    iconeMenu.classList.toggle('active')
    ul.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrollY > 100)
    iconeWPP.classList.toggle('active', scrollY > 10)
    sessao2.classList.toggle('active', scrollY > 450)
})

window.addEventListener('load', () => {
    const agora = new Date();
    const diaSemana = agora.getDay();
    const hora = agora.getHours();

    if (diaSemana >= 1 && diaSemana <= 5 && hora >= 8 && hora < 18) {
        return aberto.classList.toggle('active');
    } else {
        return fechado.classList.toggle('active');
    }
})
