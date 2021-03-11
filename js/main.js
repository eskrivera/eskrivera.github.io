// intro-title animation  
var textWrapper = document.querySelector('.loading-screen');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false}).add({
     targets: '',
     translateY: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeOutExpo",
     duration: 100,
     delay: function(el, i) {
     return 100 + 30 * i;
     } })

// hero-title animation
var textWrapper = document.querySelector('.hero-title');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false}).add({
     targets: '.hero-title .letter',
     translateX: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeOutExpo",
     duration: 1500,
     delay: function(el, i) {
     return 2000 + 30 * i;
     }
});

// hero-subtitle animation
var textWrapper = document.querySelector('.hero-subtitle');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false}).add({
     targets: '.hero-subtitle',
     translateX: [40,0],
     translateZ: 0,
     opacity: [0,1],
     easing: "easeInExpo",
     duration: 1500,
     delay: function(el, i) {
     return 2000 + 30 * i;
     }
});

// reveling other elements
TweenMax.to(".loading-screen", 2.2, {
     delay: 1,
     top: "-200%",
     ease: Expo.easeInOut
});

TweenMax.from(".aboutMe", 2, {
     delay: 3.2,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.from(".contact", 2, {
     delay: 3.5,
     y: 20,
     opacity: 0,
     ease: Expo.easeInOut
});

TweenMax.from(".project", 2, {
     delay: 3.8,
     y: 10,
     opacity: 0,
     ease: Expo.easeInOut
});
