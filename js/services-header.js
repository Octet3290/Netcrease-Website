
fetch("../components/services-header.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Mobile menu logic AFTER header loads
    const mobileBtn = document.getElementById('mobileBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const overlay = document.getElementById('overlay');
    const closeMenuBtn = document.getElementById('closeMenuBtn');

    mobileBtn?.addEventListener('click', () => {
      mobileMenu.classList.remove('translate-x-full');
      overlay.classList.remove('opacity-0', 'pointer-events-none');
    });

    closeMenuBtn?.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      overlay.classList.add('opacity-0', 'pointer-events-none');
    });

    overlay?.addEventListener('click', () => {
      mobileMenu.classList.add('translate-x-full');
      overlay.classList.add('opacity-0', 'pointer-events-none');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
        overlay.classList.add('opacity-0', 'pointer-events-none');
      });
    });
  });

