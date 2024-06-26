import aboutProducts from "../data/aboutProducts.js";
import shopProducts from "../data/shopProducts.js";
import customerReviews from "../data/customerReviews.js";
import formatCurrency from "./money.js";

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
    `;
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
        <h2>$${formatCurrency(product.priceCents)}</h2>
      </div>
  `
  document.querySelector('.js-about-container').innerHTML = aboutSection;  
});



let shopSection = '';

shopProducts.forEach((product) => {
  shopSection +=
  `
  <div class="shop-box">
    <div class="shop-img">
      <img src="${product.image}" alt="">
    </div>
    <h3>${product.name}</h3>
    <h2>$${formatCurrency(product.priceCents)}</h2>
    <i class='bx bx-cart-add'></i>
  </div>
  `
  document.querySelector('.js-shop-container').innerHTML = shopSection;
})



let customerSection = '';

customerReviews.forEach((product) => {
  let starsHTML = '';
  const filledStars = Math.floor(product.stars);
  const hasHalfStar = product.stars - filledStars >= 0.5;

  for (let i = 0; i < filledStars; i++) {
    starsHTML += `<i class='bx bxs-star'></i>`;
  }

  if (hasHalfStar) {
    starsHTML += `<i class='bx bxs-star-half'></i>`
  }

  for (let i = filledStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
    starsHTML += '<i class="bx bx-star"></i>';
  }

  customerSection += 
  `
  <div class="box">
    <img src="${product.image}">
    <div class="stars">
      ${starsHTML}
    </div>
    <p>${product.review}</p>
    <h2>${product.name}</h2>
  </div> 
  `
  document.querySelector('.js-customer-container').innerHTML = customerSection;
})

let contactSection = 
  `
  <div class="heading">
    <h2>Contact Us</h2>
    <p>Got questions or feedback? We're here to help! Reach out to us for any inquiries, suggestions, or special requests. Our friendly team is ready to assist you promptly. Whether it's about orders, ingredients, or anything else, don't hesitate to contact us. Your satisfaction is our priority.</p>
  </div>
  <div class="contact-container">
    <div class="contact-info">
      <h2>Get in touch</h2>
      <p>Questions? Feedback? We're here to help! Contact us for assistance, special requests, or to share your thoughts. Reach out today!</p>
      <div class="address">
        <i class='bx bxs-map'><span>VSKP, Andhra Pradesh 530026</span></i>
        <i class='bx bxs-phone'><span>+91 8074134589</span></i>
        <i class='bx bxs-envelope'><span>kishore.ayn@gmail.com</span></i>
      </div>
      <div class="social">
        <a href="#"><i class='bx bxl-facebook'></i></a>
        <a href="#"><i class='bx bxl-twitter'></i></a>
        <a href="#"><i class='bx bxl-instagram'></i></a>
      </div>
    </div>
    <div class="contact-form">
      <form action="">
        <input type="text" placeholder="Name*">
        <input type="text" placeholder="Email*">
        <textarea name="" id="" cols="30" rows="10" placeholder="Message*"></textarea>
        <input type="button" value="submit" class="btn">
      </form>
    </div>
  </div>
  `;

document.querySelector('#contact').innerHTML = contactSection;  






  







    

 