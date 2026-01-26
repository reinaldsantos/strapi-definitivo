'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/legislacao-apoios',
      handler: 'legislacao-apoio.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/legislacao-apoios/:id',
      handler: 'legislacao-apoio.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
