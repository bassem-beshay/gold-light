/**
 * ========================================================
 * AURA LUXE - World-Class 3D Product Showcase & Scroll Story
 * Official WhatsApp: 01034380360 (+201034380360)
 * ========================================================
 */

// 1. GLOBAL WHATSAPP & STORE CONFIGURATION
const STORE_CONFIG = {
  whatsappNumber: '201034380360', 
  displayNumber: '01034380360',
  brandName: 'GOLD LIGHT',
  currency: 'ج.م',
  defaultInquiryMessage: 'مرحباً، أود الاستفسار عن مجموعة مصابيح إديسون الفاخرة من GOLD LIGHT وعروض الأسعار المتاحة.',
  packageOfferMessage: 'مرحباً، أود الاستفسار عن عرض الباقة الكاملة (7 مصابيح إديسون الفاخرة) من GOLD LIGHT مع الشحن والتوصيل.'
};

// 2. THE 7 PRODUCT DEFINITIONS (Exact 7 images from project directory)
const PRODUCTS_DATA = [
  {
    id: 1,
    name: 'Gold Light Classic Pear A60',
    model: 'A60-VINTAGE',
    category: 'globes',
    image: 'Screenshot 2026-11-01 185356.png',
    badge: 'الأكثر طلباً',
    price: 'سعر خاص للطلب',
    power: '4W LED (=40W)',
    colorTemp: '2200K دافئ جداً',
    base: 'E27 قياسي',
    dimensions: '60 × 108 ملم',
    lumens: '380 لومن',
    lifetime: '25,000 ساعة',
    glass: 'Amber Tinted Glass',
    description: 'المصباح الكمثري الكلاسيكي الأكثر شهرة عالمياً بتصميم جذاب وزجاج كهرماني يعكس دفء الحكايات القديمة، مناسب للأبجورات والمصابيح المعلقة والأركان الدافئة.'
  },
  {
    id: 2,
    name: 'Gold Light ST64 Squirrel Cage',
    model: 'ST64-PRO',
    category: 'globes',
    image: 'WhatsApp Image 2026-11-01 at 3.25.45 PM.jpeg',
    badge: 'الأيقونة الكلاسيكية',
    price: 'سعر خاص للطلب',
    power: '6W LED (=60W)',
    colorTemp: '2200K ذهبي',
    base: 'E27 قياسي',
    dimensions: '64 × 142 ملم',
    lumens: '450 لومن',
    lifetime: '25,000 ساعة',
    glass: 'Hand-blown Golden Glass',
    description: 'تحفة إديسون الشهيرة بشكل قطرة الدمعة التراثية مع خطوط فتيل عمودية متوازية تنثر خيوطاً ضوئية ساحرة فوق طاولات الطعام ومقاهي النخبة.'
  },
  {
    id: 3,
    name: 'Gold Light C35T Flame-Tip',
    model: 'C35T-FLAME',
    category: 'candles',
    image: 'WhatsApp Image 2026-11-01 at 3.25.45 PM (1).jpeg',
    badge: 'شعلة الشمعدان',
    price: 'سعر خاص للطلب',
    power: '4W LED (=35W)',
    colorTemp: '2200K شمعي دافئ',
    base: 'E14 / E27 متوفر',
    dimensions: '35 × 120 ملم',
    lumens: '320 لومن',
    lifetime: '25,000 ساعة',
    glass: 'Curved Flame Amber Glass',
    description: 'قمة الأناقة للنجف ووحدات الإضاءة الكريستالية والمودرن، يأتي برأس منحنٍ كشعلة شمعة حية تمنح فخامة استثنائية لأسقف الصالونات.'
  },
  {
    id: 4,
    name: 'Gold Light C35 Torpedo Candle',
    model: 'C35-TORPEDO',
    category: 'candles',
    image: 'WhatsApp Image 2026-11-01 at 3.25.45 PM (2).jpeg',
    badge: 'مودرن كلاسيك',
    price: 'سعر خاص للطلب',
    power: '4W LED (=35W)',
    colorTemp: '2200K دافئ',
    base: 'E27 / E14 متوفر',
    dimensions: '35 × 100 ملم',
    lumens: '350 لومن',
    lifetime: '25,000 ساعة',
    glass: 'Smooth Torpedo Amber Glass',
    description: 'تصميم طوربيد انسيابي مدبب يوزع الإشعاع الضوئي بزوايا 360 درجة، مثالي للأبجورات الرخامية والمعدنية والشمعدانات الجدارية الفاخرة.'
  },
  {
    id: 5,
    name: 'Gold Light Grand Sphere Globe G125',
    model: 'G125-MAX',
    category: 'globes',
    image: 'WhatsApp Image 2026-11-01 at 3.25.45 PM (3).jpeg',
    badge: 'القطعة الملكية العملاقة',
    price: 'سعر خاص للطلب',
    power: '8W LED (=80W)',
    colorTemp: '2200K كهرماني عميق',
    base: 'E27 قياسي',
    dimensions: '125 × 175 ملم',
    lumens: '600 لومن',
    lifetime: '25,000 ساعة',
    glass: 'Grand Spherical Amber Glass',
    description: 'الكرة الزجاجية العملاقة بقطر 125 مم! مصباح ملكي يمثل بحد ذاته عملاً فنياً معلقاً يلفت كل الأنظار، مثالي كمركز جذب فوق جزر المطابخ وطاولات الاجتماعات.'
  },
  {
    id: 6,
    name: 'Gold Light T45 Architectural Capsule',
    model: 'T45-CAPSULE',
    category: 'tubular',
    image: 'WhatsApp Image 2026-11-01 at 3.25.45 PM (4).jpeg',
    badge: 'معماري نقي',
    price: 'سعر خاص للطلب',
    power: '4W LED (=40W)',
    colorTemp: '2200K دافئ',
    base: 'E27 قياسي',
    dimensions: '45 × 110 ملم',
    lumens: '380 لومن',
    lifetime: '25,000 ساعة',
    glass: 'Tubular Amber Glass',
    description: 'شكل أسطواني كبسولي عصري يندمج بانسيابية مع التركيبات الصناعية والمعدنية النحيفة والخشب الطبيعي، يضفي لمسة عصرية دافئة وفائقة الرقي.'
  },
  {
    id: 7,
    name: 'Gold Light T300 Grand Tubular Column',
    model: 'T300-SPIRAL',
    category: 'tubular',
    image: 'WhatsApp Image 2026-11-01 at 3.25.45 PM (6).jpeg',
    badge: 'العمود الهندسي الفريد',
    price: 'سعر خاص للطلب',
    power: '6W LED (=60W)',
    colorTemp: '2200K كهرماني نقي',
    base: 'E27 قياسي',
    dimensions: '30 × 300 ملم',
    lumens: '480 لومن',
    lifetime: '25,000 ساعة',
    glass: 'Extra-Long Architectural Glass',
    description: 'أنبوب إضاءة استثنائي فائق الطول (30 سم) مع فتيل هندسي متقاطع (Zig-Zag X-Filament). يشكل عموداً من الضوء المعلق الذي لا يتكرر في فخامته وندرته.'
  }
];

