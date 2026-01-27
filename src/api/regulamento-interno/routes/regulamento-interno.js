'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/regulamento-internos',
      handler: 'regulamento-interno.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/regulamento-internos/:id',
      handler: 'regulamento-interno.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
