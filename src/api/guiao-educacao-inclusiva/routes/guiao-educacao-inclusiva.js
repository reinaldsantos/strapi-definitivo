'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/guiao-educacao-inclusivas',
      handler: 'guiao-educacao-inclusiva.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/guiao-educacao-inclusivas/:id',
      handler: 'guiao-educacao-inclusiva.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
