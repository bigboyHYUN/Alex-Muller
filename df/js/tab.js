const btnList = document.querySelector(".comp-btn__list")

let target;
let prevTab = {
    btn: document.querySelector(".comp-btn__list li"),
    tab: document.querySelector(".electricity")
}

function tabmenuHandler(event){
    target = event.target;

    if(target.nodeName === "UL"){
        return;
    }

    if(prevTab.btn && prevTab.tab){
        prevTab.btn.classList.remove("active")
        prevTab.tab.classList.remove("show")
    }
    

    while(target.nodeName !== "LI"){
        target = target.parentNode;
    }

    const tabSelector = document.querySelector(`.${target.dataset.btn}`);

    target.classList.add("active")
    tabSelector.classList.add("show")

    prevTab.btn = target;
    prevTab.tab = tabSelector;
}


btnList.addEventListener("click", tabmenuHandler)