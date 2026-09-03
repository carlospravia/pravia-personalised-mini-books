/**
 * Welcome page controller.
 * Missing/invalid ?code= → default EN copy (no image, no code list leak).
 * Valid ?code= → personalized message + gift image + one-shot yay SFX + confetti.
 */

const DEFAULT_HEADLINE = "Welcome to Pravia's Mini-Books!";
const DEFAULT_BODY = "Scan the QR on your Mini-Book. Yay — your gift is here!";
const YAY_VOLUME = 0.6;
const CONFETTI_COLORS = ["#b71422", "#005db8", "#4c96fe", "#ffe173", "#9cfea4", "#ffdad7"];
const CONFETTI_COUNT = 56;

/** @type {((event: Event) => void) | null} */
let yayUnlockHandler = null;
let confettiCleanupTimer = null;
let confettiFired = false;
let audioPlayed = false;
let yayButtonBound = false;

function readCodeParam() {
  const params = new URLSearchParams(window.location.search);
  const raw = params.get("code");
  if (!raw) return null;
  const trimmed = raw.trim().toUpperCase();
  return trimmed.length > 0 ? trimmed : null;
}

async function loadCodes() {
  try {
    const response = await fetch("./data/codes.json", { cache: "no-cache" });
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data.entries) ? data.entries : [];
  } catch {
    return [];
  }
}

function findEntry(entries, code) {
  if (!code) return null;
  return entries.find((entry) => String(entry.code).toUpperCase() === code) ?? null;
}

function setHidden(el, hidden) {
  if (!el) return;
  el.classList.toggle("is-hidden", hidden);
}

function clearChildren(el) {
  if (!el) return;
  while (el.firstChild) el.removeChild(el.firstChild);
}

function appendSmiley(target) {
  const icon = document.createElement("span");
  icon.className = "material-symbols-outlined align-middle text-primary";
  icon.style.fontVariationSettings = "'FILL' 1";
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = "sentiment_very_satisfied";
  target.append(" ");
  target.append(icon);
}

/** Highlight classmate name in body copy (bold). */
function appendTextWithBoldName(target, text, name) {
  if (!name || !text.includes(name)) {
    target.append(text);
    return;
  }
  const parts = text.split(name);
  parts.forEach((part, index) => {
    if (part) target.append(part);
    if (index < parts.length - 1) {
      const strong = document.createElement("strong");
      strong.className = "font-extrabold text-on-surface";
      strong.textContent = name;
      target.append(strong);
    }
  });
}

