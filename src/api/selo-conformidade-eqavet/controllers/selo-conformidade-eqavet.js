'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::selo-conformidade-eqavet.selo-conformidade-eqavet').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::selo-conformidade-eqavet.selo-conformidade-eqavet').findOne(id, ctx.query);
  },
});
