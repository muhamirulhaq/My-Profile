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

const menu = new Array(4);
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

// If Scrolled

const header = document.querySelector("header");
const nav = document.querySelector("nav");

if(document.documentElement.scrollTop >= header.offsetHeight) nav.style.backgroundColor = "rgba(0, 0, 0, 1)";
else nav.style.backgroundColor = nav.style.backgroundColor = "rgba(0, 0, 0, 0)";

function ifScrolled() {
    let x = 0;
    let y = 0;
    for(let i = 0; i < 1000; i++) {
        y += 0.001;
        if(document.documentElement.scrollTop < header.offsetHeight * y) {
            nav.style.backgroundColor = "rgba(0, 0, 0, " + x + ")";
            return;
        }
        x = y;
    }
}

document.body.onscroll = ifScrolled;

// Display Menu Side

const menuLogo = document.querySelector(".menuLogo");
const menuSide = document.querySelector(".menuSide");
let rightStyle = 0-menuSide.offsetWidth;
menuSide.style.right = rightStyle + "px";

let isDisplaying = false;

function displayMenuSide() {
    if(isDisplaying === false) {
        isDisplaying = true;

        menuSide.style.visibility = "visible";
        if(rightStyle <= 0-menuSide.offsetWidth) {
            const sideDisplay = setInterval(function() {
                if(rightStyle > -10) {
                    isDisplaying = false
                    clearInterval(sideDisplay);
                }
                menuSide.style.right = rightStyle + "px";
                rightStyle+=5;
            },1);
        } else {
            const sideHidden = setInterval(function() {
                if(rightStyle <= 0-menuSide.offsetWidth) {
                    isDisplaying = false
                    menuSide.style.visibility = "hidden";
                    clearInterval(sideHidden);
                }
                menuSide.style.right = rightStyle + "px";
                rightStyle-=5;    
            },1);
        }
    } 
};

menuLogo.onclick = displayMenuSide;