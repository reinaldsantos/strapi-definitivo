'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::organizacao-escolar.organizacao-escolar', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::organizacao-escolar.organizacao-escolar', id, params);
  },
});
