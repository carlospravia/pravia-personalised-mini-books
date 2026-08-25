/**
 * Welcome page controller.
 * Missing/invalid ?code= → default EN copy (no image, no code list leak).
 * Valid ?code= → personalized message + gift image.
 */

const DEFAULT_HEADLINE = "Welcome to Pravia's Mini-Books!";
const DEFAULT_BODY = "Scan the QR on your Mini-Book. Yay — your gift is here!";

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

function renderDefault() {
  const headline = document.getElementById("headline");
  const body = document.getElementById("body-copy");
  const defaultCard = document.getElementById("default-card");
  const giftSection = document.getElementById("gift-section");
  const giftFooter = document.getElementById("gift-footer");
  const giftImage = document.getElementById("gift-image");

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
