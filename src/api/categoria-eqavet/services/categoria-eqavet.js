'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::categoria-eqavet.categoria-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::categoria-eqavet.categoria-eqavet', id, params);
  },
});
