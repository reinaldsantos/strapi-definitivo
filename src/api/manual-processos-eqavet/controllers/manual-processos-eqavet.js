'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::manual-processos-eqavet.manual-processos-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::manual-processos-eqavet.manual-processos-eqavet').findOne(id, ctx.query);
  },
});
