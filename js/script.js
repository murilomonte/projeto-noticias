let modo = 'light'
function switchTheme() {
    if (modo == 'light') {
        document.getElementById('switcher').innerHTML = 'Modo dark'
        document.querySelector('html').className = 'alternative-mode'
        modo = 'dark'
    } else {
        document.getElementById('switcher').innerHTML = 'Modo light'
        document.querySelector('html').className = 'default-mode'
        modo = 'light'
    }
}