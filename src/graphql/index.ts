import { GraphQLClient } from 'graphql-request';
import { env } from 'app/config/env';

export class GraphQLClientSingleton {
  private readonly endpoint: string = env.SHOPIFY_GRAPHQL_ENDPOINT;
  private readonly token: string = env.SHOPIFY_STOREFRONT_TOKEN;

  private static instance: GraphQLClientSingleton;

  private constructor() {}

  static getInstance(): GraphQLClientSingleton {
    if (!this.instance) {
      this.instance = new GraphQLClientSingleton();
    }
    return this.instance;
  }

  getClient(): GraphQLClient {
    return new GraphQLClient(this.endpoint, {
      headers: {
        'Shopify-Storefront-Private-Token': this.token,
      },
    });
  }
}
