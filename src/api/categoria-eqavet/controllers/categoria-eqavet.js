'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::categoria-eqavet.categoria-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::categoria-eqavet.categoria-eqavet').findOne(id, ctx.query);
  },
});
