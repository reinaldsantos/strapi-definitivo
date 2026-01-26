'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::ficha-operacao.ficha-operacao', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::ficha-operacao.ficha-operacao', id, params);
  },
});
