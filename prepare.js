// Copies the website files from a folder into www/ and adds the small native-app patch.
// Usage: node prepare.js site      (the folder holding index.html, manifest and icons)
const fs = require("fs");
const path = require("path");

const src = process.argv[2] || "site";
const out = "www";
if (!fs.existsSync(path.join(src, "index.html"))) {
  console.error("index.html not found in folder: " + src);
  process.exit(1);
}
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out, { recursive: true });

// Files the app needs. sw.js and og.png are left out: they are only for the website.
const keep = ["index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "icon-maskable-512.png"];
for (const f of keep) {
  const from = path.join(src, f);
  if (fs.existsSync(from)) fs.copyFileSync(from, path.join(out, f));
}
fs.copyFileSync("native/native.js", path.join(out, "native.js"));
fs.copyFileSync("native/native.css", path.join(out, "native.css"));

let html = fs.readFileSync(path.join(out, "index.html"), "utf8");
if (!html.includes("native.css")) {
  html = html.replace("</head>", '<link rel="stylesheet" href="native.css">\n<script src="native.js"></script>\n</head>');
}
fs.writeFileSync(path.join(out, "index.html"), html);
console.log("www/ is ready (" + fs.readdirSync(out).length + " files).");
