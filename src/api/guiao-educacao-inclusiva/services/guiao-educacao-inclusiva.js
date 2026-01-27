'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::guiao-educacao-inclusiva.guiao-educacao-inclusiva', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::guiao-educacao-inclusiva.guiao-educacao-inclusiva', id, params);
  },
});
