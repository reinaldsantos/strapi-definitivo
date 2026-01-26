'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ficha-operacaos',
      handler: 'ficha-operacao.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/ficha-operacaos/:id',
      handler: 'ficha-operacao.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
