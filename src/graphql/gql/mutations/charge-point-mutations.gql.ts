import { gql } from "@apollo/client"

export const CREATE_CHARGE_POINT_GQL = gql`
  mutation createChargePoint($input: CreateOneChargePointInput!) {
    createOneChargePoint(input: $input) {
      id
    }
  }
`;

export const UPDATE_CHARGE_POINT_GQL = gql`
  mutation updateChargePoint($input: UpdateOneChargePointInput!) {
    updateOneChargePoint(input: $input) {
      id
    }
  }
`;

export const DELETE_CHARGE_POINT_GQL = gql`
  mutation deleteOneChargePoint($input: DeleteOneChargePointInput!){
    deleteOneChargePoint(input: $input){
      id
    }
  }
`;

export const DELETE_CONNECTOR_GQL = gql`
  mutation deleteOneConnector($input: DeleteOneConnectorInput!){
    deleteOneConnector(input: $input){
      id
    }
  }
`;