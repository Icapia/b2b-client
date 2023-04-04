import { gql } from "@apollo/client";

export const CREATE_CONNECTOR_GQL = gql`
  mutation createConnector($input: CreateOneConnectorInput!) {
    createOneConnector(input: $input) {
      id
    }
  }
`;

// {
//   "input": {
//     "connector": {
//       "siteId":1,
//       "chargePointId": 1
//     }
//   }
// }

export const UPDATE_CONNECTOR_GQL = gql`
  mutation updateConnector($input: UpdateOneConnectorInput!) {
    updateOneConnector(input: $input) {
      id
    }
  }
`;

// {
//   "input": {
//     "id": 1,
//     "update": {
//       "connectorTypeName": "Type 1",
//       "price": 0.12,
//       "power": 34
//     }
//   }
// }

export const DELETE_CONNECTOR_GQL = gql`
  mutation createConnector($input: CreateOneConnectorInput!) {
    createOneConnector(input: $input) {
      id
    }
  }
`;

// {
//   "input": {
//     "id": 112
//   }
// }
