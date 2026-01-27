'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/plano-acao-eqavets',
      handler: 'plano-acao-eqavet.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/plano-acao-eqavets/:id',
      handler: 'plano-acao-eqavet.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