// Helper: Build WhatsApp URL
function buildWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${STORE_CONFIG.whatsappNumber}?text=${encoded}`;
}

document.addEventListener('DOMContentLoaded', () => {

  // Initialize year in footer
  const currentYearEl = document.getElementById('currentYear');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 1. CINEMATIC SCROLL STORY HOOK (3-Step Storytelling)
  initScrollStoryHook();

  // 2. 3D INTERACTION STRICTLY ON BULBS (Cards stay stable)
  init3DBulbSpinEngine();

  // 3. 3D LIGHT STUDIO (Dimmer Controller)
  initStudioDimmerEngine();

  // 4. 3D PRODUCT MODAL INSPECTOR
  initProduct3DModal();

  // 5. PRODUCT FILTER TABS
  initFilterTabs();

  // 6. HEADER SCROLL & MOBILE MENU
  initHeaderAndMobileNav();

  // 7. AMBIENT PARTICLES
  initAmbientParticles();
});

/* ========================================================
   1. CINEMATIC 4-ACT STORY HOOK: THE BIRTH OF LIGHT
   Act 1: Hand-Blown Empty Glass Vessel
   Act 2: Filament Assembly Insertion
   Act 3: Electrical Spark & 2200K Ignition
   Act 4: 360° Radiant Photon Explosion & Room Illumination
   ======================================================== */
function initScrollStoryHook() {
  const storySection = document.getElementById('storyHookSection');
  if (!storySection) return;

  const viewport = document.getElementById('penthouseViewport');
  const zoneKitchen = document.getElementById('zoneKitchen');
  const zoneTv = document.getElementById('zoneTv');
  const zoneSalon = document.getElementById('zoneSalon');
  const fullLitLayer = document.getElementById('penthouseFullLitLayer');
  const roomWarmBloom = document.getElementById('roomWarmBloom');

  const mDots = document.querySelectorAll('.m-dot');
  const scrollHint = document.getElementById('storyScrollHint');
  const exploreWrap = document.getElementById('storyExploreWrap');
  const exploreBtn = document.getElementById('storyExploreBtn');
  const mainSite = document.getElementById('mainSiteWrapper');
  const floatingWa = document.querySelector('.floating-wa-wrap');

  if (exploreBtn && mainSite) {
    exploreBtn.addEventListener('click', () => {
      mainSite.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ========================================================
  // REAL-TIME PARTICLE & GOLDEN STARDUST CANVAS (100vw)
  // ========================================================
  const canvas = document.getElementById('cinematicStoryCanvas');
  const ctx = canvas ? canvas.getContext('2d') : null;

  let cWidth = (canvas.width = window.innerWidth);
  let cHeight = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    if (canvas) {
      cWidth = canvas.width = window.innerWidth;
      cHeight = canvas.height = window.innerHeight;
    }
  }, { passive: true });

  let currentPhase = 1;
  const particles = [];
  const ambientMotes = [];

  for (let i = 0; i < 40; i++) {
    ambientMotes.push({
      x: Math.random() * cWidth,
      y: Math.random() * cHeight,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.8,
      baseAlpha: Math.random() * 0.4 + 0.1
    });
  }

  function createSparks(count, centerX, centerY, speedMult = 1, colorMode = 'spark') {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = (Math.random() * 4.5 + 1.8) * speedMult;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - (colorMode === 'spark' ? 1.8 : 0),
        size: Math.random() * 2.8 + 1,
        life: 1.0,
        decay: Math.random() * 0.024 + 0.015,
        colorMode: colorMode
      });
    }
  }

  function animateParticles() {
    if (!ctx) return;
    ctx.clearRect(0, 0, cWidth, cHeight);

    const motesIntensity = currentPhase === 4 ? 0.95 : (currentPhase === 3 ? 0.7 : (currentPhase === 2 ? 0.45 : 0.2));

    for (let j = 0; j < ambientMotes.length; j++) {
      const m = ambientMotes[j];
      m.x += m.vx;
      m.y += m.vy;

      if (m.x < 0) m.x = cWidth;
      if (m.x > cWidth) m.x = 0;
      if (m.y < 0) m.y = cHeight;
      if (m.y > cHeight) m.y = 0;

      ctx.save();
      ctx.globalAlpha = m.baseAlpha * motesIntensity;
      ctx.fillStyle = currentPhase >= 2 ? '#ffd88b' : '#9ca3af';
      ctx.shadowColor = currentPhase >= 2 ? '#f59e0b' : 'transparent';
      ctx.shadowBlur = currentPhase >= 2 ? 8 : 0;
      ctx.beginPath();
      ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.08;
      p.life -= p.decay;

      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.life > 0.65 ? '#ffffff' : (p.life > 0.35 ? '#ffd88b' : '#f59e0b');
      ctx.shadowColor = '#f59e0b';
      ctx.shadowBlur = 10;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    requestAnimationFrame(animateParticles);
  }
  requestAnimationFrame(animateParticles);

  // ========================================================
  // SCROLL-DRIVEN ARCHITECTURAL LIGHTING PROGRESSION
  // ========================================================
  let lastKitchenTrigger = false;
  let lastTvTrigger = false;
  let lastSalonTrigger = false;

  function handleVillaScroll() {
    const rect = storySection.getBoundingClientRect();
    const scrollDist = -rect.top;
    const maxScroll = storySection.offsetHeight - window.innerHeight;

    // Toggle Floating WhatsApp
    if (floatingWa) {
      if (scrollDist >= maxScroll - 60) {
        floatingWa.classList.add('visible');
      } else {
        floatingWa.classList.remove('visible');
      }
    }

    if (maxScroll <= 0) return;

    const progress = Math.min(Math.max(scrollDist / maxScroll, 0), 1);

    // Scroll Hint Disappears
    if (scrollHint) {
      if (progress > 0.03) {
        scrollHint.classList.add('hidden');
      } else {
        scrollHint.classList.remove('hidden');
      }
    }

    // ----------------------------------------------------
    // PHASE 1: THE DARK CANVASS (0.00 -> 0.22)
    // ----------------------------------------------------
    if (progress < 0.22) {
      currentPhase = 1;

      if (zoneKitchen) zoneKitchen.style.opacity = '0';
      if (zoneTv) zoneTv.style.opacity = '0';
      if (zoneSalon) zoneSalon.style.opacity = '0';
      if (fullLitLayer) fullLitLayer.style.opacity = '0';
      if (roomWarmBloom) roomWarmBloom.style.opacity = '0';
      if (exploreWrap) exploreWrap.classList.remove('visible');

      setActiveDot(1);

    // ----------------------------------------------------
    // PHASE 2: AMERICAN KITCHEN ISLAND LIGHTS UP (0.22 -> 0.48)
    // ----------------------------------------------------
    } else if (progress >= 0.22 && progress < 0.48) {
      currentPhase = 2;
      const subProg = Math.min(1, (progress - 0.22) / 0.22); // 0.0 -> 1.0

      if (zoneKitchen) zoneKitchen.style.opacity = `${subProg}`;
      if (zoneTv) zoneTv.style.opacity = '0';
      if (zoneSalon) zoneSalon.style.opacity = '0';
      if (fullLitLayer) fullLitLayer.style.opacity = '0';
      if (roomWarmBloom) roomWarmBloom.style.opacity = `${subProg * 0.25}`;

      if (!lastKitchenTrigger) {
        lastKitchenTrigger = true;
        createSparks(28, cWidth * 0.24, cHeight * 0.38, 2.6, 'spark');
      }

      if (exploreWrap) exploreWrap.classList.remove('visible');
      setActiveDot(2);

    // ----------------------------------------------------
    // PHASE 3: TV MEDIA UNIT LIGHTS UP (0.48 -> 0.74)
    // ----------------------------------------------------
    } else if (progress >= 0.48 && progress < 0.74) {
      currentPhase = 3;
      const subProg = Math.min(1, (progress - 0.48) / 0.22);

      if (zoneKitchen) zoneKitchen.style.opacity = '1';
      if (zoneTv) zoneTv.style.opacity = `${subProg}`;
      if (zoneSalon) zoneSalon.style.opacity = '0';
      if (fullLitLayer) fullLitLayer.style.opacity = '0';
      if (roomWarmBloom) roomWarmBloom.style.opacity = `${0.25 + subProg * 0.35}`;

      if (!lastTvTrigger) {
        lastTvTrigger = true;
        createSparks(28, cWidth * 0.55, cHeight * 0.42, 2.8, 'spark');
      }

      if (exploreWrap) exploreWrap.classList.remove('visible');
      setActiveDot(3);

    // ----------------------------------------------------
    // PHASE 4: GRAND SALON & FULL ROOM FLOOD (0.74 -> 1.0)
    // ----------------------------------------------------
    } else {
      currentPhase = 4;
      const subProg = Math.min(1, (progress - 0.74) / 0.22);

      if (zoneKitchen) zoneKitchen.style.opacity = '1';
      if (zoneTv) zoneTv.style.opacity = '1';
      if (zoneSalon) zoneSalon.style.opacity = '1';
      if (fullLitLayer) fullLitLayer.style.opacity = `${subProg}`;
      if (roomWarmBloom) roomWarmBloom.style.opacity = `${0.6 + subProg * 0.4}`;

      if (!lastSalonTrigger) {
        lastSalonTrigger = true;
        createSparks(38, cWidth * 0.78, cHeight * 0.38, 3.2, 'burst');
        createSparks(80, cWidth / 2, cHeight / 2, 4.5, 'burst');
      }

      if (exploreWrap) {
        exploreWrap.classList.add('visible');
      }

      setActiveDot(4);
    }
  }

  function setActiveDot(num) {
    mDots.forEach(d => {
      const sNum = parseInt(d.getAttribute('data-step'));
      d.classList.toggle('active', sNum === num);
    });
  }

  window.addEventListener('scroll', handleVillaScroll, { passive: true });
  handleVillaScroll();

  // ========================================================
  // 3D PARALLAX PERSPECTIVE ON MOUSE / TOUCH
  // ========================================================
  let targetShiftX = 0;
  let targetShiftY = 0;
  let curShiftX = 0;
  let curShiftY = 0;

  function updateRoomParallax(clientX, clientY) {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const dx = (clientX - cx) / cx;
    const dy = (clientY - cy) / cy;

    targetShiftX = dx * 14;
    targetShiftY = dy * 8;
  }

  window.addEventListener('mousemove', (e) => {
    updateRoomParallax(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      updateRoomParallax(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('mouseleave', () => {
    targetShiftX = 0;
    targetShiftY = 0;
  });

  function renderParallaxLoop() {
    curShiftX += (targetShiftX - curShiftX) * 0.08;
    curShiftY += (targetShiftY - curShiftY) * 0.08;

    if (viewport) {
      const layers = viewport.querySelectorAll('.penthouse-layer');
      layers.forEach(l => {
        l.style.transform = `scale(1.025) translate(${(-curShiftX).toFixed(1)}px, ${(-curShiftY).toFixed(1)}px)`;
      });
    }

    requestAnimationFrame(renderParallaxLoop);
  }
  requestAnimationFrame(renderParallaxLoop);

  // Click on the scene creates localized sparks
  if (viewport) {
    viewport.addEventListener('click', (e) => {
      createSparks(24, e.clientX, e.clientY, 2.8, 'spark');
    });
  }
}

/* ========================================================
   2. 3D INTERACTION STRICTLY ON BULBS (Cards stay stable)
   ======================================================== */
function init3DBulbSpinEngine() {
  
  // Hero Section 3D Bulb
  const heroBulbStage = document.getElementById('heroBulbStage');
  const heroLamp = document.getElementById('heroLampObject');
  const heroSheen = document.getElementById('heroLampSheen');

  if (heroBulbStage && heroLamp) {
    let isMoving = false;

    function handleBulbMove(clientX, clientY) {
      const rect = heroBulbStage.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Rotate Bulb strictly on 3D axes (up to +/- 28 deg for realistic spin)
      const rotY = ((x - centerX) / centerX) * 28;
      const rotX = ((y - centerY) / centerY) * -14;

      heroLamp.style.transform = `perspective(1000px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) scale(1.05)`;

      if (heroSheen) {
        const sheenX = ((x / rect.width) * 100).toFixed(1);
        const sheenY = ((y / rect.height) * 100).toFixed(1);
        heroSheen.style.background = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255, 216, 139, 0.35) 0%, transparent 60%)`;
      }
    }

    heroBulbStage.addEventListener('mousemove', (e) => {
      handleBulbMove(e.clientX, e.clientY);
    });

    heroBulbStage.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        handleBulbMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    heroBulbStage.addEventListener('mouseleave', () => {
      heroLamp.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
    });

    heroBulbStage.addEventListener('touchend', () => {
      heroLamp.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
    });
  }
}

