'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/relatorio-verificacao-eqavets',
      handler: 'relatorio-verificacao-eqavet.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/relatorio-verificacao-eqavets/:id',
      handler: 'relatorio-verificacao-eqavet.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
