import { gql } from "@apollo/client";
import { apolloClient } from "@/utils/apollo-client";
import { ParallaxProps } from "./parallax.types";

const GET_PARALLAX_QUERY = gql`
  query getParallaxQuery($code: String!) {
    parallaxCollection(where: { code: $code }, limit: 1) {
      items {
        code
        imagesCollection {
          ... on ParallaxImagesCollection {
            items {
              media {
                height
                width
                url
              }
            }
          }
        }
      }
    }
  }
`;


export const getParallax = async (code: string): Promise<ParallaxProps> => {
  try {
    const { data } = await apolloClient.query({
      query: GET_PARALLAX_QUERY,
      variables: { code },
      fetchPolicy: "no-cache",
    });

    if (
      !data.parallaxCollection.items ||
      data.parallaxCollection.items.length === 0
    ) {
      throw new Error(`No parallax found with code: ${code}`);
    }

    const content = data.parallaxCollection.items[0];

    const result = {
      code: content.code,
      imagesCollection: content.imagesCollection,
    };

    return result;
  } catch (error) {
    console.error("Error in getParallax:", error);
    throw error;
  }
}