/* ========================================================
   3. QUICK AMBIENT DIMMER (HEADER TOGGLE)
   ======================================================== */
function initStudioDimmerEngine() {
  const root = document.documentElement;
  const quickDimmerBtn = document.getElementById('quickDimmerBtn');

  if (quickDimmerBtn) {
    let isHigh = true;
    quickDimmerBtn.addEventListener('click', () => {
      isHigh = !isHigh;
      const targetVal = isHigh ? 85 : 35;
      const normalized = targetVal / 100;
      root.style.setProperty('--dimmer-level', normalized);
      root.style.setProperty('--bulb-filter-brightness', (0.65 + normalized * 0.6).toFixed(2));
      
      const statusText = quickDimmerBtn.querySelector('.dimmer-status');
      if (statusText) {
        statusText.textContent = isHigh ? 'توهج ذهبي' : 'توهج شاعري';
      }
    });
  }
}

/* ========================================================
   4. 3D PRODUCT MODAL INSPECTOR
   ======================================================== */
function initProduct3DModal() {
  const modal = document.getElementById('modal3D');
  const closeBtn = document.getElementById('modalCloseBtn');
  const inspectBtns = document.querySelectorAll('.lux-inspect-trigger');

  const modalImg = document.getElementById('modalBulbImg');
  const modalBadge = document.getElementById('modalBadge');
  const modalTitle = document.getElementById('modalTitle');
  const modalModel = document.getElementById('modalModelCode');
  const modalDesc = document.getElementById('modalDesc');
  const modalSpecsList = document.getElementById('modalSpecsList');
  const modalPrice = document.getElementById('modalPrice');
  const modalWaBtn = document.getElementById('modalWaBtn');
  const modalLampActor = document.getElementById('modalLampActor');
  const modalSheen = document.getElementById('modalSheen');

  function openModal(productIndex) {
    const product = PRODUCTS_DATA[productIndex];
    if (!product) return;

    modalImg.src = product.image;
    modalImg.alt = product.name;
    modalBadge.textContent = product.badge;
    modalTitle.textContent = product.name;
    modalModel.textContent = `MODEL: ${product.model} | BASE: ${product.base}`;
    modalDesc.textContent = product.description;
    modalPrice.textContent = product.price;

    modalSpecsList.innerHTML = `
      <div class="modal-spec-item">
        <span class="m-spec-title">القدرة الكهربائية</span>
        <span class="m-spec-value">${product.power}</span>
      </div>
      <div class="modal-spec-item">
        <span class="m-spec-title">حرارة اللون</span>
        <span class="m-spec-value">${product.colorTemp}</span>
      </div>
      <div class="modal-spec-item">
        <span class="m-spec-title">نوع القاعدة</span>
        <span class="m-spec-value">${product.base}</span>
      </div>
      <div class="modal-spec-item">
        <span class="m-spec-title">الأبعاد الدقيقة</span>
        <span class="m-spec-value">${product.dimensions}</span>
      </div>
      <div class="modal-spec-item">
        <span class="m-spec-title">شدة الإضاءة</span>
        <span class="m-spec-value">${product.lumens}</span>
      </div>
      <div class="modal-spec-item">
        <span class="m-spec-title">العمر الافتراضي</span>
        <span class="m-spec-value">${product.lifetime}</span>
      </div>
    `;

    const msg = `مرحباً، أود طلب مصباح ${product.name} (كود: ${product.model}). يُرجى تزويدي بكافة التفاصيل وإتمام الطلب.`;
    modalWaBtn.href = buildWhatsAppUrl(msg);

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  inspectBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = parseInt(btn.getAttribute('data-index'));
      openModal(index);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });

  // Modal Bulb 3D spin on mousemove
  const modalChamber = document.querySelector('.modal-stage-chamber');
  if (modalChamber && modalLampActor) {
    modalChamber.addEventListener('mousemove', (e) => {
      const rect = modalChamber.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotY = ((x - rect.width / 2) / (rect.width / 2)) * 26;
      const rotX = ((y - rect.height / 2) / (rect.height / 2)) * -14;

      modalLampActor.style.transform = `perspective(1000px) rotateY(${rotY.toFixed(2)}deg) rotateX(${rotX.toFixed(2)}deg) scale(1.05)`;
    });

    modalChamber.addEventListener('mouseleave', () => {
      modalLampActor.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)';
    });
  }
}

/* ========================================================
   5. PRODUCT FILTER TABS
   ======================================================== */
function initFilterTabs() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.pro-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ========================================================
   6. HEADER SCROLL & MOBILE MENU
   ======================================================== */
function initHeaderAndMobileNav() {
  const header = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      const isOpen = mobileMenu.classList.contains('open');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
}

/* ========================================================
   7. AMBIENT WARM PARTICLES CANVAS
   ======================================================== */
function initAmbientParticles() {
  const canvas = document.getElementById('particlesCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  const particleCount = 40;
  const particles = [];

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedY: Math.random() * 0.4 + 0.15,
      speedX: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.y -= p.speedY;
      p.x += p.speedX;

      if (p.y < -10) {
        p.y = height + 10;
        p.x = Math.random() * width;
      }
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245, 175, 90, ${p.alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(230, 175, 93, 0.7)';
      ctx.fill();
    });

    requestAnimationFrame(render);
  }

  render();
}
