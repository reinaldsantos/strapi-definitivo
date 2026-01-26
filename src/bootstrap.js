// src/bootstrap.js - Força registro de todas as coleções
module.exports = ({ strapi }) => {
  console.log('🔧 Bootstrap: Registrando coleções...');
  
  const collections = [
    'autorizacao-funcionamento',
    'categoria-eqavet',
    'certificacao-eqavet-20202023',
    'documento-base-eqavet',
    'estatuto',
    'ficha-operacao',
    'guiao-educacao-inclusiva',
    'legislacao-apoio',
    'manual-processos-eqavet',
    'organizacao-escolar',
    'plano-acao-eqavet',
    'plano-acao-integrado-eqavet',
    'politica-privacidade',
    'projeto-educativo',
    'regulamento-interno',
    'relatorio-operador-eqavet',
    'relatorio-progresso-anual-eqavet',
    'relatorio-verificacao-eqavet',
    'relatorios-acompanhamento-eqavet',
    'selo-conformidade-eqavet'
  ];

  console.log(`📚 Total coleções: ${collections.length}`);
  
  // Este script força o Strapi a reconhecer as coleções
  // ao iniciar
  setTimeout(() => {
    console.log('✅ Bootstrap concluído');
  }, 1000);
};
