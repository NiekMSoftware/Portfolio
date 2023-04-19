const topButton = document.querySelector(".btn-floating");
let topPage = true;

document.addEventListener("scroll", (ev) =>{
let pageTop = document.documentElement.scrollTop;
    if (pageTop > 69 && topPage){
        topButton.classList.remove("hide");
        topButton.classList.add("show");
        topPage = false;
    }
    if (pageTop == 0 && !topPage){
        topButton.classList.add("hide");
        topButton.classList.remove("remove-show");
        topPage = true;
    }
});
