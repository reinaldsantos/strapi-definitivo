'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/relatorios-acompanhamento-eqavets',
      handler: 'relatorios-acompanhamento-eqavet.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/relatorios-acompanhamento-eqavets/:id',
      handler: 'relatorios-acompanhamento-eqavet.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
