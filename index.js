// let catdrop = document.getElementById('catdrop');
// catdrop.onclick = () => {
//     if(dropdown.display="none") {
//         dropdown.style.display="block";
//     } else {
//         dropdown.style.display="block";
//     }
// }


// ------------Login/Register Authentication---------
var firebaseConfig = {
    apiKey: "AIzaSyArOWepcR7-UZcu1v1Cm4DTugXhFvIGhtA",
    authDomain: "delicious-39f30.firebaseapp.com",
    projectId: "delicious-39f30",
    storageBucket: "delicious-39f30.appspot.com",
    messagingSenderId: "101625013508",
    appId: "1:101625013508:web:e40a561b096a135d705c51"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();


let login = document.getElementById('login')
login.addEventListener('click',()=>{
    userLogin();
})
const userLogin=()=>{
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      window.alert("Success! Welcome back!");
      document.getElementById('email').value = ""
      document.getElementById('password').value = ""
      $('.notification-container').removeClass('selected').addClass('dismiss');
      let name = document.getElementById("showFilePanel");
      name.innerText = email;
      name.style.color='#d11243'
      name.style.fontWeight ='bold'
      let logout = document.getElementById('logout')
      logout.style.display='flex'

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    //   console.log("Error occurred. Try again.");
      window.alert("Invalid Email or Password");
    });
}

let register = document.getElementById('register')
register.addEventListener('click',()=>{
    userRegister();
})

const userRegister=()=>{
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if(email.trim()==""){
        alert("Enter Email")
    }else if(password.trim().length < 6){
        alert('Password must be at least 6 characters')
    }else{
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(()=>{
            alert("Registraion Success")
            document.getElementById('email').value = ""
            document.getElementById('password').value = ""
            $('.notification-container').removeClass('selected').addClass('dismiss');
            let name = document.getElementById("showFilePanel");
            name.innerText = email;
            name.style.color='#d11243'
            name.style.fontWeight ='bold'
            let logout = document.getElementById('logout')
            logout.style.display='flex'

        })
        .catch(function(error){
            let errorMsg = error.message;
            alert(errorMsg)
        })
    }

}


// navbar--------------------------------
$('#showFilePanel').click(function(event) {
    
 
    if ($('.notification-container').hasClass('dismiss')) {
      $('.notification-container').removeClass('dismiss').addClass('selected').show();
    }
    event.preventDefault();
  });
  
  $('#closeFilePanel').click(function(event) {
    if ($('.notification-container').hasClass('selected')) {
      $('.notification-container').removeClass('selected').addClass('dismiss');
    }
    event.preventDefault();
  });

//   Cart

$('#showFilePanelCart').click(function(event) {
    if ($('.cart-notification-container').hasClass('cart-dismiss')) {
      $('.cart-notification-container').removeClass('cart-dismiss').addClass('cart-selected').show();
    }
    event.preventDefault();
  });
 
  $('#closeFilePanelCart').click(function(event) {
    if ($('.cart-notification-container').hasClass('cart-selected')) {
      $('.cart-notification-container').removeClass('cart-selected').addClass('cart-dismiss');
    }
    event.preventDefault();
  });

// 

// --------logout-----------------
  let logout = document.getElementById('logout')
  logout.addEventListener('click',()=>{
    logoutUser();
  })

  const logoutUser = ()=>{
    let logged = document.getElementById("showFilePanel")
    logged.innerText = "Login"
    logged.style.color = 'black'
    logged.style.fontWeight = 'normal'    
    logout.style.display = 'none'
}
// let login  = document.getElementById('showFilePanel').innerText;

// if(login!=='Login'){
//     let form = document.querySelector('.notification-container')
//     form.style.display = 'none'
// }

// -----------------------logout---------------
// navbar-----------------------------

let slidePostion  = 0;
const slides = document.getElementsByClassName("carousel_item");
const totalslides = slides.length;

document.getElementById('carousel-button-Next').addEventListener("click",function(){
    moveToNextSlide();
})

document.getElementById('carousel-button-Previous').addEventListener("click",function(){
    moveToPrevSlide();
})

function updateSlidePosition(){
    for(let slide of slides)
    {
        slide.classList.remove('carousel_item_visible')
        slide.classList.add('carousel_item_hidden')
    }
    slides[slidePostion].classList.add('carousel_item_visible');
}

function moveToNextSlide(){
    
    if(slidePostion == totalslides - 1)
    {
        slidePostion = 0;
    }
    else{
        slidePostion++;
    }
    updateSlidePosition();
}

function moveToPrevSlide(){
    
    if(slidePostion === 0)
    {
        slidePostion = totalslides - 1;
    }
    else{
        slidePostion--;
    }
    updateSlidePosition();
}

// const productContainers = [...document.querySelectorAll('.product-container')];
// const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
// const preBtn = [...document.querySelectorAll('.pre-btn')];

// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     nxtBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     preBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })

//Slider for Best Selllers 

// const productContainers = [...document.querySelectorAll('.product-container')];
// const nextBtn = [...document.querySelectorAll('#leftBtn')];
// const rightBtn = [...document.querySelectorAll('#rightBtn')];

// productContainers.forEach((item, i) => {
//     let containerDimensions = item.getBoundingClientRect();
//     let containerWidth = containerDimensions.width;

//     rightBtn[i].addEventListener('click', () => {
//         item.scrollLeft += containerWidth;
//     })

//     leftBtn[i].addEventListener('click', () => {
//         item.scrollLeft -= containerWidth;
//     })
// })




// ---------------------
var ref = firebase.database().ref('products/');

ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
   let product_data = snapshot.val();
   var newArr = Object.values(product_data)
   console.log(newArr)

   appendProducts(newArr)
}, function (error) {
   console.log("Error: " + error.code);
})

const appendProducts = (data)=>{
    let addPro = document.querySelector('.add_product')
    data.forEach((el)=>{
        let div = document.createElement("div");
        div.className = 'products'
        let img = document.createElement('img')
        img.className ='image_pro'
        img.src = el.image
        
        let title = document.createElement("p")
        title.className = 'title'
        title.innerText = el.name

        let desc = document.createElement("p")
        desc.className = 'desc'
        desc.innerText = el.desc

        let rate_div = document.createElement('div')
        rate_div.className = 'product_rate'
        let price = document.createElement('p')
        price.innerText = `MRP: ₹ ${el.price}`

        let cartBtn = document.createElement("button")
        cartBtn.innerText = 'ADD TO CART'
        cartBtn.addEventListener('click',()=>{
            addToCart (el);
        })

        rate_div.append(price,cartBtn)

        let del_div = document.createElement("div")
        del_div.className = 'delivery'

        let del_img = document.createElement("img")
        del_img.src = 'https://m.licious.in/image/rebranding/png/Scooter_express.png'

        let day = document.createElement('p')
        day.innerText = 'Tomorrow 6 AM - 9 AM'
        del_div.append(del_img,day)

        div.append(img,title,desc,rate_div,del_div)
        
        addPro.append(div)
        
        console.log(addPro)
    })
}

//-------------add categories function------------------

var ref = firebase.database().ref('category/');

ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
   let category_data = snapshot.val();
   var newArrCat = Object.values(category_data)
   console.log(newArrCat)

   appendCategory(newArrCat)
}, function (error) {
   console.log("Error: " + error.code);
});


function appendCategory(data) {
    let cat = document.getElementById('shop_by_cat_ccontainer');

    data.forEach((el)=> {
        let div = document.createElement('div');
        let catImg = document.createElement('img');
        catImg.src = el.image;
        let h3 = document.createElement('h3');
        h3.innerText=el.name;
        div.append(catImg, h3);
        cat.append(div);
    })
}

let total = 0;
function addToCart (el){
    let obj = {};
    let product_cart = JSON.parse(localStorage.getItem('cart_data')) || [];
    let title = el.name;
    let price = el.price
    console.log(title,price);
    obj = {
        title,
        price,
    };
    product_cart.push(obj);
    localStorage.setItem('cart_data',JSON.stringify(product_cart));
    appendToCart();
}
let cart_items = document.querySelector('.cart_item');
function appendToCart(){
    
    cart_items.innerHTML =null;
    let data = JSON.parse(localStorage.getItem('cart_data')) || [];
    data.forEach((el)=>{
        // let cart_upper = document.querySelector('#cart_item_upper');
        // let cart_lower = document.querySelector('#cart_item_lower');
        let cart_item_name = document.createElement('h4');
        let div = document.createElement('div')
        let quantity = document.createElement('p');
        quantity.setAttribute('id', 'cart_item_quantity');
        quantity.innerText = '1000gms';
        cart_item_name.setAttribute("id",'cart_item_name');
        cart_item_name.innerText = el.title;
        let cart_item_price = document.createElement('p');
        cart_item_price.setAttribute('id','cart_item_price');
        cart_item_price.innerText = `Rs.${el.price}`;
        total += +(el.price);
        // cart_upper.append(cart_item_name);
        // cart_lower.append(quantity, cart_item_price);
        div.append(cart_item_name,quantity,cart_item_price);
        cart_items.append(div);

    });
    let total_cost = document.querySelector('#checkout_cost');
    total_cost.innerText = `Total: ${total}`;
    

    let sub_total = document.querySelector('#sub_total');
    sub_total.innerText = total;

    let total_price = document.querySelector('#total_price');
    total_price.innerText = total;
    // console.log(total_price);
    
}
let checkout_btn = document.querySelector('#checkout_btn');
checkout_btn.addEventListener('click',()=>{
    window.location.href = './checkout.html';
})
appendToCart();

