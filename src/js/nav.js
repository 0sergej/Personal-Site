const NAV__SWITCH = document.querySelector('.nav__switch--background')
const NAV__SWITCH__FOREGROUND = document.querySelector(
    '.nav__switch--foreground'
)
const NAV__PRIMARY = document.querySelector('.nav--primary')

let width
let navOpen = false
function triggerNav() {
    NAV__PRIMARY.classList.toggle('block')
    NAV__SWITCH__FOREGROUND.classList.toggle('switch')
    NAV__SWITCH.classList.toggle('switch')
    navOpen = !navOpen
}

window.onresize = window.onload = function () {
    width = this.innerWidth

    if (navOpen && width < 752) {
        triggerNav()
    }
}

NAV__SWITCH.addEventListener('click', () => {
    triggerNav()
})
