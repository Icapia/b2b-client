import { gql } from "@apollo/client"

export const CREATE_ORGANIZATION_GQL = gql`
  mutation createOrganization($input: CreateOneOrganizationInput!) {
    createOneOrganization(input: $input) {
      id
    }
  }
`;

export const UPDATE_ORGANIZATION_GQL = gql`
  mutation updateOrganization($input: UpdateOneOrganizationInput!) {
    updateOneOrganization(input: $input) {
      id
    }
  }
`;

export const DELETE_ORGANIZATION_GQL = gql`
  mutation deleteOneOrganization($input: DeleteOneOrganizationInput!){
    deleteOneOrganization(input:$input){
      id
    }
  }
`;