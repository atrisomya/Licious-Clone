var bonelessdata = [{
    imgUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/04aefdb4-bc21-21b0-8a2f-79be7f9d3eb5/original/Goat-Boneless-Hero-Shot.jpg?format=webp",
    name: "Goat BonelessGoat BonelessGoat Boneless",
    des: "Chunky,evenhpieues nf fve-trnmmed,bhpelessigefmed",
    net_tag: "Net wt:",
    net: "500",
    gross_tag: "Gross:",
    gross: "526",
    unit: "gms",
    price_tag: "MRP:",
    cuurency: "₹",
    price: "250",
    strikePrice: "300",
    off: "15",
    off_tag: "%OFF",
},
{
    imgUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/4bb13cb1-3d1e-12e0-1dac-619ce32e580e/original/Chicken_Thigh_Boneless_Hero_Shot.jpg?format=webp",
    name: "Chicken Thigh Boneless",
    des: "Fresh nakhre for fresh,juicy & tender chicken thigh cuts ",
    net_tag: "Net wt:",
    net: "450",
    gross_tag: "Gross:",
    gross: "00",
    unit: "gms",
    price_tag: "MRP:",
    cuurency: "₹",
    price: "229",
    strikePrice: "339",
    off: "15",
    off_tag: "%OFF",
},
{
    imgUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/815d73d8-428d-067c-8d65-1141dea70241/original/p0_tile_images-07_(1).jpg?format=webp",

    name: "Basa(Sheelan)Boneless Cubes",
    des: "Our Fish- right to your home;cut,clean &ready",
    net_tag: "Net wt:",
    net: "400",
    gross_tag: "Gross:",
    gross: "1200",
    unit: "gms",
    price_tag: "MRP:",
    cuurency: "₹",
    price: "239",
    strikePrice: "335",
    off: "15",
    off_tag: "%OFF",
},
{
    imgUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/6d80d40b-5b16-6761-c7d2-e1aadc31240b/original/Chicken_MiniBites_Boneless_Hero_Shot.jpg?format=webp",

    name: "Chicken Boneless-Mini Bits",
    des: "Bite-Sized-checken breast cuts by our team of Nakhrebaaz",
    net_tag: "Net wt:",
    net: "500",
    gross_tag: "Gross:",
    gross: "250",
    unit: "gms",
    price_tag: "MRP:",
    cuurency: "₹",
    price: "199",
    strikePrice: "239",
    off: "15",
    off_tag: "%OFF",
},
{
    imgUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/f72164df-c9c4-eaea-4835-7b1a2015b1d9/original/p0_tile_images-10.jpg?format=webp",

    name: "Basa(Sheelan)-Fillet,Platinum Grade",
    des: "From unpolluted Indian waters,freshly cleaned,creamy..",

    net_tag: "Net wt:",
    net: "500",
    gross_tag: "Gross:",
    gross: "625",
    unit: "gms",
    price_tag: "MRP:",
    cuurency: "₹",
    price: "349",
    strikePrice: "439",
    off: "15",
    off_tag: "%OFF",
},
{
    imgUrl: "https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/48cb7ee3-99f4-d50e-0731-4532daa31cf6/original/Chicken-Tenders-(Boneless)-Hero-Shot.jpg?format=webp",

    name: "Chicken Tenders (Boneless)",
    des: "The Chicken Mini Bites from Licious are finely cut, boneless",

    net_tag: "Net wt:",
    net: "250",
    gross_tag: "Gross:",
    gross: "350",
    unit: "gms",
    price_tag: "MRP:",
    cuurency: "₹",
    price: "279",
    strikePrice: "239",
    off: "15",
    off_tag: "%OFF",
},

];
bonelessdata.forEach(function(e) {
var main = document.createElement("div");
main.setAttribute("class", "main");
var img = document.createElement("img");
img.setAttribute("src", e.imgUrl);
img.setAttribute("class", "image");

var name = document.createElement("h4");
name.innerText = e.name;
var des = document.createElement("p");
des.setAttribute("class", "des");
des.innerText = e.des;
var wgt = document.createElement("div");
wgt.setAttribute("class", "wgt");
var net_tag = document.createElement("h6");
net_tag.innerText = e.net_tag;

var net = document.createElement("h6");
net.innerText = e.net;
var n_gm = document.createElement("h6");
n_gm.innerText = e.unit;

var gross_tag = document.createElement("h6");
gross_tag.innerText = e.gross_tag;
var gross = document.createElement("h6");
gross.innerText = e.gross;
var g_gm = document.createElement("h6");
g_gm.innerText = e.unit;

var hold = document.createElement("div");
hold.setAttribute("class", "hold");

var pri = document.createElement("div");
pri.setAttribute("class", "pri");
var price_tag = document.createElement("h5");
price_tag.innerText = e.price_tag;
var cuurency = document.createElement("h5");
cuurency.innerText = e.cuurency;
var price = document.createElement("h5");
price.innerText = e.price;
var strikePrice = document.createElement("strike");
strikePrice.innerText = e.strikePrice;

var btndiv = document.createElement("div");
btndiv.setAttribute("class", "btndiv");
var addCart = document.createElement("button");
addCart.setAttribute("class", "addcartbtn");
addCart.innerHTML = "Add to Cart";
// addCart.addEventListener("click", function () {
//   addToCart(e);
wgt.append(net_tag, net, n_gm, gross_tag, gross, g_gm);
pri.append(price_tag, cuurency, price, strikePrice, addCart);
main.append(img, name, des, wgt, pri);
document.querySelector("#container").append(main);
});