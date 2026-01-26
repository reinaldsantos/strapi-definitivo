'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::regulamento-interno.regulamento-interno').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::regulamento-interno.regulamento-interno').findOne(id, ctx.query);
  },
});
