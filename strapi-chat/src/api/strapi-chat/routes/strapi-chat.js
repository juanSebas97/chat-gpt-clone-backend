module.exports = {
  routes: [
     {
      method: 'POST',
      path: '/strapi-chat/chat',
      handler: 'strapi-chat.exampleAction',
      config: {
        policies: [],
        middlewares: [],
      },
     },
  ],
};
