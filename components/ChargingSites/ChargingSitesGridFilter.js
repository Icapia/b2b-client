import { ButtonBlack } from "../Buttons";

import Link from "next/link";

export default function ChargingSitesGridFilter(props) {
  console.log(props)
  
  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="filter__sort">
          <h2>{props.data.site || `UCAPIA #${props?.data?.id}`}</h2>
          <div className="filter-items">
            <span>{props.data.site_area}</span>
            <span>+1 123 123-12-12</span>
          </div>
        </div>
        <div className="filter__filters">
          <Link href={`/charging-sites/${props.data.id}`}>
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
