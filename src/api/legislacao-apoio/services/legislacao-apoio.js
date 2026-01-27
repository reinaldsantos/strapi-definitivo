'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::legislacao-apoio.legislacao-apoio', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::legislacao-apoio.legislacao-apoio', id, params);
  },
});
