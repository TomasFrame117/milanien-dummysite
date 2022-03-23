function addToCart(i){
    if(model.products[i].instock == 0) alert('not in stock');
    else{
        model.products[i].instock --;
        model.totalitems ++;
        model.shopingcart.push({
            name: model.products[i].name,
            price: model.products[i].price,
            image: model.products[i].image,
            })
    }
    viewCartPage();
}

// function changeimg(){
//     var i = 0;
//      var images = [];
//      var time = 3000;

//     images[0] = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKOD6BR-r0HnTZPMX_2LSzzmj23_1W2WrRrA&usqp=CAU",
//      images[1] = "/bilder/produkter/classic_swedder_unisex_FRONT.png",

//      document.slide.src=images[i];

//      if(i<images.length - 1) {
//          i++;
//      } else {
//          i = 0;
//      }
//     setTimeout("changeimg()",time)
//     viewHomePage();
// }
 
function cangehomepicture() {
      const image = [
         'url("/bilder/Promo/UP1.gif" onclick ="viewShop()")',
          'url("/bilder/Promo/UP.gif")',
     ]

     const take = document.getElementsByName('slide');
      const cahngeImg = image[Math.floor(Math.random() * image.length)];
     take.style.slideShowPic = cahngeImg;
     take.style.backgroundSize = "contain";
  }
  setInterval(cangehomepicture, 4000)