import { ChargePointT, ConnectorT, SiteT } from "@/types/site-types";
import { atom } from "jotai";

export const siteAtom = atom<SiteT>({
  id: null,
  name: '',
  address: '',
  phone_number: '',
  zip_code: '',
  default_price: 0,
  organizationId: null,
  chargePoints: []
})