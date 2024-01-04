

var nav_links = document.querySelectorAll('.nav-link');

nav_links.forEach((link) => {
  link.addEventListener('click', () => {
    nav_links.forEach((link)=>{
      link.classList.remove('active')
      nav.removeClass('active')
    })
    link.classList.add('active');
  });
});

// ==== navbar toggler ======
let open_nav = $('#open');
let close_nav = $('#close');
let nav = $('.navbar-collapse');

open_nav.click(function () {
    nav.addClass("active");
})

close_nav.click(function () {
    nav.removeClass('active')//jq
    // nav.classList.remove('active')//js
});

$(document).on('click' , (e)=>{
  !$(e.target).closest('.navbar').length ? nav.removeClass("active") : '';
})

function changeBG() {
  let scroll = window.scrollY;
  let isNavTop = scroll < 80;
  let nav = document.getElementById('nav');
  if ( isNavTop) {
    nav.classList.remove('shadow'); 
  } else {
    nav.classList.add('shadow');
  }
}
window.addEventListener('scroll', changeBG);



/*================================================
================== cart ==========================
=================================================*/


let add_btn = document.querySelectorAll('.add-cart');


add_btn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    updateTotalPrice(); 
  });
});


let remove_from_cart = document.querySelectorAll('.remove-from-cart');

remove_from_cart.forEach((btn) => {
  let grandParent = btn.parentNode.parentNode.parentNode.parentNode;
  btn.addEventListener('click', () => {
    grandParent.remove();
    updateTotalPrice(); 
  });
});



$(".flatpickr-input").flatpickr();


new WOW().init();








const Body = document.getElementsByTagName('body')[0];
let rtlValue = false;
if (Body.style.direction = 'rtl') {
  rtlValue = true;
}


$('.articles .owl-carousel.article').owlCarousel({
  rtl: rtlValue,
  loop:true,
  center:true,
  margin:10,
  nav:true,
  dots: true,
  mouseDrag:false,
  navText:["<i class='fa-solid fa-arrow-right mx-2'></i>", "<i class='fa-solid fa-arrow-left mx-2'></i>"],
  autoplay:false,
  autoplayTimeout:3500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

$('.rates .owl-carousel').owlCarousel({
  rtl: rtlValue,
  loop:true,
  // center: true,
  margin:35,
  nav:false,
  dots: true,
  autoplay:false,
  autoplayTimeout:3500,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2,
      },
      1000:{
          items:3
      }
  }
})

$('.meetings .owl-carousel').owlCarousel({
  rtl: rtlValue,
  loop:true,
  center: true,
  margin:10,
  navText:["<i class='fa-solid fa-arrow-right mx-2'></i>", "<i class='fa-solid fa-arrow-left mx-2'></i>"],
  nav:true,
  dots: false,
  autoplay:false,
  autoplayTimeout:3500,
  responsive:{
      0:{
        stagePadding: 50,
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:5
      }
  }
})

$('.courses .owl-carousel').owlCarousel({
  rtl: rtlValue,
  // loop:true,
  // center: true,
  margin:10,
  navText:["<i class='fa-solid fa-arrow-right mx-2'></i>", "<i class='fa-solid fa-arrow-left mx-2'></i>"],
  nav:true,
  dots: false,
  autoplay:false,
  autoplayTimeout:3500,
  responsive:{
      0:{
        // stagePadding: 30,
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:4
      }
  }
})



/*================================================
=========== counter in statics section ===========
=================================================*/

let counter_cont = document.querySelectorAll(".counter");

counter_cont.forEach((count)=>{
  let count_main = count.getAttribute('value');
  let counter = 0;

  function incCounter(){
      counter++;
      if(counter == count_main){
          clearInterval(stop);
      }
      count.innerHTML = counter 
  }

var stop = setInterval(incCounter , 30);
})

/*===========================================================*/


function updateTotalPrice() {
  let item_price = document.querySelectorAll('.item-price');
  let total_price = document.querySelector('.total-price');
  let total = 0;

  item_price.forEach((item) => {
    let item_val = parseFloat(item.getAttribute('value'));
    total += item_val;
  });

  total_price.textContent = total.toFixed(2); 
  total_price.setAttribute('value', total);
}

updateTotalPrice();





$(".book").mouseenter(function(){
  $(this).parent(".book-wrap").addClass("rotate");
});

$(".book").mouseleave(function(){
  $(this).parent(".book-wrap").removeClass("rotate");
});

$(".book").click(function(){
  $(this).parent(".book-wrap").addClass("flip");
});

$(".book-back").click(function(){
  $(this).parent(".book-wrap").removeClass("flip");
});


/*==================================*/

let array_books_img = [
  {
    img: 'images/icons/flower.png',
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat',
  },
  {
    img: 'images/icons/flower1.png',
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat',
  },
  {
    img: 'images/icons/flower2.png',
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat',
  },
  {
    img: 'images/icons/flower3.png',
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat',
  },
  {
    img: 'images/icons/flower4.png',
    size: 'cover',
    position: 'center',
    repeat: 'no-repeat',
  }

]

console.log(array_books_img.length);


  let books_img = document.querySelectorAll('.statics .icon');

books_img.forEach((img, index) => {
  if (index < array_books_img.length) {
    img.style.background = `url('${array_books_img[index].img}')`;
    img.style.backgroundPosition = array_books_img[index].position;
    img.style.backgroundRepeat = array_books_img[index].repeat;
    img.style.backgroundSize = array_books_img[index].size;
  }
});




