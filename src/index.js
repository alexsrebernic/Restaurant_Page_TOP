import addHomeToContent  from './home'
import addMenuTocontent from './menu'
import addContactToContent from './contact'

window.onload = addHomeToContent()
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
        setDefaultImages()

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
        addContactToContent()
        currentState = "contact"
        const contact = document.getElementById("contactContainer")
        contact.setAttribute("class","emerge")

    }
    const LOGO = document.getElementById("logo").onclick = () => moveTabs(home)
    const BUTTON_HOME = document.getElementById("home").onclick = () => moveTabs(home)
    const BUTTON_MENU = document.getElementById("menu").onclick = () => moveTabs(menu)
    const BUTTON_CONTACT = document.getElementById("contact").onclick = () => moveTabs(contact)
  
}


let positionsImages = ["./img/masonry-2.11773d22.png","./img/masonry-3.490155a4.png",
                      "./img/masonry-12.71953d3c.png","./img/IMG_20210922_133348879.jpg",
                      "./img/IMG_20210922_132651819.jpg","./img/IMG_20211009_170453775_HDR.jpg"]




function setDefaultImages (){
positionsImages = ["./img/masonry-2.11773d22.png","./img/masonry-3.490155a4.png",
                      "./img/masonry-12.71953d3c.png","./img/IMG_20210922_133348879.jpg",
                      "./img/IMG_20210922_132651819.jpg","./img/IMG_20211009_170453775_HDR.jpg"]
let image1 = document.getElementById("img1")
let image2 = document.getElementById("img2")
let image3 = document.getElementById("img3")
 image1.setAttribute("src", positionsImages[0]) 
 image2.setAttribute("src", positionsImages[1]) 
 image3.setAttribute("src", positionsImages[2]) 
}

window.onload  = setDefaultImages()

function slideImages(move){
    let image1 = document.getElementById("img1")
    let image2 = document.getElementById("img2")
    let image3 = document.getElementById("img3")
   if(move == left){
        moveArrayToLeft()
        image2.setAttribute("class","left")
        image3.setAttribute("class","left")
        setTimeout(() => {
            image2.removeAttribute("class","left")
            image3.removeAttribute("class","left")
        }, 500);
        

   }
   if(move == right){
       moveArrayToRight()

   }
   image1.setAttribute("src", positionsImages[0]) 
   image2.setAttribute("src", positionsImages[1]) 
   image3.setAttribute("src", positionsImages[2]) 
}
function moveArrayToLeft(){
    let firstElement = positionsImages.shift()
    positionsImages.push(firstElement)
}
function moveArrayToRight(){
    let lastElement = positionsImages.pop()
    positionsImages.unshift(lastElement)
}