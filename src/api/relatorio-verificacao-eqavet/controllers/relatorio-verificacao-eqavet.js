'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::relatorio-verificacao-eqavet.relatorio-verificacao-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::relatorio-verificacao-eqavet.relatorio-verificacao-eqavet').findOne(id, ctx.query);
  },
});
