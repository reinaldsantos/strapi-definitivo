'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/certificacao-eqavet-20202023s',
      handler: 'certificacao-eqavet-20202023.find',
      config: {
        policies: [],
        middlewares: [],
      },
    },
    {
      method: 'GET',
      path: '/certificacao-eqavet-20202023s/:id',
      handler: 'certificacao-eqavet-20202023.findOne',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
