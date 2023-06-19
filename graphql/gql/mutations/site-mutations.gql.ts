import { gql } from "@apollo/client";

export const CREATE_SITE_GQL = gql`
  mutation createOneSite($input: CreateOneSiteInput!) {
    createOneSite(input: $input) {
      id
    }
  }
`;

export const UPDATE_SITE_GQL = gql`
  mutation updateSite($input: UpdateOneSiteInput!) {
    updateOneSite(input: $input) {
      id
    }
  }
`;