function BrackText(){
const h1Text=document.querySelector("h1")
const h1Textt=h1Text.textContent
const splittedText=h1Textt.split("")

var clutter=""

splittedText.forEach(function(elem){
    clutter += `<span>${elem}</span>`
})


h1Text.innerHTML=clutter
console.log(clutter)
}

BrackText()


gsap.from("h1 span",{
    y:100,
    opacity:0,
    duration:1,
    delay:0.5,
    stagger:0.3
})