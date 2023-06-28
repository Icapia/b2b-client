export type ResponseAuth = {
  login: {
    accessToken: string,
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
}

// export type Connector = {
//   id: string,
//   connectorTypeName: string,
//   price: number,
//   power: number,
//   statusName: string,
// }

// export type ChargePointStatus = 'connected' | 'available' | 'charging' | 'finishing' | 'unavailable' | 'faulted'

// // export type ChargePoint = {
//   id: string,
//   chargePointHardwareId: string,
//   instantPower: number,
//   connectors: Connector[],
//   siteId: number,
//   status: ChargePointStatus,
// }

// export type Site = {
//   id: string,
//   site: string,
//   site_area: string,
//   chargePoints: ChargePoint[],
// }

// export type ResponseOrganizations = {
//   organizations: Organization[]
// }

// export type ResponseSites = {
//   sites: Site[]
// }

// export type CreateOneSiteResponse = {
//   createOneSite: {
//     id: string,
//   }
// }