'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/autorizacao-funcionamentos',
      handler: 'autorizacao-funcionamento.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/autorizacao-funcionamentos/:id',
      handler: 'autorizacao-funcionamento.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
