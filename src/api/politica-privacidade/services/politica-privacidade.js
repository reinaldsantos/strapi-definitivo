'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::politica-privacidade.politica-privacidade', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::politica-privacidade.politica-privacidade', id, params);
  },
});
