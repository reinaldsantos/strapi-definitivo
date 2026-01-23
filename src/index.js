"use strict";

// Debug inicial
console.log("🔍 DEBUG: Strapi iniciando...");
console.log("📅 " + new Date().toISOString());
console.log("🌍 NODE_ENV:", process.env.NODE_ENV);
console.log("🔗 DATABASE_URL presente?", !!process.env.DATABASE_URL);

// Capturar todos os erros não tratados
process.on('uncaughtException', (error) => {
  console.error("💥 ERRO NÃO TRATADO:", error.message);
  console.error(error.stack);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error("💥 PROMISE REJEITADA:", reason);
});

module.exports = {
  bootstrap() {
    console.log("✅ Bootstrap executado");
  },
};
