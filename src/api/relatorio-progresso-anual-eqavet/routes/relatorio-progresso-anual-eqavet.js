'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/relatorio-progresso-anual-eqavets',
      handler: 'relatorio-progresso-anual-eqavet.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/relatorio-progresso-anual-eqavets/:id',
      handler: 'relatorio-progresso-anual-eqavet.findOne',
      config: {
        policies: []
      }
    }
  ]
};
