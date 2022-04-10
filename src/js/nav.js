const NAV__SWITCH = document.querySelector('.nav__switch--background')
const NAV__SWITCH__FOREGROUND = document.querySelector(
    '.nav__switch--foreground'
)
const NAV__PRIMARY = document.querySelector('.nav--primary')

NAV__SWITCH.addEventListener('click', () => {
    NAV__PRIMARY.classList.toggle('block')
    NAV__SWITCH__FOREGROUND.classList.toggle('switch')
    NAV__SWITCH.classList.toggle('switch')
})
    