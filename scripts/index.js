//store the products array in localstorage as "data"
document.querySelector("#product_form").addEventListener("submit", myfunction);
var userdata = [];
function myfunction() {
    event.preventDefault();
    var brand_name = document.querySelector("#product_brand").value;
    var product_name = document.querySelector("#product_name").value;
    var product_price = document.querySelector("#product_price").value;
    var img_link = document.querySelector("#product_image").value;

    var data_obj = {
        Itembrand: brand_name,
        Itemname: product_name,
        Itemprice: product_price,
        Itemimglimk: img_link,
    }
    userdata.push(data_obj);
    console.log(userdata);
    localStorage.setItem("Data", JSON.stringify(userdata));

}

