'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::projeto-educativo.projeto-educativo', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::projeto-educativo.projeto-educativo', id, params);
  },
});
