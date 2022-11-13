let current_user = JSON.parse(localStorage.getItem('currentUser'));
let user_name = document.getElementById("showFilePanel");
user_name.innerText = current_user;
user_name.style.color='#d11243';

let cartTotal = +(JSON.parse(localStorage.getItem('cart_total')) || 0);
let cart_price = document.querySelector("#cart_total");
cart_price.style.color='#d11243';
cart_price.style.fontWeight ='bold'
cart_price.innerHTML = cartTotal;
console.log(cartTotal)

let proceedbtn = document.querySelector('#save_proceed');
proceedbtn.addEventListener('click', saveAddress);



function saveAddress(event){
    let data = JSON.parse(localStorage.getItem('address_data')) || [];
    let obj;
    event.preventDefault();
    let location = document.querySelector('#location').value;
    let location_street = document.querySelector('#location_street').value;
    let landmark = document.querySelector('#landmark').value;
    let city = document.querySelector('#city').value;
    let mobile = document.querySelector('#mobile').value;
    let email = document.querySelector('#email').value;
    let name = document.querySelector('#name').value;
     if(location != "" || location_street != "" || landmark != "" || city != "" || mobile != "" || email != "" || name != ""){
    obj={
        location, location_street,landmark,city,mobile,email,name
    }
    data.push(obj);
    localStorage.setItem('address_data',JSON.stringify(data));
    alert("Added successfully");
    document.querySelector('#location').value = "";
    document.querySelector('#location_street').value = "";
    document.querySelector('#landmark').value = "";
    document.querySelector('#city').value = "";
    document.querySelector('#mobile').value = "";
    document.querySelector('#email').value = "";
    document.querySelector('#name').value = "";
    }
    else{
        alert("Fill all the data");
    }
}

let paybutton = document.querySelector('#pay_btn');
paybutton.addEventListener('click', paymentDone);



function paymentDone(event){
    event.preventDefault();
    let card_number = document.querySelector('#card_number').value;
    let month = document.querySelector('#month').value;
    let year = document.querySelector('#year').value;
    let card_cvv = document.querySelector('#card_cvv').value;
    let name = document.querySelector('#name_on_card').value;
    if(card_number != "" || month != "" || year != "" || card_cvv != "" || name != "")
    {
        alert("Payment successfully");
        document.querySelector('#card_number').value = "";
        document.querySelector('#month').value = "";
        document.querySelector('#year').value = "";
        document.querySelector('#card_cvv').value = "";
        document.querySelector('#name_on_card').value = "";
        window.location.href = "./index.html";
        let cartTotal = 0;
        localStorage.setItem('cart_total',JSON.stringify(cartTotal))
        let cart_price = document.querySelector("#cart_total");
        cart_price.style.color='#d11243';
        cart_price.style.fontWeight ='bold'
        cart_price.innerHTML = cartTotal;
        let data = [];
        localStorage.setItem('cart_data',JSON.stringify(data));

    }
    else {
        alert("Please fill all the fields");
    }
}