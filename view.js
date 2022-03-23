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
                <img class="slideShowPic" url="https://github.com/TomasFrame117/milanien-dummysite/blob/main/bilder/Promo/UP.gif?raw=true" name="slide" style="width:100%"/>
            </div>`
    html += `<div class="catagoryBox">
                <div class="genderBox">
                    <H1 class="categoryName" style="bold" onclick="viewShopPage('him')">him<h1>
                    <img class="imggenderbox" src="/bilder/Promo/him.png" alt="card img cap"/>
                </div>
                <div class="genderbox">
                    <H1 class="categoryName" style="bold" onclick="viewShopPage('her')">Her<h1>
                    <img class="imggenderbox" src="/bilder/Promo/her1promo.webp"  alt="card img cap"/>
                </div>
                
            </div>`
    html += `<footer class="text-center text-lg-start border border-black mt-xl-5 pt4">
               
                <div class="text-center p-3 border-top border-white">
      © 2022 Copyright: MelanienGroup As
      <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>

    </footer>`

     model.view = html;
    show();
}


function viewAboutusPage(){
    html=`<h1>hi</h1>`

    html +=`<div class="container-fluid p-5 bg-primary text-white text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p> 
  </div>
    
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4">
        <h3>Column 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div class="col-sm-4">
        <h3>Column 2</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
      <div class="col-sm-4">
        <h3>Column 3</h3>        
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
      </div>
    </div>
  </div>`

    model.view = html;
    show();
}

function viewShopPage(gender){
    let html = `<div class="product">
                    <div class="productcard">`;
    for(let i = 0; i < model.products.length; i++){
       
            //modulus
            html += `
             <div class="productBox">
                <div class="productBoximg">
                    <img class="productBoximg" src="${model.products[i].image}"/>
                </div> <hr/>
                <div Class="productInfo">
                    ${model.products[i].name} <br>
                    <tt>price: ${model.products[i].price}kr<tt> <button onclick="addToCart(${i})"> Buy</button></br>
                    <tt> instock: ${model.products[i].instock}</tt>
                </div>
            </div> </hr>`
    }
    html += `       </div>
                </div>`;
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