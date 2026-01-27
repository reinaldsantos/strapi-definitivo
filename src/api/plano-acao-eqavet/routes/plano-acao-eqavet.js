'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/plano-acao-eqavets',
      handler: 'plano-acao-eqavet.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/plano-acao-eqavets/:id',
      handler: 'plano-acao-eqavet.findOne',
      config: {
        policies: []
      }
    }
  ]
};
