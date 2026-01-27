'use strict';

module.exports = ({ strapi }) => ({
  async find(params) {
    return await strapi.entityService.findMany('api::certificacao-eqavet-20202023.certificacao-eqavet-20202023', params);
  },

  async findOne(id, params) {
    return await strapi.entityService.findOne('api::certificacao-eqavet-20202023.certificacao-eqavet-20202023', id, params);
  },
});
