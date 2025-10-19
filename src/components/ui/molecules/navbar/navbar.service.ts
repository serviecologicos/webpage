import { gql } from "@apollo/client";
import { apolloClient } from "@/lib/apollo-client";
import { NavbarProps } from "./navbar.types";

const GET_NAVBAR_QUERY = gql`
  query getNavbarQuery($code: String!) {
    headerCollection(where: { code: $code }, limit: 1) {
      items {
        code
        title
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
  const { data } = await apolloClient.query({
    query: GET_NAVBAR_QUERY,
    variables: { code },
    fetchPolicy: "no-cache",
  });

  const content = data.headerCollection.items[0];

  const result = {
    code: content.code,
    title: content.title,
    logo: content.logo,
    linksCollection: content.linksCollection,
  };
  return result;
};
