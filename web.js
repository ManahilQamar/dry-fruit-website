
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






//............ swiper.................//
var swiper = new Swiper(".homes", {
  spaceBetween: 30,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

