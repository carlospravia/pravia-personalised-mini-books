#!/usr/bin/env node
/**
 * Generate 9 alphanumeric classmate codes, write config maps, and QR PNGs + letter sheet.
 * Re-running preserves existing codes in config/codes.json unless --force is passed.
 */
import { createHash, randomInt } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const BASE_URL = "https://personalised-mini-books.web.app";
const ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
const CODE_LENGTH = 8;

const CLASSMATES = [
  { character: "ajolote", classmateName: "Mateo", assetFile: "ajolote-mateo.png" },
  { character: "caballero", classmateName: "Hector", assetFile: "caballero-hector.png" },
  { character: "caballo", classmateName: "Emma", assetFile: "caballo-emma.png" },
  { character: "capibara", classmateName: "Celeste", assetFile: "capibara-celeste.png" },
  { character: "chiwuawua", classmateName: "Cata", assetFile: "chiwuawua-cata.png" },
  { character: "puccini", classmateName: "Tessa", assetFile: "puccini-tessa.png" },
  { character: "pug", classmateName: "Felipe", assetFile: "pug-felipe.png" },
  { character: "squishi", classmateName: "Barrantes", assetFile: "squishi-barrantes.png" },
  { character: "teddy", classmateName: "Samantha", assetFile: "teddy-samantha.png" },
];

function generateCode(used) {
  for (let attempt = 0; attempt < 1000; attempt += 1) {
    let code = "";
    for (let i = 0; i < CODE_LENGTH; i += 1) {
      code += ALPHABET[randomInt(ALPHABET.length)];
    }
    if (!used.has(code)) {
      used.add(code);
      return code;
    }
  }
  throw new Error("Failed to generate a unique code");
}

async function loadExistingCodes() {
  const configPath = path.join(root, "config", "codes.json");
  try {
    const raw = await readFile(configPath, "utf8");
    const parsed = JSON.parse(raw);
    const byKey = new Map();
    for (const entry of parsed.entries ?? []) {
      const key = `${entry.character}-${entry.classmateName}`.toLowerCase();
      byKey.set(key, entry);
    }
    return byKey;
  } catch {
    return new Map();
  }
}

function buildSheetHtml(entries) {
  const cards = entries
    .map(
      (entry) => `
    <article class="card">
      <img src="qrs/${entry.character}-${entry.classmateName.toLowerCase()}.png" alt="QR for ${entry.classmateName}" />
      <p class="name">${entry.classmateName}</p>
      <p class="meta">${entry.character}</p>
      <p class="code">${entry.code}</p>
    </article>`
    )
    .join("\n");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Pravia Mini-Books — QR print sheet</title>
  <style>
    @page { size: letter; margin: 0.5in; }
    * { box-sizing: border-box; }
    body {
      font-family: system-ui, sans-serif;
      margin: 0;
      color: #002107;
    }
    h1 {
      font-size: 16pt;
      text-align: center;
      margin: 0 0 12px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      gap: 12px;
      height: 9.5in;
    }
    .card {
      border: 2px dashed #4c96fe;
      border-radius: 12px;
      padding: 8px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .card img {
      width: 1.7in;
      height: 1.7in;
    }
    .name { font-weight: 700; margin: 6px 0 0; font-size: 12pt; }
    .meta { margin: 2px 0; font-size: 9pt; color: #5b403e; text-transform: capitalize; }
    .code { margin: 4px 0 0; font-size: 9pt; letter-spacing: 0.08em; font-family: ui-monospace, monospace; }
    @media print {
      .noprint { display: none; }
    }
  </style>
</head>
<body>
  <p class="noprint" style="text-align:center;font-size:12px;margin:8px">Print this page at 100% scale on US Letter.</p>
  <h1>Pravia's Mini-Books — Classmate QR codes</h1>
  <div class="grid">
${cards}
  </div>
</body>
</html>
`;
}

async function main() {
  const force = process.argv.includes("--force");
  const existing = force ? new Map() : await loadExistingCodes();
  const used = new Set([...existing.values()].map((e) => e.code).filter(Boolean));

  const entries = CLASSMATES.map((mate) => {
    const key = `${mate.character}-${mate.classmateName}`.toLowerCase();
    const prev = existing.get(key);
    const code = prev?.code && !force ? prev.code : generateCode(used);
    return {
      code,
      classmateName: mate.classmateName,
      character: mate.character,
      image: `images/${mate.assetFile}`,
      message: prev?.message ?? "",
      assetFile: mate.assetFile,
      url: `${BASE_URL}/?code=${encodeURIComponent(code)}`,
    };
  });

  const payload = {
    baseUrl: BASE_URL,
    queryParam: "code",
    generatedAt: new Date().toISOString(),
    contentHash: createHash("sha256")
      .update(entries.map((e) => e.code).join("|"))
      .digest("hex")
      .slice(0, 16),
    entries: entries.map(({ code, classmateName, character, image, message, assetFile }) => ({
      code,
      classmateName,
      character,
      image,
      message,
      assetFile,
    })),
  };

  const publicPayload = {
    queryParam: "code",
    entries: payload.entries.map(({ code, classmateName, character, image, message }) => ({
      code,
      classmateName,
      character,
      image,
      message,
    })),
  };

  await mkdir(path.join(root, "config"), { recursive: true });
  await mkdir(path.join(root, "public", "data"), { recursive: true });
  await mkdir(path.join(root, "print", "qrs"), { recursive: true });

  await writeFile(path.join(root, "config", "codes.json"), `${JSON.stringify(payload, null, 2)}\n`);
  await writeFile(
    path.join(root, "public", "data", "codes.json"),
    `${JSON.stringify(publicPayload, null, 2)}\n`
  );

  for (const entry of entries) {
    const file = path.join(
      root,
      "print",
      "qrs",
      `${entry.character}-${entry.classmateName.toLowerCase()}.png`
    );
    await QRCode.toFile(file, entry.url, {
      type: "png",
      width: 512,
      margin: 2,
      errorCorrectionLevel: "M",
    });
  }

  await writeFile(path.join(root, "print", "qr-sheet.html"), buildSheetHtml(entries));

  console.log(`Wrote ${entries.length} codes → config/codes.json, public/data/codes.json, print/qrs/`);
  for (const entry of entries) {
    console.log(`  ${entry.classmateName.padEnd(10)} ${entry.code}  ${entry.url}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
