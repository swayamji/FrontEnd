function VAnimation(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
VAnimation();

function nav(){
    gsap.to("#logo svg",{
        yPercent: -100, 
    scrollTrigger: {
        trigger: "#page1",
        scroller: "#main",
        start: "top 140",
        end: "top 150",
        scrub: 0.1
        }
    })
    gsap.to("#logo svg",{
        yPercent: 0, 
    scrollTrigger: {
        trigger: "#page5",
        scroller: "#main",
        start: "top 100",
        end: "top 140",
        scrub: 0.1,
        }
    })
    gsap.to("#nav-tools a",{
        display:"none",
        scrollTrigger:{
            trigger:"#page1",
            scroller:"#main",
            start:"top 140",
            end:"top 150",
            scrub:0.1
        }
    })
}
nav();

function VideoCursor(){
var videoCon=document.querySelector("#video-container");
var Play=document.querySelector("#play")

videoCon.addEventListener("mouseenter",function(){
    gsap.to(Play,{
        scale:1,
        opacity:1
    })
})
videoCon.addEventListener("mouseleave",function(){
    gsap.to(Play,{
        scale:0,
        opacity:0
    })
})
videoCon.addEventListener("mousemove",function(dets){
    gsap.to(Play,{
        left:dets.x,
        top:dets.y,
    })
})
}
VideoCursor();

function loadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        duration:0.3,
        stagger:0.3,
        delay:0.1
    })
    gsap.from("#page1 #video-container",{
        y:100,
        opacity:0,
        duration:0.6,
        delay:1.2
    })
}
loadingAnimation();

function cursorAnimation(){
document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(1)',
            opacity:'0.5'
        })
    })
})

document.querySelectorAll(".child").forEach(function(elem){
    elem.addEventListener("mouseleave",function(){
        gsap.to("#cursor",{
            transform: 'translate(-50%,-50%) scale(0)'
        })
    })
})
}
cursorAnimation();

function myCursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor2",{
            left:dets.x,
            top:dets.y,
        })
    })
}
myCursor();

function page3(){
    document.querySelector("#page3").addEventListener("mouseenter",function(){
        gsap.to(".child img",{
            opacity:1,
            stagger:0.5,
            delay:0.4, 
 
        })
    })
}
page3();

const Text = [
        { name: 'swayam', text: 'HOW GOOD IS YOUR COOK BOOK!? Oh my, oh my; I am going to have no issues working my way through it this year, it’s all so bloody delicious.1' },
        { name: 'swayam1', text: 'HOW GOOD IS YOUR COOK BOOK!? Oh my, oh my; I am going to have no issues working my way through it this year, it’s all so bloody delicious.2' },
        { name: 'swayam2', text: 'HOW GOOD IS YOUR COOK BOOK!? Oh my, oh my; I am going to have no issues working my way through it this year, it’s all so bloody delicious.3' },
        { name: 'swayam3', text: 'HOW GOOD IS YOUR COOK BOOK!? Oh my, oh my; I am going to have no issues working my way through it this year, it’s all so bloody delicious.4' },
        { name: 'swayam4', text: 'HOW GOOD IS YOUR COOK BOOK!? Oh my, oh my; I am going to have no issues working my way through it this year, it’s all so bloody delicious.5' },
        { name: 'swayam5', text: 'HOW GOOD IS YOUR COOK BOOK!? Oh my, oh my; I am going to have no issues working my way through it this year, it’s all so bloody delicious.6' },
        { name: 'swayam6', text: 'HOW GOOD IS YOUR COOK BOOK!? Oh my, oh my; I am going to have no issues working my way through it this year, it’s all so bloody delicious.7' },
        { name: 'swayam7', text: 'HOW GOOD IS YOUR COOK BOOK!? Oh my, oh my; I am going to have no issues working my way through it this year, it’s all so bloody delicious.8' }
];
    
let activeButton = null;

function showText(index) {
    const textDisplay = document.getElementById('text-display');
    textDisplay.style.display = 'block';
    textDisplay.textContent = Text[index].text;

    // Get the currently clicked button
    const clickedButton = document.querySelectorAll('.button-wrapper button')[index];

    // If there's an active button, reset its color to the default (white)
    if (activeButton) {
        activeButton.style.backgroundColor = 'white';
    }

    // Set the clicked button's color to black
    clickedButton.style.backgroundColor = 'black';

    // Update the activeButton reference
    activeButton = clickedButton;
}

function page5(){
    document.querySelector("#page5").addEventListener("mouseenter",function(){
        gsap.to(".last img",{
            opacity:1,
            stagger:0.4,
            delay:0.2,
        })
    })
}
page5();
