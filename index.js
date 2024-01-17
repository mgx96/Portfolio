/*var button = document.querySelector(".shadowBtn");
var timeoutId;
button.addEventListener('mouseenter', function(){
    isMouseInside = true;
   timeoutId = setTimeout(function(){
        button.classList.add("before");
    }, 150);
});

button.addEventListener('mouseleave', function(){
    clearTimeout(timeoutId);
    button.classList.remove("before");
});*/

const navMenu = document.querySelector(".navMenu");
navMenu.addEventListener('click', function() {
    console.log("Clicked!");
    navMenu.classList.toggle("active");
});

