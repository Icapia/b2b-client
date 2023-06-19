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
      site
      site_area
      chargePoints(filter: $chargePointFilter, sorting: $chargePointSorting) {
        id
        chargePointHardwareId
        siteId
        status
        instantPower
        connectors(filter: $connectorFilter, sorting: $connectorSorting) {
          id
          connectorTypeName
          price
          statusName
          power
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
      phone_number
      default_price
      chargePoints(filter: $chargePointFilter, sorting: $chargePointSorting) {
        id
        chargePointHardwareId
        siteId
        status
        instantPower
        connectors(filter: $connectorFilter, sorting: $connectorSorting) {
          id
          connectorTypeName
          price
          statusName
          power
        }
      }
    }
  }
`;
