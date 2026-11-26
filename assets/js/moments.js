// ===== MOMENTS: a scattered polaroid board =====
// Edit captions and dates here. w/h are the image's width and height (used to keep the shape).
var MOMENTS = [
  { src: '01.jpg', w: 1280, h: 1600, caption: "Team IISM'24", date: '2025' },
  { src: '02.jpg', w: 1600, h: 1200, caption: 'AAAI 2026, Singapore', date: 'Jan 2026' },
  { src: '03.jpg', w: 1600, h: 1200, caption: 'The main hall at AAAI', date: 'Jan 2026' },
  { src: '04.jpg', w: 1200, h: 1600, caption: 'Singapore after dark', date: 'Jan 2026' },
  { src: '05.jpg', w: 1200, h: 1600, caption: 'Year of the Horse', date: 'Jan 2026' },
  { video: 'singapore.mp4', poster: 'singapore-poster.jpg', w: 720, h: 1280, caption: 'A ceiling full of fish, Singapore', date: 'Jan 2026' },
  { src: '06.jpg', w: 1177, h: 1600, caption: 'Match day', date: 'Apr 2026' },
  { src: '07.jpg', w: 1600, h: 1200, caption: 'Office hours', date: 'Apr 2026' },
  { src: '08.jpg', w: 1200, h: 1600, caption: 'Good company', date: 'Apr 2026' },
  { src: '09.jpg', w: 1200, h: 1600, caption: 'Hallway catch-up', date: 'Apr 2026' },
  { src: '10.jpg', w: 1600, h: 1200, caption: 'Three of us', date: 'Apr 2026' },
  { src: '11.jpg', w: 1600, h: 1200, caption: 'Team dinner', date: 'Jul 2026' },
  { src: '12.jpg', w: 1600, h: 1200, caption: 'An August evening', date: 'Aug 2026' },
  { src: '13.jpg', w: 1067, h: 1600, caption: 'Google DeepMind APAC Research Symposium', date: '2026' },
  { src: '14.jpg', w: 1200, h: 1600, caption: 'The spread', date: 'Oct 2026' },
  { src: '15.jpg', w: 1200, h: 1600, caption: 'Round two', date: 'Oct 2026' },
  { src: '16.jpg', w: 1200, h: 1600, caption: 'Good food, always', date: 'Oct 2026' },
  { src: '17.jpg', w: 1600, h: 1067, caption: 'ASDP 2026, Singapore', date: '2026' },
  { src: '18.jpg', w: 1600, h: 1067, caption: 'A proud handshake', date: '2026' },
  { src: '19.jpg', w: 1536, h: 1024, caption: 'At the podium', date: '2026' },
  { src: '20.jpg', w: 935, h: 1600, caption: '3 eras, 3 champions', date: '' }
];
var DIR = 'assets/img/moments/';
var TAPES = ['rgba(250,220,120,.55)', 'rgba(150,210,230,.55)', 'rgba(240,160,170,.5)', 'rgba(170,220,160,.55)'];

var board = document.getElementById('board');
var still = matchMedia('(prefers-reduced-motion: reduce)').matches;
var mode = 'scatter';
var topZ = 100;
var rand = function (a, b) { return a + Math.random() * (b - a); };

