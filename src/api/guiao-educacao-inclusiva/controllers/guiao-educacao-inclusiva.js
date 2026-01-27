'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::guiao-educacao-inclusiva.guiao-educacao-inclusiva').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::guiao-educacao-inclusiva.guiao-educacao-inclusiva').findOne(id, ctx.query);
  },
});
