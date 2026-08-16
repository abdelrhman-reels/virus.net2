

<!-- Ramadan Lanterns (Sticky Top) -->
<div class="lanterns-container" id="lanterns">
  <div class="lantern-track">
    <div class="lantern" style="--x: 5%; --drop: 46px; --swing: 5deg; --duration: 4.5s; --delay: -1.2s; --flicker: 2.05s;">
      <span class="chain"></span><span class="body"></span><span class="core"></span><span class="light"></span>
    </div>
    <div class="lantern" style="--x: 17%; --drop: 56px; --swing: 7deg; --duration: 5.2s; --delay: -2.1s; --flicker: 2.3s;">
      <span class="chain"></span><span class="body"></span><span class="core"></span><span class="light"></span>
    </div>
    <div class="lantern" style="--x: 30%; --drop: 50px; --swing: 6deg; --duration: 4.9s; --delay: -0.8s; --flicker: 2.15s;">
      <span class="chain"></span><span class="body"></span><span class="core"></span><span class="light"></span>
    </div>
    <div class="lantern" style="--x: 45%; --drop: 60px; --swing: 8deg; --duration: 5.7s; --delay: -1.6s; --flicker: 2.45s;">
      <span class="chain"></span><span class="body"></span><span class="core"></span><span class="light"></span>
    </div>
    <div class="lantern" style="--x: 60%; --drop: 49px; --swing: 5.5deg; --duration: 4.7s; --delay: -2.8s; --flicker: 2.1s;">
      <span class="chain"></span><span class="body"></span><span class="core"></span><span class="light"></span>
    </div>
    <div class="lantern" style="--x: 74%; --drop: 58px; --swing: 7deg; --duration: 5.4s; --delay: -1.1s; --flicker: 2.35s;">
      <span class="chain"></span><span class="body"></span><span class="core"></span><span class="light"></span>
    </div>
    <div class="lantern" style="--x: 89%; --drop: 52px; --swing: 6deg; --duration: 5s; --delay: -2.4s; --flicker: 2.2s;">
      <span class="chain"></span><span class="body"></span><span class="core"></span><span class="light"></span>
    </div>
  </div>
</div>
<script>
(function () {
  const lanterns = document.getElementById("lanterns");
  if (!lanterns) return;

  const setBodyOffset = () => {
    const height = Math.ceil(lanterns.getBoundingClientRect().height);
    const offset = height + 12;
    document.body.style.paddingTop = offset + "px";
    document.documentElement.style.setProperty("--lantern-offset", offset + "px");
  };

  const safeUpdate = () => requestAnimationFrame(setBodyOffset);

  window.addEventListener("load", safeUpdate);
  window.addEventListener("resize", safeUpdate, { passive: true });
  window.addEventListener("orientationchange", safeUpdate, { passive: true });

  if ("ResizeObserver" in window) {
    const ro = new ResizeObserver(safeUpdate);
    ro.observe(lanterns);
  }

  safeUpdate();
})();
</script>
<!-- Ramadan Welcome Popup -->
<div id="ramadanPopup" class="ramadan-popup">
  رمضان أحلى مع فيرس ✨
</div>

<style>
.ramadan-popup{
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg,#ffcc66,#ff9933);
  color:#222;
  padding:12px 28px;
  border-radius:30px;
  font-size:18px;
  font-weight:bold;
  box-shadow:0 8px 20px rgba(0,0,0,.25);
  z-index:10000;
  opacity:0;
  transition:.6s;
}
.ramadan-popup.show{
  opacity:1;
  top:40px;
}
</style>

<script>
window.addEventListener("load",()=>{
  const popup=document.getElementById("ramadanPopup");
  popup.classList.add("show");

  setTimeout(()=>{
    popup.classList.remove("show");
  },4000); //  تختفي بعد 4 ثواني
});
</script>
<div id="hijriMoon" class="hijri-moon" aria-label="الهلال الهجري"></div>
<script>
(function () {
  const el = document.getElementById("hijriMoon");
  if (!el) return;

  const CONFIG = {
    // لو خلفية الهيدر مختلفة عن --moon-cut عدّلها هنا كمان لنفس اللون
    CUT_COLOR: getComputedStyle(el).getPropertyValue("--moon-cut").trim() || "#0b1020",
    LIT: getComputedStyle(el).getPropertyValue("--moon-lit").trim() || "#fff6cf",
    SHADE: getComputedStyle(el).getPropertyValue("--moon-shade").trim() || "rgba(255,228,140,0.10)",
  };

  function getHijriParts(date = new Date()) {
    const fmt = new Intl.DateTimeFormat("ar-SA-u-ca-islamic", { day:"numeric", month:"numeric", year:"numeric" });
    const parts = fmt.formatToParts(date);
    const get = (t) => parts.find(p => p.type === t)?.value;
    return {
      day: parseInt(get("day"), 10),
      month: parseInt(get("month"), 10),
      year: parseInt(get("year"), 10),
    };
  }

  function phaseFromHijriDay(hDay){
    const d = Math.max(1, Math.min(30, hDay));
    return (d - 1) / 29; // 0..1
  }

  function render(phase){
    // phase: 0=new, 0.5=full
    const waxing = phase <= 0.5;
    const p = waxing ? (phase / 0.5) : ((1 - phase) / 0.5); // 0..1 up then down
    // p=0 -> new (thin), p=1 -> full
    // offset controls crescent thickness
    const r = 46;
    const cx = 50, cy = 50;

    // كلما p يكبر، القصّة تقل (نقرب للبدر)
    const cut = (1 - p) * (r * 1.15);        // 0..~52
    const dir = waxing ? 1 : -1;             // light right (waxing) / left (waning)
    const cutCx = cx + dir * cut;

    const id = "m" + Math.random().toString(16).slice(2);

    el.innerHTML = `
<svg viewBox="0 0 100 100" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Moon">
  <defs>
    <radialGradient id="${id}g" cx="35%" cy="30%" r="70%">
      <stop offset="0%" stop-color="${CONFIG.LIT}"/>
      <stop offset="70%" stop-color="${CONFIG.LIT}"/>
      <stop offset="100%" stop-color="#f6d98a"/>
    </radialGradient>

    <!-- Mask: white keeps, black cuts -->
    <mask id="${id}mask">
      <rect width="100" height="100" fill="black"/>
      <!-- base disc -->
      <circle cx="${cx}" cy="${cy}" r="${r}" fill="white"/>
      <!-- cut disc (black) -->
      <circle cx="${cutCx}" cy="${cy}" r="${r}" fill="black"/>
    </mask>

    <filter id="${id}glow" x="-40%" y="-40%" width="180%" height="180%">
      <feGaussianBlur stdDeviation="1.4" result="b"/>
      <feMerge>
        <feMergeNode in="b"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>

  <!-- subtle shade disc behind -->
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="${CONFIG.SHADE}"/>

  <!-- lit part via mask -->
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="url(#${id}g)" mask="url(#${id}mask)" filter="url(#${id}glow)"/>

  <!-- tiny highlight -->
  <circle cx="${cx-12}" cy="${cy-18}" r="6" fill="rgba(255,255,255,.20)"/>
</svg>`.trim();
  }

  function update(){
    const { day, month, year } = getHijriParts(new Date());
    const phase = phaseFromHijriDay(day);
    render(phase);
    el.title = `اليوم الهجري: ${day} / ${month} / ${year}`;
    el.setAttribute("aria-label", el.title);
  }

  update();
  setInterval(update, 60 * 60 * 1000);
})();
</script>

