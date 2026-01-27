'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::relatorio-operador-eqavet.relatorio-operador-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::relatorio-operador-eqavet.relatorio-operador-eqavet').findOne(id, ctx.query);
  },
});
