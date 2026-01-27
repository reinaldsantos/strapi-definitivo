'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/projeto-educativos',
      handler: 'projeto-educativo.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/projeto-educativos/:id',
      handler: 'projeto-educativo.findOne',
      config: {
        policies: []
      }
    }
  ]
};
