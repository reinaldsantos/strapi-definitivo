'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/selo-conformidade-eqavets',
      handler: 'selo-conformidade-eqavet.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/selo-conformidade-eqavets/:id',
      handler: 'selo-conformidade-eqavet.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
