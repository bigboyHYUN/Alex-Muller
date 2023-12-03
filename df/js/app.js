import "./swiper-visual.js";
import "./swiper-comp.js";
import "./swiper-model.js";
import "./lnb.js"
import "./tab.js"
import "./top.js"
import "./mobilemenu.js"


function headerFixedHandler(){
    if(window.scrollY > 0){
        document.body.classList.add("header-fixed")
    } else {
        document.body.classList.remove("header-fixed")
    }
}

window.addEventListener("scroll", headerFixedHandler)