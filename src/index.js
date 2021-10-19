import addHomeToContent  from './home'
import addMenuTocontent from './menu'
window.onload = addHomeToContent()
const BUTTON_HOME = document.getElementById("home").onclick = () => moveTabs(home)
const BUTTON_MENU = document.getElementById("menu").onclick = () => moveTabs(menu)
const BUTTON_DISCOVER_MENU = document.getElementById("discover_menu").onclick = () => moveTabs(menu)
const BUTTON_CONTACT = document.getElementById("contact").onclick = () => moveTabs(contact)

const CONTENT = document.getElementById("content")

const BUTTON_SLIDE_LEFT = document.getElementById("left").onclick = () => slideImages(left)
const BUTTON_SLIDE_RIGHT = document.getElementById("right").onclick = () => slideImages(right)
const IMG_1 = document.getElementById("img1")
const IMG_2 = document.getElementById("img2")
const IMG_3 = document.getElementById("img3")

function moveTabs(button){
    if(button == home) {
        addHomeToContent()
        const BUTTON_HOME = document.getElementById("home").onclick = () => moveTabs(home)
        const BUTTON_MENU = document.getElementById("menu").onclick = () => moveTabs(menu)
        const BUTTON_DISCOVER_MENU = document.getElementById("discover_menu").onclick = () => moveTabs(menu)
        const BUTTON_CONTACT = document.getElementById("contact").onclick = () => moveTabs(contact)
        const BUTTON_SLIDE_LEFT = document.getElementById("left").onclick = () => slideImages(left)
        const BUTTON_SLIDE_RIGHT = document.getElementById("right").onclick = () => slideImages(right)
    }
    if(button == menu) {
        addMenuTocontent()
        const BUTTON_HOME = document.getElementById("home").onclick = () => moveTabs(home)
        const BUTTON_MENU = document.getElementById("menu").onclick = () => moveTabs(menu)
        const BUTTON_CONTACT = document.getElementById("contact").onclick = () => moveTabs(contact)

    }
    if(button == contact){
        const BUTTON_HOME = document.getElementById("home").onclick = () => moveTabs(home)
        const BUTTON_MENU = document.getElementById("menu").onclick = () => moveTabs(menu)
        const BUTTON_CONTACT = document.getElementById("contact").onclick = () => moveTabs(contact)

    }
  
}

let positionsImages = ["img/masonry-2.11773d22.png","img/masonry-3.490155a4.png",
                      "img/masonry-12.71953d3c.png","img/IMG_20210922_133348879.jpg",
                      "img/IMG_20210922_132651819.jpg","img/IMG_20211009_170453775_HDR.jpg"]

function slideImages(move){
   

}