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
// add new products -------------------------------------
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
    // console.log(act_img)
   database.ref('products/' + id).set({
     id:id,
     name:name,
     desc:desc,
     image:image_url,
     price:price
   })
   alert("saved")
   let addprodform = document.getElementById('addproductform');
    addprodform.style.display="none";

  }


// update products-------------------------------------
let updateProduct = document.getElementById('add_update_btn')
  updateProduct.addEventListener('click',()=>{
    updatePro();
  })

  const updatePro = ()=>{
    let id = document.getElementById('update_product_id').value
    let name = document.getElementById("update_product_name").value
    let desc = document.getElementById("update_product_desc").value
    let price = document.getElementById("update_product_MRP").value
    // console.log(act_img)

    var updates={
      id:id,
     name:name,
     desc:desc,
     price:price
    }
    console.log(updates)
   database.ref('products/' + id).update(updates)
      alert("Data Updated SuccessFully")
      let updateprodform = document.getElementById('update_product_form');
      updateprodform.style.display="none";

  }
//  -----------delete product------------------------

let delProduct = document.getElementById("add_delete_btn")

delProduct.addEventListener("click",()=>{
  deletePro();
})

const deletePro=()=>{
  let id = document.getElementById("del_product_id").value
  console.log(id)
  database.ref(`/products/${id}`).remove();

  alert("Product Deleted")

  let del_product_form = document.getElementById("delete_product_form")
  del_product_form.style.display="none";
}


//  -----------delete product------------------------
  // add new category--------------------------------------------
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
    addcategoryform.style.display="none";

  }

  let addprodform = document.getElementById('addproductform');
  let updateprodform = document.getElementById('update_product_form');
  let delprodform = document.getElementById('delete_product_form');
  
  let addNewProd = document.getElementById('addNewProd');
  addNewProd.onclick = () => {
    updateprodform.style.display="none";
    delprodform.style.display="none";
    addprodform.style.display="block";
  }
  let update_prod = document.getElementById('update_cur_prod');
  update_prod.onclick = () => {
    addprodform.style.display="none";
    delprodform.style.display="none";
    updateprodform.style.display="block";
  }

  let delProd = document.getElementById('delete_cur_prod');
  delProd.onclick = () => {
    addprodform.style.display="none";
    updateprodform.style.display="none";
    delprodform.style.display="block";
  }

  let addclose = document.querySelector('.closeprodform');
  addclose.onclick = () => {
    addprodform.style.display="none";
  }
  let updclose = document.querySelector('.closeupdform');
  updclose.onclick = () => {
    updateprodform.style.display="none";
  }
  let delclose = document.querySelector('.closedelform');
  delclose.onclick = () => {
    delprodform.style.display="none";
  }
  

  let catvis = document.getElementById('category');
catvis.addEventListener('click', () => {
  categoryfun();
});


let prodvis = document.getElementById('products');
prodvis.onclick = () => {
  product_visibility();
}
function categoryfun() {
  let formprod = document.querySelector('.form_products');
  formprod.style.display="none";
  let categoryclass = document.querySelector('.form_category');
  categoryclass.style.display="block";
  
}

function product_visibility() {
  let categoryclass = document.querySelector('.form_category');
  categoryclass.style.display="none";
  let formprod = document.querySelector('.form_products');
  formprod.style.display="block";
}

let addNewCat = document.getElementById('addNewCat');
addNewCat.onclick = () => {
  catformvisibility();
}

function catformvisibility() {
  let categoryform = document.getElementById('addcategoryform');
  categoryform.style.display="block";
}

let addcategoryform = document.getElementById('addcategoryform');
let addcatclose = document.querySelector('.closecatform');
  addcatclose.onclick = () => {
    addcategoryform.style.display="none";
  }
  let upate_category_form = document.getElementById('update_category_form');
  let updclosecat = document.querySelector('.closecatupdform');
  updclosecat.onclick = () => {
    upate_category_form.style.display="none";
  }
  let delete_category_form = document.getElementById('delete_category_form');
  let delcatclose = document.querySelector('.closecatdelform');
  delcatclose.onclick = () => {
    delete_category_form.style.display="none";
  }
  

  let catupdate = document.getElementById('update_cur_cat');
  catupdate.onclick = () => {
    catupdatevis();
  }

  function catupdatevis() {
    upate_category_form.style.display="block";
  }

  let catdel = document.getElementById('delete_cur_cat');
  catdel.onclick = () => {
    delete_category_form.style.display="block";
  }

  const updateCat = ()=>{
    let id = document.getElementById('update_category_id').value
    let name = document.getElementById("update_category_name").value

    // console.log(act_img)

    var updates={
      id:id,
     name:name,
    }
    console.log(updates)
   database.ref('category/' + id).update(updates)
      alert("Data Updated SuccessFully")
      let updatecatform = document.getElementById('update_category_form');
      updatecatform.style.display="none";

  }

  let catupdbtn = document.getElementById('add_update_btn_cat');
  catupdbtn.onclick = () => {
    updateCat();
  }

  const deleteCat=()=>{
    let id = document.getElementById("del_cat_id").value
    console.log(id)
    database.ref(`/category/${id}`).remove();
  
    alert("Category Deleted")
  
    let del_category_form = document.getElementById("delete_category_form")
    del_category_form.style.display="none";
  }

  let catdelbtn = document.getElementById('add_delete_cat_btn');
  catdelbtn.onclick = () => {
    deleteCat();
  }

  var ref = firebase.database().ref('category/');

ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
   let category_data = snapshot.val();
   var newArrCat = Object.values(category_data)
   let cat_count = document.getElementById('category_count')
   cat_count.innerText = newArrCat.length
   console.log(newArrCat.length)

  //  appendCategory(newArrCat)
}, function (error) {
   console.log("Error: " + error.code);
});
  var ref = firebase.database().ref('products/');

ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
   let category_data = snapshot.val();
   var newArrCat = Object.values(category_data)
   let pro_count = document.getElementById('product_count')
   pro_count.innerText = newArrCat.length
   console.log(newArrCat.length)
   let tab_body = document.getElementById('table-rows')
   tab_body.innerHTML = ""
   newArrCat.forEach((el)=>{
      
      let row = document.createElement('tr')
      row.className = 'selected'
      let id = document.createElement('td')
      id.innerText = el.id;
      let name = document.createElement('td')
      name.innerText = el.name
      let desc = document.createElement('td')
      desc.innerText = el.desc
      let price = document.createElement('td')
      price.innerText = el.price
      row.append(id,name,desc,price)

      tab_body.append(row)


      console.log(row)
   })

  //  appendCategory(newArrCat)
}, function (error) {
   console.log("Error: " + error.code);
});