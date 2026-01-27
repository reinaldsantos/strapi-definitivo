'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/documento-base-eqavets',
      handler: 'documento-base-eqavet.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/documento-base-eqavets/:id',
      handler: 'documento-base-eqavet.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
