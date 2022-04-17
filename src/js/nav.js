const NAV__SWITCH = document.querySelector('.nav__switch--background')
const NAV__SWITCH__FOREGROUND = document.querySelector(
    '.nav__switch--foreground'
)
const NAV__PRIMARY = document.querySelector('.nav--primary')
const LINKS = document.querySelectorAll('a.nav--a') //selects all links in nav

console.log(LINKS)

let width
let navOpen = false
function triggerNav() {
    NAV__PRIMARY.classList.toggle('block')
    NAV__SWITCH__FOREGROUND.classList.toggle('switch')
    NAV__SWITCH.classList.toggle('switch')

    document.body.classList.toggle('no-scroll')

    navOpen = !navOpen
}//turns nav on and off

for (let i = 0; i < LINKS.length; i++) {
    LINKS[i].addEventListener('click', () => {
        triggerNav()
    })
}//turns nav off when links are clicked

window.onresize = window.onload = function () {
    width = this.innerWidth

    if (navOpen && width < 752) {
        triggerNav()
    }
}//disables nav when screen is too small

NAV__SWITCH.addEventListener('click', () => {
    triggerNav()
})//turns nav on and off when switch is clicked
