function BasketDiv() {

    let products = JSON.parse(localStorage.getItem("basket"));
    let total_price = 0;
    let total_count = 0;
    let Cart_Main = document.getElementById("Cart_Main")

    if (products.length == 0) {
        let Pro_empty = document.createElement("div")
        Pro_empty
            .classList
            .add("cart-empty", "text-center", "mt-5", "mb-5")

        let Pro_empty_text = document.createElement("h1")
        Pro_empty_text.innerText = "Shopping Cart Is Empty"
        Pro_empty.append(Pro_empty_text)
        Cart_Main.append(Pro_empty)
    }

    for (let product of products) {
        let cart_body = document.createElement("div")
        cart_body
            .classList
            .add("cart-body", "d-flex", "justify-content-between", "align-items-center")
        cart_body.setAttribute("data-id", product.Id)
        let cart_body_left = document.createElement("div");
        cart_body_left
            .classList
            .add("cart-body-left", "d-flex", "align-items-center");
        cart_body.append(cart_body_left)

        let pro_check = document.createElement("div")
        pro_check
            .classList
            .add("pro-check")

        cart_body_left.append(pro_check)

        let checkbox = document.createElement("input")
        checkbox.setAttribute("type", "checkbox");

        pro_check.append(checkbox)

        let pro_image = document.createElement("div")
        pro_image
            .classList
            .add("pro-image")

        cart_body_left.append(pro_image)

        let img = document.createElement("img");
        img.setAttribute("src", product.Src);

        pro_image.append(img)

        let pro_detail = document.createElement("div");
        pro_detail
            .classList
            .add("pro-detail")

        cart_body_left.append(pro_detail)

        let pro_name = document.createElement("a")
        pro_name.setAttribute("href", "index.html");
        pro_name
            .classList
            .add("pro-name");
        pro_name.innerText = product.Name;
        pro_detail.append(pro_name);

        let star_1 = document.createElement("i");
        star_1
            .classList
            .add("fa-solid", "fa-star");

        pro_detail.append(star_1)

        let star_2 = document.createElement("i");
        star_2
            .classList
            .add("fa-solid", "fa-star");
        pro_detail.append(star_2)

        let star_3 = document.createElement("i");
        star_3
            .classList
            .add("fa-solid", "fa-star");
        pro_detail.append(star_3);

        let star_4 = document.createElement("i");
        star_4
            .classList
            .add("fa-solid", "fa-star");
        pro_detail.append(star_4)

        let star_5 = document.createElement("i");
        star_5
            .classList
            .add("fa-solid", "fa-star");
        pro_detail.append(star_5);

        let pro_rait = document.createElement("span");
        pro_rait
            .classList
            .add("pro-rait-text");
        pro_rait.innerText = product
            .Rate
            pro_detail
            .append(pro_rait);

        let cart_body_right = document.createElement("div");
        cart_body_right
            .classList
            .add(
                "cart-body-right",
                "d-flex",
                "align-items-center",
                "justify-content-between"
            )

        cart_body.append(cart_body_right);

        let pro_price = document.createElement("div");
        pro_price
            .classList
            .add("pro-price");

        cart_body_right.append(pro_price)

        let pro_price_phone = document.createElement("h6");
        pro_price_phone
            .classList
            .add("d-block", "d-md-none");
        pro_price_phone.innerText = "Price"
        pro_price.append(pro_price_phone)

        let pro_price_desk = document.createElement("h4");
        pro_price_desk
            .classList
            .add("pro-price-value");
        pro_price_desk.innerText = "$" + product.Price;
        pro_price.append(pro_price_desk);

        let pro_quantity = document.createElement("div");
        pro_quantity
            .classList
            .add("pro-quantity");

        cart_body_right.append(pro_quantity);

        let pro_quantity_text = document.createElement("h6");
        pro_quantity_text
            .classList
            .add("d-block", "d-md-none")
        pro_quantity_text.innerText = "Stock";

        pro_quantity.append(pro_quantity_text);

        let pro_quantity_value = document.createElement("input")
        pro_quantity_value.setAttribute("type", "number");
        pro_quantity_value.setAttribute("min", "1")
        pro_quantity_value
            .classList
            .add("pro-quantity-value")
        pro_quantity_value.value = product.Count;

        pro_quantity_value.onchange = function () {
            let Update_Btn = document.getElementById("UpdateCart")
            Update_Btn.click()
        }
        pro_quantity.append(pro_quantity_value);

        let pro_subtotal = document.createElement("div");
        pro_subtotal
            .classList
            .add("pro-subtotal");
        cart_body_right.append(pro_subtotal)

        let pro_subtotal_text = document.createElement("h6");
        pro_subtotal_text
            .classList
            .add("d-block", "d-md-none")
        pro_subtotal_text.innerText = "Total Price";
        pro_subtotal.append(pro_subtotal_text);

        let pro_subtotal_value = document.createElement("h4");
        pro_subtotal_value
            .classList
            .add("pro-subtotal-value");
        let pro_subtotal_valueN = product.Count * product.Price;

        pro_subtotal_value.innerText = "$" + pro_subtotal_valueN.toFixed(2);
        pro_subtotal.append(pro_subtotal_value)

        let pro_remove = document.createElement("div");
        pro_remove
            .classList
            .add("pro-remove");

        cart_body_right.append(pro_remove);

        let pro_remove_btn = document.createElement("button");
        pro_remove_btn
            .classList
            .add("pro-remove-btn");

        pro_remove.append(pro_remove_btn);

        let pro_remove_btn_i = document.createElement("i");
        pro_remove_btn_i
            .classList
            .add("fa-solid", "fa-trash-can")

        pro_remove_btn.append(pro_remove_btn_i)

        total_price += pro_subtotal_valueN;
        total_count += product.Count;
        document
            .getElementById("Cart_Main")
            .append(cart_body)
        document
            .getElementById("TotalPriceSub")
            .innerText = "$" + total_price.toFixed(2);

    }

    Delete_Product()
    AllProDell()
}

