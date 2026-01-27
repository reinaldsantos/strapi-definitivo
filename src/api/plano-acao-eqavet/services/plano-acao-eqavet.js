'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::plano-acao-eqavet.plano-acao-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::plano-acao-eqavet.plano-acao-eqavet', id, params);
  },
});
