
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
  1: ['Product 1', 'Product 1 is great', 'almand.jpg'],
  2: ['Product 2', 'Product 2 is awesome', 'choco.jpeg'],
  3: ['Product 3', 'Product 3 is fantastic', 'product3.jpg'],
  4: ['Product 4', 'Product 4 is superb', 'product4.jpg'],
  5: ['Product 5', 'Product 5 is excellent', 'product5.jpg'],
};

const productsContainer = document.querySelector('.products2-container');

Object.values(products).forEach(product => {
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
  icon.classList.add('bx', 'bx-right-arrow-alt'); 
  
  const icon1 = document.createElement('i');
  icon1.classList.add('bx', 'bx-heart'); 

  const icon2 = document.createElement('i');
  icon2.classList.add('bx', 'bx-cart-alt'); 

  box.appendChild(img);
  box.appendChild(h2);
  box.appendChild(span);
  box.appendChild(icon); 
  box.appendChild(icon1); 
  box.appendChild(icon2); 
  productsContainer.appendChild(box);
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
