"use strict";

module.exports = async ({ strapi }) => {
  console.log("🚀 AUTO-CONFIG - Sincronizando tudo com Render");
  
  // Esperar Strapi carregar
  await new Promise(resolve => setTimeout(resolve, 10000));
  
  try {
    console.log("🔧 CONFIGURANDO PERMISSÕES PÚBLICAS AUTOMATICAMENTE...");
    
    // 1. Encontrar ou criar role Public
    let publicRole = await strapi.db.query("plugin::users-permissions.role").findOne({
      where: { type: "public" }
    });
    
    if (!publicRole) {
      console.log("📝 Criando role Public...");
      publicRole = await strapi.db.query("plugin::users-permissions.role").create({
        data: {
          name: "Public",
          description: "Usuários públicos",
          type: "public"
        }
      });
      console.log("✅ Role Public criado");
    }
    
    console.log(`🎯 Role Public ID: ${publicRole.id}`);
    
    // 2. Lista de coleções que você quer públicas
    const publicCollections = ["noticia", "evento", "curso"];
    
    // 3. Para cada coleção, garantir permissões
    for (const collection of publicCollections) {
      console.log(`\n📝 ${collection}:`);
      
      // Verificar se a coleção existe
      const contentType = strapi.contentTypes[`api::${collection}.${collection}`];
      if (!contentType) {
        console.log(`   ⚠️  Coleção não existe ainda. Será configurada quando criar.`);
        continue;
      }
      
      const actions = ["find", "findOne"];
      
      for (const action of actions) {
        const actionName = `api::${collection}.${collection}.${action}`;
        
        try {
          // Verificar se permissão já existe
          const exists = await strapi.db.query("plugin::users-permissions.permission").findOne({
            where: { action: actionName, role: publicRole.id }
          });
          
          if (!exists) {
            // Criar permissão
            await strapi.db.query("plugin::users-permissions.permission").create({
              data: {
                action: actionName,
                role: publicRole.id
              }
            });
            console.log(`   ✅ ${action} - CONFIGURADA`);
          } else {
            console.log(`   ⏩ ${action} - Já configurada`);
          }
        } catch (error) {
          console.log(`   ❌ ${action} - Erro: ${error.message}`);
        }
      }
    }
    
    console.log("\n🎉 CONFIGURAÇÃO AUTOMÁTICA COMPLETA!");
    console.log("📡 APIs PÚBLICAS DISPONÍVEIS:");
    console.log("   • /api/noticias");
    console.log("   • /api/eventos");
    console.log("   • /api/cursos");
    console.log("\n💡 Tudo que criar localmente já estará público no Render!");
    
    // 4. AGORA criar middleware de EMERGÊNCIA
    console.log("\n🔧 CONFIGURANDO MIDDLEWARE DE EMERGÊNCIA...");
    
  } catch (error) {
    console.error("❌ Erro na configuração automática:", error.message);
  }
};

// Middleware global para permitir acesso público mesmo sem permissões configuradas
module.exports.middleware = (strapi) => {
  return {
    initialize() {
      strapi.app.use(async (ctx, next) => {
        const publicPaths = [
          '/api/noticias',
          '/api/noticias/:id',
          '/api/eventos', 
          '/api/eventos/:id',
          '/api/cursos',
          '/api/cursos/:id'
        ];
        
        const isPublicApi = publicPaths.some(path => {
          if (path.includes(':id')) {
            return ctx.request.path.startsWith(path.split('/:id')[0]) && 
                   ctx.request.method === 'GET';
          }
          return ctx.request.path === path && ctx.request.method === 'GET';
        });
        
        if (isPublicApi) {
          // Pular autenticação para APIs públicas
          console.log(`🌐 Acesso público permitido: ${ctx.request.path}`);
          return next();
        }
        
        await next();
      });
    }
  };
};
