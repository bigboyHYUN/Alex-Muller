
//const => 상수 (재할당이 금지된 변수)
const navElem = document.querySelector("nav");
const progressBar = document.querySelector(".header-progressBar")

function mouseOverHandler(event){


    document.body.classList.add("header-menu__open");

    if(event.target.nodeName !== "UL" && event.target.classList.contains("progress-item")){
        progressBar.style.width = `${event.target.clientWidth}px`
        progressBar.style.left = `${event.target.offsetLeft}px`
    }
}

function mouseleaveHandler(){
    document.body.classList.remove("header-menu__open");
    progressBar.style.width = 0;
}

navElem.addEventListener("mouseover", mouseOverHandler)
navElem.addEventListener("mouseleave", mouseleaveHandler)