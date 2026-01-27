'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::relatorio-verificacao-eqavet.relatorio-verificacao-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::relatorio-verificacao-eqavet.relatorio-verificacao-eqavet', id, params);
  },
});
