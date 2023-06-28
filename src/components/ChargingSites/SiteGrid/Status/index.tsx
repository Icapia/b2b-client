import { ucFirst } from "@/helpers/helpers";
import { ChargePointStatus, ConnectorStatus } from "@/types/site-types";
import { FC } from "react";

const COLORS = {
  connected: "#278c16",
  disconnected: "#E9794A",
  available: "#278c16",
  charging: "#E9794A",
  finishing: "#D68910",
  unavailable: "#E9794A",
  faulted: "#E9794A",
};

interface StatusI {
  status: ChargePointStatus | ConnectorStatus,
}

export const Status: FC<StatusI> = ({
  status
}) => {
  return (
    <>
      <div style={{ color: COLORS[status] }}>
        <b>{ucFirst(status)}</b>
      </div>
    </>
  );
}