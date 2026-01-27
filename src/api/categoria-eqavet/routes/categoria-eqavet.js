'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/categoria-eqavets',
      handler: 'categoria-eqavet.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/categoria-eqavets/:id',
      handler: 'categoria-eqavet.findOne',
      config: {
        policies: []
      }
    }
  ]
};
