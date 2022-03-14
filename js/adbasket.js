if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
}

function AddBasketBtn() {
    let ProductList = document.querySelectorAll("#ProList .product-cart .pro-bottom .add-cart")
    for (addBasket of ProductList) {
        addBasket.addEventListener("click", function (e) {
            e.preventDefault();
            let basket = JSON.parse(localStorage.getItem("basket"));
            let data_id = this.parentElement.parentElement.getAttribute("data-id");
            let pro_name = this.parentElement.firstElementChild.nextElementSibling.firstElementChild.innerText;
            let pro_new_price = this.parentElement.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.firstElementChild.innerText;
            let pro_rate = this.parentElement.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerText;
            let src = this.parentElement.previousElementSibling.firstElementChild.getAttribute("src");
            let priceN = pro_new_price.substring(1, pro_new_price.length)
            let priceNum = Number(priceN)
            let existingPro = basket.find(p => p.Id == data_id);
            if (existingPro == undefined) {
                basket.push(
                    {
                        Id: data_id,
                        Name: pro_name,
                        Src: src,
                        Price: priceNum,
                        Rate: pro_rate,
                        Count: 1,
                    })
            }
            else {
                existingPro.Count += 1;
            }
            localStorage.setItem("basket", JSON.stringify(basket));
            CountBasket();
            

        })
    }
}
AddBasketBtn();

function CountBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    //let countPro = basket.reduce((total, p) => total + p.Count, 0);
    let countItem = basket.length
    document.getElementById("ProCount").innerText = countItem;
    document.getElementById("ProCount_mob").innerText = countItem;

}
CountBasket();