import { useState } from "react";

export default function OrganizationsGridFilter(props) {
  const [count, setCount] = useState(props?.data?.data?.organizations?.length || 0);

  return (
    <div className="filter">
      <div className="filter__wrapper">
        <div className="filter__sort">
          <div className="filter-items">
            <span>Total: {count} Organization</span>
          </div>
        </div>
      </div>
    </div>
  );
}
