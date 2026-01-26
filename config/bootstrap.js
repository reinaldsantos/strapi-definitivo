// config/bootstrap.js - APENAS para log
'use strict';

module.exports = async () => {
  // Este código roda quando o Strapi INICIA, não durante build
  console.log('🚀 Strapi iniciado - Bootstrap executado');
  
  // O registro das coleções é automático quando:
  // 1. DATABASE_AUTO_MIGRATION = true
  // 2. O Strapi inicia pela primeira vez
  // 3. OU quando faz deploy com force migration
  
  console.log('✅ As coleções serão registradas automaticamente pelo sistema de migração');
  
  // Não tente acessar strapi.contentTypes aqui
  // Isso acontece automaticamente após o bootstrap
};
