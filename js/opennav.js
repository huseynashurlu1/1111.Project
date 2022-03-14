
///Catagories Btn Aktiv
let CatBtn=document.querySelector("#catBtn");
let Cat_items=document.querySelector("#cat_items_btn")
let catIconBtn=document.querySelector("#catIconBtn");
CatBtn.addEventListener("click",function(){
    Cat_items.classList.toggle("show")
    catIconBtn.classList.toggle("CatIconRotate")
})

