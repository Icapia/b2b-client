import { Location } from './entities';

export type ConnectorsType = 'Type 1' | 'Type 2' | 'Tesla' | 'CHAdeMO' | 'CCS1' | 'CCS2';
export type ChargePointStatus = 'connected' | 'disconnected';
export type ConnectorStatus = 'available' | 'charging' | 'finishing' | 'unavailable' | 'faulted';

export type SiteT = {
  id: number | null;
  organizationId: string | null;
  name: string;
  address: string;
  phone_number: string;
  location: Location;
  zip_code?: number | string;
  default_price?: number;
  chargePoints?: ChargePointT[];
};

export type ChargePointT = {
  id: number | null;
  siteId: number | null;
  chargePointHardwareId: string | null;
  status?: ChargePointStatus;
  connectors?: ConnectorT[];
};

export type ConnectorT = {
  label: string;
  chargePointHardwareId: string | null;
  connectorId: number;
  connectorTypeName: ConnectorsType;
  power: number;
  id: number | null;
  chargePointId: number | null;
  siteId: number | null;
  price?: number;
  statusName?: ConnectorStatus;
};
