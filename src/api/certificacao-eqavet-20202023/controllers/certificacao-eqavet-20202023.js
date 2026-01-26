'use strict';

module.exports = ({ strapi }) => ({
  async find(ctx) {
    return await strapi.service('api::certificacao-eqavet-20202023.certificacao-eqavet-20202023').find(ctx);
  },

  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::certificacao-eqavet-20202023.certificacao-eqavet-20202023').findOne(id, ctx.query);
  },
});
