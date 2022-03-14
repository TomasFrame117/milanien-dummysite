function addToCart(i){
    if(model.products[i].instock == 0) alert('not in stock');
    else{
        model.products[i].instock --;
        model.totalitems ++;
        model.shopingcart.push(model.products[i].name,
                                model.products[i].price)
    }
    viewCartPage();
}

// function cangehomepicture() {
//     const image = [
//         'url("/bilder/IMG_2709 (1).jpg" onclick ="viewShop")',
//         'url("/20210307_150214.jpg")',
//     ]

//     const take = document.getElementsByClassName('slideShowBox');
//     const cahngeImg = image[Math.floor(Math.random() * image.length)];
//     take.style.slideShowPic = cahngeImg;
//     take.style.backgroundSize = "contain";
// }
// setInterval(cangehomepicture, 2000)