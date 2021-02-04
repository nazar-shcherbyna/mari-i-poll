const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

let map;

function initMap() {
    const myLatLng = { 
        lat: 47.1286361736067, 
        lng: 37.55897540422409 
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: myLatLng,
    });
    var iconBase = 'img/';
    var marker = new google.maps.Marker({
        title: "Mari I Poll",
        position: myLatLng,
        map: map,
        icon: iconBase + 'marker-gmaps.png'
    });
}

document.querySelector('.humburger').addEventListener('click', function(e) {
    e.preventDefault();
    if (this.classList.contains('is-active')) {
        this.classList.remove('is-active');
        document.querySelector('#menu').classList.remove('nav-active');
        document.querySelector('.mip__hamburger').classList.remove('body-active');
    }
    else {
        this.classList.add('is-active');
        document.querySelector('#menu').classList.add('nav-active');
        document.querySelector('.mip__hamburger').classList.add('body-active');
    }
})

let close = document.getElementsByClassName('hum-link');

function closeMenu(){
    document.querySelector('.humburger').click();   
}

// work with logo-name

let mipName = document.querySelector('.mip-name');
let mipLittleName = document.querySelector('.mip__name');
let mipHumName = document.querySelector('.mip__logo--ham');

mipName.addEventListener('click', () => {
  console.log(mipName.getBoundingClientRect().bottom)
})

document.addEventListener('scroll', function showLittleName() {
  if (mipName.getBoundingClientRect().bottom <= 20) {
    mipLittleName.classList.add('show');
  }
  if (mipName.getBoundingClientRect().bottom > 20) {
    mipLittleName.classList.remove('show');
  }
})

document.addEventListener('scroll', function showLittleName() {
  if (mipName.getBoundingClientRect().bottom <= 20) {
    mipHumName.classList.add('show');
  }
  if (mipName.getBoundingClientRect().bottom > 20) {
    mipHumName.classList.remove('show');
  }
}) 
// function showName(elem, showElem) {
//     if (elem.getBoundingClientRect().bottom <= 20) {
//       showElem.classList.add('show');
//     }
//     if (elem.getBoundingClientRect().bottom > 20) {
//       showElem.classList.remove('show');
//     }
// };

var top = mipName.getBoundingClientRect().top + document.body.scrollTop;

console.log(top)