'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::plano-acao-integrado-eqavet.plano-acao-integrado-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::plano-acao-integrado-eqavet.plano-acao-integrado-eqavet').findOne(id, ctx.query);
  },
});
