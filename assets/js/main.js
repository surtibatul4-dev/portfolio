/**
 * Main Interaction Logic for Batul Surti's Portfolio
 * Software Developer | Android Application Developer
 */

(function () {
  'use strict';

  // --- Project Data Store for Interactive Modal ---
  const projectsData = {
    filefinder: {
      title: 'FileFinder',
      subtitle: 'Native Android File Explorer & Storage Diagnostic',
      category: 'Android App',
      image: 'assets/images/filefinder.jpeg',
      overview: 'FileFinder is a native Android application engineered to simplify device file navigation, categorization, and storage diagnostics. Engineered with responsive Java architecture, it scans device storage in milliseconds and groups files into intuitive media categories.',
      problem: 'Android devices accumulate cluttered downloads, orphaned APKs, and hidden media that are cumbersome for users to locate and manage through standard system interfaces.',
      solution: 'Developed an indexed search algorithm with multithreaded scanning, permission-safe Storage Access Framework (SAF), and an ergonomic dark mauve interface tailored for one-handed operation.',
      features: [
        'Real-time indexed search across internal and external storage',
        'Storage breakdown chart showing usage across Images, Videos, Audio, Docs & APKs',
        'Batch file operations (Copy, Move, Rename, Zip compression, and Safe Delete)',
        'Granular Android storage permission handling adhering to modern scoped storage',
        'Custom lightweight file previewer with zero external runtime dependencies'
      ],
      technologies: ['Java', 'Android SDK', 'XML Layouts', 'Storage Access Framework', 'SQLite', 'Git'],
      architecture: 'Clean Architecture with Separation of Concerns (UI Activities/Adapters, Repository Pattern, Asynchronous Background Threading).',
      status: 'App Screenshot Upload in Progress'
    },
    beautybasket: {
      title: 'Beauty Basket',
      subtitle: 'Personalized Skincare Ritual & Beauty Android Application',
      category: 'Android Application',
      image: 'assets/images/beautybasket.jpeg',
      overview: 'Beauty Basket is an elegant Android mobile application designed as a personal skincare sanctuary and beauty routine tracker. Engineered with bespoke rose-gold and soft mauve aesthetics, it empowers users with customized morning and night routines, daily skin diary tracking (hydration, sleep, glow score), step-by-step beauty masterclasses, and an intelligent skincare advisor.',
      problem: 'Users following multi-step skincare routines often struggle with consistency, product layering confusion, and tracking whether treatments effectively improve skin barrier health.',
      solution: 'Developed an offline-first Android application with streak motivation, personalized skin profile configuration (e.g., Combination Skin), interactive routine checklists, water intake tracking, and categorized masterclass tutorials.',
      features: [
        'GlowCare Sanctuary with customized Morning & Night skincare ritual checklists and streak counter',
        'Daily Skin & Glow Diary tracking glow score, 8-glass water intake, sleep hours, and redness indicators',
        'Beauty & Makeup Masterclass with step-by-step guides (Glass Skin Pre-Makeup Base, Warm Latte & Mocha)',
        'Glow Advisor with quick-tap concern tagging (Barrier Repair, Hyperpigmentation, Pore Texture)',
        'Local SQLite / Room persistence for daily habit streaks and customized routine steps',
        'Modern Material Design 3 interface with smooth micro-interactions and soft rose-gold palette'
      ],
      technologies: ['Java', 'Android SDK', 'XML Layouts', 'Material Design 3', 'SQLite / Room DB', 'RecyclerView Adapters'],
      architecture: 'MVVM Architectural Pattern with Room Database persistence, LiveData reactive state, and custom RecyclerView adapters.',
      status: 'Completed Android Application'
    },
    urbanbites: {
      title: 'Urban Bites Cafe & Pizzeria',
      subtitle: 'Artisan Stone-Baked Pizzeria & Cafe in Himatnagar (Civil Road)',
      category: 'Web Application',
      image: 'assets/images/urban_bites.png',
      liveUrl: 'https://urbenbites.vercel.app/',
      overview: 'Urban Bites Cafe & Pizzeria is a high-performance web application engineered for an artisan dining establishment on Civil Road, Sahkarijin, Himatnagar. It features an interactive food menu, popular items carousel, dynamic slide-over shopping cart drawer, and direct WhatsApp order integration.',
      problem: 'Local dining establishments require fast, friction-free online ordering where customers can browse stone-baked pizzas, cheesy garlic breads, and coolers, calculate totals, and place orders directly to WhatsApp without complicated third-party commissions.',
      solution: 'Engineered a modern, mobile-first responsive web app in Vanilla CSS and JavaScript, featuring a custom drawer cart, real-time total calculator, instant item search, and seamless WhatsApp order dispatching.',
      features: [
        'Artisan stone-baked pizza, cheesy garlic bread, pasta, and cooler showcase',
        'Interactive slide-over shopping cart drawer with local state persistence',
        '1-Click WhatsApp direct ordering (+91 9714100891) with auto-formatted order summary',
        'Popular food highlights with vegetarian badges and price counters',
        'Customer reviews section with ratings and verified dining feedback',
        '100% responsive, high-speed mobile layout built with modern CSS & JavaScript'
      ],
      technologies: ['HTML5', 'Vanilla CSS3', 'JavaScript (ES6+)', 'Local Cart State', 'WhatsApp API', 'Vercel Deployment'],
      architecture: 'Modular Vanilla JS application architecture with custom drawer components and responsive CSS Grid.',
      status: 'Live in Production on Vercel'
    },
    cremecrumbs: {
      title: 'Creme & Crumbs | Artisan Bakery & Patisserie',
      subtitle: 'Boutique Patisserie & Artisan Bakeshop in Himmatnagar (Haji Street)',
      category: 'Web Application',
      image: 'assets/images/creme_crumbs.png',
      liveUrl: 'https://bakery-seven-zeta.vercel.app/',
      overview: 'Creme & Crumbs is a boutique bakery and patisserie web application serving Himmatnagar at Haji Street, Moti Vorvad. Crafted with elegant visual aesthetics, it showcases handcrafted celebration cakes, cupcakes, artisan cookies, flaky croissants, chocolate truffles, and eggless specials.',
      problem: 'Artisan bakeries with daily fresh batches require an appetizing digital storefront that allows customers to view daily specialties, order custom event cakes, and contact the bakers seamlessly.',
      solution: 'Created an artisan digital storefront featuring an interactive order bag, custom cake consultation configurator, location details with map links, customer testimonials, and direct WhatsApp messaging.',
      features: [
        'Appetizing signature bakes catalog (Cakes, Cupcakes, Croissants, Cheesecakes & Tiramisu)',
        '100% Fresh Daily and Pure Vegetarian / Eggless specials indicator',
        'Interactive Order Bag system with real-time item counter and checkout summary',
        'Custom Cake Order inquiry form for birthdays, weddings, and anniversaries',
        'Direct WhatsApp order integration (+91 83471 19789) and phone inquiry buttons',
        'Fully responsive layout with elegant typography and smooth drawer navigation'
      ],
      technologies: ['HTML5', 'Modern CSS3', 'JavaScript (ES6+)', 'Order Bag System', 'WhatsApp Integration', 'Vercel Deployment'],
      architecture: 'Semantic HTML5 structure, responsive modular CSS, and accessible UI drawer interactions.',
      status: 'Live in Production on Vercel'
    },
    bakehouse: {
      title: 'The Bakehouse Application',
      subtitle: 'Artisanal Bakery & Patisserie Mobile Application · By Batul',
      category: 'Android Application',
      image: 'assets/images/bakehouse.jpeg',
      overview: 'The Bakehouse is a native mobile e-commerce application crafted for an artisan patisserie and gourmet bakeshop. Designed with Batul\'s signature soft rose-gold aesthetic, it allows customers to browse oven-fresh daily batches, curate a personalized wishlist, apply discount coupons, manage an interactive bakery basket, and track VIP Sweet Tooth loyalty points.',
      problem: 'Boutique artisan bakeries producing small daily fresh batches struggle with third-party delivery apps that lack custom event cake orders, loyalty perks, and dedicated brand presentation.',
      solution: 'Engineered a delightful, mobile-first Android application featuring an intuitive search and category filtering catalog, custom wishlist bookmarking, real-time basket calculations with Sweet Coupon promo codes, and a sweet crumbs customer reward system.',
      features: [
        'Interactive Bakery Catalog with real-time keyword search (Cakes, Cupcakes, Croissants, Chocolates)',
        'Dynamic category filtering pills and multi-criteria sorting (Popular, Price: Low, Top Rated)',
        'Bakery Basket with dynamic item quantity controls, subtotal computation, and coupon discount engine (e.g. SWEET10)',
        'My Wishlist feature enabling one-tap saving and quick "Add to Basket" checkout',
        'Customer Account & Sweet Crumbs Rewards loyalty point tracker with milestone progress bar',
        'Morning fresh badges, Pure Butter & no-preservative indicators, and kitchen location details'
      ],
      technologies: ['Java', 'Android SDK', 'XML Layouts', 'Material Design 3', 'SQLite / Room DB', 'RecyclerView Adapters', 'SharedPreferences'],
      architecture: 'Clean MVVM Pattern with Repository data management, LiveData state tracking, and custom RecyclerView viewholders for smooth 60fps scrolling.',
      status: 'Completed Android Application'
    },
    mamuicecream: {
      title: 'Mamu Ice Cream – Since 1951',
      subtitle: 'Heritage Ice Cream Parlour & Handcrafted Delicacies in Himmatnagar (Juna Bazar)',
      category: 'Web Application',
      image: 'assets/images/mamu_icecream.jpg',
      liveUrl: 'https://mamu-ice-cream-website.vercel.app/',
      overview: 'Mamu Ice Cream is a heritage dessert and artisan ice cream parlour website representing over 75 years of pure quality and tradition in Himmatnagar since 1951. Crafted by Mr. Kadar Mamu & Mr. Nizamuddin Mamu at Juna Bazar, Trankhuniya Otla, the web application showcases authentic handmade ice creams, signature Spe. Mamu Faloodas, rich cream bowls, opening hours, customer reviews, and direct WhatsApp ordering.',
      problem: 'Heritage food destinations with decades of goodwill need a premium modern online presence to showcase rich menus, authentic ingredients, shop locations, and seasonal specials to younger digital customers.',
      solution: 'Designed an appetizing, warm-toned digital storefront with high-resolution delicacy photography, category navigation (Ice Creams, Falooda, Cream Bowls), dynamic open/closed status indicators, and one-tap WhatsApp contact.',
      features: [
        'Heritage showcase celebrating 75+ years of taste and tradition since 1951 in Himmatnagar',
        'Handmade Delicacies catalog (American Dryfruit, Kaju Pista, Sitafal, Rajbhog, Roohafza & Malai)',
        'Signature desserts menu featuring Spe. Mamu Falooda and Spe. Mamu Cream Bowl',
        'Live parlour status indicator with real-time opening hours and Google Maps directions',
        'Direct WhatsApp order integration (+91 88494 38600) and phone inquiry buttons',
        'Fully responsive mobile-optimized UI with smooth reveal animations'
      ],
      technologies: ['HTML5', 'Modern CSS3', 'JavaScript (ES6+)', 'Hero Background Slider', 'WhatsApp API', 'Vercel Deployment'],
      architecture: 'Semantic HTML5 structure, modular CSS, interactive image sliders, and responsive flex/grid layouts.',
      status: 'Live in Production on Vercel'
    }
  };

  // --- Initialize Everything On DOM Ready ---
  document.addEventListener('DOMContentLoaded', function () {
    initNavigation();
    initProjectFilters();
    initProjectModal();
    initResumeModal();
    initServiceTriggers();
    initContactForm();
    initEmailCopy();
    initSkillCardsTilt();
    initStatCounters();
    initScrollToTop();
    initSmoothScroll();
    initCursorGlow();
  });

  // --- 1. Navigation & Header Scrolling ---
  function initNavigation() {
    const header = document.querySelector('.site-header');
    const hamburger = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Sticky header shadow & glass effect on scroll
    window.addEventListener('scroll', function () {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });

    // Mobile Hamburger Toggle
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', function () {
        const isOpen = navLinks.classList.contains('active');
        if (isOpen) {
          navLinks.classList.remove('active');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('no-scroll');
        } else {
          navLinks.classList.add('active');
          hamburger.classList.add('open');
          hamburger.setAttribute('aria-expanded', 'true');
          document.body.classList.add('no-scroll');
        }
      });

      // Close mobile menu when clicking nav link
      navItems.forEach(item => {
        item.addEventListener('click', function () {
          navLinks.classList.remove('active');
          hamburger.classList.remove('open');
          hamburger.setAttribute('aria-expanded', 'false');
          document.body.classList.remove('no-scroll');
        });
      });
    }

    // Active link highlighting on scroll
    const sections = document.querySelectorAll('section[id]');
    function highlightActiveNav() {
      const scrollY = window.pageYOffset + 140;

      sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);

        if (correspondingLink) {
          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            correspondingLink.classList.add('active');
          } else {
            correspondingLink.classList.remove('active');
          }
        }
      });
    }

    window.addEventListener('scroll', highlightActiveNav, { passive: true });
  }

  // --- 2. Project Filtering ---
  function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.project-filters .filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', function () {
        filterButtons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        const filterValue = this.getAttribute('data-filter');

        projectCards.forEach(card => {
          const category = card.getAttribute('data-category');
          if (filterValue === 'all' || category === filterValue || (category && category.split(' ').includes(filterValue))) {
            card.classList.remove('hide');
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(16px)';
            setTimeout(() => {
              card.style.display = 'none';
              card.classList.add('hide');
            }, 260);
          }
        });
      });
    });
  }

  // --- 3. Interactive Project Detail Modal ---
  function initProjectModal() {
    const modal = document.getElementById('project-modal');
    if (!modal) return;

    const modalBody = modal.querySelector('.modal-inner');
    const closeBtn = modal.querySelector('.modal-close');
    const viewButtons = document.querySelectorAll('.btn-view-project');

    function openModal(projectId) {
      const data = projectsData[projectId];
      if (!data) return;

      document.getElementById('modal-project-title').textContent = data.title;
      document.getElementById('modal-project-subtitle').textContent = data.subtitle;
      document.getElementById('modal-project-badge').textContent = data.category;
      document.getElementById('modal-project-image').src = data.image;
      document.getElementById('modal-project-image').alt = data.title + ' Preview';

      // Match media wrapper background to application mockup background
      const mediaWrap = modal.querySelector('.modal-media-wrap');
      if (mediaWrap) {
        if (projectId === 'bakehouse' || projectId === 'beautybasket') {
          mediaWrap.style.background = '#ffcdd2';
        } else if (projectId === 'filefinder') {
          mediaWrap.style.background = '#a0887e';
        } else {
          mediaWrap.style.background = 'var(--card-bg)';
        }
      }
      document.getElementById('modal-project-overview').textContent = data.overview;
      document.getElementById('modal-project-problem').textContent = data.problem;
      document.getElementById('modal-project-solution').textContent = data.solution;
      document.getElementById('modal-project-architecture').textContent = data.architecture;
      document.getElementById('modal-project-status').textContent = data.status;

      // Populate features list
      const featuresContainer = document.getElementById('modal-project-features');
      featuresContainer.innerHTML = '';
      data.features.forEach(feat => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="feat-check">✓</span> ${feat}`;
        featuresContainer.appendChild(li);
      });

      // Populate tech pills
      const techContainer = document.getElementById('modal-project-tech');
      techContainer.innerHTML = '';
      data.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'tech-pill';
        span.textContent = tech;
        techContainer.appendChild(span);
      });

      // Update Live Website Link in Modal
      const liveBtn = document.getElementById('modal-live-link');
      if (liveBtn) {
        if (data.liveUrl) {
          liveBtn.href = data.liveUrl;
          liveBtn.style.display = 'inline-flex';
        } else {
          liveBtn.style.display = 'none';
        }
      }

      modal.classList.add('open');
      document.body.classList.add('modal-open');
    }

    function closeModal() {
      modal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    viewButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const projectId = this.getAttribute('data-project');
        openModal(projectId);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    // Close on backdrop click
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
      }
    });

    // Modal inquiry button -> scrolls to contact form
    const modalInquireBtn = document.getElementById('modal-inquire-btn');
    if (modalInquireBtn) {
      modalInquireBtn.addEventListener('click', function () {
        closeModal();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  }

  // --- 3b. Interactive Responsive Resume Viewer Modal ---
  function initResumeModal() {
    const resumeBtn = document.getElementById('edu-btn-resume');
    const resumeModal = document.getElementById('resume-modal');
    if (!resumeModal) return;

    const closeBtn = document.getElementById('resume-modal-close');

    function openResumeModal(e) {
      if (e) e.preventDefault();
      resumeModal.classList.add('open');
      document.body.classList.add('modal-open');
    }

    function closeResumeModal() {
      resumeModal.classList.remove('open');
      document.body.classList.remove('modal-open');
    }

    if (resumeBtn) {
      resumeBtn.addEventListener('click', openResumeModal);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', closeResumeModal);
    }

    // Close on backdrop click
    resumeModal.addEventListener('click', function (e) {
      if (e.target === resumeModal) {
        closeResumeModal();
      }
    });

    // Close on Escape key
    window.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && resumeModal.classList.contains('open')) {
        closeResumeModal();
      }
    });
  }

  // --- 4. Service Card Action -> Connect to Contact Form ---
  function initServiceTriggers() {
    const serviceButtons = document.querySelectorAll('.service-action-btn');
    const serviceSelect = document.getElementById('contact-service');
    const contactSection = document.getElementById('contact');

    serviceButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const serviceName = this.getAttribute('data-service');

        if (serviceSelect && serviceName) {
          serviceSelect.value = serviceName;
        }

        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
          // Highlight the form briefly
          const formCard = document.querySelector('.contact-form-card');
          if (formCard) {
            formCard.classList.add('flash-highlight');
            setTimeout(() => {
              formCard.classList.remove('flash-highlight');
            }, 1200);
          }
        }
      });
    });
  }

  // --- 5. Interactive Contact Form & Client Validation ---
  function initContactForm() {
    const form = document.getElementById('portfolio-contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      const nameInput = document.getElementById('contact-name');
      const emailInput = document.getElementById('contact-email');
      const subjectInput = document.getElementById('contact-subject');
      const messageInput = document.getElementById('contact-message');
      const submitBtn = form.querySelector('button[type="submit"]');

      let isValid = true;

      // Simple validation
      if (!nameInput.value.trim()) {
        showFieldError(nameInput, 'Please enter your name');
        isValid = false;
      } else {
        clearFieldError(nameInput);
      }

      if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
        showFieldError(emailInput, 'Please enter a valid email address');
        isValid = false;
      } else {
        clearFieldError(emailInput);
      }

      if (!subjectInput.value.trim()) {
        showFieldError(subjectInput, 'Please specify a subject');
        isValid = false;
      } else {
        clearFieldError(subjectInput);
      }

      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        showFieldError(messageInput, 'Message should be at least 10 characters');
        isValid = false;
      } else {
        clearFieldError(messageInput);
      }

      if (!isValid) return;

      // Simulated sending feedback
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Sending...</span> <span class="spinner"></span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        form.reset();

        showToast('Thank you, ' + nameInput.value + '! Your message has been received. Batul Surti will reply within 24 hours.');
      }, 1100);
    });

    function showFieldError(input, message) {
      input.classList.add('input-error');
      let errorElem = input.parentElement.querySelector('.error-msg');
      if (!errorElem) {
        errorElem = document.createElement('span');
        errorElem.className = 'error-msg';
        input.parentElement.appendChild(errorElem);
      }
      errorElem.textContent = message;
    }

    function clearFieldError(input) {
      input.classList.remove('input-error');
      const errorElem = input.parentElement.querySelector('.error-msg');
      if (errorElem) {
        errorElem.remove();
      }
    }

    function validateEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  }

  // --- 6. 1-Click Copy Email to Clipboard ---
  function initEmailCopy() {
    const copyBtn = document.getElementById('btn-copy-email');
    if (!copyBtn) return;

    copyBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const emailText = 'surtibatul4@gmail.com';

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(emailText).then(() => {
          showToast('Email address copied to clipboard: ' + emailText);
        }).catch(() => {
          fallbackCopy(emailText);
        });
      } else {
        fallbackCopy(emailText);
      }
    });

    function fallbackCopy(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showToast('Email address copied to clipboard: ' + text);
      } catch (err) {
        window.location.href = 'mailto:' + text;
      }
      document.body.removeChild(textarea);
    }
  }

  // --- 7. Interactive Skill Card 3D Tilt Effect ---
  function initSkillCardsTilt() {
    const cards = document.querySelectorAll('.skill-card, .service-card, .why-card');

    cards.forEach(card => {
      card.addEventListener('mousemove', function (e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -6;
        const rotateY = ((x - centerX) / centerX) * 6;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', function () {
        card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
      });
    });

    // Skill Category Filtering
    const skillTabs = document.querySelectorAll('.skill-tab-btn');
    const skillCards = document.querySelectorAll('.skill-card');

    skillTabs.forEach(tab => {
      tab.addEventListener('click', function () {
        skillTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        const cat = this.getAttribute('data-skill-cat');

        skillCards.forEach(card => {
          const cardCat = card.getAttribute('data-cat');
          if (cat === 'all' || cardCat.includes(cat)) {
            card.style.display = 'flex';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 200);
          }
        });
      });
    });
  }

  // --- 8. Animated Stat Counters ---
  function initStatCounters() {
    const counters = document.querySelectorAll('.stat-number');
    let animated = false;

    function runCounters() {
      if (animated) return;

      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 1400;
        const stepTime = 25;
        const totalSteps = duration / stepTime;
        const increment = target / totalSteps;
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target + (counter.getAttribute('data-suffix') || '');
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '');
          }
        }, stepTime);
      });

      animated = true;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          runCounters();
        }
      });
    }, { threshold: 0.3 });

    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
      observer.observe(statsSection);
    }
  }

  // --- 9. Scroll to Top Button ---
  function initScrollToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 10. Smooth Scroll for Internal Anchors ---
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // --- 11. Subtle Mouse Cursor Follower (Rose-Gold Glow) ---
  function initCursorGlow() {
    // Only run on non-touch desktop screens
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    let mouseX = -100;
    let mouseY = -100;
    let glowX = -100;
    let glowY = -100;

    window.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }, { passive: true });

    function renderGlow() {
      glowX += (mouseX - glowX) * 0.14;
      glowY += (mouseY - glowY) * 0.14;
      glow.style.transform = `translate3d(${glowX - 160}px, ${glowY - 160}px, 0)`;
      requestAnimationFrame(renderGlow);
    }

    renderGlow();
  }

  // --- Utility: Global Toast Notification ---
  function showToast(message) {
    let toast = document.getElementById('site-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'site-toast';
      toast.className = 'toast-alert';
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }

  window.showToast = showToast;
})();
