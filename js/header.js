fetch("./components/header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerLines = document.querySelectorAll('.hamburger-line');
    const mobileLinks = document.querySelectorAll('.mobile-link');
    const mobileInfo = document.querySelector('.mobile-info');

    const closeMenuInt = document.getElementById('closeMenuInt');
    const headerLogo = document.querySelector('header a');
    const mobileBtnContainer = document.getElementById('mobileBtn');

    let isMenuOpen = false;

    // GSAP Timeline for Menu
    const menuTl = gsap.timeline({ paused: true });

    menuTl.to(mobileMenu, {
      y: 0,
      duration: 0.8,
      ease: "expo.inOut"
    });

    // Hide main header elements when menu is open
    menuTl.to([headerLogo, mobileBtnContainer], {
      opacity: 0,
      duration: 0.3,
      pointerEvents: 'none'
    }, "<");

    menuTl.to(mobileLinks, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "power3.out"
    }, "-=0.4");

    menuTl.to(mobileInfo, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    }, "-=0.4");

    // Hamburger Animation (keeping it for consistency if needed, but we hide it now)
    function animateHamburger(open) {
      if (open) {
        gsap.to(hamburgerLines[0], { y: 6.5, rotate: 45, duration: 0.3 });
        gsap.to(hamburgerLines[1], { opacity: 0, duration: 0.3 });
        gsap.to(hamburgerLines[2], { y: -6.5, rotate: -45, duration: 0.3 });
      } else {
        gsap.to(hamburgerLines[0], { y: 0, rotate: 0, duration: 0.3 });
        gsap.to(hamburgerLines[1], { opacity: 1, duration: 0.3 });
        gsap.to(hamburgerLines[2], { y: 0, rotate: 0, duration: 0.3 });
      }
    }

    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
      if (isMenuOpen) {
        menuTl.play();
        animateHamburger(true);
        document.body.style.overflow = 'hidden';
      } else {
        menuTl.reverse();
        animateHamburger(false);
        document.body.style.overflow = '';
      }
    }

    mobileBtn?.addEventListener('click', toggleMenu);
    closeMenuInt?.addEventListener('click', toggleMenu);

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (isMenuOpen) toggleMenu();
      });
    });
  });

