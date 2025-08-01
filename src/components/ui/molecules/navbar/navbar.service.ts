import { gql } from "@apollo/client";
import { apolloClient } from "@/utils/apollo-client";
import { NavbarProps } from "./navbar.types";

const GET_NAVBAR_QUERY = gql`
  query getNavbarQuery($code: String!) {
    headerCollection(where: { code: $code }, limit: 1) {
      items {
        code
        logo {
          ... on Image {
            title
            media {
              height
              width
              url
            }
          }
        }
        linksCollection {
          ... on HeaderLinksCollection {
            items {
              text
              link
              isExternalLink
            }
          }
        }
      }
    }
  }
`;

export const getNavbar = async (code: string): Promise<NavbarProps> => {
  try {
    const { data } = await apolloClient.query({
      query: GET_NAVBAR_QUERY,
      variables: { code },
      fetchPolicy: "no-cache",
    });

    if (
      !data.headerCollection.items ||
      data.headerCollection.items.length === 0
    ) {
      throw new Error(`No header found with code: ${code}`);
    }

    const content = data.headerCollection.items[0];

    const result = {
      code: content.code,
      logo: content.logo,
      linksCollection: content.linksCollection,
    };

    return result;
  } catch (error) {
    console.error("Error in getNavbar:", error);
    throw error;
  }
};
