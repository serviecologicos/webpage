import { gql } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-client";
import { HomeSeparateProps } from "./separate.types";

const GET_SEPARATE_QUERY = gql`
  query getHomeSeparate($code: String!) {
    imageCollection(where: { code: $code }, limit: 1) {
      items {
        title
        media {
          height
          width
          url
        }
      }
    }
  }
`;

export const getHomeSeparate = async (code: string): Promise<HomeSeparateProps> => {
  const { data } = await apolloClient.query({
    query: GET_SEPARATE_QUERY,
    variables: { code },
    fetchPolicy: "no-cache",
  });

  const separate = data.imageCollection.items[0];

  const result = {
    title: separate.title,
    media: separate.media,
  };
  return result;
};
