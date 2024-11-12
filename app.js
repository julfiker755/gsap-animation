gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360
})

gsap.from("#page2 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    // scrollTrigger:"#page2 #box"
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        scrub:true
        // scrub:2

    }
})

gsap.from("#page3 #box",{
    scale:0,
    delay:1,
    duration:2,
    rotate:360,
    
})