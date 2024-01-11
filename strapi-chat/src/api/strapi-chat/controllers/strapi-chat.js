'use strict';

/**
 * A set of functions called "actions" for `strapi-chat`
 */

module.exports = {
  exampleAction: async (ctx, next) => {
    try {
      const response = await strapi
        .service("api::strapi-chat.strapi-chat")
        .chat(ctx);

      ctx.body = { data: response };
    } catch (err) {
      console.log(err.message);
      throw new Error(err.message);
    }
  }
};
