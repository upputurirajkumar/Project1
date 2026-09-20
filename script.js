/**
 * NO-CHURN TELECOM V2 — PORTFOLIO RUNTIME ENGINE
 * Pure Vanilla JavaScript | Zero Frameworks | Enterprise Decision Intelligence
 */

(function () {
  'use strict';

  // Check user motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ==========================================================================
     1. SCROLL PROGRESS INDICATOR & STICKY HEADER
     ========================================================================== */
  const progressBar = document.getElementById('scroll-progress');
  const siteNav = document.getElementById('site-nav');
  const backToTopBtn = document.getElementById('back-to-top');

  function handleScrollState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = scrollPercent + '%';
    }

    if (siteNav) {
      if (scrollTop > 40) {
        siteNav.classList.add('scrolled');
      } else {
        siteNav.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScrollState, { passive: true });
  handleScrollState();

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
      });
    });
  }

  /* ==========================================================================
     2. MOBILE NAVIGATION DRAWER
     ========================================================================== */
  const navToggle = document.getElementById('nav-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  function toggleMenu(forceClose) {
    if (!navToggle || !mobileDrawer) return;
    const isOpen = forceClose ? false : navToggle.getAttribute('aria-expanded') !== 'true';
    navToggle.setAttribute('aria-expanded', String(isOpen));
    mobileDrawer.classList.toggle('open', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      toggleMenu();
    });
  }

  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu(true);
    });
  });

  // Close mobile drawer on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      toggleMenu(true);
    }
  });

  /* ==========================================================================
     3. SMOOTH SCROLLING & ACTIVE SECTION HIGHLIGHT
     ========================================================================== */
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');

  function updateActiveNav() {
    const scrollY = window.scrollY + 120;

    sections.forEach(function (current) {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
        mobileLinks.forEach(function (link) {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNav, { passive: true });

  /* ==========================================================================
     4. NUMBER COUNTERS VIA INTERSECTION OBSERVER
     ========================================================================== */
  const counterElements = document.querySelectorAll('[data-counter]');

  function formatNumber(val, decimals) {
    if (decimals > 0) {
      return val.toFixed(decimals) + '%';
    }
    return Math.round(val).toLocaleString();
  }

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    const duration = prefersReducedMotion ? 0 : 1600;

    if (duration === 0) {
      el.textContent = formatNumber(target, decimals);
      return;
    }

    const startTime = performance.now();

    function step(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = target * easeProgress;

      el.textContent = formatNumber(currentVal, decimals);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = formatNumber(target, decimals);
      }
    }

    requestAnimationFrame(step);
  }

  const counterObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.25 }
  );

  counterElements.forEach(function (el) {
    counterObserver.observe(el);
  });

  /* ==========================================================================
     5. EXPANDABLE PIPELINE CARDS
     ========================================================================== */
  const pipelineCards = document.querySelectorAll('.pipeline-card');

  pipelineCards.forEach(function (card) {
    card.addEventListener('click', function () {
      const isExpanded = card.classList.contains('expanded');
      // Optional accordion feel: card.parentElement.querySelectorAll('.pipeline-card').forEach(...)
      card.classList.toggle('expanded', !isExpanded);
      const hint = card.querySelector('.pipeline-expand-hint span');
      if (hint) {
        hint.textContent = !isExpanded ? 'Click to collapse' : 'Click to inspect';
      }
    });

    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  /* ==========================================================================
     6. OBSERVATORY RADIAL GAUGES ANIMATION
     ========================================================================== */
  const radialCircles = document.querySelectorAll('.radial-progress');

  const radialObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const circle = entry.target;
          const targetOffset = circle.getAttribute('data-target-offset');
          if (targetOffset !== null) {
            circle.style.strokeDashoffset = targetOffset;
          }
          observer.unobserve(circle);
        }
      });
    },
    { threshold: 0.3 }
  );

  radialCircles.forEach(function (circle) {
    radialObserver.observe(circle);
  });

  /* ==========================================================================
     7. RETENTION PRIORITY CALCULATOR (STRICT WEIGHTS: 50% / 30% / 20%)
     ========================================================================== */
  const sliderRisk = document.getElementById('slider-risk');
  const sliderCharges = document.getElementById('slider-charges');
  const sliderUrgency = document.getElementById('slider-urgency');

  const valRisk = document.getElementById('val-risk');
  const valCharges = document.getElementById('val-charges');
  const valUrgency = document.getElementById('val-urgency');

  const calcScoreDisplay = document.getElementById('calc-score');
  const calcTierDisplay = document.getElementById('calc-tier');

  function updateRetentionScore() {
    if (!sliderRisk || !sliderCharges || !sliderUrgency) return;

    const risk = parseFloat(sliderRisk.value); // 0.00 to 1.00
    const rawCharges = parseFloat(sliderCharges.value); // $20 to $120
    const urgency = parseFloat(sliderUrgency.value); // 0.00 to 1.00

    // Normalize monthly charges between 0.0 and 1.0 (min $20, max $120)
    const normCharges = Math.max(0, Math.min(1, (rawCharges - 20) / (120 - 20)));

    // Strict formula: 50% Churn Risk + 30% Monthly Charges + 20% Contract Urgency
    const score = (0.50 * risk) + (0.30 * normCharges) + (0.20 * urgency);

    // Update value labels
    if (valRisk) valRisk.textContent = (risk * 100).toFixed(0) + '%';
    if (valCharges) valCharges.textContent = '$' + rawCharges.toFixed(0);
    if (valUrgency) valUrgency.textContent = (urgency * 100).toFixed(0) + '%';

    if (calcScoreDisplay) {
      calcScoreDisplay.textContent = score.toFixed(3);
    }

    if (calcTierDisplay) {
      calcTierDisplay.className = 'calc-result-tier';
      if (score >= 0.65) {
        calcTierDisplay.textContent = 'Tier 1 — Critical Priority';
        calcTierDisplay.classList.add('high');
      } else if (score >= 0.40) {
        calcTierDisplay.textContent = 'Tier 2 — Elevated Priority';
        calcTierDisplay.classList.add('medium');
      } else {
        calcTierDisplay.textContent = 'Tier 3 — Baseline Monitoring';
        calcTierDisplay.classList.add('low');
      }
    }
  }

  if (sliderRisk && sliderCharges && sliderUrgency) {
    sliderRisk.addEventListener('input', updateRetentionScore);
    sliderCharges.addEventListener('input', updateRetentionScore);
    sliderUrgency.addEventListener('input', updateRetentionScore);
    updateRetentionScore();
  }

  /* ==========================================================================
     8. CAMPAIGN SIMULATOR (CAPACITY CONSTRAINED WORKFLOW)
     ========================================================================== */
  const simCapacityInput = document.getElementById('sim-capacity');
  const simCapacityVal = document.getElementById('sim-capacity-val');
  const simStrategySelect = document.getElementById('sim-strategy');

  const simMetricTargeted = document.getElementById('sim-targeted');
  const simMetricRetained = document.getElementById('sim-retained');
  const simMetricSavedMrr = document.getElementById('sim-saved-mrr');
  const simMetricRoi = document.getElementById('sim-roi');

  function runCampaignSimulation() {
    if (!simCapacityInput || !simMetricTargeted) return;

    const capacity = parseInt(simCapacityInput.value, 10);
    const strategy = simStrategySelect ? simStrategySelect.value : 'priority';

    if (simCapacityVal) {
      simCapacityVal.textContent = capacity.toLocaleString() + ' Accounts';
    }

    // Strategy simulation multipliers
    let conversionRate = 0.28;
    let avgMrr = 68.50;

    if (strategy === 'priority') {
      // Balanced priority optimization
      conversionRate = 0.32;
      avgMrr = 74.20;
    } else if (strategy === 'risk') {
      // Raw risk targeting (higher risk, slightly harder save)
      conversionRate = 0.24;
      avgMrr = 65.00;
    } else if (strategy === 'value') {
      // High monthly charges focus
      conversionRate = 0.29;
      avgMrr = 92.40;
    }

    const estimatedRetained = Math.round(capacity * conversionRate);
    const estimatedSavedMonthly = Math.round(estimatedRetained * avgMrr);
    const estAnnualValue = estimatedSavedMonthly * 12;

    simMetricTargeted.textContent = capacity.toLocaleString();
    simMetricRetained.textContent = estimatedRetained.toLocaleString();
    simMetricSavedMrr.textContent = '$' + estimatedSavedMonthly.toLocaleString();
    simMetricRoi.textContent = '$' + Math.round(estAnnualValue / 1000) + 'k/yr';
  }

  if (simCapacityInput) {
    simCapacityInput.addEventListener('input', runCampaignSimulation);
  }
  if (simStrategySelect) {
    simStrategySelect.addEventListener('change', runCampaignSimulation);
  }
  runCampaignSimulation();

  /* ==========================================================================
     9. CUSTOMER RISK UNIVERSE VISUALIZATION (SYNTHETIC SCATTER PLOT)
     ========================================================================== */
  const universeSvg = document.getElementById('universe-svg');
  const inspId = document.getElementById('insp-id');
  const inspSegment = document.getElementById('insp-segment');
  const inspRisk = document.getElementById('insp-risk');
  const inspCharges = document.getElementById('insp-charges');
  const inspContract = document.getElementById('insp-contract');
  const inspPriority = document.getElementById('insp-priority');
  const inspAction = document.getElementById('insp-action');

  // Realistic synthetic customer archetypes for portfolio demonstration
  const syntheticArchetypes = [
    { segment: 'Fiber Multi-Line', chargesRange: [85, 115], contract: 'Month-to-Month', riskBias: 0.75, action: 'VIP 12-Month Rate Guarantee' },
    { segment: 'Fiber Broadband', chargesRange: [65, 85], contract: 'One-Year', riskBias: 0.35, action: 'Speed Tier Upgrade at Current Rate' },
    { segment: 'DSL + Phone Solo', chargesRange: [35, 55], contract: 'Month-to-Month', riskBias: 0.60, action: 'Streaming Bundle Subsidy' },
    { segment: 'Enterprise Connect', chargesRange: [110, 120], contract: 'Two-Year', riskBias: 0.15, action: 'Executive Account Review' },
    { segment: 'Prepaid Wireless', chargesRange: [25, 45], contract: 'Month-to-Month', riskBias: 0.82, action: 'Autopay Incentive + Loyalty Data' },
    { segment: 'Family Shared Plan', chargesRange: [75, 105], contract: 'One-Year', riskBias: 0.42, action: 'Device Protection Credit' }
  ];

  function generateSyntheticUniverse() {
    if (!universeSvg) return;

    // Fixed deterministic pseudo-random seed generator for consistent display
    let seed = 42;
    function random() {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    }

    const svgWidth = 520;
    const svgHeight = 360;
    const padding = 35;
    const count = 48;

    universeSvg.innerHTML = '';

    // Axis grid lines
    const gridGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    gridGroup.setAttribute('opacity', '0.2');

    // Horizontal threshold line
    const hLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    hLine.setAttribute('x1', String(padding));
    hLine.setAttribute('y1', String(svgHeight / 2));
    hLine.setAttribute('x2', String(svgWidth - padding));
    hLine.setAttribute('y2', String(svgHeight / 2));
    hLine.setAttribute('stroke', '#94a3b8');
    hLine.setAttribute('stroke-dasharray', '4,4');
    gridGroup.appendChild(hLine);

    // Vertical threshold line
    const vLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    vLine.setAttribute('x1', String(svgWidth / 2));
    vLine.setAttribute('y1', String(padding));
    vLine.setAttribute('x2', String(svgWidth / 2));
    vLine.setAttribute('y2', String(svgHeight - padding));
    vLine.setAttribute('stroke', '#94a3b8');
    vLine.setAttribute('stroke-dasharray', '4,4');
    gridGroup.appendChild(vLine);
    universeSvg.appendChild(gridGroup);

    // Quadrant label text
    const labelGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    labelGroup.setAttribute('font-size', '10');
    labelGroup.setAttribute('fill', '#64748b');
    labelGroup.setAttribute('font-family', 'monospace');

    const q1 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    q1.setAttribute('x', String(svgWidth - padding - 80));
    q1.setAttribute('y', String(padding + 16));
    q1.textContent = 'HIGH PRIORITY';
    labelGroup.appendChild(q1);

    const q2 = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    q2.setAttribute('x', String(padding + 10));
    q2.setAttribute('y', String(svgHeight - padding - 10));
    q2.textContent = 'LOW RISK / BASE';
    labelGroup.appendChild(q2);
    universeSvg.appendChild(labelGroup);

    const customers = [];

    function selectCustomer(cust) {
      if (!cust) return;
      customers.forEach(function (c) {
        c.element.setAttribute('r', '6');
        c.element.removeAttribute('stroke');
      });
      cust.element.setAttribute('r', '10');
      cust.element.setAttribute('stroke', '#ffffff');
      cust.element.setAttribute('stroke-width', '2.5');

      if (inspId) inspId.textContent = cust.id;
      if (inspSegment) inspSegment.textContent = cust.segment;
      if (inspRisk) inspRisk.textContent = cust.risk;
      if (inspCharges) inspCharges.textContent = cust.charges;
      if (inspContract) inspContract.textContent = cust.contract;
      if (inspPriority) inspPriority.textContent = cust.priority;
      if (inspAction) inspAction.textContent = cust.action;
    }

    for (let i = 0; i < count; i++) {
      const arch = syntheticArchetypes[Math.floor(random() * syntheticArchetypes.length)];
      const idNum = 1000 + Math.floor(random() * 8999);
      const charges = arch.chargesRange[0] + random() * (arch.chargesRange[1] - arch.chargesRange[0]);
      const normCharges = (charges - 20) / 100;
      const risk = Math.max(0.04, Math.min(0.96, arch.riskBias + (random() - 0.5) * 0.35));
      const urgency = arch.contract === 'Month-to-Month' ? 0.85 : arch.contract === 'One-Year' ? 0.45 : 0.15;
      const priority = (0.50 * risk) + (0.30 * normCharges) + (0.20 * urgency);

      // Coordinate mapping: X = Monthly Charges, Y = Risk Probability (inverted for SVG)
      const cx = padding + normCharges * (svgWidth - 2 * padding);
      const cy = (svgHeight - padding) - risk * (svgHeight - 2 * padding);

      let dotColor = '#10b981'; // green (low risk)
      if (risk > 0.65 || priority > 0.65) {
        dotColor = '#ef4444'; // red (high risk/priority)
      } else if (risk > 0.35 || priority > 0.40) {
        dotColor = '#f59e0b'; // amber
      }

      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', cx.toFixed(1));
      dot.setAttribute('cy', cy.toFixed(1));
      dot.setAttribute('r', '6');
      dot.setAttribute('fill', dotColor);
      dot.setAttribute('opacity', '0.85');
      dot.setAttribute('class', 'risk-dot');
      dot.setAttribute('tabindex', '0');
      dot.setAttribute('role', 'button');
      dot.setAttribute('aria-label', `Simulated Customer SYN-${idNum}, Risk: ${(risk * 100).toFixed(0)}%`);

      const customerObj = {
        id: 'SYN-' + idNum,
        segment: arch.segment,
        risk: (risk * 100).toFixed(1) + '%',
        charges: '$' + charges.toFixed(2),
        contract: arch.contract,
        priority: priority.toFixed(3),
        action: arch.action,
        color: dotColor,
        element: dot
      };

      customers.push(customerObj);

      dot.addEventListener('click', function () {
        selectCustomer(customerObj);
      });

      dot.addEventListener('mouseenter', function () {
        selectCustomer(customerObj);
      });

      dot.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectCustomer(customerObj);
        }
      });

      universeSvg.appendChild(dot);
    }

    // Default select first high-priority dot
    if (customers.length > 0) {
      const topPick = customers.find(c => parseFloat(c.priority) > 0.6) || customers[0];
      selectCustomer(topPick);
    }
  }

  generateSyntheticUniverse();

  /* ==========================================================================
     10. PROJECT JOURNEY TIMELINE ANIMATIONS
     ========================================================================== */
  const timelineItems = document.querySelectorAll('.timeline-item');

  const timelineObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.2 }
  );

  timelineItems.forEach(function (item) {
    timelineObserver.observe(item);
  });

})();
