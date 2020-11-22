//SCROLL FADE ANIMATION
$(document).ready(function(){
	$(window).scroll(function(){
		$('.heading').css("opacity", 1 -
			$(window).scrollTop()/400)
	})
})


// FIND OUT WHAT THIS DOES
// var windowWidth = $(window).width();

// $("#nav-toggle").click(function () {
//     $("#nav ul").slideToggle();
//     $("#nav ul").toggleClass("open");
// });

// $(window).resize(function () {
//     windowWidth = $(window).width();
//     if (windowWidth > 767) {
//         if ($("#nav ul").is(":hidden")) {
//             $("#nav ul").css("display","block");
//         }
//     }
//     else {
//         $("#nav ul").css("display","none");
//     }
// });

// HIDE OR SHOW MINI NAV BAR
function myFunction() {
  var checkBox = document.getElementById("check");
  var mini_nav = document.getElementById("small_nav_id");
  
  if (checkBox.checked == true){
    $(mini_nav).addClass('show');
    setTimeout(function() {
      $(mini_nav).removeClass('show');
    }, 1000);
    setTimeout(function() {
      mini_nav.style.left = 0;
    }, 1000);
  }else{
    $(mini_nav).addClass('close');
    setTimeout(function() {
      $(mini_nav).removeClass('close');
    }, 1000);
    setTimeout(function() {
      mini_nav.style.left = "100%";
    }, 1000);
  }
}

// BURGER ICON ANIMATION
$(document).ready(function(){
  $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
    $(this).toggleClass('open');
  });
});


// TYPING ANIMATION
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["designer", "developer", "student", "tech enthusiast", "stylist"];
const typingDelay = 80;
const erasingDelay = 50;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

function transitionFunc(element){
  element.href.heading()
}