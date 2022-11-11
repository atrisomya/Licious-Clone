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