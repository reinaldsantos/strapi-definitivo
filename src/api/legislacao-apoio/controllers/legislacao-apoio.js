'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::legislacao-apoio.legislacao-apoio').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::legislacao-apoio.legislacao-apoio').findOne(id, ctx.query);
  },
});
