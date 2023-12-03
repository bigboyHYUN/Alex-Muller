tab(".product-layout",
{
    btn: document.querySelector(".product-tab__btn"),
    tab: document.querySelector(".product-new-collection")
}, "product-tab__btn")


function tab(btnListClassName, defaultTab, validateClassName){
    const btnList = document.querySelector(btnListClassName)

    let target;
    let prevTab = defaultTab

    function tabmenuHandler(event){
        target = event.target;
    
        if(!target.classList.contains(validateClassName)){
            return;
        }
    
        if(prevTab.btn && prevTab.tab){
            prevTab.btn.classList.remove("active")
            prevTab.tab.classList.remove("show")
        }
    
        const tabSelector = document.querySelector(`.${target.dataset.btn}`);
    
        target.classList.add("active")
        tabSelector.classList.add("show")
    
        prevTab.btn = target;
        prevTab.tab = tabSelector;
    }

    btnList.addEventListener("click", tabmenuHandler)
}


tab(".product-layout",
{
    btn: document.querySelector(".product-tab__btn"),
    tab: document.querySelector(".product-new-collection")
}, "product-tab__btn")


tab(".md-shop-layout",
{
    btn: document.querySelector(".md-shop-tab__btn"),
    tab: document.querySelector(".md-shop-tableware")
}, "md-shop-tab__btn")