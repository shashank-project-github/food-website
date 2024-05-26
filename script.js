var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
    loader.style.display = "none";
})

var tl = gsap.timeline()


tl.from("#logo img, .item", {
    y: -80,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.1
})
tl.from("p , .services-container", {
    y: -80,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.1
})
tl.from("#home h1", {
    scale: 2,
    opacity: 0,
    duration: 0.5,
    delay: 0.2,
    stagger: 0.1
})
tl.from("#home .btn", {
    x: -15,
    duration: 0,
    delay: 0,
    // opacity:0,
    stagger: 0.1
})
gsap.from("#home .btn", {
    y: 15,
    duration:4,
    repeat: -1
})