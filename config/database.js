// config/database.js - ACEITA SSL auto-assinado
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
      ssl: {
        rejectUnauthorized: false, // ⚠️ ACEITA certificado auto-assinado
      },
    },
    pool: { min: 0, max: 5 },
  },
});
