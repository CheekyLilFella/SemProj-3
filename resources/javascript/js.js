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
preBlackSwitch1.addEventListener("mouseleave", SwitchOff);

const preBlackSwitch2 = document.getElementById("pre-black2");
preBlackSwitch2.addEventListener("mouseenter", SwitchOff);
preBlackSwitch2.addEventListener("mouseleave", SwitchOff);

const preBlackSwitch3 = document.getElementById("pre-black3");
preBlackSwitch3.addEventListener("mouseenter", SwitchOn);
preBlackSwitch3.addEventListener("mouseleave", SwitchOn);

function SwitchOff() {
  torchToggle();
  torchInput.checked = false;
}

function SwitchOn() {
  torchToggle();
  torchInput.checked = true;
}

function snak() {
  var msg = new SpeechSynthesisUtterance();
  msg.text = "Eiffeltårnet er 300 meter højt. Det blev bygget i 1887.";
  speechSynthesis.speak(msg);
}

//Particle effect
particlesJS('undergang',
  
  {
    "particles": {
      "number": {
        "value": 30,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "top",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "repeat",
      "background_size": "cover"
    }
  }

);