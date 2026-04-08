Here is an enhanced wedding invitation website with robust JavaScript functionality for RSVP management, interactive features, and a beautiful responsive design.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
  <title>Emma & James | Wedding Invitation</title>
  <!-- Google Fonts -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
  <!-- Font Awesome 6 (free icons) -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      background: #faf7f2;
      font-family: 'Inter', sans-serif;
      color: #2e2a28;
      line-height: 1.4;
      scroll-behavior: smooth;
    }

    /* Custom scroll */
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f0e4da;
    }
    ::-webkit-scrollbar-thumb {
      background: #b68b6e;
      border-radius: 10px;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1.5rem;
    }

    /* Hero Section */
    .hero {
      min-height: 85vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background: linear-gradient(135deg, #fff8f0 0%, #f9ede3 100%);
      border-radius: 0 0 4rem 4rem;
      margin-bottom: 3rem;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: "✦";
      font-size: 18rem;
      color: rgba(210, 180, 140, 0.1);
      position: absolute;
      bottom: -5rem;
      right: -4rem;
      font-family: serif;
      pointer-events: none;
    }

    .hero::after {
      content: "✧";
      font-size: 12rem;
      color: rgba(210, 180, 140, 0.1);
      position: absolute;
      top: 2rem;
      left: -2rem;
      font-family: serif;
      pointer-events: none;
    }

    .invitation-card {
      max-width: 780px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(3px);
      padding: 2.8rem 2rem;
      border-radius: 48px;
      box-shadow: 0 25px 45px -12px rgba(0, 0, 0, 0.12);
      border: 1px solid rgba(255, 245, 235, 0.9);
      z-index: 2;
    }

    .subhead {
      font-size: 0.85rem;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: #b47c5e;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .names {
      font-family: 'Playfair Display', serif;
      font-size: 3.8rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      color: #3c2a23;
      margin: 0.5rem 0 0.5rem;
      line-height: 1.2;
    }

    .wedding-date {
      font-size: 1.2rem;
      background: #fff3ea;
      display: inline-block;
      padding: 0.4rem 1.8rem;
      border-radius: 60px;
      margin: 1.2rem 0 1rem;
      font-weight: 500;
      color: #9b6a4c;
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
    }

    .divider {
      width: 70px;
      height: 2px;
      background: #e2cfbc;
      margin: 1.8rem auto;
    }

    .invite-text {
      font-size: 1.05rem;
      color: #4a3b34;
      max-width: 480px;
      margin: 1rem auto;
      line-height: 1.5;
    }

    .btn-rsvp {
      display: inline-block;
      background: #9e7b61;
      color: white;
      padding: 0.9rem 2.5rem;
      border-radius: 60px;
      text-decoration: none;
      font-weight: 600;
      margin-top: 1.8rem;
      transition: all 0.3s ease;
      border: none;
      font-size: 1rem;
      cursor: pointer;
      box-shadow: 0 6px 14px rgba(100, 60, 30, 0.15);
    }

    .btn-rsvp:hover {
      background: #7f5f48;
      transform: translateY(-3px);
      box-shadow: 0 14px 26px -8px rgba(100, 60, 30, 0.3);
    }

    /* Details Cards */
    .details-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      justify-content: center;
      margin: 3rem 0 4rem;
    }

    .info-card {
      background: white;
      flex: 1;
      min-width: 230px;
      padding: 2rem 1.8rem;
      border-radius: 2rem;
      text-align: center;
      transition: all 0.25s;
      border: 1px solid #f0e2d8;
      cursor: default;
    }

    .info-card:hover {
      transform: translateY(-6px);
      border-color: #e6cfc0;
      box-shadow: 0 20px 30px -12px rgba(0, 0, 0, 0.1);
    }

    .info-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: #b47c5e;
    }

    .info-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      font-weight: 600;
      margin-bottom: 0.6rem;
    }

    /* Story & Gallery */
    .story-section {
      background: #fffaf5;
      border-radius: 2rem;
      padding: 2.5rem 2rem;
      margin: 2rem 0 3rem;
      text-align: center;
    }

    .story-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
      margin: 3rem 0;
    }

    .gallery-item {
      background: #f7ede5;
      width: 130px;
      height: 130px;
      border-radius: 32px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: 0.2s;
      cursor: pointer;
      box-shadow: 0 4px 10px rgba(0,0,0,0.02);
      border: 1px solid #f1e2d6;
    }

    .gallery-item i {
      font-size: 2.8rem;
      color: #b98f72;
    }

    .gallery-item span {
      font-size: 0.7rem;
      font-weight: 500;
      color: #8b6d58;
    }

    .gallery-item:hover {
      transform: scale(1.02);
      background: #f9ede3;
      border-color: #dbbca4;
    }

    /* Countdown Timer */
    .countdown {
      background: linear-gradient(120deg, #f7efe8, #fff4ec);
      border-radius: 2rem;
      padding: 2rem 1rem;
      text-align: center;
      margin: 2rem 0 1rem;
    }
    .countdown h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    .timer {
      display: flex;
      justify-content: center;
      gap: 1.8rem;
      flex-wrap: wrap;
    }
    .timer-block {
      background: white;
      border-radius: 1.5rem;
      padding: 0.8rem 1.2rem;
      min-width: 85px;
      box-shadow: 0 6px 12px rgba(0,0,0,0.03);
    }
    .timer-number {
      font-size: 2rem;
      font-weight: 800;
      font-family: 'Playfair Display', serif;
      color: #9e7b61;
    }
    .timer-label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }

    /* Modal */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(30, 20, 15, 0.8);
      backdrop-filter: blur(5px);
      align-items: center;
      justify-content: center;
      z-index: 1000;
    }

    .modal-content {
      background: #fffdf9;
      max-width: 550px;
      width: 90%;
      padding: 2rem 2rem;
      border-radius: 2rem;
      position: relative;
      box-shadow: 0 30px 40px rgba(0, 0, 0, 0.2);
      border: 1px solid #f3e4da;
      animation: fadeUp 0.3s ease;
      max-height: 90vh;
      overflow-y: auto;
    }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px);}
      to { opacity: 1; transform: translateY(0);}
    }

    .close-modal {
      position: absolute;
      right: 1.3rem;
      top: 1rem;
      font-size: 1.8rem;
      cursor: pointer;
      color: #b68b6e;
      transition: 0.2s;
    }
    .close-modal:hover { color: #7f5f48; }

    .form-group {
      margin-bottom: 1.2rem;
      text-align: left;
    }
    .form-group label {
      font-weight: 600;
      margin-bottom: 0.4rem;
      display: block;
      font-size: 0.85rem;
      color: #5f4a3c;
    }
    .form-group input, .form-group select {
      width: 100%;
      padding: 0.8rem 1rem;
      border-radius: 2rem;
      border: 1px solid #e2cfc2;
      background: white;
      font-family: 'Inter', sans-serif;
      outline: none;
      transition: 0.2s;
    }
    .form-group input:focus, .form-group select:focus {
      border-color: #b98f72;
      box-shadow: 0 0 0 2px rgba(185, 143, 114, 0.2);
    }
    .submit-rsvp {
      background: #9e7b61;
      color: white;
      border: none;
      padding: 0.9rem;
      width: 100%;
      border-radius: 3rem;
      font-weight: 700;
      font-size: 1rem;
      margin-top: 0.5rem;
      cursor: pointer;
      transition: 0.2s;
    }
    .confirmation-message {
      background: #e9dfd7;
      border-radius: 2rem;
      padding: 1rem;
      text-align: center;
      margin-top: 1rem;
      font-size: 0.9rem;
      display: none;
    }
    /* Admin summary panel */
    .admin-panel {
      background: #fff7f0;
      border-radius: 2rem;
      padding: 1.5rem;
      margin-top: 3rem;
      border: 1px solid #f0e2d8;
    }
    .admin-panel h4 {
      font-family: 'Playfair Display', serif;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
    }
    .rsvp-summary {
      margin-top: 1rem;
      font-size: 0.9rem;
      max-height: 200px;
      overflow-y: auto;
      background: #fff;
      border-radius: 1rem;
      padding: 1rem;
    }
    .rsvp-item {
      border-bottom: 1px solid #eee;
      padding: 0.6rem 0;
    }
    footer {
      text-align: center;
      margin-top: 3rem;
      padding: 2rem 0 1.5rem;
      border-top: 1px solid #f0e2d8;
      color: #8f786a;
    }
    @media (max-width: 680px) {
      .names { font-size: 2.5rem; }
      .timer-block { min-width: 65px; padding: 0.5rem 0.8rem; }
      .timer-number { font-size: 1.6rem; }
    }
  </style>
</head>
<body>

<div class="hero">
  <div class="invitation-card">
    <div class="subhead">THE WEDDING OF</div>
    <div class="names">Emma Richardson<br>&<br>James Chen</div>
    <div class="wedding-date"><i class="fas fa-calendar-alt" style="margin-right: 8px;"></i> Saturday, September 20, 2026</div>
    <div class="divider"></div>
    <div class="invite-text">
      With hearts full of joy, we invite you to celebrate our love story.
    </div>
    <button class="btn-rsvp" id="openRsvpBtn"><i class="fas fa-envelope" style="margin-right: 8px;"></i> RSVP Now</button>
  </div>
</div>

<div class="container">
  <div class="details-grid">
    <div class="info-card"><div class="info-icon"><i class="fas fa-church"></i></div><h3>Ceremony & Reception</h3><p>Saturday, Sep 20, 2026<br>4:00 PM – 11:00 PM</p></div>
    <div class="info-card"><div class="info-icon"><i class="fas fa-map-marker-alt"></i></div><h3>The Willow Estate</h3><p>1209 Lavender Lane, Sonoma, CA<br>Garden & Grand Ballroom</p></div>
    <div class="info-card"><div class="info-icon"><i class="fas fa-tshirt"></i></div><h3>Attire</h3><p>Garden Formal · Spring florals<br>Comfortable dancing shoes</p></div>
  </div>

  <div class="story-section">
    <h2><i class="fas fa-heart" style="color: #b98f72;"></i> Our Journey</h2>
    <div class="story-text">
      <p>From a rainy bookshop in Portland to hiking the Scottish Highlands, every step brought us closer. On September 20th, 2026, we begin our greatest adventure. We'd be honored to have you witness our vows and celebrate love, laughter, and happily ever after.</p>
      <p style="margin-top: 1rem;">— Emma & James</p>
    </div>
  </div>

  <!-- Countdown Timer (JavaScript powered) -->
  <div class="countdown" id="countdownSection">
    <h3><i class="far fa-hourglass-half"></i> Counting Down to "I Do"</h3>
    <div class="timer" id="timer">
      <div class="timer-block"><div class="timer-number" id="days">00</div><div class="timer-label">Days</div></div>
      <div class="timer-block"><div class="timer-number" id="hours">00</div><div class="timer-label">Hours</div></div>
      <div class="timer-block"><div class="timer-number" id="minutes">00</div><div class="timer-label">Mins</div></div>
      <div class="timer-block"><div class="timer-number" id="seconds">00</div><div class="timer-label">Secs</div></div>
    </div>
  </div>

  <!-- Gallery -->
  <div class="gallery">
    <div class="gallery-item" data-moment="Engagement"><i class="fas fa-ring"></i><span>Engagement</span></div>
    <div class="gallery-item" data-moment="Save the Date"><i class="fas fa-calendar-check"></i><span>Save Date</span></div>
    <div class="gallery-item" data-moment="First Dance"><i class="fas fa-music"></i><span>First Dance</span></div>
    <div class="gallery-item" data-moment="Flowers"><i class="fas fa-seedling"></i><span>Florals</span></div>
    <div class="gallery-item" data-moment="Cake"><i class="fas fa-cake-candles"></i><span>Sweet Treat</span></div>
  </div>

  <!-- RSVP Admin Panel / Guest list summary (dynamic JS) -->
  <div class="admin-panel" id="adminPanel">
    <h4 id="toggleSummary"><i class="fas fa-users"></i> Guest RSVP Summary <i class="fas fa-chevron-down" style="font-size: 0.8rem;"></i></h4>
    <div id="rsvpSummaryList" class="rsvp-summary" style="display: none;">
      <p style="text-align: center; color: #a28d7a;">Loading responses...</p>
    </div>
  </div>
</div>

<footer>
  <p><i class="fas fa-feather-alt"></i> Emma & James — 20.09.2026 — Love, Dinner & Dancing <i class="fas fa-feather-alt"></i></p>
</footer>

<!-- RSVP Modal -->
<div id="rsvpModal" class="modal">
  <div class="modal-content">
    <span class="close-modal" id="closeModalBtn">&times;</span>
    <h2><i class="fas fa-pen-alt"></i> Kindly RSVP</h2>
    <p style="margin-bottom: 1rem;">Please let us know if you'll join our celebration</p>
    <form id="rsvpForm">
      <div class="form-group"><label>Full name *</label><input type="text" id="guestName" placeholder="e.g. Taylor Johnson" required></div>
      <div class="form-group"><label>Email address</label><input type="email" id="guestEmail" placeholder="hello@example.com"></div>
      <div class="form-group"><label>Attendance *</label><select id="attendance" required><option value="" disabled selected>— Select —</option><option value="joyfully accepts">🎉 Joyfully Accepts</option><option value="declines with regret">💔 Declines with regret</option></select></div>
      <div class="form-group"><label>Number of guests (including you)</label><input type="number" id="guestCount" min="1" max="6" value="1"></div>
      <div class="form-group"><label>Dietary / Song Request</label><input type="text" id="specialRequests" placeholder="Any allergies or favorite song?"></div>
      <button type="submit" class="submit-rsvp">Send RSVP <i class="fas fa-check-circle"></i></button>
      <div id="formConfirmation" class="confirmation-message"></div>
    </form>
  </div>
</div>

<script>
  // ---------- JAVASCRIPT POWERED FEATURES ----------
  // 1. Countdown Timer to Sep 20, 2026
  function updateCountdown() {
    const weddingDate = new Date(2026, 8, 20, 16, 0, 0); // Sep 20 2026 4:00 PM
    const now = new Date();
    const diff = weddingDate - now;
    if (diff <= 0) {
      document.getElementById('days').innerText = '00';
      document.getElementById('hours').innerText = '00';
      document.getElementById('minutes').innerText = '00';
      document.getElementById('seconds').innerText = '00';
      return;
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (86400000)) / (3600000));
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    document.getElementById('days').innerText = days < 10 ? '0'+days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0'+hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0'+minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0'+seconds : seconds;
  }
  setInterval(updateCountdown, 1000);
  updateCountdown();

  // 2. RSVP Data Management (localStorage)
  let rsvpList = [];
  function loadRSVPData() {
    const stored = localStorage.getItem('wedding_rsvps_master');
    if(stored) {
      rsvpList = JSON.parse(stored);
    } else {
      // demo sample entries
      rsvpList = [
        { name: "Michael & Lisa", email: "mike@example.com", attendance: "joyfully accepts", totalGuests: 2, requests: "Vegan options please", timestamp: "2025-01-10" },
        { name: "Sarah Williams", email: "sarah@example.com", attendance: "joyfully accepts", totalGuests: 1, requests: "None", timestamp: "2025-01-12" }
      ];
      localStorage.setItem('wedding_rsvps_master', JSON.stringify(rsvpList));
    }
    renderSummary();
  }

  function saveRSVPToLocal(newRSVP) {
    rsvpList.push(newRSVP);
    localStorage.setItem('wedding_rsvps_master', JSON.stringify(rsvpList));
    renderSummary();
  }

  function renderSummary() {
    const summaryDiv = document.getElementById('rsvpSummaryList');
    if(!summaryDiv) return;
    if(rsvpList.length === 0) {
      summaryDiv.innerHTML = '<p style="text-align:center;">✨ No RSVPs yet. ✨</p>';
      return;
    }
    let acceptsCount = 0, declinesCount = 0, totalGuestsComing = 0;
    rsvpList.forEach(r => {
      if(r.attendance === 'joyfully accepts') {
        acceptsCount++;
        totalGuestsComing += (r.totalGuests || 1);
      } else if(r.attendance === 'declines with regret') declinesCount++;
    });
    let html = `<div style="margin-bottom: 12px;"><strong>📊 Stats:</strong> ✅ Accepts: ${acceptsCount} | ❌ Declines: ${declinesCount} | 👥 Expected guests: ${totalGuestsComing}</div>`;
    html += `<div><strong>📋 Guest List:</strong></div>`;
    rsvpList.slice().reverse().forEach(r => {
      const statusIcon = r.attendance === 'joyfully accepts' ? '✅' : '💔';
      html += `<div class="rsvp-item">${statusIcon} <strong>${escapeHtml(r.name)}</strong> — ${r.attendance === 'joyfully accepts' ? `Coming (${r.totalGuests || 1} guest${(r.totalGuests||1)>1 ? 's':''})` : 'Regrets'} ${r.requests ? `✏️ "${escapeHtml(r.requests)}"` : ''}</div>`;
    });
    summaryDiv.innerHTML = html;
  }

  function escapeHtml(str) { if(!str) return ''; return str.replace(/[&<>]/g, function(m){if(m === '&') return '&amp;'; if(m === '<') return '&lt;'; if(m === '>') return '&gt;'; return m;});}

  // 3. Modal Handling
  const modal = document.getElementById('rsvpModal');
  const openBtn = document.getElementById('openRsvpBtn');
  const closeBtn = document.getElementById('closeModalBtn');
  const rsvpForm = document.getElementById('rsvpForm');
  const confirmationDiv = document.getElementById('formConfirmation');

  openBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    confirmationDiv.style.display = 'none';
    rsvpForm.reset();
  });
  function closeModal() { modal.style.display = 'none'; document.body.style.overflow = ''; }
  closeBtn.addEventListener('click', closeModal);
  window.addEventListener('click', (e) => { if(e.target === modal) closeModal(); });

  // RSVP Form submission
  rsvpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('guestName').value.trim();
    const attendanceVal = document.getElementById('attendance').value;
    const guestCount = parseInt(document.getElementById('guestCount').value);
    const email = document.getElementById('guestEmail').value.trim();
    const special = document.getElementById('specialRequests').value.trim();
    if(!fullName) { showConfirmMsg('Please enter your name.', '#b1624b'); return; }
    if(!attendanceVal) { showConfirmMsg('Please select attendance status.', '#b1624b'); return; }
    if(isNaN(guestCount) || guestCount < 1) { showConfirmMsg('Guest count must be at least 1.', '#b1624b'); return; }

    const newEntry = {
      name: fullName,
      email: email || 'not provided',
      attendance: attendanceVal,
      totalGuests: guestCount,
      requests: special || '—',
      timestamp: new Date().toLocaleString()
    };
    saveRSVPToLocal(newEntry);
    const isAccept = attendanceVal === 'joyfully accepts';
    const msg = isAccept ? `✨ Wonderful, ${fullName}! We’re so excited to celebrate with you${guestCount > 1 ? ` and your ${guestCount-1} guest(s).` : '.'} ✨` : `💛 We understand, ${fullName}. You'll be missed dearly. 💛`;
    confirmationDiv.style.display = 'block';
    confirmationDiv.innerHTML = `${msg}<br><span style="font-size:0.8rem;">RSVP saved. Thank you!</span>`;
    confirmationDiv.style.background = "#e7dfd4";
    const submitBtn = document.querySelector('.submit-rsvp');
    submitBtn.disabled = true;
    setTimeout(() => { submitBtn.disabled = false; }, 1800);
    setTimeout(() => { if(confirmationDiv.style.display === 'block') closeModal(); }, 2800);
  });

  function showConfirmMsg(msg, color) {
    confirmationDiv.style.display = 'block';
    confirmationDiv.style.background = "#fce9e2";
    confirmationDiv.style.color = color;
    confirmationDiv.innerHTML = msg;
    setTimeout(() => { if(confirmationDiv.innerHTML === msg) confirmationDiv.style.display = 'none'; }, 2500);
  }

  // 4. Admin panel toggle & gallery interactive alerts
  const toggleBtn = document.getElementById('toggleSummary');
  const summaryDivEl = document.getElementById('rsvpSummaryList');
  if(toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      if(summaryDivEl.style.display === 'none') {
        summaryDivEl.style.display = 'block';
        renderSummary(); // refresh
      } else {
        summaryDivEl.style.display = 'none';
      }
    });
  }

  // Gallery click interactions (show little memory toast)
  const galleryItems = document.querySelectorAll('.gallery-item');
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const moment = item.getAttribute('data-moment') || 'Memory';
      alert(`✨ ${moment} memory ✨\nWe can't wait to share this beautiful day with you!`);
    });
  });

  // 5. initial load
  loadRSVPData();
  // Make summary initially hidden but loaded
  if(summaryDivEl) summaryDivEl.style.display = 'none';
</script>
</body>
</html>
```