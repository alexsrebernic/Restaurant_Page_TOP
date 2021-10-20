import addHomeToContent  from './home'
import addMenuTocontent from './menu'

let currentState = "home"
const LOGO = document.getElementById("logo").onclick = () => moveTabs(home)
const BUTTON_HOME = document.getElementById("home").onclick = () => moveTabs(home)
const BUTTON_MENU = document.getElementById("menu").onclick = () => moveTabs(menu)
const BUTTON_DISCOVER_MENU = document.getElementById("discover_menu").onclick = () => moveTabs(menu)
const BUTTON_CONTACT = document.getElementById("contact").onclick = () => moveTabs(contact)

const CONTENT = document.getElementById("content")

const BUTTON_SLIDE_LEFT = document.getElementById("left").onclick = () => slideImages(left)
const BUTTON_SLIDE_RIGHT = document.getElementById("right").onclick = () => slideImages(right)

function moveTabs(button){
    if(button == home) {
        if(currentState == "home") return
        addHomeToContent()
        const HERO = document.getElementById("hero")
        HERO.setAttribute("class","emerge")
        currentState = "home"
        const BUTTON_DISCOVER_MENU = document.getElementById("discover_menu").onclick = () => moveTabs(menu)
        const BUTTON_SLIDE_LEFT = document.getElementById("left").onclick = () => slideImages(left)
        const BUTTON_SLIDE_RIGHT = document.getElementById("right").onclick = () => slideImages(right)
    }
    if(button == menu) {
        if(currentState == "menu") return
        addMenuTocontent()
        currentState = "menu"
        const CONTAINER = document.getElementById("container")
        CONTAINER.setAttribute("class","emerge")
        

    }
    if(button == contact){
        if(currentState == "contact") return
        currentState = "contact"
      

    }
    const LOGO = document.getElementById("logo").onclick = () => moveTabs(home)
    const BUTTON_HOME = document.getElementById("home").onclick = () => moveTabs(home)
    const BUTTON_MENU = document.getElementById("menu").onclick = () => moveTabs(menu)
    const BUTTON_CONTACT = document.getElementById("contact").onclick = () => moveTabs(contact)
}
let positionsImages = ["./img/masonry-2.11773d22.png","./img/masonry-3.490155a4.png",
                      "./img/masonry-12.71953d3c.png","./img/IMG_20210922_133348879.jpg",
                      "./img/IMG_20210922_132651819.jpg","./img/IMG_20211009_170453775_HDR.jpg"]

function slideImages(move){
   

}