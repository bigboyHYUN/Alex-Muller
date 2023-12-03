const gnbList = document.querySelector(".m-gnb")
const hamburgerMenu = document.querySelector(".hamburger-menu")


let target;
let prevTarget;

function lnbMobileMenuHandler(event){
    target = event.target;

    if(target.nodeName === "UL"){
        return;
    }

    while(target.nodeName !== "LI"){
        target = target.parentNode;
    }

    if(prevTarget && prevTarget !==target){
        prevTarget.classList.remove("active")
    }
    

    target.classList.toggle("active")

    prevTarget = target;
}

function mobileMenuHandler(){
    document.body.classList.toggle("mobile-menu__open")
}

hamburgerMenu.addEventListener("click", mobileMenuHandler)

gnbList.addEventListener("click", lnbMobileMenuHandler)