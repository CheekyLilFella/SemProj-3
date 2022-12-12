// Depth Counter
// When the user scrolls the page, execute myFunction
 window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
    depth.innerHTML = "Dybde: " + Math.round(scrolled/100*10984) + "m";
};


// Billede skifte af himlen
function titelTextFunction() {
    var gennemsigtighed = $(".top").css("opacity");
    if(gennemsigtighed < 0.5) {
    $(".titelTekst").css('color', 'white');
    } else {
        $(".titelTekst").css('color', 'black');
    };
};

$(document).ready(function() {
    setInterval("titelTextFunction()", 500);
});


// Flashlight Mouse Pointer
function update(e) {
    var x = e.clientX || e.touches[0].clientX
    var y = e.clientY || e.touches[0].clientY
  
    document.documentElement.style.setProperty('--cursorX', x + 'px')
    document.documentElement.style.setProperty('--cursorY', y + 'px')
}
  
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)


//En switch der skifter om lommelygten er tændt eller slukket
const torchInput = document.getElementById("torch");
torchInput.addEventListener("input", torchToggle);

function torchToggle() {
  document.documentElement.classList.toggle("torch", torchInput.checked);

  if(torchInput.checked == true) {
    $(".mid").css("background-color", "#eee");
  } else {
    $(".mid").css("background-color", "#eee");
  }
}

torchToggle();


//Slukker lygten automatisk når musen enter "pre-black" div
const preBlackSwitch1 = document.getElementById("pre-black1");
preBlackSwitch1.addEventListener("mouseenter", SwitchOff);
const preBlackSwitch2 = document.getElementById("pre-black2");
preBlackSwitch2.addEventListener("mouseenter", SwitchOff);

const preBlackSwitch3 = document.getElementById("pre-black3");
preBlackSwitch3.addEventListener("mouseenter", SwitchOn);
const preBlackSwitch4 = document.getElementById("pre-black4");
preBlackSwitch4.addEventListener("mouseenter", SwitchOn);

const preBlackSwitchOffHavMørke = document.getElementById("switchOffFailSafe2");
preBlackSwitchOffHavMørke.addEventListener("mouseleave", SwitchOff);
const failSafeSwitchOff = document.getElementById("switchOffFailSafe");
failSafeSwitchOff.addEventListener("mouseleave", SwitchOff);

function SwitchOff() {
  torchToggle();
  torchInput.checked = false;
}

function SwitchOn() {
  torchToggle();
  torchInput.checked = true;
}