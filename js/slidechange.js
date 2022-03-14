function change(){
    let pic=document.querySelector("#product-information .zoom img")
    let picz=document.querySelector("#product-information .zoom")
    console.log(picz.getAttribute("style"))

    let btn =document.querySelectorAll("#product-information .bottom-triple-img .slick .col-lg-3 ")

    for (let elem of btn){
        elem.addEventListener("click",function(){
            pic2=elem.firstElementChild.getAttribute("src")
            console.log(pic2)
            pic.setAttribute("src",pic2)
            picz.setAttribute("style",`background-image: url(${pic2});`)
        })
    }
}
change()