let searchbtn = document.querySelector(".search");

document.querySelector("#searchbtn").onclick = () =>{
    searchbtn.classList.toggle("active");
    shoppingcartbtn.classList.remove("active");
    navbar.classList.remove("active");
};

let shoppingcartbtn = document.querySelector(".shoppingcart");

document.querySelector("#shoppingbtn").onclick = () =>{
    shoppingcartbtn.classList.toggle("active");
    searchbtn.classList.remove("active");
    navbar.classList.remove("active");
};

let navbar = document.querySelector(".navbar");

document.querySelector("#menubtn").onclick = () =>{
    navbar.classList.toggle("active");
    searchbtn.classList.remove("active");
    shoppingcartbtn.classList.remove("active");
};

window.onscroll = () =>{
    searchbtn.classList.remove("active");
    shoppingcartbtn.classList.remove("active");
    navbar.classList.remove("active");
}
var swiper = new Swiper(".productslider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
var swiper = new Swiper(".reviewslider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });