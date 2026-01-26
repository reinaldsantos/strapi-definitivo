'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::plano-acao-eqavet.plano-acao-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::plano-acao-eqavet.plano-acao-eqavet').findOne(id, ctx.query);
  },
});
