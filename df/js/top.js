const topBtn = document.querySelector(".top");

topBtn.addEventListener("click", topBtnHandler)

function topBtnHandler(){
    window.scrollTo({ top:0, behavior:"smooth" })
}