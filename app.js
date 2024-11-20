function pageAnimation(){
    const tl=gsap.timeline()

tl.from("nav h1,nav ul li",{
    y:-10,
    opacity:0,
    delay:1,
    duration:0.8,
    stagger:0.15
})

tl.from(".home p",{
  x:-200,
  opacity:0,
  duration:0.5,
  stagger:0.1
},"-=0.3")

tl.from(".home button",{
   opacity:0,
   duration:0.1
})

tl.from(".home2 img",{
   opacity:0,
   duration:0.1
},"-=0.3")


tl.from(".socil_img img",{
   opacity:0,
   y:30,
   stagger:0.15,
   duration:0.6
})
}

pageAnimation()



function pageAnimation1(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".service div",
            scroller:"body",
            start:"top 50%"
        }
    })
    
    tl2.from(".service div",{
        x:-300,
        opacity:0,
        duration:1,
    })
}
pageAnimation1()