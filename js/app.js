
const bodyElem = document.querySelector("body")
const menuElem = document.querySelector(".hambuger-menu");

function menuHandler(){
        bodyElem.classList.toggle("menu-open")

    
}

menuElem.addEventListener("click", menuHandler)

function headerFixedHandler(){
        if(window.scrollY > 0 && window.innerWidth > 1024){
            document.body.classList.add("header-fixed")
        } else {
            document.body.classList.remove("header-fixed")
        }
}

function resizeHandler(){
   headerFixedHandler()

   if(window.innerWidth < 1024){
        menuElem.addEventListener("click", menuHandler)
   } else {
        bodyElem.classList.remove("menu-open")
        menuElem.removeEventListener("click", menuHandler)
   }
    
}

menuElem.addEventListener("click", menuHandler)
window.addEventListener("resize", resizeHandler)
window.addEventListener("scroll", headerFixedHandler)