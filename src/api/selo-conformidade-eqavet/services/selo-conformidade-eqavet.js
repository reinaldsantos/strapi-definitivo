'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::selo-conformidade-eqavet.selo-conformidade-eqavet', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::selo-conformidade-eqavet.selo-conformidade-eqavet', id, params);
  },
});
