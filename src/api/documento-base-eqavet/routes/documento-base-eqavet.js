'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/documento-base-eqavets',
      handler: 'documento-base-eqavet.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/documento-base-eqavets/:id',
      handler: 'documento-base-eqavet.findOne',
      config: {
        policies: []
      }
    }
  ]
};
