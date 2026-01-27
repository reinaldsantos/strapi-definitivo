'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/plano-acao-integrado-eqavets',
      handler: 'plano-acao-integrado-eqavet.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/plano-acao-integrado-eqavets/:id',
      handler: 'plano-acao-integrado-eqavet.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
