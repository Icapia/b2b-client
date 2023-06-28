import { gql } from "@apollo/client";

export const CREATE_CONNECTOR_GQL = gql`
  mutation createConnector($input: CreateOneConnectorInput!) {
    createOneConnector(input: $input) {
      id
    }
  }
`;

export const UPDATE_CONNECTOR_GQL = gql`
  mutation updateConnector($input: UpdateOneConnectorInput!) {
    updateOneConnector(input: $input) {
      id
    }
  }
`;

export const DELETE_CONNECTOR_GQL = gql`
  mutation createConnector($input: CreateOneConnectorInput!) {
    createOneConnector(input: $input) {
      id
    }
  }
`;
