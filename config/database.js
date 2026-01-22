// config/database.js - CONFIGURAÇÃO DEFINITIVA PARA RENDER
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: {
        rejectUnauthorized: false, // ⚠️ ACEITA certificado auto-assinado do Render
      },
    },
    pool: { min: 0, max: 5 },
  },
});
