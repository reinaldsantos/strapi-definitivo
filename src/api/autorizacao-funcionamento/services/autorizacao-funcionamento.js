'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::autorizacao-funcionamento.autorizacao-funcionamento', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::autorizacao-funcionamento.autorizacao-funcionamento', id, params);
  },
});