function renderPersonalizedHeadline(headline, name) {
  clearChildren(headline);
  headline.append("Hi ");
  const nameEl = document.createElement("span");
  // Secondary blue contrasts with the primary-red headline for clear personalization.
  nameEl.className = "text-secondary";
  nameEl.textContent = name;
  headline.append(nameEl);
  headline.append("! This happy gift is for you!");
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function clearConfetti() {
  const layer = document.getElementById("confetti-layer");
  if (confettiCleanupTimer) {
    clearTimeout(confettiCleanupTimer);
    confettiCleanupTimer = null;
  }
  clearChildren(layer);
}

/** One-shot confetti burst. Always runs when force=true (Tap me / celebrate). */
function burstConfettiOnce(options = {}) {
  const force = options.force === true;
  if (!force && prefersReducedMotion()) return;

  const layer = document.getElementById("confetti-layer");
  if (!layer) return;

  clearConfetti();

  for (let i = 0; i < CONFETTI_COUNT; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.backgroundColor = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    piece.style.setProperty("--drift", `${Math.round((Math.random() - 0.5) * 160)}px`);
    piece.style.animationDuration = `${2.4 + Math.random() * 1.8}s`;
    piece.style.animationDelay = `${Math.random() * 0.45}s`;
    piece.style.animationFillMode = "both";
    piece.style.width = `${8 + Math.round(Math.random() * 6)}px`;
    piece.style.height = `${10 + Math.round(Math.random() * 8)}px`;
    layer.append(piece);
  }

  confettiCleanupTimer = setTimeout(() => {
    clearConfetti();
  }, 5200);
}

function clearYayUnlock() {
  if (yayUnlockHandler) {
    document.removeEventListener("click", yayUnlockHandler, true);
    document.removeEventListener("click", yayUnlockHandler, false);
    yayUnlockHandler = null;
  }
}

function silenceYay() {
  const audio = document.getElementById("yay-audio");
  const button = document.getElementById("yay-button");
  clearYayUnlock();
  clearConfetti();
  confettiFired = false;
  audioPlayed = false;
  setHidden(button, true);
  if (audio) {
    audio.pause();
    try {
      audio.currentTime = 0;
    } catch {
      // Ignore seek errors on some mobile browsers.
    }
  }
}

/**
 * Tap unlock: confetti ALWAYS fires once; audio is best-effort and optional.
 */
function celebrateYayFromGesture() {
  const audio = document.getElementById("yay-audio");
  const button = document.getElementById("yay-button");

  clearYayUnlock();

  if (!confettiFired) {
    confettiFired = true;
    burstConfettiOnce({ force: true });
  }

  setHidden(button, true);

  if (!audio || audioPlayed) return;

  audioPlayed = true;
  audio.volume = YAY_VOLUME;
  const attempt = audio.play();
  if (attempt && typeof attempt.then === "function") {
    attempt.catch(() => {
      audioPlayed = false;
    });
  }
}

function onYayUnlock(event) {
  if (event && typeof event.stopPropagation === "function") {
    event.stopPropagation();
  }
  celebrateYayFromGesture();
}

function armYayUnlockFallback() {
  clearYayUnlock();
  yayUnlockHandler = onYayUnlock;
  // Capture phase so we still get the tap even if something stops bubbling.
  document.addEventListener("click", yayUnlockHandler, { once: true, capture: true });
}

function bindYayButton() {
  const button = document.getElementById("yay-button");
  if (!button || yayButtonBound) return;
  yayButtonBound = true;
  button.addEventListener("click", onYayUnlock);
}

function playYayOnce() {
  const audio = document.getElementById("yay-audio");
  const button = document.getElementById("yay-button");
  if (!button) return;

  confettiFired = false;
  audioPlayed = false;
  clearYayUnlock();
  bindYayButton();
  setHidden(button, true);

  if (!audio) {
    setHidden(button, false);
    armYayUnlockFallback();
    return;
  }

  audio.volume = YAY_VOLUME;

  const attempt = audio.play();
  if (attempt && typeof attempt.then === "function") {
    attempt
      .then(() => {
        audioPlayed = true;
        if (!confettiFired) {
          confettiFired = true;
          burstConfettiOnce({ force: true });
        }
        setHidden(button, true);
      })
      .catch(() => {
        setHidden(button, false);
        armYayUnlockFallback();
      });
  } else {
    setHidden(button, false);
    armYayUnlockFallback();
  }
}

function renderDefault() {
  const headline = document.getElementById("headline");
  const body = document.getElementById("body-copy");
  const defaultCard = document.getElementById("default-card");
  const giftSection = document.getElementById("gift-section");
  const giftFooter = document.getElementById("gift-footer");
  const giftImage = document.getElementById("gift-image");

  silenceYay();

  if (headline) headline.textContent = DEFAULT_HEADLINE;
  if (body) {
    clearChildren(body);
    body.append(DEFAULT_BODY);
    appendSmiley(body);
  }

  setHidden(defaultCard, false);
  setHidden(giftSection, true);
  setHidden(giftFooter, true);
  if (giftImage) {
    giftImage.removeAttribute("src");
    giftImage.alt = "";
  }

  document.title = "Pravia's Mini-Books";
}

function renderPersonalized(entry) {
  const headline = document.getElementById("headline");
  const body = document.getElementById("body-copy");
  const defaultCard = document.getElementById("default-card");
  const giftSection = document.getElementById("gift-section");
  const giftFooter = document.getElementById("gift-footer");
  const giftImage = document.getElementById("gift-image");

  const name = entry.classmateName || "friend";
  if (headline) renderPersonalizedHeadline(headline, name);
  if (body) {
    clearChildren(body);
    const message = entry.message || `Here is your welcome gift, ${name}!`;
    appendTextWithBoldName(body, message, name);
    appendSmiley(body);
  }

  if (giftImage) {
    giftImage.src = entry.image;
    giftImage.alt = `${name}'s welcome gift drawing`;
  }

  setHidden(defaultCard, true);
  setHidden(giftSection, false);
  setHidden(giftFooter, false);

  document.title = `${name}'s gift — Pravia's Mini-Books`;
  playYayOnce();
}

async function main() {
  const code = readCodeParam();
  const entries = await loadCodes();
  const entry = findEntry(entries, code);

  if (entry && entry.image && entry.message) {
    renderPersonalized(entry);
    return;
  }

  renderDefault();
}

main();
