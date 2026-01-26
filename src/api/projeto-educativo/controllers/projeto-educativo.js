'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::projeto-educativo.projeto-educativo').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::projeto-educativo.projeto-educativo').findOne(id, ctx.query);
  },
});
