
AOS.init();


function CountBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let countPro = basket.reduce((total, p) => total + p.Count, 0);
    let countItem = basket.length
    document.getElementById("ProCount").innerText = countItem;
    document.getElementById("ProCount_mob").innerText = countItem;

    ProCount
}
CountBasket();












