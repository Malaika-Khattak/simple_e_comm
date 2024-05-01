
let t=gsap.timeline()
t.from("#nav-1",{
y:50,
duration:1,
})
t.from("#nav-2",{
    y:60,
    opacity:0,
    duration:1
})
t.from("#content h1",{
    opacity:0,
    scale:1,
    duration:2
})
t.from("#main button",{
    opacity:0,
    y:10
})
t.from(".pic1",{
    opacity:0,
    x:-20,
    scale:1.5,
    duration:1
})
t.from(".pic2",{
    opacity:0,
    x:20,
    scale:1.5,
    duration:1,
    delay:"-1"
})
t.from("#circle",{
    opacity:0,
    y:50,
    repeat:-1,
    duration:2,
    yoyo:true,
    })