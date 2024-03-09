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
let calcular = document.querySelector('.calcular')
let calculator = document.querySelector('.calculator')


iconeMenu.addEventListener('click', () => {
    iconeMenu.classList.toggle('active')
    ul.classList.toggle('active')
})

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrollY > 0)
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

calcular.addEventListener('click', () => {
    calculator.classList.toggle('active')
    calcular.classList.toggle('active')
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

//**** CALCULADORA ****
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch(error) {
        document.getElementById('display').value = 'Error';
    }
}

//**** RELÓGIO ****
function updateClock() {
    const now = new Date();
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dayOfWeek = daysOfWeek[now.getDay()];
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${dayOfWeek}, ${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = timeString;
  }
  
  // Atualiza o relógio a cada segundo
  setInterval(updateClock, 1000);
  
  // Inicializa o relógio ao carregar a página
  updateClock();


  /**** SLIDE ****/
  let slideIndex = 0;
  showSlide(slideIndex);
  
  function moveSlide(n) {
      showSlide(slideIndex += n);
  }
  
  function showSlide(n) {
      const slides = document.getElementsByClassName("slide");
      
      if (n >= slides.length) {
          slideIndex = 0;
      }
      if (n < 0) {
          slideIndex = slides.length - 1;
      }
      
      for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      
      slides[slideIndex].style.display = "block";  
  }


  //**** TESTE ****
  // Verifica se o navegador é o Chrome no dispositivo Android
const isAndroidChrome = window.navigator.userAgent.match(/Chrome\/[0-9]+/i) && window.navigator.userAgent.match(/Android/i);

// Verifica se o navegador suporta a API Web App Manifest
const supportsWebAppManifest = 'onbeforeinstallprompt' in window;

// Se o navegador é o Chrome no dispositivo Android e suporta a API Web App Manifest
if (isAndroidChrome && supportsWebAppManifest) {
    // Exibe o botão para adicionar à tela inicial
    document.getElementById('addToHomeScreen').style.display = 'block';

    // Adiciona um evento de clique ao botão
    document.getElementById('addToHomeScreen').addEventListener('click', async () => {
        try {
            // Obtém o objeto de instalação
            const installPromptEvent = await window.navigator.getInstalledRelatedApps();

            // Se o objeto de instalação estiver disponível
            if (installPromptEvent) {
                // Exibe o prompt para adicionar à tela inicial
                installPromptEvent.prompt();
            }
        } catch (error) {
            console.error('Erro ao exibir o prompt de instalação:', error);
        }
    });
} else {
    // Oculta o botão se o navegador não for o Chrome no dispositivo Android ou não suportar a API Web App Manifest
    document.getElementById('addToHomeScreen').style.display = 'none';
}
