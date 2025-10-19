import { gql } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-client";
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
        buttonsCollection {
          ... on ParallaxButtonsCollection {
            items {
              name
              code
              text
              link
              isExternalLink
            }
          }
        }
        title
        slogan
      }
    }
  }
`;

export const getParallax = async (code: string): Promise<ParallaxProps> => {
  const { data } = await apolloClient.query({
    query: GET_PARALLAX_QUERY,
    variables: { code },
    fetchPolicy: "no-cache",
  });

  const content = data.parallaxCollection.items[0];

  const result = {
    code: content.code,
    title: content.title,
    slogan: content.slogan,
    buttonsCollection: content.buttonsCollection,
    imagesCollection: content.imagesCollection,
  };

  return result;
};
