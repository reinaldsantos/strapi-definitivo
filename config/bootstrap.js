// config/bootstrap.js
'use strict';

module.exports = async ({ strapi }) => {
  console.log('🚀 Executando bootstrap para registrar coleções...');

  // Lista de todas as suas coleções
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

  // Para cada coleção, força registro no content-manager
  for (const uid of colecoes) {
    try {
      const config = await strapi.plugin('content-manager')
        .service('content-types')
        .findConfiguration({ uid });

      console.log(`✅ ${uid.split('.')[1]} registrada`);
    } catch (error) {
      console.log(`⚠️ ${uid.split('.')[1]} erro: ${error.message}`);
    }
  }

  console.log('🎉 Bootstrap completo!');
};
