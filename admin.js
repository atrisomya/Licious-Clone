// Add products-------------

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
  var database = firebase.database()

  let addProduct = document.getElementById('add_product_btn')
  addProduct.addEventListener('click',()=>{
    addPro();
  })

  const addPro = async ()=>{
    let id = document.getElementById('product_id').value
    let name = document.getElementById("product_name").value
    let desc = document.getElementById("product_desc").value
    let img = document.getElementById("product_image")
    let act_img = img.files[0]
    // console.log(act_img)

    let form = new FormData();

    form.append('image',act_img)
    let res = await fetch('https://api.imgbb.com/1/upload?key=f30a44ab53139a8e66d20fada6ef9be8',{
        method:'POST',
        body:form,

    });
    let data = await res.json();
    image_url = data.data.display_url;
    // console.log(image_url)
    let price = document.getElementById("product_MRP").value
    console.log(act_img)
   database.ref('products/' + id).set({
     id:id,
     name:name,
     desc:desc,
     image:image_url,
     price:price
   })
   alert("saved")

  }

  let category = document.getElementById('add_category_btn')

  category.addEventListener('click',()=>{
    getCat();
  })

  const getCat = async()=>{
    let catId = document.getElementById('category_id').value
    let catName = document.getElementById('category_name').value
    let img = document.getElementById("category_image")

    let actual_img = img.files[0];
    let form = new FormData();

    form.append('image',actual_img)
    let res = await fetch('https://api.imgbb.com/1/upload?key=f30a44ab53139a8e66d20fada6ef9be8',{
        method:'POST',
        body:form,

    });
    let data = await res.json();
    image_url = data.data.display_url;
    // console.log(image_url)

    database.ref('category/'+ catId).set({
        id:catId,
        name:catName,
        image:image_url
    })

    alert("saved")

  }