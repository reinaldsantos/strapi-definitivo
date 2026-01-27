'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::estatuto.estatuto', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::estatuto.estatuto', id, params);
  },
});
