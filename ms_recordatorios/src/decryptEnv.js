const fs = require("fs");
const path = require("path");
const CryptoJS = require("crypto-js");

const secretKey = "mi_secreto_super_seguro"; // misma clave que encrypt

const envEncPath = path.join(__dirname, ".env.enc");

let encrypted;
try {
  encrypted = fs.readFileSync(envEncPath, "utf8");
} catch (err) {
  console.error("❌ No se pudo leer el archivo .env.enc:", err.message);
  process.exit(1);
}

// Desencriptar directamente (sin IV)
let decrypted;
try {
  const bytes = CryptoJS.AES.decrypt(encrypted, secretKey);
  decrypted = bytes.toString(CryptoJS.enc.Utf8);
} catch (err) {
  console.error("❌ Error al desencriptar:", err.message);
  process.exit(1);
}

if (!decrypted) {
  console.error("❌ No se pudo decodificar el contenido (clave incorrecta o datos corruptos)");
  process.exit(1);
}

// Cargar en process.env
const lines = decrypted.split("\n");
for (const line of lines) {
  if (line.trim()) {
    const [key, value] = line.split("=");
    process.env[key] = value?.trim();
  }
}

console.log("✅ Variables desencriptadas cargadas en process.env");
