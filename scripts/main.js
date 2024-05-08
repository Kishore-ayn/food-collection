import aboutProducts from "../data/aboutProducts.js";
import shopProducts from "../data/shopProducts.js";

let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  header.classList.toggle('active', window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle('active');
}
window.onscroll = () => {
  navbar.classList.remove('active');
}

const homeSection = 
    `
    <div class="home-text">
      <span>Welcome To Our</span>
      <h1>Healthy Food <br>Collection</h1>
      <p>Welcome to Foodies, your one-stop destination for delicious, wholesome vegetable-based meals. Explore our range of fresh, sustainable dishes made with love and care. Join us in embracing a healthier lifestyle while indulging in the vibrant flavors of nature.</p>
      <a href="#shop" class="btn">Our Menu</a>
    </div>
    <div class="home-img">
      <img src="images/salad.png" alt="">
    </div>
    `
document.querySelector('#home').innerHTML = homeSection; 


let aboutSection = '';

aboutProducts.forEach((product) => {
  aboutSection += 
  `
    <div class="about-box">
        <div class="box-img">
          <img src="${product.image}" alt="">
        </div>
        <h3>${product.name}</h3>
        <h2>$${product.priceCents}</h2>
      </div>
  `
});

document.querySelector('.js-about-container').innerHTML = aboutSection;

let shopSection = '';

shopProducts.forEach((product) => {
  shopSection +=
  `
  <div class="shop-box">
    <div class="shop-img">
      <img src="${product.image}" alt="">
    </div>
    <h3>${product.name}</h3>
    <h2>$${product.priceCents}</h2>
    <i class='bx bx-cart-add'></i>
  </div>
  `
})

document.querySelector('.js-shop-container').innerHTML = shopSection;




    

 