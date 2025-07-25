function page1animation(){
    var tl = gsap.timeline()

tl.from("nav h1,nav h4, nav button", {
    y:-30,
    opacity: 0,
    duration: 0.5,
    delay:0.5,
    stagger:0.15
})

tl.from(".center-part1 h1", {
    x:-300,
    opacity: 0,
    duration: 0.5,
},"-=0.3")

tl.from(".center-part1 p", {
    x:-100,
    opacity: 0,
    duration: 0.4,
})

tl.from(".center-part1 button",{
    opacity: 0,
    duration: 0.4,
})
tl.from(".center-part2 img", {
    // y: 100,
    opacity: 0,
    duration: 0.5,
}, "-=0.7")

    tl.from(".section1bottom img",{
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15
},"+=1")


}

function page2animation(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger: ".section2",
            scroller: "body",
            start: "top 50%",
            scrub: 2,
            end:"top -50%",
        }

    })

    tl2.from(".services",{
        y:30,
        opacity: 0,
        duration: 0.5,
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity: 0,
        duration: 1,
    },"naam")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity: 0,
        duration: 1,
    },"naam")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity: 0,
        duration: 1,
    },"naam2")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity: 0,
        duration: 1,
    },"naam2")
    tl2.from(".elem.line3.left",{
        x:-300,
        opacity: 0,
        duration: 1,
    },"naam3")
    tl2.from(".elem.line3.right",{
        x:300,
        opacity: 0,
        duration: 1,
    },"naam3")
}
page1animation();
page2animation();