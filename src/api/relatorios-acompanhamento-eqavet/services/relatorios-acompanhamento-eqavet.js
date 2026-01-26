'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::relatorios-acompanhamento-eqavet.relatorios-acompanhamento-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::relatorios-acompanhamento-eqavet.relatorios-acompanhamento-eqavet', id, params);
  },
});
