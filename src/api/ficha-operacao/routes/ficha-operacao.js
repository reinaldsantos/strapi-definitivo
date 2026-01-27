'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/ficha-operacaos',
      handler: 'ficha-operacao.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/ficha-operacaos/:id',
      handler: 'ficha-operacao.findOne',
      config: {
        policies: []
      }
    }
  ]
};
