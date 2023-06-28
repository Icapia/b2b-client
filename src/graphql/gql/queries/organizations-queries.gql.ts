import { gql } from "@apollo/client";

export const GET_ORGANIZATIONS_GQL = gql`
  query getOrganizations(
    $filter: OrganizationFilter
    $sorting: [OrganizationSort!]
  ) {
    organizations(filter: $filter, sorting: $sorting) {
      id
      name
      email
      phone_number
      location
      address
      zip_code
      created_at
      updated_at
    }
  }
`;

export const GET_ORGANIZATION_GQL = gql`
  query getOrganization($id: ID!) {
    organization(id: $id) {
      id
      name
      email
      phone_number
      location
      address
      zip_code
    }
  }
`;

// VARIABLES:
// {
//   "id": 1
// }
