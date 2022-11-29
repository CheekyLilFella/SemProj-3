// Depth Counter
// When the user scrolls the page, execute myFunction
 window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.height = scrolled + "%";
    depth.innerHTML = "depth: " + Math.round(scrolled/100*10911);
};


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

function SwitchOff() {
  torchToggle();
  torchInput.checked = false;
}