import { FC } from "react";
import { ButtonBlack } from "../Buttons";

import { SiteT } from "@/types/site-types";
import Link from "next/link";

interface ChargingSitesGridFilterI {
  site: SiteT
}

export const ChargingSitesGridFilter: FC<ChargingSitesGridFilterI> =({
  site,
}) => {
  console.log(site)

  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="filter__sort">
          <h2>{site?.name || `UCAPIA #${site?.id}`}</h2>
          <div className="filter-items">
            <span>{site?.address}</span>
            <span>+1 123 123-12-12</span>
          </div>
        </div>
        <div className="filter__filters">
          <Link href={`/charging-sites/${site?.id}`}>
            <ButtonBlack>
              <img style={{marginRight: "4px"}} src={'/b2b/image/icons/settings.svg'}/>
              Manage site
            </ButtonBlack>
          </Link>
        </div>
      </div>
    </div>
  );
}
