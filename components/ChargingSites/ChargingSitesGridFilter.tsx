import { FC } from "react";
import { ButtonBlack } from "../Buttons";

import Link from "next/link";

interface ChargingSitesGridFilterI {
  site: string,
  id: string,
  site_area: string,
  phone_number: string,
}

export const ChargingSitesGridFilter: FC<ChargingSitesGridFilterI> =({
  site,
  id,
  site_area,
  phone_number
}) => {
  
  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="filter__sort">
          <h2>{site || `UCAPIA #${id}`}</h2>
          <div className="filter-items">
            <span>{site_area}</span>
            <span>+1 123 123-12-12</span>
          </div>
        </div>
        <div className="filter__filters">
          <Link href={`/charging-sites/${id}`}>
            <ButtonBlack>
              <img style={{marginRight: "4px"}} src={'/image/icons/settings.svg'}/>
              Manage site
            </ButtonBlack>
          </Link>
        </div>
      </div>
    </div>
  );
}
