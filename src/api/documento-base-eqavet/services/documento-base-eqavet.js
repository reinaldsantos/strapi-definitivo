'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::documento-base-eqavet.documento-base-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::documento-base-eqavet.documento-base-eqavet', id, params);
  },
});
