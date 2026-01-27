'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::autorizacao-funcionamento.autorizacao-funcionamento').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::autorizacao-funcionamento.autorizacao-funcionamento').findOne(id, ctx.query);
  },
});
