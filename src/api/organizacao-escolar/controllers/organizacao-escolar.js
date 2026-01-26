'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::organizacao-escolar.organizacao-escolar').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::organizacao-escolar.organizacao-escolar').findOne(id, ctx.query);
  },
});
