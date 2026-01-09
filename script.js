// 1. Theme Toggle Logic
    function toggleTheme() {
      const html = document.documentElement;
      const icon = document.getElementById('themeIcon');
      
      if (html.getAttribute('data-bs-theme') === 'light') {
        html.setAttribute('data-bs-theme', 'dark');
        icon.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
      } else {
        html.setAttribute('data-bs-theme', 'light');
        icon.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
      }
    }

    // 2. Scroll Reveal Animation
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });