'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/manual-processos-eqavets',
      handler: 'manual-processos-eqavet.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/manual-processos-eqavets/:id',
      handler: 'manual-processos-eqavet.findOne',
      config: {
        policies: []
      }
    }
  ]
};
