var shopping_cart = document.querySelector('.topbar-shoppingcart');
var cart_detail = document.querySelector('.shoppingcart-detail');
shopping_cart.onclick = function() {

}

//实现购物车细节的效果
var shopping_cart_detail = document.querySelector('.shopping-cart-detail');
var topbar_shoppingcart = document.querySelector('.topbar-shoppingcart');

topbar_shoppingcart.addEventListener('mousemove', function(e) {
    shopping_cart_detail.style.display = 'block';
    console.log(this.offsetLeft);
    console.log(this.style.width);
    shopping_cart_detail.style.left = (this.offsetLeft).toString() + 'px';
    console.log('test1');
})

topbar_shoppingcart.addEventListener('mouseout', function(e) {
    shopping_cart_detail.style.display = 'none';
    console.log('test2');
})

//实现图片轮播效果，网上抠的代码
var swiper = new Swiper(".site-show", {
    slidesPerView: 1,
    spaceBetween: 30,
    keyboard: {
        enabled: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});