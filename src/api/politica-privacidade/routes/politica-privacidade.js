'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/politica-privacidades',
      handler: 'politica-privacidade.find',
      config: {
        policies: []
      }
    },
    {
      method: 'GET',
      path: '/politica-privacidades/:id',
      handler: 'politica-privacidade.findOne',
      config: {
        policies: []
      }
    }
  ]
};
