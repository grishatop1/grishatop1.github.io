const btn = document.getElementById('theme-btn')
const borderAdd=  1

const light_svg = document.getElementById('light-svg')
const dark_svg = document.getElementById('dark-svg')

var theme = "light"

function changeToDark() {
    document.documentElement.setAttribute('data-theme', "dark")

    window.renderer.setClearColor(getComputedStyle(document.documentElement).getPropertyValue("--secondary-color"), 1)
    loading_text.style.color = getComputedStyle(document.documentElement).getPropertyValue("--primary-color")
    changeToDarkAnimation()

    theme = "dark"
}

function changeToLight() {
    document.documentElement.setAttribute('data-theme', "light")

    window.renderer.setClearColor(getComputedStyle(document.documentElement).getPropertyValue("--secondary-color"), 1)
    loading_text.style.color = getComputedStyle(document.documentElement).getPropertyValue("--primary-color")
    changeToLightAnimation()

    theme = "light"
}

function changeToDarkAnimation() {
    anime({
        targets: light_svg,
        opacity: 1,
        scale: [2, 1],
        easing: "easeOutExpo",
        duration: 300
    })
    anime({
        targets: dark_svg,
        opacity: 0,
        scale: [1, 0.5],
        easing: "easeOutExpo",
        duration: 300
    })
}

function changeToLightAnimation() {
    anime({
        targets: dark_svg,
        opacity: 1,
        scale: [2, 1],
        easing: "easeOutExpo",
        duration: 300
    })
    anime({
        targets: light_svg,
        opacity: 0,
        scale: [1, 0.5],
        easing: "easeOutExpo",
        duration: 300
    })
}

document.addEventListener('DOMContentLoaded', () => {
    btn.addEventListener("click", () => {
        if (theme == "light") {
            changeToDark()
        } else {
            changeToLight()
        }
    })
})