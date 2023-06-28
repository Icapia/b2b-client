import { gql } from "@apollo/client";

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
  mutation deleteChargePoint($input: DeleteOneChargePointInput!) {
    deleteOneChargePoint(input: $input) {
      id
    }
  }
`;