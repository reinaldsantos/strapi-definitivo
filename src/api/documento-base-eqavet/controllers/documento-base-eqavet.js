'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::documento-base-eqavet.documento-base-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::documento-base-eqavet.documento-base-eqavet').findOne(id, ctx.query);
  },
});
