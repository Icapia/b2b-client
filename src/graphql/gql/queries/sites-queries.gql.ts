import { gql } from "@apollo/client";

export const GET_SITES_GQL = gql`
  query getSites(
    $filter: SiteFilter!
    $sorting: [SiteSort!]
    $chargePointFilter: ChargePointFilter!
    $chargePointSorting: [ChargePointSort!]
    $connectorFilter: ConnectorFilter!
    $connectorSorting: [ConnectorSort!]!
  ) {
    sites(filter: $filter, sorting: $sorting) {
      id
      name
      zip_code
      phone_number
      default_price
      location
      address
      chargePoints(filter: $chargePointFilter, sorting: $chargePointSorting) {
        id
        chargePointHardwareId
        siteId
        status
        connectors(filter: $connectorFilter, sorting: $connectorSorting) {
          id
          connectorId
          connectorTypeName
          price
          statusName
          power
          chargePointId
          chargePointHardwareId
          label
          siteId
        }
      }
    }
  }
`;

export const GET_SITE_GQL = gql`
  query getSite(
    $id: ID!
    $chargePointFilter: ChargePointFilter!
    $chargePointSorting: [ChargePointSort!]
    $connectorFilter: ConnectorFilter!
    $connectorSorting: [ConnectorSort!]!
  ) {
    site(id: $id) {
      id
      organizationId
      name
      zip_code
      address
      site_area
      location
      phone_number
      default_price
      chargePoints(filter: $chargePointFilter, sorting: $chargePointSorting) {
        id
        chargePointHardwareId
        siteId
        status
        connectors(filter: $connectorFilter, sorting: $connectorSorting) {
          id
          connectorId
          connectorTypeName
          price
          statusName
          power
          chargePointId
          chargePointHardwareId
          label
          siteId
        }
      }
    }
  }
`;
