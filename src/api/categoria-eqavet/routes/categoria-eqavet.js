'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/categoria-eqavets',
      handler: 'categoria-eqavet.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/categoria-eqavets/:id',
      handler: 'categoria-eqavet.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
