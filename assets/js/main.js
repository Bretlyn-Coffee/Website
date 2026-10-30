(() => {
  const header = document.querySelector('.site-header');
  const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const open = document.body.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open);
    });
    document.querySelectorAll('.nav-links a').forEach(a =>
      a.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
        toggle.setAttribute('aria-expanded', 'false');
      })
    );
  }

  // Reveal on scroll
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Count-up stats
  const counters = document.querySelectorAll('[data-count]');
  const cio = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target, end = +el.dataset.count, suffix = el.dataset.suffix || '';
      const t0 = performance.now(), dur = 1600;
      const tick = t => {
        const p = Math.min((t - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - p, 3)));
        el.textContent = v + suffix;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      cio.unobserve(el);
    });
  }, { threshold: 0.3 });
  counters.forEach(c => { c.textContent = '0' + (c.dataset.suffix || ''); cio.observe(c); });

  // Gentle parallax on hero visual
  const hv = document.querySelector('.hero-visual');
  if (hv && matchMedia('(pointer:fine)').matches) {
    document.querySelector('.hero').addEventListener('mousemove', e => {
      const x = (e.clientX / innerWidth - .5) * 18, y = (e.clientY / innerHeight - .5) * 18;
      hv.style.transform = `translate(${x}px, ${y}px)`;
    });
  }

  // Menu tabs highlight
  const tabs = document.querySelectorAll('.menu-tabs button');
  tabs.forEach(b => b.addEventListener('click', () => {
    document.getElementById(b.dataset.target)?.scrollIntoView({ behavior: 'smooth' });
  }));
  if (tabs.length) {
    const mio = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) tabs.forEach(b => b.setAttribute('aria-selected', b.dataset.target === e.target.id));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    document.querySelectorAll('.menu-cat').forEach(s => mio.observe(s));
  }

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
})();
