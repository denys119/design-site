'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {
    const extensionService = strapi.service("plugin::graphql.extension");

    extensionService.use(({ strapi, nexus }) => ({
      typeDefs: `
        type Query {
          page(slug: String!): PageEntityResponse
        }
      `,
      resolvers: {
        Query: {
          page: {
            resolve: async (parent, args, context) => {
              const { toEntityResponse } = strapi.service(
                "plugin::graphql.format"
              ).returnTypes;

              const data = await strapi.services["api::page.page"].find({
                filters: { slug: args.slug },
                locale: args.locale || "en"
              });

              const response = toEntityResponse(data.results[0]);

              return response;
            },
          }
        }
      },
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {},
};
