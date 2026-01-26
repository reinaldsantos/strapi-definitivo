'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::politica-privacidade.politica-privacidade').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::politica-privacidade.politica-privacidade').findOne(id, ctx.query);
  },
});
