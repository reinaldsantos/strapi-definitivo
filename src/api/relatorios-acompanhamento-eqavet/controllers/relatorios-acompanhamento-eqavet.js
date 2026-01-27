'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::relatorios-acompanhamento-eqavet.relatorios-acompanhamento-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::relatorios-acompanhamento-eqavet.relatorios-acompanhamento-eqavet').findOne(id, ctx.query);
  },
});
