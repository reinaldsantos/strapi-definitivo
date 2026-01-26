'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::relatorio-progresso-anual-eqavet.relatorio-progresso-anual-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::relatorio-progresso-anual-eqavet.relatorio-progresso-anual-eqavet', id, params);
  },
});
