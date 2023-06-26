export type ResponseAuth = {
  login: {
    accessToken: string,
    __typename: string,
  }
}

export type Location = {
  coordinates: number[]
  type: string,
}

export type Organization = {
  id: string,
  location: Location,
  address: string,
  created_at: string,
  email: string,
  name: string,
  phone_number: string,
  updated_at: string,
  zip_code: number,
  __typename: string,
}

export type Connector = {
  id: string,
  connectorTypeName: string,
  price: number,
  power: number,
  statusName: string,
  __typename: string,
}

export type ChargePointStatus = 'connected' | 'available' | 'charging' | 'finishing' | 'unavailable' | 'faulted'

export type ChargePoint = {
  id: string,
  chargePointHardwareId: string,
  instantPower: number,
  connectors: Connector[],
  siteId: number,
  status: ChargePointStatus,
  __typename: string,
}

export type Site = {
  id: string,
  site: string,
  site_area: string,
  chargePoints: ChargePoint[],
  __typename: string,
}

export type ResponseOrganizations = {
  organizations: Organization[]
}

export type ResponseSites = {
  sites: Site[]
}

export type CreateOneSiteResponse = {
  createOneSite: {
    id: string,
    __typename: string,
  }
}