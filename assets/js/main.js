document.addEventListener('DOMContentLoaded', () => {

  /* ---- STICKY HEADER ---- */
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* ---- HAMBURGER / MOBILE MENU ---- */
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
      hamburger.setAttribute('aria-expanded', isOpen);
    });
    mobileNav.addEventListener('click', (e) => {
      if (e.target === mobileNav) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
    document.querySelectorAll('.mobile-nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---- HERO SLIDER ---- */
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let current = 0;
  let autoSlide;

  function goToSlide(n) {
    slides[current]?.classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current]?.classList.add('active');
    dots[current]?.classList.add('active');
    slides[current]?.querySelectorAll('.slide-badge, .slide-content h1, .slide-content p, .slide-btns').forEach(el => {
      el.style.animation = 'none';
      void el.offsetHeight;
      el.style.animation = '';
    });
  }

  function startAuto() {
    stopAuto();
    if (slides.length > 1) autoSlide = setInterval(() => goToSlide(current + 1), 6500);
  }
  function stopAuto() { clearInterval(autoSlide); }

  dots.forEach((dot, i) => dot.addEventListener('click', () => { stopAuto(); goToSlide(i); startAuto(); }));
  document.getElementById('prev-slide')?.addEventListener('click', () => { stopAuto(); goToSlide(current - 1); startAuto(); });
  document.getElementById('next-slide')?.addEventListener('click', () => { stopAuto(); goToSlide(current + 1); startAuto(); });

  if (slides.length > 0) { slides[0].classList.add('active'); startAuto(); }

  /* ---- ANIMATED COUNTERS ---- */
  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-target'), 10);
    const duration = 2000;
    const step = target / (duration / 16);
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount = Math.min(currentCount + step, target);
      el.textContent = Math.floor(currentCount).toLocaleString('es-DO');
      if (currentCount >= target) clearInterval(timer);
    }, 16);
  }

  /* ---- SCROLL ANIMATIONS ---- */
  const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -50px 0px' };
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => entry.target.classList.add('animated'), delay * i * 100);
        scrollObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.animate-on-scroll').forEach((el, i) => {
    el.dataset.delay = i;
    scrollObserver.observe(el);
  });

  /* ---- COUNTER OBSERVER ---- */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  /* ---- BACK TO TOP ---- */
  const btt = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btt?.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });
  btt?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ---- CONTACT FORM ---- */
  const form = document.getElementById('contact-form');
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const originalText = btn.textContent;

    const nombre = document.getElementById('nombre')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const mensaje = document.getElementById('mensaje')?.value.trim();

    if (!nombre || !email || !mensaje) {
      btn.textContent = '⚠ Complete los campos obligatorios';
      btn.style.background = '#dc2626';
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
      }, 3000);
      return;
    }

    btn.textContent = 'Enviando...';
    btn.disabled = true;

    const mailtoLink = `mailto:contacto@regional15.edu.do?subject=Mensaje de ${encodeURIComponent(nombre)} - Regional 15&body=Nombre: ${encodeURIComponent(nombre)}%0ATeléfono: ${encodeURIComponent(document.getElementById('telefono')?.value || 'No especificado')}%0AEmail: ${encodeURIComponent(email)}%0AAsunto: ${encodeURIComponent(document.getElementById('asunto')?.value || 'General')}%0A%0AMensaje:%0A${encodeURIComponent(mensaje)}`;

    btn.textContent = '✓ Mensaje Enviado';
    btn.style.background = '#22c55e';
    window.open(mailtoLink, '_blank');

    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.disabled = false;
      form.reset();
    }, 4000);
  });

  /* ---- ACTIVE NAV LINK ---- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
        active?.classList.add('active');
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => navObserver.observe(s));

  /* ---- LOAD DYNAMIC CONTENT ---- */
  async function loadDynamicContent() {
    try {
      const res = await fetch('data/content.json');
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const data = await res.json();
      renderNoticias(data.noticias || []);
      renderServicios(data.servicios || []);
      renderEnlaces(data.enlaces || []);
      renderEventos(data.eventos || []);
      renderProgramas(data.programas || []);
      renderTestimonios(data.testimonios || []);
      renderGaleria(data.galeria || []);
      renderTicker(data.config?.ticker || []);
      renderStats(data.config?.stats || {});
      reobserveAnimations();
    } catch (err) {
      console.warn('Dynamic content unavailable:', err.message);
    }
  }

  function renderNoticias(items) {
    const grid = document.getElementById('dynamic-noticias');
    if (!grid) return;
    grid.innerHTML = items.map((item, i) => `
      <article class="news-card ${i === 0 ? 'news-featured' : ''} animate-on-scroll">
        <div class="card-img">
          <img src="${item.imagen}" alt="${item.titulo}" loading="lazy">
          <span class="card-category">${item.categoria}</span>
        </div>
        <div class="card-body">
          <div class="card-date">
            <svg viewBox="0 0 24 24" fill="currentColor" width="13" height="13"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
            ${item.fecha}
          </div>
          <h3>${item.titulo}</h3>
          <p>${item.descripcion}</p>
          <a href="${item.enlace}" target="_blank" rel="noopener" class="card-link">
            ${item.texto_enlace} <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg>
          </a>
        </div>
      </article>
    `).join('');
  }

  function renderServicios(items) {
    const grid = document.getElementById('dynamic-servicios');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
      <div class="service-card animate-on-scroll">
        <div class="service-icon">
          <svg viewBox="0 0 24 24"><path d="${item.icono_path}"/></svg>
        </div>
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
      </div>
    `).join('');
  }

  function renderEnlaces(items) {
    const grid = document.getElementById('dynamic-enlaces');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
      <a href="${item.url}" target="_blank" rel="noopener" class="enlace-card animate-on-scroll">
        <div class="enlace-icon">${item.icono}</div>
        <div class="enlace-info">
          <h4>${item.nombre}</h4>
          <p>${item.descripcion}</p>
        </div>
      </a>
    `).join('');
  }

  function renderEventos(items) {
    const grid = document.getElementById('dynamic-eventos');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
      <div class="event-card animate-on-scroll">
        <div class="event-header">
          <div class="event-date-box">
            <div class="day">${item.emoji}</div>
            <div class="month">${item.abreviatura}</div>
          </div>
          <div class="event-date-sep"></div>
          <div class="event-header-text">
            <div class="event-type">${item.tipo}</div>
            <h4>${item.titulo}</h4>
          </div>
        </div>
        <div class="event-body">
          <p>${item.descripcion}</p>
          <div class="event-meta">
            <span><svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/></svg>${item.ubicacion}</span>
            <span><svg viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>${item.fecha}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderProgramas(items) {
    const grid = document.getElementById('dynamic-programas');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
      <div class="program-card animate-on-scroll">
        <div class="program-icon">
          <svg viewBox="${item.icono_viewbox || '0 0 24 24'}"><path d="${item.icono_path}"/></svg>
        </div>
        <h3>${item.titulo}</h3>
        <p>${item.descripcion}</p>
        <a href="${item.enlace}" target="_blank" rel="noopener" class="program-link">${item.texto_enlace} <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/></svg></a>
      </div>
    `).join('');
  }

  function renderTestimonios(items) {
    const grid = document.getElementById('dynamic-testimonios');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
      <div class="testimonial-card animate-on-scroll">
        <div class="testimonial-stars">${'★'.repeat(item.estrellas || 5)}</div>
        <p class="testimonial-text">"${item.texto}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
          </div>
          <div>
            <strong>${item.nombre}</strong>
            <span>${item.rol}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  function renderGaleria(items) {
    const grid = document.getElementById('dynamic-galeria');
    if (!grid) return;
    grid.innerHTML = items.map(item => `
      <div class="gallery-item">
        <img src="${item.imagen}" alt="${item.titulo}" loading="lazy">
        <div class="gallery-overlay"><span>${item.titulo}</span></div>
      </div>
    `).join('');
    galleryImages = items.map(item => ({ src: item.imagen, caption: item.titulo }));
  }

  function renderTicker(items) {
    const container = document.getElementById('dynamic-ticker');
    if (!container) return;
    container.innerHTML = items.map(item => `<span class="ticker-item">${item}</span>`).join('');
    const clone = container.innerHTML;
    container.innerHTML = clone + clone;
  }

  function reobserveAnimations() {
    document.querySelectorAll('.animate-on-scroll:not(.observed)').forEach((el, i) => {
      el.classList.add('observed');
      el.dataset.delay = i;
      scrollObserver.observe(el);
    });
  }

  function renderStats(stats) {
    const container = document.getElementById('dynamic-stats');
    if (!container) return;
    const labels = {
      distritos: 'Distritos Educativos',
      publicaciones: 'Publicaciones Instagram',
      seguidores: 'Seguidores @regional_15minerd',
      galas: 'Galas Regionales de Arte',
      anio_escolar: 'Año Escolar en Curso'
    };
    container.innerHTML = Object.entries(stats).map(([key, val]) => `
      <div class="stat-item animate-on-scroll">
        <div class="stat-num" data-target="${val}">0</div>
        <div class="stat-label">${labels[key] || key}</div>
      </div>
    `).join('');
    container.querySelectorAll('.stat-num[data-target]').forEach(el => counterObserver.observe(el));
  }

  loadDynamicContent();

  /* ---- KEYBOARD SLIDER ---- */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { stopAuto(); goToSlide(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); goToSlide(current + 1); startAuto(); }
    if (e.key === 'Escape') closeLightbox();
  });

  /* ---- DARK MODE ---- */
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('theme');

  function setTheme(isDark) {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (themeToggle) {
      themeToggle.querySelector('.sun-icon').style.display = isDark ? 'none' : 'block';
      themeToggle.querySelector('.moon-icon').style.display = isDark ? 'block' : 'none';
      themeToggle.setAttribute('title', isDark ? 'Modo claro' : 'Modo oscuro');
      themeToggle.setAttribute('aria-label', isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
    }
  }

  if (storedTheme) {
    setTheme(storedTheme === 'dark');
  } else {
    setTheme(prefersDark.matches);
  }

  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
    setTheme(isDark);
  });

  prefersDark.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) setTheme(e.matches);
  });

  /* ---- LIGHTBOX ---- */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('.lightbox-img');
  const lightboxCaption = lightbox?.querySelector('.lightbox-caption');
  const lightboxClose = lightbox?.querySelector('.lightbox-close');
  const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
  const lightboxNext = lightbox?.querySelector('.lightbox-next');
  let galleryImages = [];
  let currentImageIndex = 0;

  function openLightbox(src, caption, index) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = caption || '';
    lightboxCaption.textContent = caption || '';
    currentImageIndex = index;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }

  function navigateLightbox(dir) {
    if (!galleryImages.length) return;
    currentImageIndex = (currentImageIndex + dir + galleryImages.length) % galleryImages.length;
    const item = galleryImages[currentImageIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
  }

  document.getElementById('dynamic-galeria')?.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery-item')?.querySelector('img');
    if (!img) return;
    const src = img.getAttribute('src');
    const caption = img.getAttribute('alt') || '';
    const index = galleryImages.findIndex(item => item.src === src);
    openLightbox(src, caption, index >= 0 ? index : 0);
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', () => navigateLightbox(-1));
  lightboxNext?.addEventListener('click', () => navigateLightbox(1));
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  /* ---- SMOOTH ANCHOR SCROLL (offset for sticky header) ---- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = window.innerWidth <= 768 ? 68 : 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ---- ACCESSIBILITY TOOLBAR ---- */
  const accContrast = document.getElementById('acc-contrast');
  const accTextsize = document.getElementById('acc-textsize');
  accContrast?.addEventListener('click', () => {
    document.body.classList.toggle('acc-high-contrast');
    accContrast.classList.toggle('active');
    localStorage.setItem('acc-contrast', document.body.classList.contains('acc-high-contrast'));
  });
  accTextsize?.addEventListener('click', () => {
    document.body.classList.toggle('acc-large-text');
    accTextsize.classList.toggle('active');
    localStorage.setItem('acc-textsize', document.body.classList.contains('acc-large-text'));
  });
  if (localStorage.getItem('acc-contrast') === 'true') { document.body.classList.add('acc-high-contrast'); accContrast?.classList.add('active'); }
  if (localStorage.getItem('acc-textsize') === 'true') { document.body.classList.add('acc-large-text'); accTextsize?.classList.add('active'); }

  /* ---- GOOGLE ANALYTICS ---- */
  async function loadAnalytics() {
    try {
      const res = await fetch('data/content.json');
      if (!res.ok) return;
      const data = await res.json();
      const gaId = data.config?.google_analytics_id;
      if (!gaId) return;
      const s1 = document.createElement('script');
      s1.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      s1.async = true;
      document.head.appendChild(s1);
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', gaId);
    } catch (_) {}
  }
  loadAnalytics();

  /* ---- REDUCED MOTION PREFERENCE ---- */
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motionQuery.matches) {
    document.querySelectorAll('.animate-on-scroll').forEach(el => el.classList.add('animated'));
    document.querySelectorAll('.ticker-content').forEach(el => { el.style.animation = 'none'; });
  }

  /* ---- INITIAL LOAD ANIMATION ---- */
  document.querySelectorAll('.hero-slider .animate-on-scroll').forEach(el => el.classList.add('animated'));

});
