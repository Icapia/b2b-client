export type ConnectorsType = "Type 1" | "Type 2" | "Tesla" | "CHAdeMO" | 'CCS1' | 'CCS2'

export type SiteT = {
  id: string,
  name: string,
  address: string,
  location?: {},
  phone_number: string,
  zip_code?: number | string,
  default_price?: number,
  chargepoints?: ChargePointT[]
}

export type ChargePointT = {
  id: string,
  siteId: string,
  chargePointHardwareId: string,
  connectors?: ConnectorT[]
}

export type ConnectorT = {
  id?: string,
  label: string,
  chargePointHardwareId: string,
  connectorId: number,
  connectorTypeName: ConnectorsType,
  power: number,
  price?: number,
  chargePointId: number,
  siteId: string,
}