// Build the cards
var cards = MOMENTS.map(function (m, i) {
  var el = document.createElement('figure');
  el.className = 'polaroid';
  el.style.setProperty('--tape', TAPES[i % TAPES.length]);
  el.style.setProperty('--tape-rot', rand(-6, 6).toFixed(1) + 'deg');
  var media = m.video
    ? '<video src="' + DIR + m.video + '" poster="' + DIR + m.poster + '" muted loop playsinline autoplay preload="metadata"></video><span class="play-badge">&#9654; tap for sound</span>'
    : '<img src="' + DIR + m.src + '" alt="' + m.caption.replace(/"/g, '&quot;') + '" loading="lazy" draggable="false">';
  el.innerHTML = '<div class="photo" style="aspect-ratio:' + m.w + '/' + m.h + '">' + media + '</div>' +
    '<figcaption class="caption">' + m.caption + '</figcaption>' +
    '<div class="date">' + (m.date || '&nbsp;') + '</div>';
  el.tabIndex = 0;
  el._i = i;
  el._x = 0; el._y = 0; el._r = 0;
  board.appendChild(el);
  return el;
});

var place = function (el) {
  el.style.transform = 'translate(' + el._x + 'px,' + el._y + 'px) rotate(' + el._r + 'deg)';
};

// Masonry columns, then (in scatter mode) jitter position and angle
var layout = function (order) {
  var W = board.clientWidth;
  var gap = W < 600 ? 14 : 26;
  var cols = Math.max(2, Math.floor((W + gap) / 250));
  var cardW = Math.min(240, (W - gap * (cols - 1)) / cols);
  var colW = (W - cardW) / Math.max(1, cols - 1);
  var heights = [];
  for (var c = 0; c < cols; c++) heights.push(20);
  board.style.setProperty('--card-w', cardW + 'px');
  var jitter = mode === 'scatter';
  (order || cards).forEach(function (el) {
    var col = heights.indexOf(Math.min.apply(null, heights));
    var h = el.offsetHeight;
    var x = col * colW;
    var y = heights[col];
    if (jitter) {
      x += rand(-0.3, 0.3) * Math.min(colW, cardW);
      y += rand(-18, 18);
      el._r = rand(-9, 9);
    } else {
      el._r = 0;
    }
    el._x = Math.max(0, Math.min(W - cardW, x));
    el._y = Math.max(8, y);
    heights[col] += h + (jitter ? gap * 0.4 : gap);
    place(el);
  });
  board.style.height = Math.max.apply(null, heights) + 60 + 'px';
};

// Intro: deal the cards out from a pile in the middle
var deal = function () {
  var W = board.clientWidth;
  cards.forEach(function (el) {
    el.style.transition = 'none';
    el._x = W / 2 - el.offsetWidth / 2;
    el._y = 40;
    el._r = rand(-25, 25);
    el.style.opacity = '0';
    place(el);
  });
  board.offsetHeight; // apply the pile before animating out
  cards.forEach(function (el, i) {
    el.style.transition = '';
    el.style.transitionDelay = (still ? 0 : i * 55) + 'ms';
    el.style.opacity = '1';
  });
  layout();
  setTimeout(function () { cards.forEach(function (el) { el.style.transitionDelay = ''; }); }, 2200);
};

// Controls
var btnShuffle = document.getElementById('shuffle');
var btnTidy = document.getElementById('tidy');
btnShuffle.addEventListener('click', function () {
  mode = 'scatter';
  btnTidy.classList.remove('on');
  var order = cards.slice().sort(function () { return Math.random() - 0.5; });
  order.forEach(function (el, i) { el.style.zIndex = i + 1; });
  layout(order);
});
btnTidy.addEventListener('click', function () {
  mode = mode === 'tidy' ? 'scatter' : 'tidy';
  btnTidy.classList.toggle('on', mode === 'tidy');
  cards.forEach(function (el) { el.style.zIndex = ''; });
  layout();
});

// Drag with a mouse; tap or click opens the photo
var drag = null;
cards.forEach(function (el) {
  el.addEventListener('pointerdown', function (e) {
    drag = { el: el, sx: e.clientX, sy: e.clientY, ox: el._x, oy: el._y, moved: false, mouse: e.pointerType === 'mouse' };
    if (drag.mouse) {
      el.setPointerCapture(e.pointerId);
      el.style.zIndex = ++topZ;
    }
  });
  el.addEventListener('pointermove', function (e) {
    if (!drag || drag.el !== el) return;
    var dx = e.clientX - drag.sx, dy = e.clientY - drag.sy;
    if (Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true;
    if (!drag.mouse || !drag.moved) return;
    el.classList.add('dragging');
    el._x = drag.ox + dx;
    el._y = drag.oy + dy;
    place(el);
  });
  el.addEventListener('pointerup', function () {
    if (!drag || drag.el !== el) return;
    el.classList.remove('dragging');
    if (!drag.moved) openBox(el._i);
    drag = null;
  });
  el.addEventListener('pointercancel', function () { el.classList.remove('dragging'); drag = null; });
  el.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openBox(el._i); }
  });
});

// Lightbox
var box = document.getElementById('lightbox');
var boxMedia = document.getElementById('lb-media');
var boxCap = document.getElementById('lb-caption');
var boxDate = document.getElementById('lb-date');
var boxCount = document.getElementById('lb-count');
var current = 0;

var show = function (i) {
  current = (i + MOMENTS.length) % MOMENTS.length;
  var m = MOMENTS[current];
  boxMedia.innerHTML = m.video
    ? '<video src="' + DIR + m.video + '" poster="' + DIR + m.poster + '" controls autoplay playsinline></video>'
    : '<img src="' + DIR + m.src + '" alt="">';
  boxMedia.querySelector('img, video').setAttribute('alt', m.caption);
  boxCap.textContent = m.caption;
  boxDate.textContent = m.date;
  boxCount.textContent = (current + 1) + ' / ' + MOMENTS.length;
  var card = box.querySelector('.lb-card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = '';
};
var openBox = function (i) {
  show(i);
  box.classList.add('open');
  document.body.style.overflow = 'hidden';
};
var closeBox = function () {
  box.classList.remove('open');
  boxMedia.innerHTML = '';
  document.body.style.overflow = '';
};
document.getElementById('lb-prev').addEventListener('click', function () { show(current - 1); });
document.getElementById('lb-next').addEventListener('click', function () { show(current + 1); });
document.getElementById('lb-close').addEventListener('click', closeBox);
box.addEventListener('click', function (e) { if (e.target === box) closeBox(); });
document.addEventListener('keydown', function (e) {
  if (!box.classList.contains('open')) return;
  if (e.key === 'Escape') closeBox();
  if (e.key === 'ArrowLeft') show(current - 1);
  if (e.key === 'ArrowRight') show(current + 1);
});

// Swipe between photos on touch screens
var touchX = null;
box.addEventListener('touchstart', function (e) { touchX = e.touches[0].clientX; }, { passive: true });
box.addEventListener('touchend', function (e) {
  if (touchX === null) return;
  var dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
  touchX = null;
});

var resizeTimer;
addEventListener('resize', function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () { layout(); }, 150);
});

deal();
