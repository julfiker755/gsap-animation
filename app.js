gsap.to("#box1",{
    x:1200,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%"
})

gsap.from("#box2",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"purple",
    borderRadius:"50%"
})

gsap.from("h1",{
    // color:'red',
    opacity:0,
    duration:2,
    delay:1,
    y:30,
    stagger:0.5
})

//  repeat:-1, --infinative loop use

gsap.to("#box3",{
    x:1200,
    duration:1,
    delay:1,
    rotate:360,
    repeat:-1,
    yoyo:true
})

//  animation
gsap.to("#box4",{
    x:1000,
    duration:1.5,
    delay:1,
})

gsap.to("#box5",{
    x:1000,
    duration:1.5,
    delay:2.5,
})

gsap.to("#box6",{
    x:1000,
    duration:1.5,
    delay:4,
})
gsap.to("#box7",{
    x:1000,
    duration:1.5,
    delay:5.5,
})



// timeLine--
var tl=gsap.timeline()

tl.to("#box8",{
    x:1100,
    rotate:360,
    duration:1.5,
    delay:1
})

tl.to("#box9",{
    x:1100,
    duration:1.5
})

tl.to("#box10",{
    x:1100,
    duration:1.5
})
