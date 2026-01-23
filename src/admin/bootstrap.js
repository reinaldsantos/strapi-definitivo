"use strict";

module.exports = ({ strapi }) => {
  console.log("🚀 STRAPI DEFINITIVO - INICIANDO NO RENDER");
  console.log("📅 " + new Date().toISOString());
  
  // Configuração automática após Strapi carregar
  setTimeout(async () => {
    try {
      console.log("🔧 CONFIGURAÇÃO AUTOMÁTICA INICIADA...");
      
      // 1. Encontrar role Public
      const publicRole = await strapi.db.query("plugin::users-permissions.role").findOne({
        where: { type: "public" }
      });
      
      if (publicRole) {
        console.log(`✅ Role Public encontrado (ID: ${publicRole.id})`);
        
        // 2. Lista de coleções que você vai criar
        const collections = ["noticia", "evento", "curso"];
        
        console.log("🎯 Coleções a configurar:", collections.join(", "));
        
        // 3. Configurar permissões básicas
        for (const collection of collections) {
          try {
            const actions = ["find", "findOne"];
            
            for (const action of actions) {
              const actionName = `api::${collection}.${collection}.${action}`;
              
              // Verificar se já existe
              const exists = await strapi.db.query("plugin::users-permissions.permission").findOne({
                where: { action: actionName, role: publicRole.id }
              });
              
              if (!exists) {
                await strapi.db.query("plugin::users-permissions.permission").create({
                  data: { action: actionName, role: publicRole.id }
                });
                console.log(`   ✅ ${collection}.${action} - configurada`);
              } else {
                console.log(`   ⏩ ${collection}.${action} - já existe`);
              }
            }
          } catch (error) {
            console.log(`   ⚠️  ${collection}: ${error.message}`);
          }
        }
        
        console.log("\n🎉 CONFIGURAÇÃO COMPLETA!");
        console.log("📡 URLs públicas após criar coleções:");
        console.log("   • /api/noticias");
        console.log("   • /api/eventos");
        console.log("   • /api/cursos");
      }
      
    } catch (error) {
      console.log("⚠️  Erro na configuração automática:", error.message);
      console.log("💡 Isso é normal na primeira execução.");
    }
  }, 15000); // 15 segundos após iniciar
};
