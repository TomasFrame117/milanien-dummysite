show();
function show(){
    let html = '';

    html += `
        <div class="navBarStyle"> ${navBar()}</div> <hr/>
        ${model.view}
    `
    webSite.innerHTML = html;
}

function navBar(){
    return `<button onclick="changePage('home')">Home</button>
            <button onclick="changePage('info')">About us</button>
            <button onclick="changePage('store')">Shop</button>
            <button onclick="changePage('cart')">Cart ${model.totalitems}</button>`
}

function changePage(page){
    model.currentpage = page;
    updateView();
}

function updateView(){
    const page = model.currentpage;
    if (page=='home') viewHomePage();
    if (page=='info') viewAboutusPage();
    if (page=='store') viewShopPage();
    if (page=='cart') viewCartPage();
}

function viewHomePage(){
     html=`<h2>Welkome to Milanien! Calmest styles in fashion!</h2>
     `
    html += `<div class="slideShowBox">
                <img class="slideShowPic" src="/bilder/IMG_2709 (1).jpg" style="width:100%"/>
            </div>`
    html += `<div class="catagoryBox">
                <div class="genderBox">
                    <H1 style="bold" onclick="viewShopPage()">him<h1>
                </div>
                <div class="genderbox">
                    <H1 style="bold" onclick="viewShopPage()">Her<h1>
                </div>
            </div>`
    html += `<footer class="copyrught">copypright© 2022 MelanienGroup</footer>`

     model.view = html;
    show();
}

function viewAboutusPage(){
    html=`<h1>hi</h1>`

    model.view = html;
    show();
}

function viewShopPage(){
    let html = ``;
    
    for(let i = 0; i < model.products.length; i++){
        let first = i % 3 == 0 ? 'first' : '';
        html += `
            <div porductBox="cell ${first}">
                 ${model.products[i].name} <br>
                price: ${model.products[i].price}kr <button onclick="addToCart(${i})"> Buy</button></br>
                <tt> instock: ${model.products[i].instock}<tt>
                <hr>`
    }
    model.view = html;
    show();
}

function viewCartPage(){
    html =`<h2>Shoping Cart</h2>
    
    `
    for(let i = 0; i<model.shopingcart.length; i++) {
        html=` item: ${model.shopingcart[i]}<br/>
        `
    }

    html +=`<hr/>total items: ${model.totalitems} <span> total price: ${model.totalprice}kr</span><br/>`

    html += `<hr/>
            <button onclick="GoToCheckOut()">Check Out</button>`

    model.view= html;
    show();
}