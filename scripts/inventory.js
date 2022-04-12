var user_details = displayStudents(JSON.parse(localStorage.getItem("Data")));

console.log(user_details);

function displayStudents(user_details) {
    console.log(user_details);
    document.querySelector("#products_data").innerText = ""

    user_details.forEach(function (elem) {
        var box = document.createElement("div");

        box.setAttribute("class", "childclass");

        var img = document.createElement("img");
        img.src = elem.Itemimglimk;
        img.setAttribute("class","photos")

        var para = document.createElement("h1");
        para.innerText = elem.Itembrand;

        var name = document.createElement("h3");
        name.innerText = `Item Name : ${elem.Itemname}`;

        var price = document.createElement("h4");
        price.innerText = `Price : ${elem.Itemprice}`;

        box.append(img, para, name, price);
        document.querySelector("#products_data").append(box);
    });
}