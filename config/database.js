// config/database.js - VERSÃO SIMPLES PARA NOVA URL
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
    },
    pool: { min: 0, max: 5 },
  },
});
