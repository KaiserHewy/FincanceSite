const openMenuOne = document.getElementById('menu-1');
const openMenuTwo = document.getElementById('menu-2');
const openMenuThree = document.getElementById('menu-3');
const clickAwayTrigger = document.querySelector('.clickSpace');
const dropdownAnimation = document.querySelectorAll(".dropdown-menu");
const backgroundMask = document.querySelector('.background-mask')


// Menu 1
const menuOneButton = document.getElementById('menu-1-button');

const setMenuOne = () => {  
    console.log('click');
    openMenuOne.classList.add('dropdown-menu-display');
    openMenuTwo.classList.remove('dropdown-menu-display');
    openMenuThree.classList.remove('dropdown-menu-display');

    backgroundMask.classList.add('background-mask-show');
     
}

// Menu 2
const menuTwoButton = document.getElementById('menu-2-button');

const setMenuTwo = () => {
    console.log('click');
    openMenuOne.classList.remove('dropdown-menu-display');
    openMenuTwo.classList.add('dropdown-menu-display');
    openMenuThree.classList.remove('dropdown-menu-display');  
    backgroundMask.classList.add('background-mask-show');
}

// Menu 3
const menuThreeButton = document.getElementById('menu-3-button');

const setMenuThree = () => {
    openMenuOne.classList.remove('dropdown-menu-display');
    openMenuTwo.classList.remove('dropdown-menu-display');
    openMenuThree.classList.add('dropdown-menu-display');
    backgroundMask.classList.add('background-mask-show');
}



const setClickClose = () => {
    console.log('click');
    for (let i = 0; i < dropdownAnimation.length; i++) {
        dropdownAnimation[i].classList.remove('dropdown-menu-display')}
        backgroundMask.classList.remove('background-mask-show');
}

// Event Listeners
menuOneButton.addEventListener('click', setMenuOne);
menuTwoButton.addEventListener('click', setMenuTwo);
menuThreeButton.addEventListener('click', setMenuThree);
clickAwayTrigger.addEventListener('click', setClickClose);



// Side Menu

const openSideMenu = document.getElementById('side-menu');

// Side Menu Open
const burgerButton = document.getElementById('menu-trigger');

const setSideMenu = () => {
    console.log('click');
    openSideMenu.classList.toggle('show-menu');
    openMenuOne.classList.remove('dropdown-menu-display');
    openMenuTwo.classList.remove('dropdown-menu-display');
    openMenuThree.classList.remove('dropdown-menu-display');
}

// Burger Close
const burgerCloseButton = document.getElementById('menu-close');

// Event Listeners
burgerButton.addEventListener('click', setSideMenu);
burgerCloseButton.addEventListener('click', setSideMenu);


// Search Bar
const navItems = document.querySelector('.nav')
const openSearchbar = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-icon')
const closeBtn = document.querySelector('.close-icon')

const setSearchBar = () => {
    console.log('click');
    navItems.classList.toggle('nav-hide');
    searchBtn.classList.toggle('nav-hide');
    openSearchbar.classList.toggle('search-show');
    closeBtn.classList.toggle('search-show');
}



searchBtn.addEventListener('click', setSearchBar);
closeBtn.addEventListener('click', setSearchBar);



// IMAGE SWIPE

//   <!-- Initialize Swiper -->
  
var swiper = new Swiper(".mySwiper", {
    watchSlidesProgress: true,
    slidesPerView: 1,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
      },
  });

// SWIPER REMOVE BRIEF APPEARANCE OF HIDDEN CONTENT ON LOAD

const swiperWrapper = document.querySelector('swiper-wrapper');
const wwdContent1 = document.querySelector('.wwd-content-container-1');
const wwdContent2 = document.querySelector('.wwd-content-container-2');
const wwdContent3 = document.querySelector('.wwd-content-container-3');
const swiperSlide1 = document.getElementById('slideOne');
const swiperSlide2 = document.getElementById('slideTwo');
const swiperSlide3 = document.getElementById('slideThree');

window.onload = () => {
if (swiperSlide1.classList.contains('swiper-slide-fully-visible')) {
    wwdContent1.classList.remove('wwd-content-hide');
    wwdContent1.classList.add('wwd-content-show');
    wwdContent2.classList.add('wwd-content-hide');
    wwdContent3.classList.add('wwd-content-hide');
} 
   
if (swiperSlide2.classList.contains('swiper-slide-fully-visible')) {
    wwdContent2.classList.add('wwd-content-show');

    wwdContent1.classList.add('wwd-content-hide');
    wwdContent2.classList.remove('wwd-content-hide');
    wwdContent3.classList.add('wwd-content-hide');
} 
   
if (swiperSlide3.classList.contains('swiper-slide-fully-visible')) {
    wwdContent3.classList.add('wwd-content-show');
    wwdContent1.classList.add('wwd-content-hide');
    wwdContent2.classList.add('wwd-content-hide');
    wwdContent3.classList.remove('wwd-content-hide');
} 
}

// SWIPER CHANGE TEXT

let swiperArray = document.getElementsByClassName('swiper-slide');
for(let i = 0; i<swiperArray.length; i++){
   clickAwayTrigger.addEventListener('mousemove', () => {
    if (swiperSlide1.classList.contains('swiper-slide-fully-visible')) {
        wwdContent1.classList.remove('wwd-content-show');
        wwdContent2.classList.remove('wwd-content-show');
        wwdContent3.classList.remove('wwd-content-show');
        
        wwdContent1.classList.remove('wwd-content-hide');
        wwdContent2.classList.add('wwd-content-hide');
        wwdContent3.classList.add('wwd-content-hide');
    } 
       
    if (swiperSlide2.classList.contains('swiper-slide-fully-visible')) {
        wwdContent1.classList.remove('wwd-content-show');
        wwdContent2.classList.add('wwd-content-show');
        wwdContent3.classList.remove('wwd-content-show');

        wwdContent1.classList.add('wwd-content-hide');
        wwdContent2.classList.remove('wwd-content-hide');
        wwdContent3.classList.add('wwd-content-hide');
    } 
       
    if (swiperSlide3.classList.contains('swiper-slide-fully-visible')) {
        wwdContent1.classList.remove('wwd-content-show');
        wwdContent2.classList.remove('wwd-content-show');
        wwdContent3.classList.add('wwd-content-show');
        
        wwdContent1.classList.add('wwd-content-hide');
        wwdContent2.classList.add('wwd-content-hide');
        wwdContent3.classList.remove('wwd-content-hide');
    } 
   });
}


// AUTO SCROLL SLIDER
var swiperAuto = new Swiper(".mySwiperAuto", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });