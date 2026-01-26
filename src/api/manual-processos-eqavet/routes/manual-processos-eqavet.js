'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/manual-processos-eqavets',
      handler: 'manual-processos-eqavet.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/manual-processos-eqavets/:id',
      handler: 'manual-processos-eqavet.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
