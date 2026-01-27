'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::manual-processos-eqavet.manual-processos-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::manual-processos-eqavet.manual-processos-eqavet', id, params);
  },
});
