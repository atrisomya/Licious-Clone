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
  