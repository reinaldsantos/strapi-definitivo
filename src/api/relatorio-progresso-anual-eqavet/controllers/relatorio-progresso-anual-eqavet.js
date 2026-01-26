'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::relatorio-progresso-anual-eqavet.relatorio-progresso-anual-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::relatorio-progresso-anual-eqavet.relatorio-progresso-anual-eqavet').findOne(id, ctx.query);
  },
});
