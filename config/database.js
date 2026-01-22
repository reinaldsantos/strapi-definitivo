// config/database.js - SOLUÇÃO DEFINITIVA
const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
  // Se tiver DATABASE_URL, usa ela
  if (env("DATABASE_URL")) {
    const config = parse(env("DATABASE_URL"));
    return {
      connection: {
        client: "postgres",
        connection: {
          ...config,
          ssl: {
            rejectUnauthorized: false, // ⚠️ IGNORA certificado
          },
        },
      },
    };
  }
  
  // Se não, usa valores diretos
  return {
    connection: {
      client: "postgres",
      connection: {
        host: "dpg-d5kgas94tr6s73au58pg-a",
        port: 5432,
        database: "strapi_5cj5",
        user: "meu_admin",
        password: "QUm94o4oPL9x6bhGCX4B4zIGxwZeRRIF",
        ssl: {
          rejectUnauthorized: false, // ⚠️ IGNORA certificado
        },
      },
    },
  };
};
