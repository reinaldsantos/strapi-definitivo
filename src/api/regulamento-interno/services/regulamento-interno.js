'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::regulamento-interno.regulamento-interno', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::regulamento-interno.regulamento-interno', id, params);
  },
});
