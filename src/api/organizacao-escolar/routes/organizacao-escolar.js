'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/organizacao-escolars',
      handler: 'organizacao-escolar.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/organizacao-escolars/:id',
      handler: 'organizacao-escolar.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
