import { FC } from "react";

interface OrganizationFilterI {
  length?: number
}

export const OrganizationsGridFilter: FC<OrganizationFilterI> = ({

}) => {
  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="filter__sort">
          <div className="filter-items">
            <span>Total: {length ?? 0} Organization</span>
          </div>
        </div>
      </div>
    </div>
  );
}
