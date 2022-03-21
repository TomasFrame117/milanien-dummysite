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
    return `
        
        <div class="navBarStyle">
            <button class="navBarButton" onclick="changePage('home')">Home</button>
            <button class="navBarButton" onclick="changePage('info')">About us</button>
            <button class="navBarButton" onclick="changePage('store')">Shop</button>
        </div>
        <div class="checkout">
            <button class="cartBotton" onclick="changePage('cart')">Cart (${model.totalitems}) ${model.totalprice}kr</button>
        </div>`
}

function changePage(page){
    model.currentpage = page;
    updateView();
}
updateView();
function updateView(){
    const page = model.currentpage;
    if (page=='home') viewHomePage();
    if (page=='info') viewAboutusPage();
    if (page=='store') viewShopPage();
    if (page=='cart') viewCartPage();
}

function viewHomePage(){
     html=`<h2>Welcome to Milanien! Calmest styles in fashion!</h2>
     `
    html += `<div class="slideShowBox">
                <img class="slideShowPic" name="slide" src="/bilder/IMG_2709 (1).jpg" style="width:100%"/>
            </div>`
    html += `<div class="catagoryBox">
                <div class="genderBox">
                    <H1 class="categoryName" style="bold" onclick="viewShopPage('him')">him<h1>
                    <img class="imggenderbox" src="/bilder/Promo/him.png" alt="card img cap"/>
                </div>
                <div class="genderbox">
                    <H1 class="categoryName" style="bold" onclick="viewShopPage('her')">Her<h1>
                    <img class="imggenderbox" src="/bilder/Promo/milanienher-removebg-preview.png"  alt="card img cap"/>
                </div>
                
            </div>`
    html += `<footer class="copyrught">copypright© 2022 MelanienGroup</footer>`

     model.view = html;
    show();
}


function viewAboutusPage(){
    html=`<h1>hi</h1>`

    html +=`<div> notat: jobb med kategorier og oppdatere modellen med flere gjenstander. finn ut av metoden du vil bruke på gender.</div>`

    model.view = html;
    show();
}

function viewShopPage(gender){
    let html = `<div class="productGrid">`;
    for(let i = 0; i < model.products.length; i++){
       
            //modulus
            html += `
             <div class="productBox">
                ${model.products[i].name} <br>
                <img src="${model.products[i].image}" style="width:100%"/>
                price: ${model.products[i].price}kr <button onclick="addToCart(${i})"> Buy</button></br>
                <div> instock: ${model.products[i].instock}</div>
            </div>     <hr>`
    }
    html += `</div>`;
    model.view = html;
    show();
}

function viewCartPage(){
    html =`<h2>Shoping Cart</h2>
    
    `
    model.totalprice = 0;

    for(let i = 0; i<model.shopingcart.length; i++) {
        html +=` <br>item: ${model.shopingcart[i].name}<br/>
        price: ${model.shopingcart[i].price}
        
        `
        model.totalprice += model.shopingcart[i].price;
    }

    html +=`<hr/>total items: ${model.totalitems} <span> total price: ${model.totalprice}kr</span><br/>`

    html += `<hr/>
            <button onclick="GoToCheckOut()">Check Out</button>`

    model.view= html;
    show();
}