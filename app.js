const menu=document.querySelector("#menu")
const close=document.querySelector("#close")

var tl=gsap.timeline()

tl.to("#sideber",{
  right:0,
  duration:0.5
})

tl.to("#menu li",{
  duration:1,
  stagger:0.3,
  opacity:1
})

tl.pause()

menu.addEventListener("click",function(){
    tl.play()
})

close.addEventListener("click",function(){
    tl.reverse()
})