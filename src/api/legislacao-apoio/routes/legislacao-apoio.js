'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/legislacao-apoios',
      handler: 'legislacao-apoio.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/legislacao-apoios/:id',
      handler: 'legislacao-apoio.findOne',
      config: {
        policies: []
      }
    }
  ]
};
