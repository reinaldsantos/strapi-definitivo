// config/database.js - SEM SSL (APENAS PARA TESTE)
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: 'dpg-d5kgas94tr6s73au58pg-a',
      port: 5432,
      database: 'strapi_5cj5',
      user: 'meu_admin',
      password: 'QUm94o4oPL9x6bhGCX4B4zIGxwZeRRIF',
      ssl: false, // ⚠️ DESATIVA SSL COMPLETAMENTE
    },
  },
});
