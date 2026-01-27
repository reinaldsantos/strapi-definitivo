'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::ficha-operacao.ficha-operacao').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::ficha-operacao.ficha-operacao').findOne(id, ctx.query);
  },
});
