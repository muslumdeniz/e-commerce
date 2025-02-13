const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const basePath = __dirname + "/src/pages";

// "public" klasörünü statik hale getir (Tüm HTML, CSS, JS dosyaları burada olacak)
app.use(express.static("src"));

// Ana sayfa (index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(basePath, "/index.html"));
});

// About
app.get("/ui", (req, res) => {
  res.sendFile(path.join(basePath, "/ui.html"));
});

// Sunucuyu başlat
app.listen(PORT, () => {
  console.log(`Sunucu http://localhost:${PORT} adresinde çalışıyor`);
});
