console.log("jeg er i increaseDecreaseFont")

const ptag = document.querySelector(".first")
console.log(ptag)

let fontsize = 10;

function increaseFont(e){
    console.log("increase font funktion")
    console.log(e) //udskriver pointerevent
    fontsize++;
    ptag.style.fontSize = fontsize + "px"
}
const pbIncrease = document.querySelector(".pbIncrease")
pbIncrease.addEventListener('click', increaseFont)


function decreaseFont(e){
    console.log("decrease font funktion")
    console.log(e)
    fontsize--;
    ptag.style.fontSize = fontsize + "px"
}
const pbDecrease = document.querySelector(".pbDecrease")
pbDecrease.addEventListener('click', decreaseFont)

function goBackFont(e){
    console.log("font tilbage til normal funktion")
    console.log(e)
    ptag.style.fontSize = "10px"
}
const body = document.querySelector("body")
body.addEventListener('keydown', goBackFont) //husk ingen parantes

function font(e){
    if(e.key === 'Escape'){
        ptag.style.fontSize = "10px"
    }
    fontsize = 10;
}
//document.addEventListener('keydown', e => font(e)) //anonym funktion, hvorfor, når det nedenunder virker?
document.addEventListener('keydown', font) //brug document. her hvis det ikke er et bestemt tag man bruger
