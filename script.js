let iconeMenu = document.querySelector('.icone-menu')
let ul = document.querySelector('.ul')
let nav = document.querySelector('.nav')

let horario = document.querySelector('.horario')
let h2Horario = document.querySelector('.h2-horario')
let pHorario = document.querySelector('.p-horario')
let p2Horario = document.querySelector('.p2-horario')

let sessao2 = document.querySelector('#sessao2')

let aberto = document.querySelector('.aberto')
let fechado = document.querySelector('.fechado')

let iconeWPP = document.querySelector('.icone-wpp')
let seta = document.querySelector('.seta')

let sair = document.querySelector('#sair')
let anuncio = document.querySelector('#anuncio')

let comoChegar = document.querySelector('#como-chegar')
let mapa = document.querySelector('.mapa')
let iconeLocal = document.querySelector('#icone-local')
let pLocal = document.querySelector('#p-local')
let fechar = document.querySelector('#fechar')
let abrirMaps = document.querySelector('#abrir-no-maps')
let rolagemHeader = document.querySelector('.rolagem-header')

let botao1 = document.querySelector('.btn1')
let botao2 = document.querySelector('.btn2')
let botao3 = document.querySelector('.btn3')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let foto1 = document.querySelector('.foto1')
let foto2 = document.querySelector('.foto2')
let foto3 = document.querySelector('.foto3')
let boxCarrossel2 = document.querySelector('.box-carrossel2')
let sessao3 =document.querySelector('.sessao3')


iconeMenu.addEventListener('click', () => {
    iconeMenu.classList.toggle('active')
    ul.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrollY > 100)
    iconeWPP.classList.toggle('active', scrollY > 10)
    seta.classList.toggle('active', scrollY > 450)
})

window.addEventListener('load', () => {
    const agora = new Date();
    const diaSemana = agora.getDay();
    const hora = agora.getHours();

    setTimeout(() => {
        nuncio.classList.toggle('active')
    }, 1000); // 1000 milissegundos = 1 segundo

    if (diaSemana >= 1 && diaSemana <= 5 && hora >= 8 && hora < 18) {
        return aberto.classList.toggle('active');
    } else {
        return fechado.classList.toggle('active');
    }
})


sair.addEventListener('click', () => {
    anuncio.classList.toggle('active')
})

comoChegar.addEventListener('click', () => {
    mapa.classList.toggle('active')
    comoChegar.classList.toggle('active')
    iconeLocal.classList.toggle('active')
    pLocal.classList.toggle('active')
    abrirMaps.classList.toggle('active')
    rolagemHeader.classList.toggle('active')
    nav.classList.toggle('close')
    horario.classList.toggle('active')
})


botao1.addEventListener('click', () => {
    boxCarrossel2.className = 'fig1'
    sessao3.className = 'bg1'
})

botao2.addEventListener('click', () => {
    boxCarrossel2.className = 'fig2'
    sessao3.className = 'bg2'
})
botao3.addEventListener('click', () => {
    boxCarrossel2.className = 'fig3'
    sessao3.className = 'bg3'
})