'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/estatutos',
      handler: 'estatuto.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/estatutos/:id',
      handler: 'estatuto.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
