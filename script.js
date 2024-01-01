let iconeMenu = document.querySelector('.icone-menu')
let ul = document.querySelector('ul')

iconeMenu.addEventListener('click', () => {
    iconeMenu.classList.toggle('active')
    ul.classList.toggle('active')
})