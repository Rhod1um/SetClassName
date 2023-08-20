console.log("jeg er i setClassName")

let inputElementName = document.getElementById(".elementName")
let inputStyleName = document.getElementById(".styleName")
let pbSetClassName = document.getElementById(".pbSetStyle")


function setStyle(){
    debugger
    const elm = document.querySelector("." + inputElementName.value)
    console.log(elm)
    elm.className = ""
    elm.classList.add(inputStyleName.value)
    elm.classList.add(inputElementName.value)
    console.log(elm.classList)
}
pbSetClassName.addEventListener('click', setStyle)