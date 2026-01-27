// config/migrations/001-register-collections.js
'use strict';

module.exports = {
  async up() {
    console.log('🚀 Registrando TODAS as coleções no banco de dados...');
    
    // Lista de TODAS as suas 23 coleções
    const collections = [
      'autorizacao-funcionamento',
      'categoria-eqavet',
      'certificacao-eqavet-20202023',
      'curso',
      'documento-base-eqavet',
      'estatuto',
      'evento',
      'ficha-operacao',
      'guiao-educacao-inclusiva',
      'legislacao-apoio',
      'manual-processos-eqavet',
      'noticia',
      'organizacao-escolar',
      'plano-acao-eqavet',
      'plano-acao-integrado-eqavet',
      'politica-privacidade',
      'projeto-educativo',
      'regulamento-interno',
      'relatorio-operador-eqavet',
      'relatorio-progresso-anual-eqavet',
      'relatorios-acompanhamento-eqavet',
      'relatorio-verificacao-eqavet',
      'selo-conformidade-eqavet'
    ];
    
    // Para cada coleção, cria uma entrada forçada no strapi_core_store_settings
    for (const collection of collections) {
      const uid = `api::${collection}.${collection}`;
      const key = `plugin_content_manager_configuration_content_types::${uid}`;
      
      const value = {
        uid,
        settings: {
          bulkable: true,
          filterable: true,
          searchable: true,
          pageSize: 10
        },
        metadatas: {},
        layouts: {}
      };
      
      // Verifica se já existe
      const existing = await strapi.db.query('strapi::core-store').findOne({
        where: { key }
      });
      
      if (!existing) {
        await strapi.db.query('strapi::core-store').create({
          data: {
            key,
            value: JSON.stringify(value),
            type: 'object',
            environment: 'development',
            tag: ''
          }
        });
        console.log(`✅ ${collection} registrada no banco`);
      } else {
        console.log(`⚠️ ${collection} já estava registrada`);
      }
    }
    
    console.log('🎉 TODAS as coleções foram registradas no banco!');
  },
  
  async down() {
    // Não faz nada na rollback
  }
};
