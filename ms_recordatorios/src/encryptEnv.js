const fs = require("fs");
const CryptoJS = require("crypto-js");

const envContent = fs.readFileSync(".env", "utf8"); // usa utf8, no "utf-8"
const secretKey = "mi_secreto_super_seguro";

const encrypted = CryptoJS.AES.encrypt(envContent, secretKey).toString();
fs.writeFileSync(".env.enc", encrypted, "utf8");

console.log("✅ Archivo .env encriptado correctamente -> .env.enc");
