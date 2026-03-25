const cursor = document.getElementById("cursor");
const cursorBlur = document.getElementById("cursor-blur");

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0; // for green dot
let blurX = 0, blurY = 0;     // for blur

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  // ===== Green dot (slower) =====
  cursorX += (mouseX - cursorX) * 0.08; // smaller number = slower
  cursorY += (mouseY - cursorY) * 0.08;
  cursor.style.left = cursorX + "px";
  cursor.style.top = cursorY + "px";

  // ===== Blur (keep original speed) =====
  blurX += (mouseX - blurX) * 0.02; // adjust as per your current setup
  blurY += (mouseY - blurY) * 0.02;
  cursorBlur.style.left = blurX + "px";
  cursorBlur.style.top = blurY + "px";

  requestAnimationFrame(animateCursor);
}
animateCursor();

var h4all = document.querySelectorAll("#nav h4");

h4all.forEach(function (elem) {
  let textGlowTween;  // For text pulsing
  let cursorGlowTween; // For cursor pulsing

  elem.addEventListener("mouseenter", function () {
    // Cursor animation setup
    cursor.style.scale = 3;
    cursor.style.border = "1px solid #fff";
    cursor.style.backgroundColor = "#69f13c43";

    // Text color
    elem.style.color = "#f5e6ad";

    // Pulsing text glow
    textGlowTween = gsap.to(elem, {
      textShadow: "0 0 10px , 0 0 20px #119f3a, #119f3a, 0 0 40px #119f3a",
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });

    // Pulsing cursor glow (sync with text)
    cursorGlowTween = gsap.to(cursor, {
      boxShadow: "0 0 25px #f5e6ad, 0 0 50px #f5e6ad, 0 0 80px #f5e6ad",
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });
  });

  elem.addEventListener("mouseleave", function () {
    // Reset cursor appearance
    cursor.style.scale = 1;
     cursor.style.border = "0px solid #119f3a";
    cursor.style.backgroundColor = "#119f3a";
    cursor.style.boxShadow = "0 0 10px #119f3a";

    // Reset text appearance
    elem.style.color = "floralwhite";
    elem.style.textShadow = "none";

    // Stop pulsing animations
    if (textGlowTween) textGlowTween.kill();
    if (cursorGlowTween) cursorGlowTween.kill();
  });
});


gsap.to("#nav",{
    backgroundColor :"#000",
    duration:0.03,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:3,
    }
})

gsap.to("#main",{            /*when we scroll black screen fade */
    backgroundColor :"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        start:"top -20%",
        end:"top -70%",
        scrub:2,
    }

})

gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top 58%",
    scrub:3,
  }

})

// gsap.from(".card",{
//   scale:0.8,
//   opacity:0,
//   duration:1,
//   scrollTrigger:{
//     trigger:".card",
//     scroller:"body",
//     // markers:true,
//     start:"top 60%",
//     end:"top 55%",
//     scrub:2,
//   }
// })
gsap.from("#colon1", {
  y: -70,
  x: -70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 3,
  }
})
gsap.from("#colon2", {
  y: 70,
  x: 70,
  scrollTrigger: {
    trigger: "#colon1",
    scroller: "body",
    start: "top 55%",
    end: "top 45%",
    scrub: 4,
  }
})
 gsap.from("#page4 h1",{
  y:50,
  scrollTrigger: {
    trigger: "#page4 h1",
    scroller: "body",
    start: "top 75%",
    end: "top 70%",
    scrub: 3,
  }


 })