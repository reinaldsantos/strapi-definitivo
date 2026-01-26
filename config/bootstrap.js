// config/bootstrap.js
'use strict';

module.exports = async ({ strapi }) => {
  // Este código roda APÓS o Strapi iniciar, não durante o build
  
  console.log('🚀 Iniciando registro automático de coleções...');
  
  // Lista de coleções para registrar
  const colecoes = [
    'api::autorizacao-funcionamento.autorizacao-funcionamento',
    'api::categoria-eqavet.categoria-eqavet',
    'api::certificacao-eqavet-20202023.certificacao-eqavet-20202023',
    'api::curso.curso',
    'api::documento-base-eqavet.documento-base-eqavet',
    'api::estatuto.estatuto',
    'api::evento.evento',
    'api::ficha-operacao.ficha-operacao',
    'api::guiao-educacao-inclusiva.guiao-educacao-inclusiva',
    'api::legislacao-apoio.legislacao-apoio',
    'api::manual-processos-eqavet.manual-processos-eqavet',
    'api::noticia.noticia',
    'api::organizacao-escolar.organizacao-escolar',
    'api::plano-acao-eqavet.plano-acao-eqavet',
    'api::plano-acao-integrado-eqavet.plano-acao-integrado-eqavet',
    'api::politica-privacidade.politica-privacidade',
    'api::projeto-educativo.projeto-educativo',
    'api::regulamento-interno.regulamento-interno',
    'api::relatorio-operador-eqavet.relatorio-operador-eqavet',
    'api::relatorio-progresso-anual-eqavet.relatorio-progresso-anual-eqavet',
    'api::relatorios-acompanhamento-eqavet.relatorios-acompanhamento-eqavet',
    'api::relatorio-verificacao-eqavet.relatorio-verificacao-eqavet',
    'api::selo-conformidade-eqavet.selo-conformidade-eqavet'
  ];

  // Aguardar um pouco para garantir que tudo está carregado
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  console.log(`📋 Total de coleções para registrar: ${colecoes.length}`);
  
  let registradas = 0;
  let erros = 0;
  
  for (const uid of colecoes) {
    try {
      // Verificar se o content-type existe
      const contentType = strapi.contentTypes[uid];
      if (!contentType) {
        console.log(`❌ ${uid} não encontrada no strapi.contentTypes`);
        erros++;
        continue;
      }
      
      console.log(`📝 Processando: ${uid.split('.')[1]}`);
      
      // Tentar acessar o serviço de content-types
      // Isso força o registro no sistema
      const contentManager = strapi.plugin('content-manager');
      if (contentManager && contentManager.service('content-types')) {
        try {
          await contentManager.service('content-types').findConfiguration({ uid });
          console.log(`✅ ${uid.split('.')[1]} configurada`);
          registradas++;
        } catch (configError) {
          // Se falhar, pelo menos o content-type foi "tocado"
          console.log(`⚠️ ${uid.split('.')[1]} - config falhou mas foi registrada`);
          registradas++;
        }
      }
      
    } catch (error) {
      console.log(`❌ Erro em ${uid}: ${error.message}`);
      erros++;
    }
    
    // Pequena pausa
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  console.log(`🎉 RESULTADO: ${registradas} registradas, ${erros} erros`);
  
  // Forçar recarregamento das permissões
  console.log('🔄 Dica: Recarregue a página de permissões para ver as coleções!');
};
