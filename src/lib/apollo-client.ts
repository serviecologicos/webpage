import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let uri = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

if(process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT) {
  uri += `/environments/${process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT}`;
}

export const apolloClient = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({
        uri,
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        },
        fetch,
    }),
    cache: new InMemoryCache(),
})