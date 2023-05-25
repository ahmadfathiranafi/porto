function klik() {
    window.open("#")
}

const footerh3 = document.querySelector('#footerh3')
footerh3.style.fontSize =  "2.1rem"
footerh3.style.fontWeight =  "500"
footerh3.style.textTransfrom =  "capitalize"
footerh3.style.lineHeight =  "3rem"
footerh3.style.marginTop = '1rem'

const footerp = document.querySelector('#footerp')
footerp.style.maxWidth =  "500px"
footerp.style.margin =  "10px auto"
footerp.style.fontSize =  "14px"
footerp.style.lineHeight =  "28px"
footerp.style.color =  "#cacdd2"


const btn = document.querySelector('#menu')
const nav = document.querySelector('.nav__links')

btn.addEventListener('click', function() {
    nav.classList.toggle('menu-active')
})
