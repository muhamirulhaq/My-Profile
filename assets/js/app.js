function Wipe(x) {

    let i = 0;
    let isWipe = false;
    
    this.visible = function() {

        hr[x].style.display = "block";

        if(!isWipe) {

            isWipe = true;
            const wipeInterval = setInterval(function() {
                if(i > 100) {
                    clearInterval(wipeInterval);
                    isWipe = false;
                }
                hr[x].style.width = i + "%";
                i+=3;
            },1)
        }

    }

    this.hidden = function() {

        if(!isWipe) {

            isWipe = true;
            const wipeInterval = setInterval(function() {
                if(i < 0) {
                    clearInterval(wipeInterval);
                    hr[x].style.display = "none";
                    isWipe = false;
                }
                hr[x].style.width = i + "%";
                i-=3;
            },1)
        }

    }
}

// Underline Animation

const menu = new Array(3);
const hr = new Array(menu.length);
const wipe = new Array(menu.length);

for(let i = 0; i < menu.length; i++) {
    hr[i] = document.querySelector(".hr" + (i + 1));
    menu[i] = document.querySelector("#menu" + (i + 1)); 
    wipe[i] = new Wipe(i);
}

for(let i = 0; i < menu.length; i++) {
    menu[i].onmouseover = wipe[i].visible;
    menu[i].onmouseout = wipe[i].hidden;
}

// Background Header Animation

const header = document.querySelector("header");

let i = 0;
let isMustBack = false;

let a = i;
let b = 150;

let j = 50;
let isMustBack2 = false;

let c = j;
let d = 0;

setInterval(function() {
    header.style.backgroundImage = "linear-gradient(to bottom right, rgb(" + 100 + ", " + j + ", " + j + "), rgb(" + 20 + ", " + i + ", " + i + "))";
    if(i === b) isMustBack = true;
    else if(i === a) isMustBack = false;
    if(j === d) isMustBack2 = true;
    else if(j === c) isMustBack2 = false;
    i += isMustBack === true ? -1 : 1;
    j -= isMustBack2 === true ? -1 : 1;
},30);

// If Scrolled

const nav = document.querySelector("nav");
const heightNavTop = header.offsetHeight - nav.offsetHeight;

if(document.documentElement.scrollTop >= heightNavTop) nav.style.backgroundColor = "rgba(0, 0, 0, 1)";
else nav.style.backgroundColor = nav.style.backgroundColor = "rgba(0, 0, 0, 0)";

function ifScrolled() {
    let x = 0;
    let y = 0;
    for(let i = 0; i < 1000; i++) {
        y += 0.001;
        if(document.documentElement.scrollTop < heightNavTop * y) {
            nav.style.backgroundColor = "rgba(0, 0, 0, " + x + ")";
            return;
        }
        x = y;
    }
}

document.body.onscroll = ifScrolled;