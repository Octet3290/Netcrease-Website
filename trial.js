// LOADER ANIMATION


gsap.to("#loaderBar", {
    width: "100%",
    duration: 1.5,
    ease: "power2.out"
});

window.addEventListener("load", () => {
    gsap.to("#pageLoader", {
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        onComplete: () => {
            document.getElementById("pageLoader").style.display = "none";
        }
    });
});





//  MASK REVEAL ANIMATION FOR TEXT

document.querySelectorAll('.reveal').forEach(el => {
    const words = el.innerText.split(' ');
    el.innerHTML = words
        .map((word, i) =>
            `<span style="animation-delay:${i * 0.26}s">${word}&nbsp;</span>`
        )
        .join('');
});



//  AOS ANIMATION INITIALIZATION
AOS.init({
    duration: 900,
    easing: 'ease-out-cubic',
    once: true,
    offset: 0,
    delay: 0,
    anchorPlacement: 'top-bottom',
    disable: 'mobile',
});

