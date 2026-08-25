/**
 * Default welcome page controller.
 * Missing/invalid ?code= → default EN copy (no image, no code list leak).
 * Valid codes currently also show the default experience (personalization comes later).
 */

const DEFAULT_HEADLINE = "Welcome to Pravia's Mini-Books!";
const DEFAULT_BODY =
  "All you need is to scan the QR code on the back of your Mini-Book to receive your prize.";

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

function renderDefault() {
  const headline = document.getElementById("headline");
  const body = document.getElementById("body-copy");
  if (headline) headline.textContent = DEFAULT_HEADLINE;
  if (body) {
    body.textContent = "";
    body.append(DEFAULT_BODY + " ");
    const icon = document.createElement("span");
    icon.className = "material-symbols-outlined align-middle text-primary";
    icon.style.fontVariationSettings = "'FILL' 1";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = "sentiment_very_satisfied";
    body.append(icon);
  }
  document.title = "Pravia's Mini-Books";
}

async function main() {
  const code = readCodeParam();
  const entries = await loadCodes();
  // Resolve for future personalization; do not reveal map on failure.
  findEntry(entries, code);
  renderDefault();
}

main();
