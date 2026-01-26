'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::plano-acao-integrado-eqavet.plano-acao-integrado-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::plano-acao-integrado-eqavet.plano-acao-integrado-eqavet', id, params);
  },
});
