'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::relatorio-operador-eqavet.relatorio-operador-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::relatorio-operador-eqavet.relatorio-operador-eqavet', id, params);
  },
});
