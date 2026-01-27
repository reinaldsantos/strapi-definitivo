'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/relatorio-operador-eqavets',
      handler: 'relatorio-operador-eqavet.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/relatorio-operador-eqavets/:id',
      handler: 'relatorio-operador-eqavet.findOne',
      config: {
        policies: []
      }
    }
  ]
};
