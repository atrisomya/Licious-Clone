let current_user = JSON.parse(localStorage.getItem('currentUser'));
let user_name = document.getElementById("showFilePanel");
user_name.innerText = current_user;
user_name.style.color='#d11243';



