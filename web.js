
(function() {
window.mc4wp = window.mc4wp || {
listeners: [],
forms: {
on: function(evt, cb) {
window.mc4wp.listeners.push(
{
event   : evt,
callback: cb
}
);
}
}
}
})();


// search............










const categories = {
  1: ['Apple', 'Apple is a good fruit', 'almand.jpg',],
  2: ['Apple', 'Apple is a good fruit', 'choco.jpeg',],
  3: ['Apple', 'Apple is a good fruit', 'date.jpg'],
  4: ['Apple', 'Apple is a good fruit', 'pistachios.jpg'],
  5: ['Apple', 'Apple is a good fruit', 'fig.jpg'],
  
};

const container = document.querySelector('.categories-containers');

Object.values(categories).forEach(product => {
  const box = document.createElement('div');
  box.classList.add('box');

  const img = document.createElement('img');
  img.src = product[2];
  img.alt = product[0];

  const h2 = document.createElement('h2');
  h2.textContent = product[0];

  const span = document.createElement('span');
  span.textContent = product[1];
  const icon = document.createElement('i');
  // icon.classList.add('bx', 'bx-right-arrow-alt'); // This adds the right arrow icon from Boxicons


  box.appendChild(img);
  box.appendChild(h2);
  box.appendChild(span);
  box.appendChild(icon); // Append the icon to the b

  container.appendChild(box);
});



// product............


const products = {
  1: ['100 gm', 'Almond Whole 100GM (کاغذی بادام ثابت )', 'almand.jpg'],
  // Uncomment or add other products as needed
  2: ['200gm', 'Product 2 is awesome', 'choco.jpeg'],
  3: ['200gm', 'Pistachio Roasted 200 GM (پستہ بھنا ہوا)', 'pistachios.jpg'],
  4: ['200gm', 'Anjeer 200GM (انجیر)  ', 'fig.jpg'],
  5: ['200gm', 'Walnut with shill', 'walnut.jpg'],
  6: ['400gm', 'Mix Dry Fruit 200GM (خشک میوہ جات)  ', 'fruit (1).jpeg'],
  7: ['Product 5', 'Product 5 is excellent', 'fig.jpg'],
  8: ['Product 4', 'Product 4 is superb', 'date.jpg'],

};

const productsContainer = document.querySelector('.products2-container');

Object.values(products).forEach(product => {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.position = 'relative'; // Ensure the box has relative positioning

  const img = document.createElement('img');
  img.src = product[2];
  img.alt = product[0];

  const h2 = document.createElement('h2');
  h2.textContent = product[0];

  const h = document.createElement('h');
  h2.textContent = product[0];

  const span = document.createElement('span');
  span.textContent = product[1];

  
  const icon1 = document.createElement('i');
  icon1.classList.add('bx', 'bx-heart');
  icon1.addEventListener('click', function() {
    this.classList.toggle('bx-heart');
    this.classList.toggle('bxs-heart');
  });

  const icon2 = document.createElement('i');
  icon2.classList.add('bx', 'bx-cart-alt');

  const discount = document.createElement('div');
  discount.classList.add('discount');
  discount.textContent = '20% OFF'; // Example static discount text

  const price = document.createElement('div');
  price.classList.add('price');
  price.textContent = 'Rs 3000 PKR '; // Example static price text

  const price2 = document.createElement('div');
  price2.classList.add('price2');
  price2.textContent = 'Rs 2500 PKR '; // Example static price text

  box.appendChild(img);
  box.appendChild(h2);
  box.appendChild(h);
  box.appendChild(span);
  box.appendChild(icon1); 
  box.appendChild(icon2);
  box.appendChild(price)
  box.appendChild(price2)
  box.appendChild(discount); // Add the discount element to the box
  productsContainer.appendChild(box);
});








const customers = {
  1: ['John Doe', 'date.jpg', 'Great service and excellent products!'],
  2: ['Jane Smith', 'date.jpg', 'The best place to buy dry fruits. Highly recommended!'],
  3: ['Alice Johnson', 'date.jpg', 'Amazing quality and fast delivery.'],
};

const customersContainer = document.querySelector('.Customers-container');

Object.values(customers).forEach(customer => {
  const box = document.createElement('div');
  box.classList.add('box');
  box.style.position = 'relative';

  const img = document.createElement('img');
  img.src = customer[1];
  img.alt = customer[0];

  const h2 = document.createElement('h2');
  h2.textContent = customer[0];
  
  const star1 = document.createElement('i');
  star1.classList.add('bx', 'bxs-star');

  const star2 = document.createElement('i');
  star2.classList.add('bx', 'bxs-star');

  const star3 = document.createElement('i');
  star3.classList.add('bx', 'bxs-star');

  const star4 = document.createElement('i');
  star4.classList.add('bx', 'bxs-star-half');


  const span = document.createElement('span');
  span.textContent = customer[2];

  box.appendChild(img);
  box.appendChild(h2);
  box.appendChild(star1);
  box.appendChild(star2);
  box.appendChild(star3);
  box.appendChild(star4);
  box.appendChild(span);
  customersContainer.appendChild(box);
});



//............ swiper.................//
var swiper = new Swiper(".home", {
  spaceBetween: 30,
  centeredSlides: true,
 
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.getElementById('heart-icon').addEventListener('click', function() {
  this.classList.toggle('clicked');
});