import { gql } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-client";
import { HomeSectionProps } from "./content-section.types";

const GET_SECTION_QUERY = gql`
  query getHomeSectionQuery($code: String!) {
    transversalContentCollection(where: { code: $code }, limit: 1) {
      items {
        code
        title
        subtitle
        description {
          json
        }
        sliderCollection {
          ... on TransversalContentSliderCollection {
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
        background {
          ... on Image {
            title
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
`;

export const getHomeSection = async (
  code: string
): Promise<HomeSectionProps> => {
  const { data } = await apolloClient.query({
    query: GET_SECTION_QUERY,
    variables: { code },
    fetchPolicy: "no-cache",
  });

  const section = data.transversalContentCollection.items[0];

  const result = {
    code: section.code,
    title: section.title,
    subtitle: section.subtitle,
    description: section.description,
    sliderCollection: section.sliderCollection,
    background: section.background,
  };
  return result;
};
