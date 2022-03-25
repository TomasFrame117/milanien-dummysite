show();
function show(){
    let html = '';

    html += `
        <div class="navBarStyle"> ${navBar()}</div> <hr/>
        ${model.view}
    `
    webSite.innerHTML = html;

    html+=`<div class="navBarStyle"> ${footerBar()}</div>`
}

function footerBar() {

    return`<footer class="text-center text-lg-start border border-black mt-xl-5 pt4">
               
    <div class="text-center p-3 border-top border-white">
        © 2022 Copyright: MelanienGroup As This site is just a dummy and most not be mistaken for a real web shop!
        <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
    </div>

</footer>`

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
        </div>

        `
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
                <img class="slideShowPic" src="https://github.com/TomasFrame117/milanien-dummysite/blob/main/bilder/Promo/UP.gif?raw=true" name="slide" style="width:100%"/>
            </div>`
    html += `<div class="catagoryBox">
                <div class="genderBox">
                    <H1 class="categoryName" style="bold" onclick="viewShopPage('him')">him<h1>
                    <img class="imggenderbox" src="https://github.com/TomasFrame117/milanien-dummysite/blob/main/bilder/Promo/him.png?raw=true" alt="card img cap"/>
                </div>
                <div class="genderbox">
                    <H1 class="categoryName" style="bold" onclick="viewShopPage('her')">Her<h1>
                    <img class="imggenderbox" src="https://raw.githubusercontent.com/TomasFrame117/milanien-dummysite/main/bilder/Promo/her2promo.webp"  alt="card img cap"/>
                </div>
                
            </div>`

     model.view = html;
    show();
}


function viewAboutusPage(){
    html=`<h1>hi</h1>`

    html +=`<div class="container-fluid p-4 text-black text-center">
    <h1>Have a Milanien Day</h1>
    <img src="https://github.com/TomasFrame117/milanien-dummysite/blob/main/bilder/Promo/UP2.gif?raw=true" style="width:70%"/>
  </div>
    
  <div class="container mt-5">
    <div class="row">
      <div class="col-sm-4">
        <h3>We are Milanien</h3>
        <p>Hello Everyone!</p>
        <p>We are a small Scandinavian start-up from the heart of Porsgrunn in Norway. We are passionate about developing a quality brand at reasonable prices.</p>
      </div>
      <div class="col-sm-4">
        <h3>Why we started Milanien</h3>
        <p>Our goal is simple</p>
        <p>We want to inspire you to enjoy the little things life have to offer. We wanted something that can do that. And thats what we aim for.</p>
      </div>
      <div class="col-sm-4">
        <h3>What it means</h3>        
        <p>"A Milanien a day Keeps the hunhappiness away."</p>
        <p>Milanien has a bigger meaning for us. The word itself translate to: "everything good in the world". Something we feel is important now a days.</p>
      </div>
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

function viewShopPage(gender){
    let html = `<div class="product">
                    <div class="productcard">`;
    for(let i = 0; i < model.products.length; i++){
       
            //modulus
            html += `<div class="productBox">
                        <div class="productBoximg">
                            <img class="productBoximg" src="${model.products[i].image}"/>
                        </div> <hr/>
                        <div Class="productInfo">
                            ${model.products[i].name} <br>
                            <tt>price: ${model.products[i].price}kr<tt> <button onclick="addToCart(${i})"> Buy</button></br>
                            <tt> instock: ${model.products[i].instock}</tt>
                        </div>
                    </div>`
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
    
            html += `<footer class="text-center text-lg-start border border-black mt-xl-5 pt4">
               
                        <div class="text-center p-3 border-top border-white">
                            © 2022 Copyright: MelanienGroup As This site is just a dummy and most not be mistaken for a real web shop!
                            <a class="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
                        </div>

                    </footer>`

    model.view= html;
    show();
}