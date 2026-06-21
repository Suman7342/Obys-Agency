
 let tl = gsap.timeline();
        tl.from(".line h1", {
            y: 150,
            opacity: 0,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out"
        });

        tl.call(startCounter, [], "+=0.1");

       
        tl.to("#loader", {
            opacity: 0,
            duration: 0.3,
            delay: 3,
            onComplete: function () {
                document.querySelector("#loader").style.display = "none";
                document.body.style.overflow = "auto"; 
            }
        });

        tl.to("#page1", {
            y: 0,           
            opacity: 1,     
            duration: 0.8,
            ease: "power4.out"
        }, "<"); 

        function startCounter() {
            let counter = document.querySelector("#line1-part1 h5");
            let count = 0;
            const maxCount = 100;

            let setInt = setInterval(() => {
                if (count < maxCount) {
                    count++;
                    
                    counter.textContent = count < 10 ? "0" + count : count;
                     showH2();
                } else {
                    clearInterval(setInt);
                   
                   
                }
            }, 25); 
        }

        // ===== SHOW H2 FUNCTION =====
        function showH2() {
            gsap.to(".line h2", {
                opacity: 1,
                duration: 0.4,
                ease: "power2.out"
            });
        }
       tl.from(".hero", {
    y: 150,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,      
    ease: "power2.out"
});
        tl.from(".nav-2 h5",{
            y:-100,
            stagger:0.2,
            delay:0.2
        })
let crsr=document.querySelector(".cursor")
document.querySelector("body").addEventListener("mousemove",function(e){
    gsap.to(".cursor",{
        left:e.x,
        top:e.y
    })
    // crsr.style.left=e.clientX+"px"
    // crsr.style.top=e.clientY+"px"
})

Shery.makeMagnet(" #page1 h5",{
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration:1
});



let h1 = document.querySelector(".footer-text h1");


let clutter = "";


h1.textContent.split("").forEach(function(char){
    clutter += `<span>${char}</span>`;
});


h1.innerHTML = clutter;


h1.addEventListener("mouseenter", function(){

    gsap.to(".footer-text h1 span",{
        color:"transparent",
        webkitTextStroke:"1px #fff",
        stagger:0.05,
        duration:0.6,
        ease:"power2.out"
    });

},
h1.addEventListener("mouseleave", function(){

    gsap.to(".footer-text h1 span",{
        color:"#fff",
        webkitTextStroke:"0px #fff",
        stagger:0.05,
        duration:0.6,
        ease:"power2.out"
    });

})

);
let cursor1 = document.querySelector(".cursor-container");
let videoContainer = document.querySelector(".video-container");

videoContainer.addEventListener("mouseenter", function(){
    cursor1.style.opacity = 1;
    gsap.to(".cursor",{
        opacity:0
    })
});

videoContainer.addEventListener("mouseleave", function(){
      gsap.to(".cursor-container",{
        top:"-2.5vw",
        left:"65%",
        duration:0.5
    });
    gsap.to(".cursor",{
        opacity:1,
        zIndex:999999
    })
});

videoContainer.addEventListener("mousemove", function(e){
    gsap.to(".cursor-container", {
        left: e.x-400,         
        top: e.y-150,           
        duration: 0.3
       
    });
});
let videos = document.querySelector(".video-container video");

let flag=0



videoContainer.addEventListener("click", function(){
if(flag==0){
   videos.play();
    videos.style.opacity = 1;

    console.log("click");
    cursor1.innerHTML=`<i class="ri-pause-fill"></i>`
    gsap.to(".cursor-container",{
    scale:0.4
    
    })
    flag=1
}else{
    videos.pause();
    videos.style.opacity = 0;

    cursor1.innerHTML=`<i class="ri-play-fill"></i>`
    gsap.to(".cursor-container",{
    scale:1
    
    })
    flag=0
}
});



function animation(){
    Shery.imageEffect(".img-div",{
        style:5,
        config:{"a":{"value":4.58,"range":[0,30]},"b":{"value":-0.82,"range":[-1,1]},"zindex":{"value":"9996999","range":[-9999999,9999999]},"aspect":{"value":0.799994569354803},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.34,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.15,"range":[0,10]},"metaball":{"value":0.37,"range":[0,2]},"discard_threshold":{"value":0.52,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.34,"range":[0,2]},"noise_scale":{"value":16.03,"range":[0,100]}},
        gooey:true
    })
}
animation()

document.addEventListener("mousemove",function(e){
    gsap.to("#flags",{
  x:e.x-10,
  y:e.y
})
})
let herorow=document.querySelector(".hero-row")
herorow.addEventListener("mouseenter",function(){
    gsap.to("#flags",{
        opacity:1,
    })
})
herorow.addEventListener("mouseleave",function(){
    gsap.to("#flags",{
        opacity:0
    })
   
})