BasketDiv();

function CountBasket() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    //let countPro = basket.reduce((total, p) => total + p.Count, 0);
    let countItem = basket
        .length
        document
        .getElementById("ProCount")
        .innerText = countItem;
    document
        .getElementById("ProCount_mob")
        .innerText = countItem;

}
CountBasket();

function Delete_Product() {

    let Cart_Pro = document.querySelectorAll(
        "#Cart_Main .cart-body-right .pro-remove .pro-remove-btn"
    )
    for (let elem of Cart_Pro) {
        elem.addEventListener("click", function () {
            let data_id = this
                .parentElement
                .parentElement
                .parentElement
                .getAttribute("data-id");
            let basket = JSON.parse(localStorage.getItem("basket"));

            for (let i = 0; i < basket.length; i++) {
                if (basket[i].Id == data_id) {
                    basket.splice(i, 1);
                    localStorage.setItem('basket', JSON.stringify(basket));

                    // location.reload();
                }
            }
            if (basket.length == 0) {
                location.reload();
            }
            this
                .parentElement
                .parentElement
                .parentElement
                .remove()
            updateDiv();

        })

    }

}

function updateDiv() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    let countPro = basket.reduce((total, p) => total + p.Count, 0);
    let totalAmount = basket.reduce(
        (total_price, x) => total_price + (x.Count * (x.Price)),
        0
    )
    document
        .getElementById("Total_Count")
        .innerText = countPro;
    document
        .getElementById("Total_Counts")
        .innerText = countPro;
    //document.getElementById("TotalPriceSub").innerText = totalAmount;
    document
        .getElementById("TotalPriceSub")
        .innerText = "$" + totalAmount.toFixed(2);

}
updateDiv();

function AllProDell() {
    let AllDellBtn = document.getElementById("RemoveAllCart");
    AllDellBtn.addEventListener("click", function (e) {
        e.preventDefault();

        let basket = JSON.parse(localStorage.getItem("basket"));
        basket.splice(0, basket.length);
        localStorage.setItem('basket', JSON.stringify(basket));
        location.reload();
        //updateDiv();

    })
}

function Pro_Update() {
    let Update_Btn = document.getElementById("UpdateCart")
    Update_Btn.addEventListener("click", function (e) {
        e.preventDefault()
        let basket = JSON.parse(localStorage.getItem("basket"));
        //let ProQuantity=document.querySelectorAll(".pro-quantity .pro-quantity-value")
        let Dataid = document.querySelectorAll("#Cart_Main .cart-body")

        for (let dt of Dataid) {
            let dataids = dt.getAttribute("data-id")
            let existingPro = basket.find(p => p.Id == dataids);

            let Counts = dt.lastElementChild.firstElementChild.nextElementSibling.lastElementChild.value
            existingPro.Count = Number(Counts)
            localStorage.setItem("basket", JSON.stringify(basket));

            let sub_price = dt.lastElementChild.firstElementChild.lastElementChild.innerText
            let sub_priceNum = sub_price.substring(1, sub_price.length)

            let sub_count = dt.lastElementChild.firstElementChild.nextElementSibling.lastElementChild.value

            let new_subtotal = sub_priceNum * sub_count

            dt.lastElementChild.lastElementChild.previousElementSibling.lastElementChild.innerText = "$" +
                    new_subtotal.toFixed(2)

        }
        updateDiv();

    })
}
Pro_Update()
